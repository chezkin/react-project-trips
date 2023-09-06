import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { NewTripData, postNewTripsAPI } from '../../apis/funcAPI';


import './NewTripStyle.css'

type Props = {};



interface NewTripForm {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string;
}

interface TripResponse extends NewTripData {
  id: string;
}

const NewTripForm: React.FC<Props> = () => {
  const [success, setSuccess] = useState<TripResponse | null>(null);
  const [fail, setFail] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<NewTripForm>();

  const onSubmit: SubmitHandler<NewTripForm> = (data) => {
    
    const activitiesArray = data.activities.split(',').map(activity => activity.trim());
    // יצירת אובייקט חדש עם הנתונים המעודכנים
    const newData: NewTripData = {
      ...data,
      activities: activitiesArray,
    };
    console.log(newData);
    postNewTripsAPI(newData)
      .then((res) => { console.log(res); setSuccess(res); })
      .catch((err) => setFail(err.message || "An error occurred"));
  };

  return (
    <>
      <form id='newTrip' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Trip Name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}

        <input type="text" placeholder="Destination" {...register('destination', { required: true })} />
        {errors.destination && <span>This field is required</span>}

        <input type="date" placeholder="Start Date" {...register('startDate', { required: true })} />
        {errors.startDate && <span>This field is required</span>}

        <input type="date" placeholder="End Date" {...register('endDate', { required: true })} />
        {errors.endDate && <span>This field is required</span>}

        <textarea placeholder="Description" {...register('description', { required: true })} />
        {errors.description && <span>This field is required</span>}

        <input type="number" placeholder="Price" {...register('price', { required: true })} />
        {errors.price && <span>This field is required</span>}

        <input type="text" placeholder="Image Name" {...register('image', { required: true })} />
        {errors.image && <span>This field is required</span>}

        <input type="text" placeholder="Activities (separated by commas)" {...register('activities', { required: true })} />
        {errors.activities && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>
      {success ? <p>{success.image ? 'trip dreate successful' : 'trip dreate: check your form'}</p> : null}
      {fail ? <p>{fail}</p> : null}
    </>
  );
};

export default NewTripForm;



