import { useQuery } from "@tanstack/react-query";

import useAxiosHook from "./useAxiosHook";
import useAuthContext from "./useAuthContext";

const useCurrentRole = () => {
    const instance = useAxiosHook()
    const {user , userLoading}= useAuthContext()
  const { data:currentRole , isLoading } = useQuery({
    queryKey: ["currentUserRole"],
    enabled: !userLoading && !!user?.email,
    queryFn: async () => {
      const res = await instance.get(`/currentRole/${user?.email}`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { currentRole  , isLoading};
};

export default useCurrentRole;


