export const errorType = {
  getError: 'getError',
  resetError: 'resetError',
};

export const errorAction = {
  getError: e => ({
    type: errorType.getError,
    payload: e,
  }),
  resetError: () => ({
    type: errorType.resetError,
  }),
};
