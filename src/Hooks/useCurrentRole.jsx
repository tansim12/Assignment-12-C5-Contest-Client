import { useQuery } from "@tanstack/react-query";

import useAxiosHook from "./useAxiosHook";
import useAuthContext from "./useAuthContext";

const useCurrentRole = () => {
    const instance = useAxiosHook()
    const {user , userLoading}= useAuthContext()
  const { data:currentRole } = useQuery({
    queryKey: ["currentUserRole"],
    enabled: !userLoading && !!user?.email,
    queryFn: async () => {
      const res = await instance.get(`/currentRole/${user?.email}`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { currentRole };
};

export default useCurrentRole;


