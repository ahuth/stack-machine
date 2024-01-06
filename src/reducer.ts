import type {Dispatch as ReactDispatch} from 'react';

export const initialState = {
  code: '',
  stack: [] as number[],
};

export type State = typeof initialState;
export type Dispatch = ReactDispatch<Action>;

// prettier-ignore
type Action = |
  {type: 'CODE_TYPED'; value: string} |
  {type: 'STOP_CLICKED'}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'CODE_TYPED':
      return {...state, code: action.value};
    case 'STOP_CLICKED':
      return {...state, stack: []};
    default:
      return state;
  }
}
