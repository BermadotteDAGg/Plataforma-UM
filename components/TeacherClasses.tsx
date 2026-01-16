import React, { useState } from 'react';
import { TEACHER_CLASSES, CLASS_WALL_POSTS_MOCK, LIBRARY_BOOKS } from '../constants';
import { Users, FilePlus, PenTool, MessageSquare, ChevronRight, ArrowLeft, Megaphone, Pin, Book, Plus, X, BarChart3, CheckCircle, Clock } from 'lucide-react';
import { TeacherClass } from '../types';

const TeacherClasses: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<TeacherClass | null>(null);
  const [showBookModal, setShowBookModal] = useState(false);

  // Mock random active assignments for the teacher view
  const mockTeacherAssignments = [
      { id: 1, title: 'Ensayo Final', dueDate: '20 Feb' },
      { id: 2, title: 'Examen Parcial', dueDate: '15 Feb' },
      { id: 3, title: 'Mapa Conceptual', dueDate: '10 Feb' },
  ];

  if (selectedClass) {
      // Get posts for the selected class or fallback to a mock set for demo purposes
      const classPosts = CLASS_WALL_POSTS_MOCK[selectedClass.name] || Object.values(CLASS_WALL_POSTS_MOCK)[0] || [];

      return (
          <div className="space-y-6 animate-fade-in">
              <button onClick={() => setSelectedClass(null)} className="flex items-center gap-2 text-slate-500 hover:text-meze-600 font-medium text-sm">
                  <ArrowLeft size={16} /> Volver a Mis Clases
              </button>

              <div className="bg-meze-900 rounded-xl p-8 text-white relative overflow-hidden">
                   <div className="relative z-10">
                        <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wide mb-2 inline-block">{selectedClass.semester}</span>
                        <h2 className="text-3xl font-serif font-bold mb-1">{selectedClass.name}</h2>
                        <p className="text-meze-200 text-sm flex items-center gap-4">
                            <span>Aula: {selectedClass.room}</span>
                            <span>Horario: {selectedClass.schedule}</span>
                        </p>
                   </div>
                   <div className="absolute right-4 top-4 flex gap-2">
                       <button onClick={() => setShowBookModal(true)} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                           <Book size={16} /> Habilitar Libros
                       </button>
                   </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* LEFT COLUMN: Actions & Wall */}
                  <div className="lg:col-span-2 space-y-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                          <h3 className="font-bold text-slate-800 mb-4">Gestión Académica</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                              <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-meze-50 hover:text-meze-600 transition-colors border border-slate-100 group">
                                  <FilePlus size={24} className="text-slate-400 group-hover:text-meze-600" />
                                  <span className="text-xs font-bold text-center">Nueva Tarea</span>
                              </button>
                               <button onClick={() => alert('Interfaz de creación de examen')} className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-meze-50 hover:text-meze-600 transition-colors border border-slate-100 group">
                                  <PenTool size={24} className="text-slate-400 group-hover:text-meze-600" />
                                  <span className="text-xs font-bold text-center">Publicar Examen</span>
                              </button>
                               <button onClick={() => alert('Interfaz de captura de calificaciones')} className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-meze-50 hover:text-meze-600 transition-colors border border-slate-100 group">
                                  <Users size={24} className="text-slate-400 group-hover:text-meze-600" />
                                  <span className="text-xs font-bold text-center">Capturar Calif.</span>
                              </button>
                               <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-meze-50 hover:text-meze-600 transition-colors border border-slate-100 group">
                                  <MessageSquare size={24} className="text-slate-400 group-hover:text-meze-600" />
                                  <span className="text-xs font-bold text-center">Crear Foro</span>
                              </button>
                          </div>
                      </div>

                      {/* Wall */}
                      <div className="space-y-4">
                          <h3 className="font-bold text-slate-800 flex items-center gap-2"><Megaphone size={18} className="text-meze-600" /> Muro de Clase</h3>
                          {classPosts.map(post => (
                              <div key={post.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                   <div className="flex justify-between items-start mb-2">
                                       <h4 className="text-md font-bold text-slate-800">{post.title}</h4>
                                       <span className="text-[10px] uppercase font-bold text-meze-500 bg-meze-50 px-2 py-1 rounded">{post.category}</span>
                                   </div>
                                   <p className="text-sm text-slate-600 mb-3">{post.content}</p>
                                   <div className="flex items-center gap-2 text-xs text-slate-400">
                                       <span>{post.date}</span> • <span>{post.likes} Me gusta</span>
                                   </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* RIGHT COLUMN: Indicators */}
                  <div className="space-y-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><BarChart3 size={18}/> Indicadores</h3>
                          <div className="space-y-4">
                              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                  <span className="text-sm text-slate-600">Alumnos Inscritos</span>
                                  <span className="font-bold text-slate-800 text-lg">{selectedClass.studentsCount}</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                  <span className="text-sm text-slate-600">Promedio General</span>
                                  <span className="font-bold text-meze-600 text-lg">{selectedClass.averageGrade}</span>
                              </div>
                              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                  <span className="text-sm text-slate-600">Tareas Pendientes</span>
                                  <span className="font-bold text-amber-500 text-lg">{selectedClass.pendingTasks}</span>
                              </div>
                          </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><CheckCircle size={18}/> Tareas Activas</h3>
                          <div className="space-y-3">
                              {/* Display random assignments for the demo */}
                              {mockTeacherAssignments.map((task, index) => (
                                  <div key={index} className="flex items-center justify-between p-3 border-b border-slate-50 last:border-0">
                                      <div className="flex items-center gap-2">
                                          <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                                          <span className="text-sm font-medium text-slate-700">{task.title}</span>
                                      </div>
                                      <div className="flex items-center gap-1 text-xs text-slate-400">
                                          <Clock size={12} /> {task.dueDate}
                                      </div>
                                  </div>
                              ))}
                          </div>
                          <button className="w-full mt-4 text-xs font-bold text-meze-600 hover:underline">Ver todas las entregas</button>
                      </div>
                  </div>
              </div>

              {/* Enable Book Modal */}
              {showBookModal && (
                  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                      <div className="bg-white w-full max-w-lg rounded-2xl p-6 animate-fade-in relative">
                          <button onClick={() => setShowBookModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                          <h3 className="font-bold text-slate-800 mb-4">Habilitar Libro para el Curso</h3>
                          <div className="space-y-4">
                              <div>
                                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Seleccionar Libro</label>
                                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none">
                                      {LIBRARY_BOOKS.map(book => <option key={book.id}>{book.title}</option>)}
                                  </select>
                              </div>
                              <div>
                                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Fecha de Caducidad</label>
                                  <input type="date" className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none" />
                              </div>
                              <div className="flex gap-3 mt-6">
                                  <button onClick={() => alert('Solicitud enviada a biblioteca')} className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50">Solicitar Código a Biblioteca</button>
                                  <button onClick={() => {alert('Libro habilitado'); setShowBookModal(false);}} className="flex-1 py-2 bg-meze-600 text-white font-bold rounded-lg hover:bg-meze-700">Habilitar Libro</button>
                              </div>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-meze-600 rounded-full"></span>
              Mis Clases Asignadas
          </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEACHER_CLASSES.map(cls => (
              <div key={cls.id} onClick={() => setSelectedClass(cls)} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 cursor-pointer hover:shadow-md hover:border-meze-300 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                      <span className="bg-meze-50 text-meze-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">{cls.semester}</span>
                      <ChevronRight className="text-slate-300 group-hover:text-meze-500 transition-colors" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-meze-700">{cls.name}</h3>
                  <div className="text-sm text-slate-500 space-y-1">
                      <p>Aula: <span className="font-semibold text-slate-700">{cls.room}</span></p>
                      <p>{cls.schedule}</p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default TeacherClasses;