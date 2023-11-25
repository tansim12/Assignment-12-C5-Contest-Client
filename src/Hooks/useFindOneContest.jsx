import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "./useGlobalInstance";

const useFindOneContest = (id) => {

    const { data:oneContestData, refetch:oneContestRefetch } = useQuery({
        queryKey: ["findOneData"],
        queryFn: async () => {
          const res = await globalInstance.get(`/contest/${id}`);
          const fetchData = await res.data;
         console.log(fetchData , "from hoookkkk");
          return fetchData;
        },
      });
    return {oneContestData , oneContestRefetch}
   
};

export default useFindOneContest;