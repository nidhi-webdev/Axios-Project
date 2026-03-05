import { useEffect, useState } from "react"
import { getMovie } from '../services/GetServices'
import Card from "../components/Card"

export const Movie = () => {
    
    const [data, setData] = useState([])

    const getMovieData = async () => {
        try {
            const res = await getMovie()
            setData(res.data.Search)
        } catch (error) {
            console.log("Error message:", error);
            console.log("Error Status:", error.response.status);
            console.log("Error Data:", error.response.data);
        }
    }


    useEffect(() => {
        getMovieData()
    }, [])


    return (
        <div>
            <ul className="list-none">
                <li className="grid grid-cols-4">
                    {data.map((curelem) => {
                        return <Card key={curelem.imdbID} movieData={curelem} />
                    })}
                </li>
            </ul>

        </div>
    )
}