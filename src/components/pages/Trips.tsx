import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'

import CardTrip from '../utils/CardTrip'

import { Trip, getTripsAPI } from '../apis/funcAPI'

type Props = {}

const Trips = (props: Props) => {
    const [data , setdata]  = useState<Trip[] >([])

    useEffect(() => { 
        getTripsAPI().then(trips =>
        setdata(trips))
        console.log('data louded');     
        
    }, []);

    
    return (
        <>
    <div id='navs'>

      <Link className="nav-link" to={ROUTES.HOME}><button className="home-button">Home</button></Link>

      <Link className="nav-link" to={ROUTES.CREATE}><button className="home-button">Create new trip</button></Link>

      </div>
      <div style={{display: 'flex' , flexWrap: 'wrap' , margin: '3px'}}>
      {data.map((trip) => { return(
            <CardTrip key={trip.id} data={trip}/>
        )})}
      </div> 
    </>
    
  )
}


export default Trips