import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://192.168.0.29:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const navigate = useNavigate()

    const navButtons = () => {
        return (
            <>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </>
        )
    }
    const songs = albumData.filter(data => data.wrapperType === 'track')

    const display = songs.map(song => {
        return (
            <div key={song.trackId}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <>
            {navButtons()}
            <h2>{id}</h2>
            <p>Here are the songs, from the album.</p>
            {display}
        </>
    )
}
export default AlbumView