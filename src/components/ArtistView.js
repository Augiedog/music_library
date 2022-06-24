import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    const albums = artistData.filter(data => data.collectionType === "Album")

    const display = albums.map((album) => {
        return (
            <div key={album.collectionId}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    useEffect(() => {
        const API_URL = `http://192.168.0.29:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
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

    return (
        <>
            {navButtons()}
            <h2>{id}</h2>
            <p>Here are the albums, by the artist</p>
            {display}
        </>
    )
}
export default ArtistView