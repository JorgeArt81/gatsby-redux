import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '../store';

const mapState = (state: RootState) => ({
  count: state.count,
});
const mapDispatch = (dispatch: Dispatch) => ({
  increment: (value: number) => dispatch.count.increment(value),
  incrementAsync: (value: number) => dispatch.count.incrementAsync(value),
});
type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps & PageProps;

const IndexPage: React.FC<Props> = ({ count, increment, incrementAsync }) => {
  return (
    <main>
      <div>
        The count is {count.counter}
        <button onClick={() => increment(1)}>increment</button>
        <button onClick={() => incrementAsync(1)}>incrementAsync</button>
      </div>
    </main>
  );
};

const CountContainer = connect(mapState, mapDispatch)(IndexPage);
export default CountContainer;

export const Head: HeadFC = () => <title>Home Page</title>;
