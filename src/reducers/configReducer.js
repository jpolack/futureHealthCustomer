export default (
    state = {
      token: localStorage.getItem('futureHealthToken'),
      baseUrl: 'http://localhost:3000/app',
    // baseUrl: 'http://qsmobile.net:3000/app',
    },
    action,
  ) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('futureHealthToken', action.token);
      return { ...state, token: action.token };
    default:
      return state;
  }
};
