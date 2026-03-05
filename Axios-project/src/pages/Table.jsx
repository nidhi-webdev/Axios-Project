import { useEffect, useState } from "react"
import { getApi } from "../api/Crud"

export const Table = () => {
    const [tableData, setTableData] = useState([])


    const getCurdapi = async () => {
        const res = await getApi()
        console.log(res.data);
        setTableData(res.data)

    }



    useEffect(() => {
        getCurdapi()
    }, [])


    return (
        <div>
            {tableData.map((curelem) => {
                return <TableCard />
            })}
        </div>
    )
}