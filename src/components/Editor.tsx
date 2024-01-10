import clsx from 'clsx';
import type {Dispatch, State} from '../reducer';

type Props = {
  dispatch: Dispatch;
  state: State;
};

export default function Editor({dispatch, state}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="editor">
        <h2>Editor</h2>
      </label>
      <div className="flex">
        <div className={clsx(state.onLine == null && 'invisible')}>
          <div className="relative" style={{top: (state.onLine ?? 0) * 24}}>
            ➔
          </div>
        </div>
        <textarea
          className="w-56 border border-b-slate-950"
          id="editor"
          onChange={(e) =>
            dispatch({type: 'CODE_TYPED', value: e.target.value})
          }
          rows={10}
          value={state.code}
        />
      </div>
    </div>
  );
}
