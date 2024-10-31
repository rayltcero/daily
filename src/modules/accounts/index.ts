import { AccountsScreen } from './screens/Accounts';

export const accountsRoutes = [
  {
    name: "Accounts",
    component: AccountsScreen,
    options: {
      headerShown: false,
      title: "Accounts",
      iconSource: "~/assets/icons/card.svg"
    }
  }
];
