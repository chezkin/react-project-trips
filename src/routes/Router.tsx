import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home/Home";
import Trips from "../components/pages/Trips";
import UserLogin from "../components/pages/Login/UserLogin";
import CreatUserRegistration from "../components/pages/UserRegistration/UserRegistration";
import NewTrip from "../components/pages/NewTrip/NewTrip";
import ROUTES from "./routesModel";
import UpdateTripForm from "../components/pages/UpdateTrip/UpdateTripForm";
import CardTripDetail from "../components/pages/TripDetail";
const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} ></Route>
            <Route path={ROUTES.LOGIN} element={<UserLogin />} />
            <Route path={ROUTES.REGISTER} element={<CreatUserRegistration />} />
            <Route path={ROUTES.TRIPS} element={<Trips />} />
            <Route path={ROUTES.CREATE} element={<NewTrip />} />
            <Route path={ROUTES.DETAILS} element={<CardTripDetail />} />
            <Route path={ROUTES.UPDATE+':id'} element={<UpdateTripForm />} />
            <Route path={ROUTES.DELETE} element={<Trips />} />
            <Route path={ROUTES.DEFAULT} element={<h1>404 Not Found</h1>} />
        </Routes>
    );
};
export default Router;