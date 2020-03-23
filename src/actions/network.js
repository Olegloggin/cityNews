export const networkActionType = {
  networkRequestStarted: 'networkRequestStarted',
  networkRequestFinished: 'networkRequestFinished',
};

export const networkActions = {
  networkRequestStarted: () => ({
    type: networkActionType.networkRequestStarted,
  }),
  networkRequestFinished: () => ({
    type: networkActionType.networkRequestFinished,
  }),
};
