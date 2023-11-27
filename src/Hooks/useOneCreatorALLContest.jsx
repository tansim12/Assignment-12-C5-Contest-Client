import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosHook from "./useAxiosHook";


const useOneCreatorALLContest = () => {
    const {user} = useAuthContext()
    const instance = useAxiosHook()
    const { data:allContestData=[] , refetch:allContestDataRefetch } = useQuery({
        queryKey: ["oneCreatorAllContest" , user?.email],
        // enabled:  ,
        queryFn: async () => {
          const res = await instance.get(`/addContest/${user?.email}`);
          const fetchData = await res.data;
          return fetchData;
        },
      });
    
    
    
      return { allContestData , allContestDataRefetch };
};

export default useOneCreatorALLContest;