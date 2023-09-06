import React from 'react';

import NavBarLink from '../../../routes/NavBarLink';
import ROUTES from '../../../routes/routesModel';

import Button from '@mui/joy/Button';

import './homePage.css'
import { Link } from 'react-router-dom';

interface Props {
}


export const Home: React.FC<Props> = () => {

  return (
    <>
    <div className="home-page">
      <h1>Home Page</h1>
      <div id='navs'>
     
      <Link className="nav-link" to={ROUTES.TRIPS}><Button  variant="plain" className="home-button ">View Trips</Button></Link>

      <Link className="nav-link" to={ROUTES.REGISTER}><Button  variant="plain" className="home-button">Register</Button></Link>
      
      <Link className="nav-link" to={ROUTES.LOGIN}><Button  variant="plain" className="home-button">Login</Button></Link>

      <Button  variant="plain" onClick={() => localStorage.setItem('myTokenTrip', '')} className="home-button logout nav-link">Logout</Button>

      </div>

    </div>
    <div   className='wellcome'>wellcome to my trips</div>
    </>
  );

};