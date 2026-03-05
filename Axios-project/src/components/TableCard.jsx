export const TableCard = ({ data }) => {
    console.log("TableCard", data);
    const { body, id, title, } = data


    return (
        <div className="bg-gray-600 flex fle-col justify-center items-center gap-5">
            <h1> {id} </h1>
            <h2> {title} </h2>
            <p>{body} </p>
            <div>
                <button className="bg-green-800 px-4 py-2 rounded cursor-pointer"> Edit </button>
                <button className="bg-red-800 px-4 py-2 rounded cursor-pointer"> Delete </button>
            </div>

        </div>
    )
}