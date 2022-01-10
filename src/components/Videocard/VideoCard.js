import './VideoCard.css'
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@mui/icons-material'
import { forwardRef } from 'react'

const baseURL = "https://image.tmdb.org//t/p/original"

const VideoCard = forwardRef(({ movie }, ref) => {
    console.log(movie)
    return (
        <div ref={ref} className='VideoCard'>
            <img src={`${baseURL}${movie.backdrop_path || movie.poster_path}`} alt='' />
            <TextTruncate line={1} element='p' truncateText='...' text={movie.overview}/>
            <h1>{movie.title || movie.original_name}</h1>
            <p className='VideoCard_Stats'>
                {movie.media_type && `${movie.media_type} • `}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpSharp /> {movie.vote_count}
            </p>
        </div>
    )
})

export default VideoCard
