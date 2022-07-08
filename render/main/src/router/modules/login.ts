import { RouteBase } from "./type";
import Login from "../../views/login";

const LoginRouter: RouteBase[] = [
  {
    path: '/login',
    component: Login,
    exact: true
  }
];

export default LoginRouter;