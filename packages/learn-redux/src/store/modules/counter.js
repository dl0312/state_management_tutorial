import { Map } from 'immutable';

// define action type
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// define action creator
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// define initial state
const initialState = Map({
  color: 'red',
  number: 0,
});

// define reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return state.set('color', action.color);
    case INCREMENT:
      return state.update('number', number => number + 1);
    case DECREMENT:
      return state.update('number', number => number - 1);
    default:
      return state;
  }
}
