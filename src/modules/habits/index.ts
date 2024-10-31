import { HabitsScreen } from './screens/Habits';

export const habitsRoutes = [
  {
    name: "Habits",
    component: HabitsScreen,
    options: {
      headerShown: false,
      title: "Habits",
      iconSource: "~/assets/icons/calendar.svg"
    }
  }
];
