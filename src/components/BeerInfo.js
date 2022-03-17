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
                setBeer(res.data[0])
            })
            .catch(err=>console.log(err))
    }, [id])



    return (
        <div>
        
            <div className='topContainer'>
                <img src={beer.image_url} alt="beer" className='beerImage'/>
                <div className='beerNameContainer'>
                    <p className='beerName'>{beer.name}</p>
                    <p>"{beer.tagline}"</p>
                </div>
            </div>
            <hr />
            <div className='middleContainer'>
                <div>
                    <h3>Description</h3>
                    <p>Description: {beer.description}</p>
                </div>
                <div>
                    <h3>Food Pairing</h3>
                    
                </div>
            </div>
            
        </div>
    )
}

export default BeerInfo