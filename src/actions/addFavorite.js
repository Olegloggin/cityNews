export const addFavoriteType = {
  addFavorite: 'addFavorite',
};

export const addFavoriteAction = item => {
  return addFavorite(item);
};

export const addFavorite = item => ({
  type: addFavoriteType.addFavorite,
  payload: item,
});
