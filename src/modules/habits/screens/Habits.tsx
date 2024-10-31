import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading, Avatar } from '@/components/ui/atoms';
import { useHabitsController } from '../controllers/habits.controller';


interface HabitsScreenProps {
    route: RouteProp<MainStackParamList, 'Habits'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Habits'>
};

export const HabitsScreen: React.FC<HabitsScreenProps> = ({
    route,
    navigation
}) => {
    const controller = useHabitsController({ route, navigation });

    return (
        <Container>
            <Heading
                content="Habits"
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


