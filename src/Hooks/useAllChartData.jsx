import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "./useGlobalInstance";

const useAllChartData = () => {
  const { data: chartData } = useQuery({
    queryKey: ["allChartData"],

    queryFn: async () => {
      const res = await globalInstance.get("/allChartsDataInfo");
      const fetchData =  res.data;
      
      return fetchData;
    },
  });

  return { chartData };
};

export default useAllChartData;
