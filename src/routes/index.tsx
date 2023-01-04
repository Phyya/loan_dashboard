import { Routes, Route, Navigate } from "react-router-dom";
import AdminAccess from "../layout/AdminAccess/AdminAccess";
import ExtraPage from "../pages/ExtraPage/ExtraPage";
import Login from "../pages/Login/Login";
import UsersDetails from "../pages/Users/UserDetails/UserDetails";
import Users from "../pages/Users/Users";

const MainRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AdminAccess />}>
        <Route path="" element={<Navigate replace to="/users" />} />
        <Route path="dashboard" element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="user_details" element={<UsersDetails />} />
        <Route path="*" element={<ExtraPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
