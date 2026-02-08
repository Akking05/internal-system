
import { FileCheck, Search, Download, Clock } from 'lucide-react';

export const DocumentsView = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Электронные документы</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input type="text" placeholder="Поиск документа..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileCheck size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 bg-amber-100 text-amber-700 rounded">На подписи</span>
            </div>
            
            <h4 className="font-bold text-slate-800 text-lg mb-1 leading-tight">Приказ об отпуске №{200 + i}</h4>
            <p className="text-xs text-slate-400 mb-6 flex items-center gap-1">
              <Clock size={12} /> Создан вчера в 14:30
            </p>

            <div className="flex gap-2">
              <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition active:scale-95">
                Подписать онлайн
              </button>
              <button className="p-2.5 border border-slate-200 rounded-xl text-slate-400 hover:bg-slate-50 transition">
                <Download size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};