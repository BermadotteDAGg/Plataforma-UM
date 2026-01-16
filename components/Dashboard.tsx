import React, { useState } from 'react';
import { STUDENT_ANNOUNCEMENTS, STUDENT_ASSIGNMENTS } from '../constants';
import { Pin, MessageCircle, Heart, X, Clock, CheckCircle } from 'lucide-react';
import { Announcement, User as UserType, UserRole } from '../types';

interface DashboardProps {
  user: UserType;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [selectedPost, setSelectedPost] = useState<Announcement | null>(null);

  const displayName = user.name.split(' ')[0]; 

  const pendingTasks = STUDENT_ASSIGNMENTS.filter(a => a.status === 'Pending').sort((a,b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-meze-gradient rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
            <h1 className="text-2xl md:text-3xl font-brand font-bold mb-2 tracking-tight">Hola, {displayName}</h1>
            <p className="text-white/90 max-w-xl font-medium">Bienvenido a tu portal MEZE. Revisa tus notificaciones y mantente al día con tus actividades.</p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-y-1/4 translate-x-1/4">
             <div className="text-[150px] font-brand font-bold leading-none text-white select-none">UM</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Novedades (News) */}
          <div className="lg:col-span-2 space-y-6">
               <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-1 h-6 bg-meze-500 rounded-full"></span>
                        Novedades
                    </h2>
                </div>

                <div className="space-y-6">
                    {STUDENT_ANNOUNCEMENTS.map((announcement) => (
                        <div 
                            key={announcement.id} 
                            className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => setSelectedPost(announcement)}
                        >
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-meze-50 flex items-center justify-center font-bold text-meze-600 text-sm">
                                        {announcement.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm">{announcement.author}</p>
                                        <span className="text-slate-400 text-xs flex items-center gap-1">
                                            {announcement.date} • <span className="uppercase tracking-wide text-[10px] font-bold text-meze-500">{announcement.category}</span>
                                        </span>
                                    </div>
                                </div>
                                {announcement.category === 'Urgent' && <Pin size={16} className="text-red-500 fill-current" />}
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-meze-600 transition-colors">{announcement.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {announcement.content}
                            </p>

                            {announcement.imageUrl && (
                                <div className="mb-4 rounded-lg overflow-hidden border border-slate-100">
                                    <img src={announcement.imageUrl} alt="Anexo" className="w-full h-48 object-cover" />
                                </div>
                            )}

                            <div className="flex items-center gap-6 pt-4 border-t border-slate-50 text-slate-500 text-sm">
                                <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                                    <Heart size={18} /> {announcement.likes}
                                </button>
                                <button className="flex items-center gap-2 hover:text-meze-600 transition-colors">
                                    <MessageCircle size={18} /> {announcement.comments.length} Comentarios
                                </button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
          </div>

          {/* RIGHT: Mis Actividades (Tasks) - Only for students */}
          {user.role === UserRole.STUDENT && (
             <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                        Mis Actividades
                    </h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 sticky top-24">
                    <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-wide">Tareas Pendientes</h3>
                    {pendingTasks.length > 0 ? (
                        <div className="space-y-3">
                            {pendingTasks.map(task => (
                                <div key={task.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-meze-200 transition-colors">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[10px] font-bold uppercase text-meze-600 bg-meze-50 px-1.5 py-0.5 rounded">{task.course}</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-800 mb-1 leading-tight">{task.title}</p>
                                    <div className="flex items-center gap-1 text-xs text-amber-600 font-medium">
                                        <Clock size={12} />
                                        Vence: {task.dueDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-slate-400">
                            <CheckCircle size={32} className="mx-auto mb-2 opacity-50" />
                            <p className="text-sm">¡Todo al día!</p>
                        </div>
                    )}
                </div>
             </div>
          )}
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-meze-900/30 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in">
                <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-slate-800">Publicación</h3>
                    <button onClick={(e) => { e.stopPropagation(); setSelectedPost(null); }} className="text-slate-400 hover:text-slate-600">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-meze-100 flex items-center justify-center font-bold text-meze-600">
                            {selectedPost.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-slate-800">{selectedPost.author}</p>
                            <p className="text-xs text-slate-500">{selectedPost.date}</p>
                        </div>
                     </div>
                     <h2 className="text-xl font-bold mb-2">{selectedPost.title}</h2>
                     <p className="text-slate-700 mb-4">{selectedPost.content}</p>
                     {selectedPost.imageUrl && (
                        <img src={selectedPost.imageUrl} className="w-full rounded-lg mb-6 border border-slate-200" />
                     )}
                     
                     <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-bold text-sm text-slate-600 mb-3">Comentarios</h4>
                        <div className="space-y-3">
                            {selectedPost.comments.length > 0 ? (
                                selectedPost.comments.map(comment => (
                                    <div key={comment.id} className="bg-slate-50 p-3 rounded-lg">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <span className="font-bold text-xs text-slate-800">{comment.author}</span>
                                            <span className="text-[10px] text-slate-400">{comment.date}</span>
                                        </div>
                                        <p className="text-sm text-slate-600">{comment.content}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-slate-400 italic">No hay comentarios aún.</p>
                            )}
                        </div>
                     </div>
                </div>
                <div className="p-4 border-t border-slate-200 bg-slate-50">
                     <div className="flex gap-2">
                        <input type="text" placeholder="Escribe un comentario..." className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-meze-500 outline-none text-sm" />
                        <button className="bg-meze-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-meze-700">Enviar</button>
                     </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;