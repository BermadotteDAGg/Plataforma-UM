import React, { useState } from 'react';
import { STUDENT_ASSIGNMENTS } from '../constants';
import { Upload, CheckCircle, Clock, FileText, AlertCircle, AlertTriangle, ChevronRight } from 'lucide-react';
import { Assignment } from '../types';

const Homework: React.FC = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [filter, setFilter] = useState('All');

  // Helper to simulate categories based on data
  const courses = Array.from(new Set(STUDENT_ASSIGNMENTS.map(a => a.course)));

  return (
    <div className="flex h-[calc(100vh-12rem)] gap-6">
        {/* Sidebar Filters */}
        <div className="w-64 hidden md:block flex-shrink-0">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 h-full">
                 <h3 className="font-bold text-slate-700 mb-4 px-2">Mis Materias</h3>
                 <ul className="space-y-1">
                     <li>
                         <button 
                            onClick={() => setFilter('All')}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'All' ? 'bg-meze-50 text-meze-700' : 'text-slate-600 hover:bg-slate-50'}`}
                         >
                             Todas las tareas
                         </button>
                     </li>
                     {courses.map(course => (
                         <li key={course}>
                             <button 
                                onClick={() => setFilter(course)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${filter === course ? 'bg-meze-50 text-meze-700' : 'text-slate-600 hover:bg-slate-50'}`}
                             >
                                 <div className="flex justify-between items-center">
                                    <span className="truncate">{course}</span>
                                    {STUDENT_ASSIGNMENTS.filter(a => a.course === course && a.status === 'Pending').length > 0 && (
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    )}
                                 </div>
                             </button>
                         </li>
                     ))}
                 </ul>
             </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            {selectedAssignment ? (
                <div className="flex-1 flex flex-col animate-fade-in">
                    <div className="p-4 border-b border-slate-200 flex items-center gap-2">
                        <button onClick={() => setSelectedAssignment(null)} className="text-slate-500 hover:text-meze-600">
                            Atrás
                        </button>
                        <span className="text-slate-300">|</span>
                        <span className="font-bold text-slate-700">{selectedAssignment.course}</span>
                    </div>
                    <div className="p-8 flex-1 overflow-y-auto">
                         <div className="flex justify-between items-start mb-6">
                             <h2 className="text-2xl font-bold text-slate-800">{selectedAssignment.title}</h2>
                             {selectedAssignment.status === 'Graded' && (
                                 <div className="text-right">
                                     <span className="block text-2xl font-bold text-meze-600">{selectedAssignment.grade}</span>
                                     <span className="text-xs text-slate-500">Calificación</span>
                                 </div>
                             )}
                         </div>

                         <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                             <h4 className="font-bold text-slate-700 mb-2">Instrucciones</h4>
                             <p className="text-slate-600 text-sm leading-relaxed">{selectedAssignment.description}</p>
                             <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                                 <span className="flex items-center gap-1"><Clock size={14} /> {selectedAssignment.status === 'Late' ? 'Venció:' : 'Vence:'} {selectedAssignment.dueDate}</span>
                                 <span className="flex items-center gap-1"><FileText size={14} /> Formato Libre</span>
                             </div>
                         </div>

                         {selectedAssignment.status === 'Pending' && (
                             <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                 <Upload className="mx-auto text-slate-400 mb-2" size={32} />
                                 <p className="font-bold text-slate-700">Subir Tarea</p>
                                 <p className="text-xs text-slate-500">Arrastra archivos o haz clic para buscar</p>
                             </div>
                         )}

                         {(selectedAssignment.status === 'Graded' || selectedAssignment.status === 'Late') && selectedAssignment.feedback && (
                             <div className={`p-4 rounded-xl border ${selectedAssignment.status === 'Late' ? 'bg-red-50 border-red-100 text-red-800' : 'bg-green-50 border-green-100 text-green-800'}`}>
                                 <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                                     {selectedAssignment.status === 'Late' ? <AlertTriangle size={16}/> : <CheckCircle size={16}/>}
                                     Retroalimentación del Docente
                                 </h4>
                                 <p className="text-sm">{selectedAssignment.feedback}</p>
                             </div>
                         )}
                    </div>
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto p-4">
                    <h3 className="font-bold text-slate-800 mb-4 px-2">Lista de Actividades</h3>
                    <div className="space-y-3">
                        {STUDENT_ASSIGNMENTS.filter(a => filter === 'All' || a.course === filter).map(assignment => (
                            <div 
                                key={assignment.id}
                                onClick={() => setSelectedAssignment(assignment)}
                                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between hover:border-meze-300 hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 
                                        ${assignment.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 
                                          assignment.status === 'Late' ? 'bg-red-100 text-red-600' : 
                                          'bg-green-100 text-green-600'}`}>
                                        {assignment.status === 'Pending' ? <Clock size={20} /> : 
                                         assignment.status === 'Late' ? <AlertCircle size={20} /> : 
                                         <CheckCircle size={20} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm group-hover:text-meze-700">{assignment.title}</h4>
                                        <p className="text-xs text-slate-500">{assignment.course} • {assignment.dueDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {assignment.grade && <span className="font-bold text-slate-800">{assignment.grade}</span>}
                                    <ChevronRight size={18} className="text-slate-300 group-hover:text-meze-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default Homework;