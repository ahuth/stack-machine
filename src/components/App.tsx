import {useReducer} from 'react';
import Controls from './Controls';
import Editor from './Editor';
import Instructions from './Instructions';
import Stack from './Stack';
import {reducer, initialState} from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="flex gap-2 p-4">
      <div className="flex flex-col gap-2">
        <Controls dispatch={dispatch} />
        <Editor dispatch={dispatch} state={state} />
        <Instructions />
      </div>
      <Stack state={state} />
    </main>
  );
}
