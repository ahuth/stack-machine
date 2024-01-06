import type {State} from '../reducer';

type Props = {
  state: State;
};

export default function Stack({state}: Props) {
  return (
    <div>
      <h2>Stack</h2>
      <ol className="border-t-4 border-indigo-500 font-mono">
        {state.stack.map((val, i) => {
          return (
            <div key={i}>
              {i}: {val}
            </div>
          );
        })}
      </ol>
    </div>
  );
}
