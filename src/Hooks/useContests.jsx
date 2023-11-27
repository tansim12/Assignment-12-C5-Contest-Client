import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "./useGlobalInstance";

const useContests = (currentPage, size) => {
  const { data: contestData = [], refetch: contestRefetch } = useQuery({
    queryKey: ["contests" , currentPage ,size],

    queryFn: async () => {
      const res = await globalInstance.get(
        `/contests?page=${currentPage}&size=${size}`
      );
      const fetchData = await res.data;
      return fetchData;
    },
  });

  return { contestData, contestRefetch };
};

export default useContests;
