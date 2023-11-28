import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";

const useEveryContestParticipants = (id, currentPage, size) => {
  const instance = useAxiosHook();
  const { data: participantsAllData, refetch: participantsAllDataRefetch } =
    useQuery({
      queryKey: ["attendAllParticipant", currentPage, size],
      queryFn: async () => {
        const res = await instance.get(
          `/everyContestParticipants/${id}?page=${currentPage}&size=${size}`
        );
        const fetchData = await res.data;
        return fetchData;
      },
    });
  return { participantsAllData, participantsAllDataRefetch };
};

export default useEveryContestParticipants;
