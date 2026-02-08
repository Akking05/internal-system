import React from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  Clock, 
  BarChart3 
} from 'lucide-react';

// --- Вспомогательный компонент для прогресс-баров (Аналитика) ---
const DeptProgress = ({ label, percent, color, count }: any) => (
  <div className="group">
    <div className="flex justify-between text-xs mb-2">
      <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{label}</span>
      <span className="text-slate-400 font-medium">{count}</span>
    </div>
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div 
        className={`${color} h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,0,0,0.05)]`} 
        style={{ width: `${percent}%` }} 
      />
    </div>
  </div>
);

// --- Основной компонент Dashboard ---
export const DashboardView = () => {
  const today = new Date().toLocaleDateString('ru-RU', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-700 space-y-8">
      
      {/* HEADER: Приветствие */}
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-slate-900">
            Доброе утро, Данияр! 👋
          </h2>
          <p className="text-slate-500 mt-2 font-medium flex items-center gap-2">
            <Clock size={16} className="text-blue-500" /> Сегодня {today}. Система работает в штатном режиме.
          </p>
        </div>
        <div className="flex gap-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
           <div className="px-4 py-2 flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-xl">
              <ShieldCheck size={14} /> SSL SECURE
           </div>
        </div>
      </header>

      {/* STATS GRID: Основные цифры */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Сотрудников в штате" 
          value="60" 
          icon={<Users className="text-blue-600"/>} 
          trend="Все отделы активны" 
          color="bg-blue-50" 
        />
        <StatCard 
          title="Документов на подписи" 
          value="4" 
          icon={<FileText className="text-amber-600"/>} 
          trend="Требуют внимания" 
          color="bg-amber-50" 
          priority 
        />
        <StatCard 
          title="Задач выполнено" 
          value="182" 
          icon={<CheckCircle className="text-emerald-600"/>} 
          trend="+12% за неделю" 
          color="bg-emerald-50" 
        />
      </div>

      {/* MAIN CONTENT: Активность и Аналитика */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ЛЕНТА АКТИВНОСТИ (2/3 ширины) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                  <Zap size={20} className="text-blue-500 fill-blue-500" /> Живая лента событий
                </h3>
                <button className="text-xs font-bold text-blue-600 hover:underline">См. историю</button>
             </div>

             <div className="space-y-8">
               <ActivityItem 
                 name="Айгерим Нуртаева" 
                 role="HR-менеджер"
                 action="создала приказ" 
                 target="«О премировании сотрудников IT отдела»" 
                 time="15 мин. назад" 
                 initials="АН" bg="bg-pink-100 text-pink-600"
               />
               <ActivityItem 
                 name="Ержан Сапаров" 
                 role="Директор"
                 action="подписал документ" 
                 target="Договор поставки №45-АК" 
                 time="1 час назад" 
                 initials="ЕС" bg="bg-blue-100 text-blue-600"
               />
                <ActivityItem 
                 name="Система" 
                 role="Автоматизация"
                 action="отправила уведомление" 
                 target="Сотруднику Тимуру Б. о завершении испытательного срока" 
                 time="3 часа назад" 
                 initials="🤖" bg="bg-slate-100 text-slate-600"
               />
             </div>
        </div>
        
        {/* ПРАВАЯ КОЛОНКА: Быстрые действия + Загрузка (1/3 ширины) */}
        <div className="space-y-6">
            {/* Блок действий */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
                <h3 className="font-bold text-lg mb-6 relative z-10">Быстрые действия</h3>
                <div className="space-y-3 relative z-10">
                    <button className="w-full py-4 bg-white/10 hover:bg-white/15 transition rounded-2xl text-sm font-bold flex items-center justify-center gap-3 backdrop-blur-sm">
                        + Создать документ
                    </button>
                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 transition rounded-2xl text-sm font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-900/50">
                        + Добавить в штат
                    </button>
                </div>
            </div>

            {/* Блок Аналитики отделов */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                  <BarChart3 size={20} className="text-slate-400" /> Аналитика
                </h3>
                <div className="space-y-6">
                    <DeptProgress label="IT Департамент" percent={85} color="bg-blue-500" count="24 чел." />
                    <DeptProgress label="Бухгалтерия" percent={40} color="bg-emerald-500" count="12 чел." />
                    <DeptProgress label="Отдел продаж" percent={65} color="bg-amber-500" count="18 чел." />
                </div>
            </div>
        </div>
      </div>

      {/* НИЖНИЙ БАННЕР: Новости */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
              <span className="px-3 py-1 bg-blue-400/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-400/20">Новости компании</span>
              <h3 className="text-3xl font-bold mt-6 mb-4 max-w-xl leading-tight">Обновление регламента информационной безопасности 2026</h3>
              <p className="text-blue-100 text-lg opacity-80 max-w-2xl leading-relaxed">
                  Все сотрудники должны пройти ознакомление с новыми протоколами доступа до конца недели. 
                  Система автоматически зафиксирует вашу подпись.
              </p>
              <button className="mt-8 px-8 py-3.5 bg-white text-blue-900 rounded-2xl text-sm font-black hover:bg-blue-50 transition-all shadow-xl hover:scale-105 active:scale-95">
                  Ознакомиться сейчас
              </button>
          </div>
          <FileText size={240} className="absolute right-[-40px] bottom-[-60px] text-white opacity-[0.03] -rotate-12" />
      </div>
      
    </div>
  );
};

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

const StatCard = ({ title, value, icon, trend, color, priority }: any) => (
  <div className={`bg-white p-8 rounded-[2.5rem] border transition-all hover:shadow-xl hover:-translate-y-1 ${priority ? 'border-amber-200 shadow-amber-50' : 'border-slate-100'}`}>
    <div className="flex justify-between items-start mb-6">
      <div className={`p-4 rounded-2xl ${color} shadow-inner`}>{icon}</div>
    </div>
    <p className="text-slate-500 text-sm font-bold tracking-tight uppercase">{title}</p>
    <p className="text-5xl font-black text-slate-900 mt-2 tracking-tighter">{value}</p>
    <p className={`text-xs font-black mt-4 px-3 py-1 rounded-full w-fit ${priority ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
      {trend}
    </p>
  </div>
);

const ActivityItem = ({ name, role, action, target, time, initials, bg }: any) => (
  <div className="flex gap-6 group cursor-pointer">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg shrink-0 shadow-sm group-hover:scale-110 transition-transform ${bg}`}>
      {initials}
    </div>
    <div className="pb-8 border-b border-slate-50 last:border-0 last:pb-0 flex-1">
      <p className="text-[15px] text-slate-600 leading-relaxed">
        <span className="font-bold text-slate-900">{name}</span> 
        <span className="text-slate-400 text-xs block mb-1">{role}</span>
        {action} <span className="font-bold text-blue-600 hover:underline">{target}</span>
      </p>
      <p className="text-[11px] text-slate-400 font-bold mt-2 flex items-center gap-1">
        <Clock size={12} /> {time}
      </p>
    </div>
  </div>
);