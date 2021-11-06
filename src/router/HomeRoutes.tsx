import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_managemnt",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/Setting",
    exact: false,
    children: <Setting />
  }
];
