import { useState } from "react"
import { postApi } from "../api/Crud"

const Form = ({ tableData, setTableData }) => {
    const [adddata, setAddData] = useState({
        title: "",
        body: ""
    })

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
        console.log("res from res", res)
        if (res.status == 201) {
            setTableData([...tableData, res.data])
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addPostData()
    }



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
                <button onClick={() => handleUpdatePost(data)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-md uppercase tracking-wide text-sm transition-colors cursor-pointer">
                    EDIT </button>
                <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-md uppercase tracking-wide text-sm transition-colors cursor-pointer"
                >
                    ADD
                </button>
            </form>
        </div>
    )
}

export default Form
