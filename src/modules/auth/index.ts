import { LoginScreen } from "./screens/Login";
import { RegisterScreen } from "./screens/Register";

export const authModule = [
  {
    name: "Login",
    component: LoginScreen,
    options: {
      headerShown: false,
    }
  },
  {
    name: "Register",
    component: RegisterScreen,
    options: {
      headerShown: false,
    }
  }
];
