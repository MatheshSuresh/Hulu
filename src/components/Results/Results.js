import axios from '../../helpers/axios'
import './Results.css'
import { useEffect, useState } from 'react'
import VideoCard from '../Videocard/VideoCard'
import FlipMove from 'react-flip-move'

const Results = ({ selectedOption }) => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(selectedOption)
            setmovies(request.data.results)
            return request
        }
        fetchData()
    }, [selectedOption])

    return (
        <div className='results'>
            <FlipMove>
                {
                    movies.map((movie)=>(
                        <VideoCard key={movie.id} movie={movie}/>
                    ))
                }
            </FlipMove>
        </div>
    )
}

export default Results
