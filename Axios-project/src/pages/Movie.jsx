import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "../components/Card"

export const Movie = () => {
    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    const [data, setData] = useState([])

    const getMovieData = async () => {
        try {
            const res = await axios.get(API)
            setData(res.data.Search)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getMovieData()
    }, [])


    return (
        <div>
            <ul className="list-none">
                <li>
                    {data.map((curelem) => {
                        return <Card key={curelem.imdbID} movieData={curelem}  />
                    } )}
                </li>
            </ul>
            
        </div>
    )
}