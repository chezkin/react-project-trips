import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { deleteTripAPIbyId } from '../apis/funcAPI';

export type Trip = {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}

type Props = {
    data: Trip
}



const CardTrip = (props: Props) => {
    
    return (
        <div style={{ margin: '6px', border: '2px solid red', borderRadius: '12px'}}  id={props.data.id} key={props.data.id} className='cardTrip'>
            <h2>{props.data.name}</h2>
            <div className='dateCradTrip'>
                <p>start date: {props.data.startDate}</p>
                <p>end date: {props.data.endDate}</p>
            </div>
            <img alt="" src={props.data.image} height='150px'/>
            <p>{props.data.destination}</p>
            <Link className="nav-link"  to={ROUTES.UPDATE+props.data.id}><button className="home-button">update trip</button></Link>
            <Link className="nav-link"  to={`/details/${props.data.id}`}><button className="home-button">more info to trip</button></Link>
            <button onClick={() => {deleteFunc(props.data.id)}} className="home-button">delete trip</button>
        </div>
    )
}

export default CardTrip

const deleteFunc = (id : string) => {
    if(confirm("Press a button!\nEither delete OK or Cancel.")) {
        deleteTripAPIbyId(id)
        .then(result => { console.log(result); location.reload(); })
        .catch(error => console.log('error', error));
        
    }
    
}

// 