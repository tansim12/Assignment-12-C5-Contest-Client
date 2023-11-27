import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";

const useGetAllUsers = (currentPage , size) => {
  const instance = useAxiosHook();
  const { data: allUserData = {}, refetch: allUsersRefetch } = useQuery({
    queryKey: ["allUsers" , currentPage ,size],
    queryFn: async () => {
      const res = await instance.get(`/users?page=${currentPage}&size=${size}`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { allUserData, allUsersRefetch };
};

export default useGetAllUsers;
