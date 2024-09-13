import React from 'react';
import { RouteProp } from '@react-navigation/core'
import { FrameNavigationProp } from 'react-nativescript-navigation'
import { MainStackParamList } from '@/NavigationParamList';
import { Container, Heading } from '@/components/ui/atoms';
import { Layout } from '@/components/ui/molecules';
import { RegisterForm } from '../components/molecules';

interface RegisterScreenProps {
    route: RouteProp<MainStackParamList, 'Register'>,
    navigation: FrameNavigationProp<MainStackParamList, 'Register'>
};

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
    route,
    navigation
}) => {

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
                        className='mt-16'
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
                            onSubmit={() => console.log('click')}
                            className='mt-20'
                        />
                    </gridLayout>
                </Container>
            </Layout.mainContent>
            <Layout.bottomContent>
            <label
                className="text-center font-normal font-serif mb-8 text-black text-base"
                onTap={() => navigation.navigate('Login')}
            >
                    <formattedString>
                        <span text="Don't have an account? " />
                        <span
                            textDecoration='underline'
                            text="Sign Up"
                            className='text-accent'
                        />
                    </formattedString>
                </label>
            </Layout.bottomContent>
        </Layout>
    );
};
