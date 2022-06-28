import { useState, useEffect, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'


function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const data = useContext(DataContext)
    console.log(data)

    const albums = artistData.filter(data => data.collectionType === "Album")

    const display = albums.map((album) => {
        return (
            <div key={album.collectionId}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
                <p>Price {album.collectionPrice}</p>
                <p>Track count {album.trackCount}</p>
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