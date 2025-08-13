export const isNumber = (page: string | null): boolean => {
  return page && !isNaN(Number(page)) ? true : false;
};
