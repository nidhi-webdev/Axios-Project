import React from 'react'

const Form = ({ tableData, setTableData}) => {
    console.log("Form Component", tableData, setTableData);
    
    return (
        <div className="bg-gray-900 w-full flex justify-center py-8">
            <form className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Add Title"
                    className="bg-white text-gray-800 placeholder-gray-400 px-5 py-3 rounded-md w-64 outline-none text-sm"
                />
                <input
                    type="text"
                    placeholder="Add Post"
                    className="bg-white text-gray-800 placeholder-gray-400 px-5 py-3 rounded-md w-64 outline-none text-sm"
                />
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
