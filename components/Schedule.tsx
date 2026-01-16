import React from 'react';
import { STUDENT_SCHEDULE, TEACHER_SCHEDULE } from '../constants';
import { Clock, MapPin, User as UserIcon, Download } from 'lucide-react';
import { UserRole } from '../types';

interface ScheduleProps {
    role: UserRole;
}

const Schedule: React.FC<ScheduleProps> = ({ role }) => {
  const days = role === UserRole.TEACHER 
    ? ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    : ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    
  const scheduleData = role === UserRole.STUDENT ? STUDENT_SCHEDULE : TEACHER_SCHEDULE;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-meze-600 rounded-full"></span>
              {role === UserRole.STUDENT ? 'Horario de Clases' : 'Horario Docente'}
          </h2>
          <button onClick={() => alert('Descargando PDF del horario...')} className="flex items-center gap-2 text-sm font-bold bg-white border border-slate-200 text-meze-600 px-4 py-2 rounded-lg hover:bg-meze-50 transition-colors">
              <Download size={16} /> Descargar Horario
          </button>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${role === UserRole.TEACHER ? 'xl:grid-cols-6' : 'xl:grid-cols-5'} gap-4`}>
        {days.map((day) => {
          const dayClasses = scheduleData.filter(c => c.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime));
          const isToday = new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase() === day.toLowerCase();

          return (
            <div key={day} className={`flex flex-col rounded-xl overflow-hidden border ${isToday ? 'border-meze-400 shadow-md' : 'border-slate-200 bg-white'}`}>
              <div className={`p-3 text-center font-bold text-sm uppercase tracking-wider ${isToday ? 'bg-meze-600 text-white' : 'bg-slate-50 text-slate-600'}`}>
                {day}
              </div>
              <div className="p-3 space-y-3 flex-1 bg-white relative min-h-[150px]">
                 {role === UserRole.STUDENT && (
                     <div className="absolute top-[50%] left-0 right-0 h-8 flex items-center justify-center text-[10px] text-slate-300 uppercase tracking-widest z-0 pointer-events-none">
                        Receso
                     </div>
                 )}

                {dayClasses.length > 0 ? (
                  dayClasses.map((item) => (
                    <div key={item.id} className="bg-white border border-slate-100 rounded-lg p-3 shadow-sm hover:border-meze-200 transition-colors z-10 relative">
                      <div className="flex items-center gap-1 text-meze-600 font-bold text-xs mb-1">
                        <Clock size={12} />
                        {item.startTime} - {item.endTime}
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-2">{item.subject}</h4>
                      <div className="flex flex-col gap-1 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={10} /> {item.room}
                        </div>
                        {role === UserRole.STUDENT && item.professor && (
                            <div className="flex items-center gap-1">
                                <UserIcon size={10} /> {item.professor}
                            </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-300 text-xs italic">
                    Libre
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;