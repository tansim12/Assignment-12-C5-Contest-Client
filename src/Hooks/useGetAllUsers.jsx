import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";

const useGetAllUsers = () => {
  const instance = useAxiosHook();
  const { data: allUserData = [], refetch: allUsersRefetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await instance.get("/users");
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { allUserData, allUsersRefetch };
};

export default useGetAllUsers;
