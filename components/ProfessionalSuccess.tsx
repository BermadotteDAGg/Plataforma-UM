import React, { useState } from 'react';
import { PROFESSIONAL_COURSES } from '../constants';
import { Award, Clock, PlayCircle, X, AlertTriangle } from 'lucide-react';
import { ProfessionalCourse } from '../types';

const ProfessionalSuccess: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<ProfessionalCourse | null>(null);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-3xl font-brand font-bold mb-2">Éxito Profesional</h1>
                    <p className="text-slate-300 max-w-2xl text-sm leading-relaxed">
                        Bienvenido a tu plataforma de desarrollo complementario. Aquí encontrarás cursos diseñados para potenciar tus habilidades blandas y técnicas. 
                        Al finalizar, obtendrás una constancia oficial emitida por MEZE que enriquecerá tu currículum.
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                    <Award size={200} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROFESSIONAL_COURSES.map(course => (
                    <div key={course.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
                        <div className="h-40 overflow-hidden relative">
                            <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <PlayCircle size={48} className="text-white" />
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="font-bold text-slate-800 text-lg mb-2">{course.title}</h3>
                            <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1 leading-relaxed">{course.description}</p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                                    <Clock size={14} /> {course.duration}
                                </span>
                                <button 
                                    onClick={() => setSelectedCourse(course)}
                                    className="px-4 py-2 bg-meze-600 text-white text-xs font-bold rounded-lg hover:bg-meze-700 transition-colors"
                                >
                                    Entrar al curso
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Warning Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-2xl p-6 animate-fade-in text-center">
                        <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Advertencia de Curso</h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Al entrar a este curso <strong>"{selectedCourse.title}"</strong>, deberás de completarlo con una calificación mínima de <strong className="text-slate-800">8</strong>. 
                            De lo contrario, no obtendrás la constancia y deberás de repetirlo en su totalidad.
                        </p>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setSelectedCourse(null)}
                                className="flex-1 py-3 text-slate-600 font-bold text-sm bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                            >
                                En otro momento
                            </button>
                            <button 
                                onClick={() => { alert('Iniciando módulo de aprendizaje...'); setSelectedCourse(null); }}
                                className="flex-1 py-3 bg-meze-600 text-white font-bold text-sm rounded-xl hover:bg-meze-700 transition-colors"
                            >
                                Iniciar curso
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfessionalSuccess;