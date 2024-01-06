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
      <textarea
        className="border border-b-slate-950 w-56"
        id="editor"
        onChange={(e) => dispatch({type: 'CODE_TYPED', value: e.target.value})}
        rows={10}
        value={state.code}
      />
    </div>
  );
}
