/* eslint-disable import/prefer-default-export */
const fns = [];

export const NAMES = {
  update: 'update',
  resize: 'resize',
};
export const add = (fn) => {
  fns.push(fn);
};
export const notify = (data) => {
  fns.forEach(fn => fn(data));
};
export const clear = () => {
  fns.length = 0;
};
