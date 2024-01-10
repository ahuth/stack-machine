import type {Dispatch as ReactDispatch} from 'react';
import {parse, execute, type Instruction} from './cpu';

export const initialState = {
  code: 'push 1\npush 2\nadd',
  instructions: [] as Instruction[],
  onLine: null as number | null,
  stack: [] as number[],
};

export type State = typeof initialState;
export type Dispatch = ReactDispatch<Action>;

type Action =
  | {type: 'CODE_TYPED'; value: string}
  | {type: 'STEP_CLICKED'}
  | {type: 'STOP_CLICKED'};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'CODE_TYPED':
      return {...state, code: action.value};
    case 'STEP_CLICKED': {
      // First click, so no instructions are executed, yet.
      if (state.onLine == null) {
        return {...state, instructions: parse(state.code), onLine: 0};
      }
      // No more instructions to execute.
      if (state.onLine === state.instructions.length) {
        return state;
      }
      // Execute an instruction.
      return {
        ...state,
        onLine: state.onLine + 1,
        stack: execute(state.instructions[state.onLine], state.stack),
      };
    }
    case 'STOP_CLICKED':
      return {...state, onLine: null, stack: []};
    default:
      return state;
  }
}
