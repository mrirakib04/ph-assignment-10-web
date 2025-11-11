import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "../App";
import Home from "../Layout/Main/Static/Home/Home";
import Profile from "../Layout/Main/Private/Profile/Profile";
import Challenges from "../Layout/Main/Static/Challenges/Challenges";
import ChallengeDetails from "../Layout/Main/Static/ChallengeDetails/ChallengeDetails";
import ErrorPage from "./ErrorPage";
import AddChallenge from "../Layout/Main/Private/AddChallenge/AddChallenge";
import JoinChallenge from "../Layout/Main/Private/JoinChallenge/JoinChallenge";
import MyActivities from "../Layout/Main/Private/MyActivities/MyActivities";
import MyActivitiesDetails from "../Layout/Main/Private/MyActivitiesDetails/MyActivitiesDetails";
import Forgot from "../Layout/Auth/Forgot";
import Register from "../Layout/Auth/Register";
import Login from "../Layout/Auth/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          {/* Public Routes */}
          <Route index element={<Home></Home>}></Route>
          <Route path="/challenges" element={<Challenges></Challenges>}></Route>
          <Route
            path="/challenges/:id"
            element={<ChallengeDetails></ChallengeDetails>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/forgot" element={<Forgot></Forgot>}></Route>
          {/* Private Routes */}
          <Route
            path="/add-challenge"
            element={<AddChallenge></AddChallenge>}
          ></Route>
          <Route
            path="/join-challenges/:id"
            element={<JoinChallenge></JoinChallenge>}
          ></Route>
          <Route
            path="/my-activities"
            element={<MyActivities></MyActivities>}
          ></Route>
          <Route
            path="/my-activities/:id"
            element={<MyActivitiesDetails></MyActivitiesDetails>}
          ></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
