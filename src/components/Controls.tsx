export default function Controls() {
  return (
    <ul className="flex gap-2">
      <li>
        <button className="border border-slate-950 p-1 hover:bg-slate-100 active:bg-slate-200 active:translate-y-1">
          🛑 Stop
        </button>
      </li>
      <li>
        <button className="border border-slate-950 p-1 hover:bg-slate-100 active:bg-slate-200 active:translate-y-1">
          ▶️ Step
        </button>
      </li>
      <li>
        <button className="border border-slate-950 p-1 hover:bg-slate-100 active:bg-slate-200 active:translate-y-1">
          ⏩ Run
        </button>
      </li>
    </ul>
  );
}
