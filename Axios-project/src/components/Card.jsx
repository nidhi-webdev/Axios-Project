import React from 'react'

const Card = ({ movieData }) => {
    const { Poster, Title, Type, Year, imdbID } = movieData

    return (
        <div className='flex flex-col justify-center items-center min-'>
            <img src={Poster} alt={imdbID} />
            <div>
                <h1> {Title} </h1>
                <p> Type: {Type} </p>
                <p> Year: {Year} </p>
            </div>
        </div>
    )
}

export default Card
