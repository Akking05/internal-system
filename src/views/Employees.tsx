
import { Plus, Search, Filter } from 'lucide-react';

// Имитация базы данных
const fakeEmployees = [
  { id: 1, name: 'Алибек Жолдасов', role: 'Руководитель IT отдела', dept: 'Информационные технологии', exp: '4 года', status: 'active' },
  { id: 2, name: 'Мария Иванова', role: 'Главный бухгалтер', dept: 'Бухгалтерия', exp: '7 лет', status: 'active' },
  { id: 3, name: 'Ержан Сапаров', role: 'Менеджер по продажам', dept: 'Отдел продаж', exp: '1 год 2 мес.', status: 'active' },
  { id: 4, name: 'Айгерим Нуртаева', role: 'HR-специалист', dept: 'Кадры', exp: '2 года', status: 'vacation' },
  { id: 5, name: 'Тимур Бекетов', role: 'Инженер-программист', dept: 'Информационные технологии', exp: '6 мес.', status: 'active' },
];

export const EmployeesView = () => (
  <div className="animate-in slide-in-from-bottom-2 duration-500">
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Сотрудники</h2>
        <p className="text-slate-500 mt-1">Всего 60 человек в штате</p>
      </div>
      <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-500/20 text-sm">
        <Plus size={18} /> Добавить сотрудника
      </button>
    </div>

    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Панель поиска */}
      <div className="p-4 border-b border-slate-100 flex gap-3 bg-slate-50/50">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input type="text" placeholder="Поиск по имени, должности или ИИН..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition" />
        </div>
        <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl flex items-center gap-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"><Filter size={16}/> Отдел</button>
      </div>
      
      {/* Таблица */}
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase text-slate-500 font-bold tracking-wider">
          <tr>
            <th className="px-6 py-4 font-semibold">Сотрудник</th>
            <th className="px-6 py-4 font-semibold">Отдел</th>
            <th className="px-6 py-4 font-semibold">Стаж</th>
            <th className="px-6 py-4 font-semibold text-right">Статус</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {fakeEmployees.map((emp) => (
            <tr key={emp.id} className="hover:bg-blue-50/50 transition cursor-pointer group">
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold border border-white shadow-sm group-hover:border-blue-200 transition">
                    {emp.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-[15px]">{emp.name}</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">{emp.role}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm font-medium text-slate-600">{emp.dept}</td>
              <td className="px-6 py-5 text-sm font-medium text-slate-600">{emp.exp}</td>
              <td className="px-6 py-5 text-right">
                {emp.status === 'active' ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[11px] font-bold rounded-full uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Активен
                  </span>
                ) : (
                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-700 text-[11px] font-bold rounded-full uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> В отпуске
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);