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
        <div className="min-h-screen bg-gray-900 text-white px-10 py-10">
            <div className="grid grid-cols-3 gap-6">
                {tableData.map((curelem) => (
                    <TableCard key={curelem.id} data={curelem} />
                ))}
            </div>
        </div>
    )
}