import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosHook from "./useAxiosHook";

const useOneCreatorALLContest = (currentPage, size) => {
  const { user } = useAuthContext();
  const instance = useAxiosHook();
  const { data: allContestData = [], refetch: allContestDataRefetch } =
    useQuery({
      queryKey: ["oneCreatorAllContest", user?.email, currentPage, size],
      // enabled:  ,
      queryFn: async () => {
        const res = await instance.get(
          `/addContest/${user?.email}?page=${currentPage}&size=${size}`
        );
        const fetchData = await res.data;
        return fetchData;
      },
    });

  return { allContestData, allContestDataRefetch };
};

export default useOneCreatorALLContest;
