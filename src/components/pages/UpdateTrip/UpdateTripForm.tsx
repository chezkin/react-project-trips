import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { getTripAPIbyId , putTripsAPI} from '../../apis/funcAPI';

import './update.css'

type Props = {};

interface Trip {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
  id : string;
}

interface TripNotArray {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string;
}

const UpdateTripForm: React.FC<Props> = () => {
  const { id } = useParams();
  const form = useForm<TripNotArray >()
  const [data, setData] = useState<Trip | null>(null)

  useEffect(() => {
    if (!id) {return}
    getTripAPIbyId(id)
      .then((response) => { setData(response);})
      .catch((error) => alert(error))
  }, [])

  useEffect(() => {
    if (data) { 
      const newData = {
        ...data,
        activities: data.activities.join(','),
      };
      form.reset(newData)
    }
   
  }, [data])


  const { register, handleSubmit, formState: { errors } } = form
  

  const onSubmit: SubmitHandler<TripNotArray> = (data1) => {
    const arry: string[] = [];
    const activitiesArray  = data1.activities.split(',').forEach(activity => arry.push(activity));
    const newData = {
      ...data1,
      activities: arry,
      id: data!.id
    };
    putTripsAPI(newData)
      .then((response) =>  console.log(response))
      .catch((error) => console.error(error))
  };

  return (
    <>
      <form id='newTrip' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Trip Name" {...register('name',)} />
        {errors.name && <span>This field is required</span>}


        <input type="text" placeholder="Destination" {...register('destination',)} />


        <input type="date" placeholder="Start Date" {...register('startDate',)} />


        <input type="date" placeholder="End Date" {...register('endDate',)} />


        <textarea placeholder="Description" {...register('description',)} />
        {errors.description && <span>This field is required</span>}

        <input type="number" placeholder="Price" {...register('price',)} />
        {errors.price && <span>This field is required</span>}

        <input type="text" placeholder="Image Name" {...register('image',)} />
        {errors.image && <span>This field is required</span>}

        <input type="text" placeholder="Activities (separated by commas)" {...register('activities', { required: true })} />
        {errors.activities && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};


export default UpdateTripForm