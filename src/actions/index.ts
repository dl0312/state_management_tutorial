import * as types from "./ActionTypes";

export const create = (color: string) => ({
  type: types.CREATE,
  color
})

export const remove = (index: number) => ({
  type: types.REMOVE,
  index
})

export const increment = (index: number) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index: number) => ({
  type: types.DECREMENT,
  index
});

export const setColor = ({ index, color }: { index: number, color: string }) => ({
  type: types.SET_COLOR,
  color
});
