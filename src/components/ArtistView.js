import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    const albums = artistData.filter(data => data.collectionType === "Album")

    const display = albums.map((album) => {
        return (
            <>
                <Link to={`/album/${album.collectionId}`} key={album.collectionId}>
                    <p>{album.collectionName}</p>
                </Link>
            </>
        )
    })

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
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
            <p>Here are the albums by the artist</p>
            {display}
        </>
    )
}
export default ArtistView