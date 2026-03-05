import { useEffect } from "react"
import { getApi } from "../api/Crud"

export const Table = () => {


    const getCurdapi = async () => {
        const res = await getApi()
        console.log(res.data);
        
    }



    useEffect(() => {
        getCurdapi()
    }, [])


    return
}