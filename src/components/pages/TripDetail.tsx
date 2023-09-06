import React , {useEffect , useState}from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { getTripAPIbyId , deleteTripAPIbyId , } from '../apis/funcAPI';
import { useParams } from 'react-router-dom';

export interface Trip {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
  id: string;
}

type Props = {
}



const CardTripDetail = (props: Props) => {
  const { id } = useParams();
  console.log(id);
  
  const [data , setdata] = useState<Trip | null>(null)
  console.log(data);
  
  

  useEffect(() => {
    if (!id) return
    getTripAPIbyId(id)
    .then((response) => {console.log(response);
     setdata(response)})
    .catch((error) => alert(error))
  }, [])
    
    return (
      <>
      {data? <div style={{ margin: '6px', border: '2px solid red', borderRadius: '12px'}}  id={data!.id} key={data!.id} className='cardTripdetail'>
            <h2>{data!.name}</h2>
            <div className='dateCradTrip'>
                <p>start date: {data!.startDate}</p>
                <p>end date: {data!.endDate}</p>
            </div>
            <img alt="" src={data!.image} height='150px'/>
            <p>{data!.destination}</p>
            <Link className="nav-link"  to={ROUTES.UPDATE+data!.id}><button className="home-button">update trip</button></Link>
            <button onClick={() => {deleteFunc(data!.id)}} className="home-button">delete trip</button>
        </div> : null }
      </>
        
    )
}

export default CardTripDetail

const deleteFunc = (id : string) => {
    if(confirm("Press a button!\nEither delete OK or Cancel.")) {
        deleteTripAPIbyId(id)
        .then(result => { console.log(result); location.href='http://localhost:5173/trips'; })
        .catch(error => console.log('error', error));
        
    }
    
}