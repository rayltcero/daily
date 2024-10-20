import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading } from '@/components/ui/atoms';
import { Layout } from '@/components/ui/molecules';
import { LoginForm } from '../components/molecules';
import { useAuthController } from '../controllers/auth.controller';

interface LoginScreenProps {
    route: RouteProp<MainStackParamList, 'Login'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Login'>
};

export const LoginScreen: React.FC<LoginScreenProps> = ({
    route,
    navigation
}) => {
    const { login, isLoading } = useAuthController({ route, navigation });

    return (
        <Layout>
            <Layout.mainContent>
                <Container>
                    <svgView
                        src="~/assets/logo.svg"
                        stretch="aspectFit"
                        className="w-36 mt-8"
                    />
                    <gridLayout
                        rows="auto, auto, auto, auto"
                        columns='1*, 8, 1*, 8, 1*, 8, 1*, 8, 1*, 8, 1*, 8, 1*, 8, 1*'
                        className='mt-4'
                    >
                        <Heading
                            content="Login"
                            weight="medium"
                            level={1}
                            style={styles.heading}
                            className="my-0"
                        />
                        <Heading
                            content="Please Sign In to continue"
                            weight="medium"
                            level={2}
                            style={styles.subHeading}
                            className="text-base mt-0 text-slate-500"
                        />
                        <LoginForm
                            style={styles.form}
                            onSubmit={login}
                            isLoading={isLoading}
                            className='mt-20'
                        />
                    </gridLayout>
                </Container>
            </Layout.mainContent>
            <Layout.bottomContent>
            <flexboxLayout
                    className='text-center justify-center font-normal font-serif text-base'
                >
                    <label
                        className=" mb-8 text-black"
                        text="Don't have an account?"
                    />

                    <label
                        className=" mb-8 text-accent ml-1"
                        text="Sign Up"
                        textDecoration='underline'
                        onTap={() => navigation.navigate('Register')}
                    />
                </flexboxLayout>
            </Layout.bottomContent>
        </Layout>
    );
}

const styles = StyleSheet.create({
    heading: {
        col: 0,
        colSpan: 6,
        row: 0,
    },
    subHeading: {
        col: 0,
        colSpan: 9,
        row: 1,
    },
    form: {
        col: 1,
        colSpan: 13,
        row: 2
    }
});


