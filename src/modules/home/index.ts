import { HomeScreen } from './screens/Home';

export const homeRoutes = [
  {
    name: "Index",
    component: HomeScreen,
    options: {
      headerShown: false,
      title: "Home",
      iconSource: "~/assets/icons/home.svg"
    }
  }
];
