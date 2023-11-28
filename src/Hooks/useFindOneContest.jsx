import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";

const useFindOneContest = (id) => {
  const instance = useAxiosHook()
  const { data: oneContestData={}, refetch: oneContestRefetch } = useQuery({
    queryKey: ["findOneData"],
    queryFn: async () => {
      const res = await instance.get(`/contest/${id}`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { oneContestData, oneContestRefetch };
};

export default useFindOneContest;
