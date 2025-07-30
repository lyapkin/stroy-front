declare const ym: (
  id: number,
  method: "reachGoal",
  ...params: unknown[]
) => void;

const useYM = (id: number) => {
  const reachGoal = (target: string) => {
    ym(id, "reachGoal", target);
  };
  return { reachGoal };
};

export default useYM;
