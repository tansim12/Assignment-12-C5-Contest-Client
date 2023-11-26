import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosHook from "./useAxiosHook";


const useWinnerContestDataByFindUser = () => {
    const {user} = useAuthContext()
    const instance = useAxiosHook()

    const {data:winnerData , refetch:winnerRefetch} = useQuery({
        queryKey:["findUserBaseWinnerContest" , user?.email ],
        queryFn:async()=>{
            const res = await instance.get(`/userTotalWinner/${user?.email}`)
            const fetchData = await res.data
            return fetchData
        }
    })

    return {winnerData , winnerRefetch}
};

export default useWinnerContestDataByFindUser;