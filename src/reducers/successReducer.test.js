import { actionTypes } from './../actions'
import successReducer from './successReducer';

test('returns initial state of `false` when no action is dispatched', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
})
test('returns state of `true` when action of `CORRECT_GUESS` is dispatched', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
test('returns state of `false` when action of `NEW_GAME` is dispatched', () => {
  const newState = successReducer(undefined, { type: actionTypes.NEW_GAME });
  expect(newState).toBe(false);
})
