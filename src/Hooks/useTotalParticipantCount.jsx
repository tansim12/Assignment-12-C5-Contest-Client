import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosHook from "./useAxiosHook";


const useTotalParticipantCount = () => {
    const {user} = useAuthContext()
    const instance = useAxiosHook()

    const {data:totalParticipant } = useQuery({
        queryKey:["totalParticipantCount" , user?.email ],
        queryFn:async()=>{
            const res = await instance.get(`/userTotalParticipant/${user?.email}`)
            const fetchData = await res.data
            return fetchData
        }
    })

    return {totalParticipant}
};

export default useTotalParticipantCount;