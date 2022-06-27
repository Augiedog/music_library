import { useContext } from "react"
import GalleryItem from "./GalleryItem"
import { DataContext } from "../DataContext"


function Gallery() {
    const data = useContext(DataContext)
    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div className="gallery"> 
            {display}
        </div>
    )
}
export default Gallery