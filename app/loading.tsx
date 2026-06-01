export default function Loading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="h-24 bg-slate-700 rounded mb-4"></div>

      <div className="grid gap-4 grid-cols-3">
        <div className="h-40 bg-slate-700 rounded"></div>
        <div className="h-40 bg-slate-700 rounded"></div>
        <div className="h-40 bg-slate-700 rounded"></div>
      </div>
    </div>
  );
}