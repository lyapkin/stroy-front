import useChangeSearchParams from "./useChangeSearchParams";

const useSucceedFromRequest = () => {
  const changeSearchParams = useChangeSearchParams();

  const succeedRequest = () => {
    const usp = new URLSearchParams({ formRequest: "success" });
    changeSearchParams(usp);
  };

  return succeedRequest;
};

export default useSucceedFromRequest;
