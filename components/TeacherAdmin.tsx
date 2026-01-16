import React, { useState } from 'react';
import { TEACHER_CLASSES, TEACHER_PLANNINGS } from '../constants';
import { ChevronRight, ArrowLeft, Users, Upload, CheckCircle, Clock } from 'lucide-react';
import { TeacherClass } from '../types';

const TeacherAdmin: React.FC = () => {
    const [selectedClass, setSelectedClass] = useState<TeacherClass | null>(null);

    const renderClassList = () => (
        <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-800">Administración de Clases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TEACHER_CLASSES.map(cls => (
                    <div key={cls.id} onClick={() => setSelectedClass(cls)} className="bg-white p-6 rounded-xl border border-slate-200 cursor-pointer hover:border-meze-500 hover:shadow-md transition-all">
                        <div className="flex justify-between items-center mb-4">
                            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">{cls.semester}</span>
                            <ChevronRight size={18} className="text-slate-300" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 mb-1">{cls.name}</h3>
                        <p className="text-sm text-slate-500 mb-4">{cls.schedule}</p>
                        <div className="flex gap-4 text-xs font-medium text-slate-600 border-t border-slate-50 pt-3">
                            <span className="flex items-center gap-1"><Users size={14}/> {cls.studentsCount} Alumnos</span>
                            <span>Promedio: {cls.averageGrade}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPlanning = () => {
        if (!selectedClass) return null;
        const plannings = TEACHER_PLANNINGS.filter(p => p.classId === selectedClass.id);
        // Fallback if data missing in mock
        const displayPlannings = plannings.length > 0 ? plannings : [
            { id: 'p1', classId: selectedClass.id, partial: 1, status: 'Uploaded', dueDate: '15 Ene' },
            { id: 'p2', classId: selectedClass.id, partial: 2, status: 'Pending', dueDate: '01 Mar 2024' },
            { id: 'p3', classId: selectedClass.id, partial: 3, status: 'Pending', dueDate: '01 Abr 2024' },
        ];

        return (
            <div className="space-y-6 animate-fade-in">
                <button onClick={() => setSelectedClass(null)} className="flex items-center gap-2 text-slate-500 hover:text-meze-600 font-bold text-sm"><ArrowLeft size={16}/> Volver</button>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">{selectedClass.name}</h2>
                    <div className="flex gap-6 text-sm text-slate-500 mb-6">
                        <span>{selectedClass.schedule}</span>
                        <span>{selectedClass.studentsCount} Alumnos inscritos</span>
                    </div>

                    <h3 className="font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2">Planeaciones Didácticas</h3>
                    <div className="space-y-4">
                        {displayPlannings.map((plan: any) => (
                            <div key={plan.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${plan.status === 'Uploaded' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-500'}`}>
                                        {plan.partial}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Parcial {plan.partial}</h4>
                                        <p className="text-xs text-slate-500 flex items-center gap-1">
                                            {plan.status === 'Uploaded' ? 'Entregado' : `Vence: ${plan.dueDate}`}
                                        </p>
                                    </div>
                                </div>
                                
                                {plan.status === 'Uploaded' ? (
                                    <span className="flex items-center gap-2 text-green-600 font-bold text-xs bg-green-50 px-3 py-1 rounded-full">
                                        <CheckCircle size={14} /> Completo
                                    </span>
                                ) : (
                                    <button className="flex items-center gap-2 bg-white border border-meze-200 text-meze-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-meze-50">
                                        <Upload size={14} /> Subir Planeación
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return selectedClass ? renderPlanning() : renderClassList();
};

export default TeacherAdmin;