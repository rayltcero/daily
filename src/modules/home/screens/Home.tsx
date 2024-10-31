import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading, Avatar } from '@/components/ui/atoms';
import { Layout } from '@/components/ui/molecules';
import { useHomeController } from '../controllers/home.controller';


interface HomeScreenProps {
    route: RouteProp<MainStackParamList, 'Index'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Index'>
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
    route,
    navigation
}) => {
    const { user, session } = useHomeController({ route, navigation });

    return (
        <Container>
            <Heading
                content="Home"
                weight="medium"
                level={1}
                className="mt-0 mb-4 text-black"
            />
            <Avatar
                size="md"
                src="https://avatar.iran.liara.run/public/21"

            />
            <Heading
                content={`Good to see you! @${user?.username}`}
                weight="bold"
                level={5}
                className="text-black text-base"
            />
        </Container>
    );
}


