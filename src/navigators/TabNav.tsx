import React, { useRef, useCallback, ReactNode } from 'react';
import {
    NavigationHelpersContext,
    useNavigationBuilder,
    createNavigatorFactory,
    TabRouter,
    TabActions,
} from '@react-navigation/core';
import { TabView, isAndroid, EventData } from '@nativescript/core';
import { NSVElement } from 'react-nativescript';
import { BottomNav } from '../components/ui/molecules/BottomNav';
import { Layout } from '@/components/ui/molecules';
import { Container } from '@/components/ui/atoms/Container';

interface TabNavProps {
    children: ReactNode;
    screenOptions: any;
    initialRouteName: string;
};

export const TabNav = ({ children, screenOptions, initialRouteName }: TabNavProps) => {
    const { state, navigation, descriptors } = useNavigationBuilder(TabRouter, {
        children,
        screenOptions,
        initialRouteName,
    });
    const tabViewRef = useRef<NSVElement<TabView>>(null);

    const onTabsLoaded = (args) => {
        const tabView = args.object as TabView;
        tabView.selectedIndex = state.index;

        if (tabView && isAndroid) {
            //check if we need to remove the default tab bar
            if (tabView.android && tabView.android.getChildAt(1)) {
                tabView.android.removeViewAt(1);
            }
        } else {
            tabView.ios.tabBar.hidden = true;
        }
    };

    const onSelectedIndexChange = useCallback((args) => {
        if (args.value == undefined) return;

        const index = args.value;
        const route = state.routes[index];

        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!event.defaultPrevented) {
            navigation.dispatch({
                ...TabActions.jumpTo(route.name),
                target: state.key,
            });
        }

    }, [navigation, state.key]);

    return (
        <NavigationHelpersContext.Provider value={navigation}>
            <Layout>
                <Layout.mainContent>
                    <tabView
                        ref={tabViewRef}
                        onLoaded={onTabsLoaded}
                        onSelectedIndexChange={onSelectedIndexChange}
                    >
                        {state.routes.map((route, index) => (
                            <tabViewItem
                                key={index}
                                title={route.name}
                                nodeRole='items'
                            >
                                {descriptors[route.key].render()}
                            </tabViewItem>
                        ))}
                    </tabView>
                </Layout.mainContent>
                <Layout.bottomContent>
                    <Container>
                        <BottomNav
                            items={state.routes.map((route) => ({
                                icon: descriptors[route.key].options.iconSource,
                                label: descriptors[route.key].options.title,
                                onTap: () => {
                                    const index = state.routes.findIndex((r) => r.key === route.key);

                                    if (index !== -1) {
                                        if (tabViewRef.current) {
                                            const tabView = tabViewRef.current?.nativeView as TabView;
                                            tabView.selectedIndex = index;
                                        }
                                    }
                                }
                        }))} />
                    </Container>
                </Layout.bottomContent>
            </Layout>
        </NavigationHelpersContext.Provider>
    );
}

export const createCustomTabNavigator = createNavigatorFactory(TabNav);
