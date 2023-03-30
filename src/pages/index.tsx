import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { RootState, useAppStore } from '../store';
import { decrement, increment } from '../store/slices/counter';

const IndexPage: React.FC<PageProps> = () => {
  const { useAppDispatch, useAppSelector } = useAppStore();
  const { counter } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <main>
      <div>
        <div>
          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{counter}</span>
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
