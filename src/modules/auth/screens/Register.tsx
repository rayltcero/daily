import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading } from '@/components/ui/atoms';
import { Layout } from '@/components/ui/molecules';
import { RegisterForm } from '../components/molecules';
import { useAuthController } from '../controllers/auth.controller';

interface RegisterScreenProps {
    route: RouteProp<MainStackParamList, 'Register'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Register'>
};

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
    route,
    navigation
}) => {
    const { register, isLoading } = useAuthController({ route, navigation });

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
                            content="Register"
                            weight="medium"
                            level={1}
                            col={0}
                            colSpan={6}
                            row={0}
                            className="my-0"
                        />
                        <Heading
                            content="Please Sign Up to continue"
                            weight="medium"
                            level={2}
                            col={0}
                            colSpan={9}
                            row={1}
                            className="text-base mt-0 text-slate-500"
                        />
                        <RegisterForm
                            col={1}
                            colSpan={13}
                            row={2}
                            onSubmit={register}
                            isLoading={isLoading}
                            className='mt-6'
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
                        text="Already have an account?"
                    />

                    <label
                        className=" mb-8 text-accent ml-1"
                        text="Login"
                        textDecoration='underline'
                        onTap={() => navigation.navigate('Login')}
                    />
                </flexboxLayout>
            </Layout.bottomContent>
        </Layout>
    );
};
