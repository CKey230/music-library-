import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState ([])

    return ( 
        <div>
            <h2>The Id passed was: {id} </h2>
            <p>Album Data goes Here!</p>
        </div>
    )
}

export default AlbumView