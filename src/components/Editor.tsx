export default function Editor() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="editor">Editor</label>
      <textarea
        className="border border-b-slate-950 w-56"
        id="editor"
        rows={10}
      />
    </div>
  );
}
