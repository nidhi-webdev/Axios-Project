import { useEffect, useState } from "react"
import { getApi, deleteApi } from "../api/Crud"
import { TableCard  } from "../components/TableCard"

export const Table = () => {
    const [tableData, setTableData] = useState([])

    const getCurdapi = async () => {
        const res = await getApi()
        setTableData(res.data)
    }

    const handleDelete = async (id) => {
        try {
            const res = await deleteApi(id)
            if (res.status === 200) {
                const newUpdatedData = tableData.filter((curelem) => curelem.id !== id)
                setTableData(newUpdatedData)
            } else {
                console.log("Failed to delete the post", res.status)

            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCurdapi()
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 text-white px-10 py-10">
            <div className="grid grid-cols-3 gap-6">
                {tableData.map((curelem) => (
                    <TableCard key={curelem.id} data={curelem} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}