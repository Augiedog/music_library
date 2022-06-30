import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavButtons from './NavButtons'


function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
        

    const albums = artistData.filter(data => data.collectionType === "Album")
    console.log(artistData, albums)
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

    return (
        <>
            <NavButtons />
            <h2>{albums.artistName}</h2>
            <p>Here are the albums, by the artist</p>
            {display}
        </>
    )
}
export default ArtistView