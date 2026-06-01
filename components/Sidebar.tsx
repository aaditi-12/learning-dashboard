import { Home, BookOpen, Activity } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-slate-900">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-4">
        <div className="flex items-center gap-2">
          <Home size={18} />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-2">
          <BookOpen size={18} />
          <span>Courses</span>
        </div>

        <div className="flex items-center gap-2">
          <Activity size={18} />
          <span>Activity</span>
        </div>
      </nav>
    </aside>
  );
}