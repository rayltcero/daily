import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading, Avatar } from '@/components/ui/atoms';
import { useAccountsController } from '../controllers/accounts.controller';


interface AccountsScreenProps {
    route: RouteProp<MainStackParamList, 'Accounts'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Accounts'>
};

export const AccountsScreen: React.FC<AccountsScreenProps> = ({
    route,
    navigation
}) => {
    const controller = useAccountsController({ route, navigation });

    return (
        <Container>
            <Heading
                content="Accounts"
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


