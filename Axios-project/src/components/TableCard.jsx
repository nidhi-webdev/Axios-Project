export const TableCard = ({ data }) => {
    console.log("TableCard", data);
    const { body, id, title, } = data


    return (
        <div>
            <h1> {id} </h1>
            <h2> {title} </h2>
            <p>{body} </p>
        </div>
    )
}