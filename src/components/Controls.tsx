import type {Dispatch} from '../reducer';

type Props = {
  dispatch: Dispatch;
};

export default function Controls({dispatch}: Props) {
  return (
    <ul className="flex gap-2">
      <li>
        <button
          className="border border-slate-950 p-1 hover:bg-slate-100 active:translate-y-1 active:bg-slate-200"
          onClick={() => dispatch({type: 'STOP_CLICKED'})}
        >
          🛑 Stop
        </button>
      </li>
      <li>
        <button
          className="border border-slate-950 p-1 hover:bg-slate-100 active:translate-y-1 active:bg-slate-200"
          onClick={() => dispatch({type: 'STEP_CLICKED'})}
        >
          ▶️ Step
        </button>
      </li>
      <li>
        <button className="border border-slate-950 p-1 hover:bg-slate-100 active:translate-y-1 active:bg-slate-200">
          ⏩ Run
        </button>
      </li>
    </ul>
  );
}
