import { createModel } from '@rematch/core';
import { RootModel } from '.';

interface CounterState {
  counter: number;
}

export const count = createModel<RootModel>()({
  state: { counter: 0 } as CounterState, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload: number) {
      return { counter: state.counter + payload };
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, state) {
      console.log('This is current root state', state);
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
});
