import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../store';

const IndexPage: React.FC<PageProps> = () => {
  const { counter } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<Dispatch>();
  return (
    <main>
      <div>
        The count is {counter}
        <button onClick={() => dispatch.count.increment(1)}>increment</button>
        <button onClick={() => dispatch.count.incrementAsync(1)}>incrementAsync</button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
