import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { createCustomTabNavigator } from '@/navigators/TabNav';
import { counterModule } from "@/modules/counters";
import { homeRoutes } from '../modules/home';
import { authModule } from "@/modules/auth";
import { AuthContext } from '@/modules/auth/contexts/auth';
import { ApplicationSettings } from "@nativescript/core";

const StackNavigator = stackNavigatorFactory();
const TabNavigator = createCustomTabNavigator();

const userModules = [
    ...homeRoutes,
    ...counterModule
];

const HomeTabNavigator = () => (
    <TabNavigator.Navigator
        initialRouteName="Home"
        androidTabsPosition="bottom"
        screenOptions={{
            headerShown: false,
        }}
    >
        {userModules.map((_module, index) => (
            <TabNavigator.Screen
                key={index}
                {..._module}
            />
        ))}
    </TabNavigator.Navigator>
)

interface AuthState {
    user: any;
    session: any;
    isLoading: boolean;
    register: (data: any) => void;
    login: (data: any) => void;
    logout: () => void;
}

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => {
    const initialState: AuthState = {
        user: null,
        session: null,
        isLoading: false,
        register: () => {},
        login: () => {},
        logout: () => {}
    };

    const reducer = (state: AuthState, action: any) => {
        switch (action.type) {
            case 'RESTORE':
                console.log('Restoring user:', action.user);
                return {
                    ...state,
                    user: action.user,
                    session: action.session
                };
            case 'REGISTER':
                return {
                    ...state,
                    user: action.user,
                    session: action.session
                };
            case 'LOGIN':
                return {
                    ...state,
                    user: action.user,
                    session: action.session
                };
            case 'LOGOUT':
                return {
                    ...state,
                    user: null,
                    session: null
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        const auth = ApplicationSettings.getString("auth");

        if (auth) {
          const { user, session } = JSON.parse(auth);
          dispatch({ type: 'RESTORE', user, session });
        }
    }, []);

    const authContext = React.useMemo(() => ({
        user: state.user,
        session: state.session,
        isLoading: state.isLoading,
        register: async (data: any) => {
            dispatch({ type: 'REGISTER', user: data.user, session: data.session });
        },
        login: async (data: any) => {
            dispatch({ type: 'LOGIN', user: data.user, session: data.session });
        },
        logout: async () => {
            dispatch({ type: 'LOGOUT' });
        }
    }), [state]);

    return (
        <AuthContext.Provider value={authContext}>
            <BaseNavigationContainer>
                <StackNavigator.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    {state.user == null ?
                        authModule.map((_module, index) => (
                            <StackNavigator.Screen
                                key={index}
                                {..._module}
                            />
                        )) : (
                        <StackNavigator.Screen
                            name="Home"
                            component={HomeTabNavigator}
                        />
                    )}
                </StackNavigator.Navigator>
            </BaseNavigationContainer>
        </AuthContext.Provider>
    )
};
