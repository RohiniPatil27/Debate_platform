import { Outlet } from "react-router";

import { RoomHeader, RoomSidebar } from "../components";

const RoomLayout = () => {
  return (
    <>
      <main className="relative flex h-screen bg-gray-900">
        <RoomSidebar />
        <div className="w-[calc(100%_-_300px)]">
          <RoomHeader />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RoomLayout;
