import { Routes as ReactRouter, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import { WebsiteLayout, RoomLayout } from "../layout";
import { GetStarted, Home, Profile, Room } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <ReactRouter>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/get-started"
            element={isAuthenticated ? <Navigate to="/" /> : <GetStarted />}
          />
        </Route>
        <Route
          path="/room"
          element={
            <ProtectedRoute>
              <RoomLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Room />} />
        </Route>
      </ReactRouter>
    </>
  );
};

export default Routes;
