import {useReducer} from 'react';
import Editor from './Editor';
import {reducer, initialState} from '../reducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="p-4">
      <Editor dispatch={dispatch} state={state} />
    </main>
  );
}
