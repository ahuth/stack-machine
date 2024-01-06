export default function Instructions() {
  return (
    <section>
      <h2>Reference</h2>
      <section className="ml-2">
        <h3>Format</h3>
        <p className="ml-2">[+/-] Instruction [operand] #comment</p>
      </section>
      <section className="ml-2">
        <h3>Instructions</h3>
        <ul className="ml-2">
          <li>push $num</li>
          <li>drop</li>
          <li>eq</li>
          <li>ne</li>
          <li>gt</li>
          <li>ge</li>
          <li>lt</li>
          <li>le</li>
          <li>add</li>
          <li>sub</li>
          <li>+/- prefix</li>
        </ul>
      </section>
    </section>
  );
}
