import React from 'react';
import { STUDENT_PAYMENTS } from '../constants';
import { CreditCard, CheckCircle, FileText, AlertTriangle } from 'lucide-react';

const Payments: React.FC = () => {
  const pendingPayments = STUDENT_PAYMENTS.filter(p => p.status === 'Pendiente');
  const historyPayments = STUDENT_PAYMENTS.filter(p => p.status === 'Pagado');
  const totalPending = pendingPayments.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-meze-600 rounded-full"></span>
              Estado de Cuenta y Pagos
          </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="lg:col-span-1">
          <div className={`rounded-2xl p-6 text-white shadow-lg relative overflow-hidden ${totalPending > 0 ? 'bg-gradient-to-br from-meze-900 to-meze-800' : 'bg-gradient-to-br from-green-600 to-green-800'}`}>
             <div className="relative z-10">
                <p className="text-white/80 text-sm font-medium mb-1">Saldo Pendiente Total</p>
                <h3 className="text-4xl font-serif font-bold mb-4">${totalPending.toLocaleString('es-MX', { minimumFractionDigits: 2 })} <span className="text-lg font-sans font-normal text-white/60">MXN</span></h3>
                
                {totalPending > 0 ? (
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10 mb-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="text-yellow-400 shrink-0 mt-0.5" size={18} />
                            <p className="text-xs text-white/90 leading-relaxed font-bold">
                            Recuerda realizar el pago de tu mensualidad antes del día 10 de cada mes para evitar recargos por pago tardío.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/10 mb-6">
                         <div className="flex items-start gap-3">
                            <CheckCircle className="text-white shrink-0 mt-0.5" size={18} />
                            <p className="text-xs text-white/90 leading-relaxed font-bold">
                                ¡Felicidades! Tu cuenta está al corriente.
                            </p>
                        </div>
                    </div>
                )}

                {totalPending > 0 && (
                    <button className="w-full bg-white text-meze-900 py-3 rounded-xl font-bold hover:bg-meze-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <CreditCard size={18} /> Pagar Todo
                    </button>
                )}
             </div>
             
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white opacity-10 blur-2xl"></div>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2">
                    <FileText size={18} className="text-slate-400" /> Historial de Movimientos
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Concepto</th>
                            <th className="px-6 py-4">Ref</th>
                            <th className="px-6 py-4">Fecha/Vence</th>
                            <th className="px-6 py-4">Monto</th>
                            <th className="px-6 py-4 text-center">Estatus</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {STUDENT_PAYMENTS.map(payment => (
                            <tr key={payment.id} className="hover:bg-slate-50/50">
                                <td className="px-6 py-4 font-medium text-slate-800">{payment.concept}</td>
                                <td className="px-6 py-4 text-slate-500 font-mono text-xs">{payment.reference}</td>
                                <td className="px-6 py-4 text-slate-500">{payment.date}</td>
                                <td className="px-6 py-4 font-semibold text-slate-700">${payment.amount.toLocaleString('es-MX')}</td>
                                <td className="px-6 py-4 text-center">
                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${payment.status === 'Pagado' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {payment.status === 'Pagado' ? <CheckCircle size={10} /> : <AlertTriangle size={10}/>} {payment.status}
                                </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;