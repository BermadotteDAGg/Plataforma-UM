import React, { useState } from 'react';
import { STUDENT_SCHEDULE, CLASS_WALL_POSTS_MOCK, STUDENT_ASSIGNMENTS } from '../constants';
import { Clock, User, ChevronRight, Pin, MessageSquare, ArrowLeft, CheckCircle, Upload, AlertCircle, AlertTriangle } from 'lucide-react';
import { ScheduleItem, Assignment } from '../types';

type ViewState = 'list' | 'class_detail' | 'my_tasks';

const StudentClasses: React.FC = () => {
    const [view, setView] = useState<ViewState>('list');
    const [selectedClass, setSelectedClass] = useState<ScheduleItem | null>(null);
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

    // Filter unique classes from schedule
    const uniqueClasses = STUDENT_SCHEDULE.filter((v,i,a)=>a.findIndex(t=>(t.subject === v.subject))===i);

    const handleClassClick = (cls: ScheduleItem) => {
        setSelectedClass(cls);
        setView('class_detail');
    };

    const getClassAssignments = (subject: string) => {
        return STUDENT_ASSIGNMENTS.filter(a => a.course === subject && a.status === 'Pending');
    };

    // --- VIEWS ---

    const renderClassList = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {uniqueClasses.map(cls => (
                <div 
                    key={cls.subject} 
                    onClick={() => handleClassClick(cls)}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 cursor-pointer hover:shadow-md hover:border-meze-400 transition-all group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-meze-50 flex items-center justify-center text-meze-600">
                             <User size={20} />
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-meze-500 transition-colors" size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-meze-700">{cls.subject}</h3>
                    <p className="text-sm text-slate-500 mb-3">{cls.professor}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-meze-600 bg-meze-50 px-3 py-1.5 rounded-full w-fit">
                        <Clock size={14} />
                        {cls.startTime}
                    </div>
                </div>
            ))}
            
            {/* Direct Link to ALL TASKS */}
            <div 
                onClick={() => setView('my_tasks')}
                className="bg-gradient-to-br from-meze-600 to-meze-800 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all flex flex-col justify-center items-center text-white group"
            >
                <CheckCircle size={40} className="mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl">Ir a Mis Tareas</h3>
                <p className="text-sm opacity-80 text-center mt-1">Ver todas las actividades pendientes y entregadas</p>
            </div>
        </div>
    );

    const renderClassDetail = () => {
        if (!selectedClass) return null;
        const posts = CLASS_WALL_POSTS_MOCK[selectedClass.subject] || [];
        const classPendings = getClassAssignments(selectedClass.subject);

        return (
            <div className="animate-fade-in space-y-6">
                <button onClick={() => setView('list')} className="flex items-center gap-2 text-slate-500 hover:text-meze-600 font-bold text-sm">
                    <ArrowLeft size={16} /> Volver a mis clases
                </button>

                <div className="bg-meze-900 rounded-xl p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-brand font-bold mb-2">{selectedClass.subject}</h2>
                        <p className="text-lg opacity-90">{selectedClass.professor} • {selectedClass.startTime}</p>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10">
                        <Clock size={150} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Class Wall */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="font-bold text-slate-800 text-lg">Muro de la Clase</h3>
                        {posts.length > 0 ? (
                            posts.map(post => (
                                <div key={post.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-xs">
                                                {post.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm">{post.author}</p>
                                                <p className="text-xs text-slate-400">{post.date} • <span className="uppercase text-meze-600 font-bold">{post.category}</span></p>
                                            </div>
                                        </div>
                                        <Pin size={16} className="text-meze-400" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-2">{post.title}</h4>
                                    <p className="text-slate-600 text-sm mb-4">{post.content}</p>
                                    <div className="pt-4 border-t border-slate-50">
                                        <button className="text-xs font-bold text-slate-500 hover:text-meze-600 flex items-center gap-2">
                                            <MessageSquare size={14} /> Comentar
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center p-8 text-slate-400 bg-white rounded-xl border border-slate-200">
                                No hay publicaciones aún.
                            </div>
                        )}
                    </div>

                    {/* Class Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-4">Pendientes de la clase</h3>
                            {classPendings.length > 0 ? (
                                <div className="space-y-3">
                                    {classPendings.map(task => (
                                        <div key={task.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                            <p className="text-sm font-bold text-slate-800 mb-1">{task.title}</p>
                                            <p className="text-xs text-amber-600 flex items-center gap-1">
                                                <Clock size={12} /> Vence: {task.dueDate}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-slate-500 italic">No hay tareas pendientes.</p>
                            )}
                            <button 
                                onClick={() => setView('my_tasks')}
                                className="w-full mt-4 py-2 bg-meze-50 text-meze-600 font-bold text-sm rounded-lg hover:bg-meze-100 transition-colors"
                            >
                                Ir a Mis Tareas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderMyTasks = () => (
        <div className="animate-fade-in h-[calc(100vh-12rem)] flex gap-6">
            <div className="w-full flex flex-col">
                 <div className="flex items-center gap-4 mb-4">
                    <button onClick={() => setView('list')} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 group transition-colors shadow-sm">
                        <ArrowLeft size={20} className="text-slate-500 group-hover:text-meze-600" />
                    </button>
                    <h2 className="text-xl font-bold text-slate-800">Mis Tareas</h2>
                 </div>

                 {selectedAssignment ? (
                     <div className="flex-1 bg-white rounded-xl border border-slate-200 p-8 overflow-y-auto">
                         <button onClick={() => setSelectedAssignment(null)} className="text-sm text-slate-500 hover:text-meze-600 mb-4 flex items-center gap-1">
                             <ArrowLeft size={14} /> Volver a lista
                         </button>
                         <h2 className="text-2xl font-bold text-slate-800 mb-1">{selectedAssignment.title}</h2>
                         <p className="text-sm text-slate-500 mb-6">{selectedAssignment.course}</p>

                         <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                             <h4 className="font-bold text-slate-700 mb-2">Instrucciones</h4>
                             <p className="text-slate-600 text-sm leading-relaxed">{selectedAssignment.description}</p>
                         </div>

                         {selectedAssignment.status === 'Pending' && (
                             <div className="border-2 border-dashed border-meze-200 bg-meze-50 rounded-xl p-10 text-center hover:bg-meze-100 transition-colors cursor-pointer group">
                                 <Upload className="mx-auto text-meze-400 mb-2 group-hover:scale-110 transition-transform" size={32} />
                                 <p className="font-bold text-meze-700">Subir Tarea</p>
                             </div>
                         )}

                         {selectedAssignment.status === 'Late' && (
                              <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-800">
                                   <div className="flex items-center gap-2 font-bold mb-1">
                                       <AlertTriangle size={18} /> Vencida / No Entregada
                                   </div>
                                   <p className="text-sm">Calificación: {selectedAssignment.grade}</p>
                                   <p className="text-sm italic">"{selectedAssignment.feedback}"</p>
                              </div>
                         )}
                         
                         {selectedAssignment.status === 'Graded' && (
                              <div className="p-4 bg-green-50 border border-green-100 rounded-xl text-green-800">
                                   <div className="flex items-center gap-2 font-bold mb-1">
                                       <CheckCircle size={18} /> Tarea Calificada
                                   </div>
                                   <p className="text-sm">Calificación: <span className="text-lg font-bold">{selectedAssignment.grade}</span></p>
                                   <p className="text-sm italic">"{selectedAssignment.feedback}"</p>
                              </div>
                         )}
                     </div>
                 ) : (
                     <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
                         <div className="overflow-y-auto p-4 space-y-3">
                             {STUDENT_ASSIGNMENTS.map(task => (
                                 <div 
                                    key={task.id} 
                                    onClick={() => setSelectedAssignment(task)}
                                    className="p-4 border border-slate-100 rounded-xl hover:border-meze-300 hover:shadow-md transition-all cursor-pointer bg-white flex items-center justify-between"
                                 >
                                     <div className="flex items-center gap-4">
                                         <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 
                                            ${task.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 
                                              task.status === 'Late' ? 'bg-red-100 text-red-600' : 
                                              'bg-green-100 text-green-600'}`}>
                                            {task.status === 'Pending' ? <Clock size={20} /> : 
                                             task.status === 'Late' ? <AlertCircle size={20} /> : 
                                             <CheckCircle size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{task.title}</h4>
                                            <p className="text-xs text-slate-500">{task.course} • {task.dueDate}</p>
                                        </div>
                                     </div>
                                     <ChevronRight size={18} className="text-slate-300" />
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {view === 'list' && (
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-1 h-6 bg-meze-600 rounded-full"></span>
                        Mis Clases Inscritas
                    </h2>
                </div>
            )}
            
            {view === 'list' && renderClassList()}
            {view === 'class_detail' && renderClassDetail()}
            {view === 'my_tasks' && renderMyTasks()}
        </div>
    );
};

export default StudentClasses;