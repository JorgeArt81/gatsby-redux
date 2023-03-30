import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

interface Props {
  useAppDispatch: () => AppDispatch;
  useAppSelector: TypedUseSelectorHook<RootState>;
}
export const useAppStore = (): Props => {
  // const useAppDispatch: () => AppDispatch = useDispatch;
  // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  return {
    // useAppDispatch: () => (AppDispatch = useDispatch),
    // useAppSelector: (TypedUseSelectorHook<RootState> = useSelector),
    useAppDispatch: useDispatch,
    useAppSelector: useSelector,
  };
};
