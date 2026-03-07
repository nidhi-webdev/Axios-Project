import { useEffect, useState } from "react"
import { getApi } from "../api/Crud"
import { TableCard  } from "../components/TableCard"

export const Table = () => {
    const [tableData, setTableData] = useState([])


    const getCurdapi = async () => {
        const res = await getApi()
        setTableData(res.data)

    }



    useEffect(() => {
        getCurdapi()
    }, [])


    return (
        <div>
        <div className="bg-gray-900 text-white grid grid-cols-3">
            {tableData.map((curelem) => {
                return <TableCard key={curelem.id} data={curelem}  />
            })}
        </div>
        </div>
    )
}