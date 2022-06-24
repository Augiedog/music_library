import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const songs = albumData.filter(data => data.wrapperType === 'track')

    const display = songs.map(song => {
        return (
            <>
                <p key={song.trackId}>{song.trackName}</p>
            </>
        )
    })

    return (
        <>
            <h2>{id}</h2>
            <p>Here are the songs, from the album.</p>
            {display}
        </>
    )
}
export default AlbumView