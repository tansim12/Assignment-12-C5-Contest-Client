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

  const allTags = contestData?.map((item) => item?.tag);

  return { contestData, contestRefetch, allTags };
};

export default useContests;
