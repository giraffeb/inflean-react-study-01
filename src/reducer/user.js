const LOGIN = 'widgets/LOAD';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export function doLogin() {
  return { type: LOGIN };
}
