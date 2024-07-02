export const checkIsInFavorite = (list: Array<string>, id: number): boolean => {
  if (list.includes(String(id))) return true;
  return false;
};
