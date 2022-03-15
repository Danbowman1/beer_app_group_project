import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BeerInfo = () => {

    const {id} = useParams()

    const [beer, setBeer] = useState({})

    useEffect(()=> {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res=> {
                console.log(res)
                console.log(res.data)
                setBeer(res.data)
            })
            .catch(err=>console.log(err))
    }, [id])



    return (
        <div>
        {
            beer?
            <div>
            <p>Beer Name:{beer.name}</p>
            <p>Description: {beer.description}</p>
            </div>
            :null
        }
        </div>
    )
}

export default BeerInfo