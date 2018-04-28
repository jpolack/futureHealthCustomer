export default (
    state = {
      reload: false,
    },
    action,
  ) => {
  switch (action.type) {
    case 'RELOADED':
      return { ...state, reload: false };
    case 'ADD':
      return { ...state, reload: true };
    default:
      return state;
  }
};
