import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "./useGlobalInstance";

const useWinnerAndChartData = () => {
  const { data: totalWinnerData = [] } = useQuery({
    queryKey: ["totalWinnerDataAndChart"],
    queryFn: async () => {
      const res = await globalInstance.get(`/totalWinner`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { totalWinnerData };
};

export default useWinnerAndChartData;
