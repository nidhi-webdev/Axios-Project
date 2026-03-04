import { useEffect, useState } from "react"
import axios from 'axios'

export const Movie = () => {
    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    const [data, setData] = useState([])

    const getMovieData = async () => {
        try {
            const res = await axios.get(API)
            console.log("This is from Axios File", res)
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
            <ul>
                <li>
                    {data.map((curelem) => {
                        return <Card key={imdbID} curelem={curelem}  />
                    } )}
                </li>
            </ul>
            
        </div>
    )
}