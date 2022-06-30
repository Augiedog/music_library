import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavButtons from './NavButtons'

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

    const songs = albumData.filter(data => data.wrapperType === 'track')

    const display = songs.map(song => {
        return (
            <li key={song.trackId}>
                <p>{song.trackName}</p>
            </li>
        )
    })

    return (
        <>
            <NavButtons />
            <h2>{id}</h2>
            <p>Here are the songs, from the album.</p>
            <ol>{display}</ol>
        </>
    )
}
export default AlbumView