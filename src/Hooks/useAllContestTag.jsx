import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "./useGlobalInstance";

const useAllContestTag = () => {
  const { data=[] } = useQuery({
    queryKey: ["contestTags"],
    queryFn: async () => {
      const res = await globalInstance.get("/contestTag");
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { data };
};

export default useAllContestTag;


