import GalleryItem from "./GalleryItem"
import { useContext } from "react"
import { DataContext } from "../Context/DataContext"

const Gallery = () => {
    const data = useContext(DataContext)
    const myData = data.result.read()

    const display = myData.map((item, i) => {
        return(
            <GalleryItem key={i} item={item} />
        )
    })
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery