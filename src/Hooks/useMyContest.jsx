import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";
import useAuthContext from "./useAuthContext";

const useMyContest = (currentPage , size) => {
  const instance = useAxiosHook();
  const { user } = useAuthContext();
  const { data: myContestData } = useQuery({
    queryKey: ["myContest", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await instance.get(`/myContest/${user?.email}`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { myContestData };
};

export default useMyContest;

