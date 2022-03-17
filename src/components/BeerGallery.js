import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const BeerGallery = (props) => {
    
    const [beerList, setBeerList] = useState([])
    
    const [searchTerm, setSearchTerm] = useState('')

useEffect(()=>{
    axios.get("https://api.punkapi.com/v2/beers?per_page=80")
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setBeerList(res.data)
    })
        .catch((err)=>console.log(err))
},[])
    



    return (
        
        <div>
            <div className='searchContainer'>
                <form >
                <input type="search" placeholder='Beer Search...' id="beerSearch" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
                </form>
            </div>
    
            {beerList.filter((val)=>{
                if(searchTerm === ''){
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.tagline.toLowerCase().includes(searchTerm.toLowerCase()) || val.image_url.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((beer,index)=> {
        return (
            <div className='galleryContainer' key={beer.id}>
            <Link to={`/beers/${beer.id}`}>
                <img src={beer.image_url} alt='beer' className='beerImage'/>
                <p>{beer.name}</p>
            </Link>
            </div>
        )
    })}
        </div>
    )
}

export default BeerGallery