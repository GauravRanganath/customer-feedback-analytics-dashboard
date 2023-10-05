import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
        <div className="bg-gray-100">
          <Outlet />
        </div>
    </div>
  );
};

export default RootLayout;
