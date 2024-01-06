import {useReducer} from 'react';
import Controls from './Controls';
import Editor from './Editor';
import {reducer, initialState} from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="flex flex-col gap-2 p-4">
      <Controls />
      <Editor dispatch={dispatch} state={state} />
    </main>
  );
}
