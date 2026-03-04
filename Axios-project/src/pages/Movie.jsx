import { useEffect } from "react"
import axios from 'axios'

export const Movie = () => {
    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"

    const getMovieData = async () => {
        try {
            const res = await axios.get(API)
            console.log("This is from Axios File", res)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getMovieData()
    }, [])


    return <h1> Movie </h1>
}