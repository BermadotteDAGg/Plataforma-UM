import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { PAPERWORK_STATUS, SERVICE_REQUESTS, STUDENT_GRADES, TEACHER_DOCUMENTS, TEACHER_PAPERWORK_STATUS, TEACHER_PAYROLL } from '../constants';
import { FileText, CheckCircle, AlertTriangle, Upload, CreditCard, Download, GraduationCap, Briefcase, Award, Table, Calendar, X } from 'lucide-react';

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'tramites' | 'calificaciones'>('info');
  const [showScholarshipModal, setShowScholarshipModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  // --- STUDENT RENDER ---
  const renderStudentProfile = () => (
    <div className="space-y-6">
       {/* Identity Card */}
       <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6">
          <img src={user.photoUrl} alt={user.name} className="w-32 h-32 rounded-full border-4 border-meze-100 object-cover" />
          <div className="flex-1 text-center md:text-left space-y-2">
             <h2 className="text-2xl font-serif font-bold text-slate-800">{user.name}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-slate-500 text-xs uppercase tracking-wide font-bold">Matrícula</p>
                    <p className="font-mono text-slate-700">{user.enrollmentCode}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-slate-500 text-xs uppercase tracking-wide font-bold">Licenciatura</p>
                    <p className="text-slate-700">{user.major} ({user.semester}° Sem)</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 md:col-span-2 flex items-center gap-3">
                    <Award className="text-amber-500" size={24} />
                    <div>
                        <p className="text-amber-700 text-xs uppercase tracking-wide font-bold">Beca Activa</p>
                        <p className="text-amber-900 font-bold">{user.scholarship}</p>
                    </div>
                </div>
             </div>
          </div>
       </div>

       {/* Tabs Header */}
       <div className="flex border-b border-slate-200 overflow-x-auto">
          <button onClick={() => setActiveTab('info')} className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'info' ? 'border-meze-600 text-meze-600' : 'border-transparent text-slate-500 hover:text-meze-500'}`}>Expediente y Becas</button>
          <button onClick={() => setActiveTab('calificaciones')} className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'calificaciones' ? 'border-meze-600 text-meze-600' : 'border-transparent text-slate-500 hover:text-meze-500'}`}>Calificaciones</button>
          <button onClick={() => setActiveTab('tramites')} className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'tramites' ? 'border-meze-600 text-meze-600' : 'border-transparent text-slate-500 hover:text-meze-500'}`}>Trámites y Servicios</button>
       </div>

       {/* Tab Content */}
       {activeTab === 'info' && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2"><FileText size={18} /> Estatus de Papelería</h3>
                </div>
                <div className="divide-y divide-slate-100">
                    {PAPERWORK_STATUS.map(doc => (
                        <div key={doc.id} className="p-4 flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-800">{doc.name}</p>
                                {doc.status === 'Pendiente' && doc.description && <p className="text-xs text-red-500 mt-1 max-w-xs">{doc.description}</p>}
                            </div>
                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${doc.status === 'Entregado' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{doc.status}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2"><GraduationCap size={18} /> Programa de Becas</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="p-4 bg-meze-50 rounded-lg border border-meze-100">
                        <h4 className="font-bold text-meze-800 mb-2">Renovación de Beca</h4>
                        <button onClick={() => setShowScholarshipModal(true)} className="w-full py-2 bg-meze-600 text-white rounded font-medium text-sm hover:bg-meze-700 transition-colors">Solicitar Cita con Coordinadora</button>
                    </div>
                </div>
            </div>
         </div>
       )}

       {activeTab === 'calificaciones' && (
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
               <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2"><Table size={18} /> Boleta de Calificaciones</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                            <tr><th className="px-6 py-4">Materia</th><th className="px-6 py-4 text-center">Parcial 1</th><th className="px-6 py-4 text-center">Parcial 2</th><th className="px-6 py-4 text-center">Final</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {STUDENT_GRADES.map((grade) => (
                                <tr key={grade.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-bold text-slate-700">{grade.subject}</td>
                                    <td className="px-6 py-4 text-center"><span className={`px-2 py-1 rounded text-xs font-bold ${grade.partial1 >= 7 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{grade.partial1}</span></td>
                                    <td className="px-6 py-4 text-center text-slate-300">-</td>
                                    <td className="px-6 py-4 text-center text-slate-300">-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-200">
                     <button onClick={() => alert('Descargando historial completo...')} className="text-xs font-bold text-meze-600 hover:underline flex items-center gap-1"><Download size={14}/> Descargar boleta de otros semestres</button>
                </div>
           </div>
       )}

       {activeTab === 'tramites' && (
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_REQUESTS.map(service => (
                <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{service.name}</h4>
                    <p className="text-sm text-slate-500 mb-4 flex-1">{service.description}</p>
                    <div className="mt-auto">
                        <p className="text-2xl font-bold text-meze-600 mb-3">${service.price}</p>
                        <button className="w-full flex items-center justify-center gap-2 py-2 border border-meze-600 text-meze-600 rounded hover:bg-meze-50 transition-colors font-medium text-sm"><CreditCard size={16} /> Agregar a Pagos</button>
                    </div>
                </div>
            ))}
         </div>
       )}

       {showScholarshipModal && (
           <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
               <div className="bg-white w-full max-w-lg rounded-2xl p-8 animate-fade-in relative">
                   <button onClick={() => setShowScholarshipModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                   <h3 className="text-xl font-bold text-slate-800 mb-4">Cita para Beca</h3>
                   <div className="space-y-4 text-sm text-slate-600 mb-6">
                       <p className="font-bold text-meze-600">Requisitos indispensables:</p>
                       <ul className="list-disc pl-5 space-y-1">
                           <li>Comprobante de pago de inscripción y mensualidad en curso.</li>
                           <li>Número de matrícula.</li>
                           <li>Boleta de calificaciones del semestre pasado.</li>
                           <li className="flex items-center gap-2">
                               Solicitud de beca 
                               <button className="text-xs bg-meze-100 text-meze-700 px-2 py-0.5 rounded font-bold hover:bg-meze-200 flex items-center gap-1"><Download size={10}/> Descargar</button>
                           </li>
                       </ul>
                       <p className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-amber-800 text-xs">
                           <strong>Nota:</strong> Las citas tienen una duración de 20 a 30 minutos. Favor de estar presente 5 minutos antes.
                       </p>
                   </div>
                   <button onClick={() => {alert('Cita agendada'); setShowScholarshipModal(false);}} className="w-full py-3 bg-meze-600 text-white font-bold rounded-xl hover:bg-meze-700">Confirmar Cita</button>
               </div>
           </div>
       )}
    </div>
  );

  // --- TEACHER RENDER ---
  const renderTeacherProfile = () => (
    <div className="space-y-6">
         <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6">
          <img src={user.photoUrl} alt={user.name} className="w-32 h-32 rounded-full border-4 border-meze-100 object-cover" />
          <div className="flex-1 text-center md:text-left space-y-2">
             <h2 className="text-2xl font-serif font-bold text-slate-800">{user.name}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-slate-500 text-xs uppercase tracking-wide font-bold">Matrícula</p>
                    <p className="font-mono text-slate-700">{user.enrollmentCode}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-slate-500 text-xs uppercase tracking-wide font-bold">Departamento / Puesto</p>
                    <p className="text-slate-700">{user.major || 'Docencia'} / Profesor Titular</p>
                </div>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Documentation */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Briefcase size={20}/> Documentación Laboral</h3>
                <div className="space-y-3">
                    {TEACHER_DOCUMENTS.map(doc => (
                        <div key={doc.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <span className="text-sm font-medium text-slate-700">{doc.name}</span>
                            <button className="text-meze-600 hover:text-meze-800"><Download size={18}/></button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payroll */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><CreditCard size={20}/> Nómina (Semestre Actual)</h3>
                <div className="space-y-3 flex-1">
                    {TEACHER_PAYROLL.map(pay => (
                        <div key={pay.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-700">{pay.name}</span>
                                <span className="text-xs text-slate-400">Pagado el {pay.date}</span>
                            </div>
                            <button className="text-meze-600 hover:text-meze-800"><Download size={18}/></button>
                        </div>
                    ))}
                </div>
                <button onClick={() => setShowCardModal(true)} className="mt-4 text-xs font-bold text-red-500 hover:underline text-center w-full">¿Extraviaste tu tarjeta?</button>
            </div>
       </div>
        
       {/* Paperwork Status */}
       <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><FileText size={20}/> Estatus de Papelería</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
               {TEACHER_PAPERWORK_STATUS.map(stat => (
                   <div key={stat.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
                       <span className="text-sm text-slate-600">{stat.name}</span>
                       <CheckCircle size={16} className="text-green-500" />
                   </div>
               ))}
           </div>
           <p className="text-center text-xs text-amber-600 font-bold bg-amber-50 p-2 rounded">Recuerda tener tu papelería en regla, puesto que la omisión de esta puede generar problemas al procesar tu nómina.</p>
       </div>

       {showCardModal && (
           <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
               <div className="bg-white w-full max-w-sm rounded-2xl p-6 animate-fade-in text-center">
                   <AlertTriangle size={48} className="text-red-500 mx-auto mb-4" />
                   <h3 className="text-lg font-bold text-slate-800 mb-2">Reposición de Tarjeta</h3>
                   <p className="text-sm text-slate-600 mb-6">
                       Acércate a recursos humanos para notificar el extravío. 
                       Recuerda que esto tiene un costo de <strong>$150.00 MXN</strong>, cargo que verás descontado en tu próximo recibo de nómina.
                   </p>
                   <button onClick={() => setShowCardModal(false)} className="w-full py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200">Entendido</button>
               </div>
           </div>
       )}
    </div>
  );

  return user.role === UserRole.STUDENT ? renderStudentProfile() : renderTeacherProfile();
};

export default Profile;