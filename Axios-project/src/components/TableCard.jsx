export const TableCard = ({ data }) => {
    console.log("TableCard", data);
    const { body, id, title, } = data


    return (
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
            <h1 className="text-sm font-bold text-gray-400"> {id}</h1>
            <h2 className="text-xl font-semibold capitalize leading-tight">{title}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
            <div className="flex gap-3 mt-2">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md transition-colors font-medium">
                    Edit
                </button>
                <button className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-md transition-colors font-medium">
                    Delete
                </button>
            </div>
        </div>
    )
}