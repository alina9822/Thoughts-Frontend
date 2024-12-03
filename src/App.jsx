import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import ChatRoom from "./components/ChatRoom";
import AuthContent from "./pages/AuthContent";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/UserHome";
import RegisterPage from "./pages/RegisterPage";
import UserHome from "./pages/UserHome";
import TestPage from "./pages/TestPage";

import { UserContext } from "./contexts/UserContext";
import HomePage from "./pages/HomePage";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route index element={<LoginPage />}></Route>
        <Route path="/userHome" element={<UserHome />}></Route>
        {/* <Route path="/auth" element={<AuthContent />}></Route> */}
        <Route
          path="/user/*"
          element={user ? <ProfilePage /> : <Navigate to="/" />}
        ></Route>
        {/* <Route path="/profile" element={<ProfilePage />}></Route> */}
        <Route path="/chat" element={<ChatRoom />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/test" element={<TestPage/>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
