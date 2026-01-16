import React, { useState } from 'react';
import { STUDENT_FORUMS, TEACHER_FORUMS } from '../constants';
import { MessageSquare, Plus, Search, Tag, ThumbsUp, X, Paperclip } from 'lucide-react';

const Forum: React.FC = () => {
  const [posts, setPosts] = useState([...STUDENT_FORUMS, ...TEACHER_FORUMS]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const categories = [
      { id: 'All', name: 'Todos' },
      { id: 'Subject', name: 'Mis Materias' },
      { id: 'Comunidad Psicología', name: 'Comunidad Psicología' },
      { id: 'Objetos Perdidos', name: 'Objetos Perdidos' },
      { id: 'General', name: 'Comunidad UM' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
             <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-meze-600 rounded-full"></span>
                Foros y Comunidades
            </h2>
        </div>
        <button 
            onClick={() => setShowNewPostModal(true)}
            className="flex items-center gap-2 bg-meze-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-meze-700 transition-colors shadow-sm"
        >
            <Plus size={18} /> Nueva Discusión
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${activeCategory === cat.id ? 'bg-meze-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                  {cat.name}
              </button>
          ))}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
        <input 
            type="text" 
            placeholder="Buscar por tema, etiqueta o autor..." 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-meze-500"
        />
      </div>

      <div className="space-y-4">
        {posts.filter(p => activeCategory === 'All' || p.tags?.includes(activeCategory) || p.category === activeCategory || (activeCategory === 'Subject' && p.courseId)).map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-meze-200 transition-colors">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {post.courseId && (
                             <span className="text-[10px] uppercase font-bold text-meze-600 bg-meze-50 px-2 py-1 rounded">
                                {post.courseId}
                             </span>
                        )}
                        {post.tags?.map(tag => (
                            <span key={tag} className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                <Tag size={10} /> {tag}
                            </span>
                        ))}
                        <span className="text-xs text-slate-400">• {post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 cursor-pointer hover:text-meze-600">{post.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.content}</p>
                </div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600">
                        {post.author.charAt(0)}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-6 pt-4 border-t border-slate-50 text-sm text-slate-500">
                <button className="flex items-center gap-2 hover:text-meze-600 transition-colors">
                    <MessageSquare size={16} /> {post.replies} Respuestas
                </button>
                <button className="flex items-center gap-2 hover:text-meze-600 transition-colors">
                    <ThumbsUp size={16} /> Me gusta
                </button>
            </div>
          </div>
        ))}
      </div>

      {showNewPostModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
              <div className="bg-white w-full max-w-lg rounded-2xl p-6 animate-fade-in relative">
                   <button onClick={() => setShowNewPostModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                   <h3 className="font-bold text-slate-800 mb-6 text-lg">Nueva Discusión</h3>
                   <form className="space-y-4">
                       <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Título</label>
                           <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-meze-500 outline-none" placeholder="Tema principal" />
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Materia</label>
                           <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-meze-500 outline-none">
                               <option>Seleccionar materia...</option>
                               <option>General</option>
                               <option>Psicología General</option>
                           </select>
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Etiquetas</label>
                           <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-meze-500 outline-none" placeholder="Separa con comas" />
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Contenido</label>
                           <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-meze-500 outline-none h-32 resize-none" placeholder="Escribe tu mensaje..."></textarea>
                       </div>
                       <div className="flex items-center gap-2 text-slate-500 text-sm cursor-pointer hover:text-meze-600">
                           <Paperclip size={18} />
                           <span>Subir archivo o imagen</span>
                       </div>
                       <div className="flex gap-3 pt-4">
                           <button type="button" onClick={() => setShowNewPostModal(false)} className="flex-1 py-2 text-red-500 font-bold hover:bg-red-50 rounded-lg">Eliminar</button>
                           <button type="button" onClick={() => {alert('Publicado'); setShowNewPostModal(false);}} className="flex-1 py-2 bg-meze-600 text-white font-bold rounded-lg hover:bg-meze-700">Publicar</button>
                       </div>
                   </form>
              </div>
          </div>
      )}
    </div>
  );
};

export default Forum;