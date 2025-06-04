export type CategoryId = number | null;

export type FilterCategory = {
  id: CategoryId;
  name: string;
};

export type handleChangeFunc = (value: CategoryId) => void;
