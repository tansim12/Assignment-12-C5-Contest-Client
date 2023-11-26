import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "./useGlobalInstance";

const useContests = () => {
  const { data: contestData = [], refetch: contestRefetch } = useQuery({
    queryKey: ["contests"],
    // enabled:  ,
    queryFn: async () => {
      const res = await globalInstance.get("/contests");
      const fetchData = await res.data;
      return fetchData;
    },
  });



  return { contestData, contestRefetch };
};

export default useContests;
