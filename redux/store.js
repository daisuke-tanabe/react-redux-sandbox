import { createStore } from 'redux'
import modules from './modules';

export default (initialState) => {
  return createStore(
    modules,
    initialState
  );
}
