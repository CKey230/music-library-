import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState ([])
    const songDisplay = albumData.map(song => {
        return(
            <div key={song.trackId}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            const songs  = resData.results.filter(entry => entry.wrapperType === 'track')
            setArtistData(albums)
        }
        fetchData()
    }, [id])


    return ( 
        <div>
            <h2>The Id passed was: {id} </h2>
            <p>Album Data goes Here!</p>
        </div>
    )
}

export default AlbumView