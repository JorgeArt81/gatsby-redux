import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { decrement, increment } from '../store/slices/counter';

const IndexPage: React.FC<PageProps> = () => {
  const {counter} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
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
