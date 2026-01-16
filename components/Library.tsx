import React, { useState } from 'react';
import { LIBRARY_BOOKS } from '../constants';
import { Book, Search, Lock, X } from 'lucide-react';
import { LibraryBook } from '../types';

const Library: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<LibraryBook | null>(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [bookCode, setBookCode] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-2">Biblioteca Digital MEZE</h2>
            <p className="text-indigo-200 max-w-xl mb-6">Accede a miles de recursos académicos, libros electrónicos y revistas científicas.</p>
            <div className="flex gap-2">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="Buscar por título, autor o tema..." className="w-full pl-10 pr-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-bold transition-colors">Buscar</button>
            </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
            <Book size={200} />
        </div>
      </div>

      <div>
        <h3 className="font-bold text-slate-800 mb-4 text-lg">Libros Destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIBRARY_BOOKS.map(book => (
                <div key={book.id} onClick={() => setSelectedBook(book)} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="h-48 bg-slate-100 flex items-center justify-center overflow-hidden relative">
                         <img src={book.coverUrl} alt={book.title} className="h-full object-cover shadow-lg transform group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 mb-1 block">{book.category}</span>
                        <h4 className="font-bold text-slate-800 mb-1 leading-tight">{book.title}</h4>
                        <p className="text-sm text-slate-500">{book.author}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {selectedBook && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
              <div className="bg-white w-full max-w-md rounded-2xl p-6 animate-fade-in relative">
                  <button onClick={() => setSelectedBook(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                  <div className="flex gap-4 mb-4">
                      <img src={selectedBook.coverUrl} className="w-20 h-28 object-cover rounded shadow" />
                      <div>
                          <h3 className="font-bold text-slate-800">{selectedBook.title}</h3>
                          <p className="text-sm text-slate-500 mb-2">{selectedBook.author}</p>
                          <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-xs font-bold uppercase">{selectedBook.category}</span>
                      </div>
                  </div>
                  <div className="space-y-3">
                      <button onClick={() => alert('Solicitud enviada. Tienes 7 días para leerlo.')} className="w-full py-3 bg-meze-600 text-white font-bold rounded-xl hover:bg-meze-700">Solicitar Préstamo (7 días)</button>
                      <button onClick={() => { setSelectedBook(null); setShowRequestModal(true); }} className="w-full py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50">Pedir libro con código</button>
                  </div>
              </div>
          </div>
      )}

      {showRequestModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
              <div className="bg-white w-full max-w-sm rounded-2xl p-6 animate-fade-in relative">
                   <button onClick={() => setShowRequestModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                   <h3 className="font-bold text-slate-800 mb-4">Ingresar Código de Libro</h3>
                   <input 
                        type="text" 
                        value={bookCode} 
                        onChange={(e) => setBookCode(e.target.value)} 
                        placeholder="Ej. LIB-1234"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg mb-2 focus:ring-2 focus:ring-meze-500 outline-none" 
                    />
                   <p className="text-xs text-red-500 mb-6 leading-relaxed">
                       Este libro no ha sido habilitado por tu maestro, por favor, pide que lo habilite o solicita al encargado de biblioteca el código del libro.
                   </p>
                   <button className="w-full py-2 bg-slate-800 text-white font-bold rounded-lg">Validar Código</button>
              </div>
          </div>
      )}
    </div>
  );
};

export default Library;