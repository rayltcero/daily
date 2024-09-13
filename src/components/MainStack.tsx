import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { createCustomTabNavigator } from '@/navigators/TabNav';
import { counterModule } from "@/modules/counters";
import { authModule } from "@/modules/auth";

const isLogged = false;
const StackNavigator = stackNavigatorFactory();
const TabNavigator = createCustomTabNavigator();

const userModules = [
    ...counterModule
];

const HomeTabNavigator = () => (
    <TabNavigator.Navigator
        initialRouteName="counter.index"
        androidTabsPosition="bottom"
        screenOptions={{
            headerStyle: {
                backgroundColor: "white",
            },
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

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            screenOptions={{ headerShown: false }}
        >
            {!isLogged ?
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
);
