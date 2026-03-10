import { useEffect, useState } from "react"
import { postApi, updateApi } from "../api/Crud"

const Form = ({ tableData, setTableData, data, setEditData, editData }) => {

    const [adddata, setAddData] = useState({
        title: "",
        body: ""
    })

    // useeffect for update the input
    useEffect(() => {
        editData &&
            setAddData({
                title: editData.title || "",
                body: editData.body || ""
            })
    }, [editData])

    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const addPostData = async () => {
        const res = await postApi(adddata)
        if (res.status == 201) {
            setTableData([...tableData, res.data])
            setEditData({ title: "", body: "" })
        }
    }

    const updatePostData = async () => {
        try {
            const res = await updateApi(editData.id, adddata)
            console.log("Res", res)
            if (res.status === 200) {
                setTableData((prev) => {
                    return prev.map((curElem) => {
                        return curElem.id === editData.id ? res.data : curElem
                    })
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value
        if (action === "ADD") {
            addPostData()
        } else if (action === "EDIT") {
            updatePostData()
        }

    }

    // editData is null on page load, so check for null first
    const isEmpty = !editData



    return (
        <div className="bg-gray-900 w-full flex justify-center py-8">
            <form onSubmit={handleFormSubmit}
                className="flex items-center gap-3">
                <input
                    value={adddata.title}
                    onChange={handleInputChange}
                    name="title"
                    type="text"
                    placeholder="Add Title"
                    className="bg-white text-gray-800 placeholder-gray-400 px-5 py-3 rounded-md w-64 outline-none text-sm"
                />
                <input
                    value={adddata.body}
                    onChange={handleInputChange}
                    name="body"
                    type="text"
                    placeholder="Add Post"
                    className="bg-white text-gray-800 placeholder-gray-400 px-5 py-3 rounded-md w-64 outline-none text-sm"
                />
                {/* <button onClick={() => handleUpdatePost(data)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-md uppercase tracking-wide text-sm transition-colors cursor-pointer">
                    EDIT </button> */}
                <button
                    type="submit"
                    value={isEmpty ? "ADD" : "EDIT"}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-md uppercase tracking-wide text-sm transition-colors cursor-pointer"
                >
                    {isEmpty ? "ADD" : "EDIT"}
                </button>
            </form>
        </div>
    )
}

export default Form
