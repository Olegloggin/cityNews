export const addFavoriteType = {
  addFavorite: 'addFavorite',
};

export const addFavoriteAction = id => {
  return addFavorite(id);
};

const addFavorite = id => ({
  type: addFavoriteType.addFavorite,
  payload: id,
});
