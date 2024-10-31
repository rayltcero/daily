import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading, Avatar } from '@/components/ui/atoms';
import { useExploreController } from '../controllers/explore.controller';


interface ExploreScreenProps {
    route: RouteProp<MainStackParamList, 'Index'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Index'>
};

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
    route,
    navigation
}) => {
    const controller = useExploreController({ route, navigation });

    return (
        <Container>
            <Heading
                content="Explore"
                weight="medium"
                level={1}
                className="mt-0 mb-4 text-black"
            />
            <Avatar
                size="md"
                src="https://avatar.iran.liara.run/public/21"

            />
        </Container>
    );
}


