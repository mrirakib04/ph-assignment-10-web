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
import UpdateChallenge from "../Layout/Main/Private/UpdateChallenge/UpdateChallenge";
import IsLogin from "./Security/IsLogin";
import Main from "../Layout/Main/Main";
import Dashboard from "../Layout/Main/Dashboard/Dashboard";
import About from "../Layout/Main/Static/About/About";
import Career from "../Layout/Main/Static/Career/Career";
import Contact from "../Layout/Main/Static/Contact/Contact";
import Conditions from "../Layout/Main/Static/Conditions/Conditions";
import Policy from "../Layout/Main/Static/Policy/Policy";
import Mission from "../Layout/Main/Static/Mission/Mission";
import DashHome from "../Layout/Main/Dashboard/DashHome/DashHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/" element={<Main></Main>}>
            {/* Public Routes */}
            <Route index element={<Home></Home>}></Route>
            <Route
              path="/challenges"
              element={<Challenges></Challenges>}
            ></Route>
            <Route
              path="/challenges/:id"
              element={<ChallengeDetails></ChallengeDetails>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/forgot" element={<Forgot></Forgot>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/career" element={<Career></Career>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/mission" element={<Mission></Mission>}></Route>
            <Route
              path="/conditions"
              element={<Conditions></Conditions>}
            ></Route>
            <Route path="/policy" element={<Policy></Policy>}></Route>
            {/* private */}
            <Route
              path="/join-challenges/:id"
              element={
                <IsLogin>
                  <JoinChallenge></JoinChallenge>
                </IsLogin>
              }
            ></Route>
            {/* Public Routes */}
            <Route index element={<Home></Home>}></Route>
            <Route
              path="/challenges"
              element={<Challenges></Challenges>}
            ></Route>
            <Route
              path="/challenges/:id"
              element={<ChallengeDetails></ChallengeDetails>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/forgot" element={<Forgot></Forgot>}></Route>
          </Route>

          <Route
            path="/dashboard"
            element={
              <IsLogin>
                <Dashboard></Dashboard>
              </IsLogin>
            }
          >
            {/* Private Routes */}
            <Route path="/dashboard" element={<DashHome></DashHome>}></Route>
            <Route
              path="/dashboard/add-challenge"
              element={<AddChallenge></AddChallenge>}
            ></Route>
            <Route
              path="/dashboard/update-challenge/:id"
              element={<UpdateChallenge></UpdateChallenge>}
            ></Route>
            <Route
              path="/dashboard/my-activities"
              element={<MyActivities></MyActivities>}
            ></Route>
            <Route
              path="/dashboard/my-activities/:id"
              element={<MyActivitiesDetails></MyActivitiesDetails>}
            ></Route>
            <Route
              path="/dashboard/profile"
              element={<Profile></Profile>}
            ></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
