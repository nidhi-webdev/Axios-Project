export const TableCard = ({ data }) => {
    const { body, id, title } = data

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col gap-3 border border-gray-700">
            <h1 className="text-sm font-bold text-gray-400">{id}.</h1>
            <h2 className="text-base font-semibold capitalize leading-snug">
                Title: {title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
                News: {body}
            </p>
            <div className="flex gap-3 mt-auto pt-2">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md transition-colors font-semibold uppercase tracking-wide text-sm">
                    EDIT
                </button>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-md transition-colors font-semibold uppercase tracking-wide text-sm">
                    DELETE
                </button>
            </div>
        </div>
    )
}