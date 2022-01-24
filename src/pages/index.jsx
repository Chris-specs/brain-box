import Head from 'next/head';
import Image from 'next/image';

// Components
import LoginForm from 'components/LoginForm';
import { InnerContainer } from 'components/layout';

const Login = () => {
    return (
        <>
            <Head>
                <title>Brain Box</title>
                <meta name='description' content='Sign in to start' />
            </Head>
            <section className='flex justify-center dark:bg-black'>
                <InnerContainer>
                        <div className='h-screen flex justify-center items-center'>
                            <div className='w-full max-w-sm flex justify-center items-center'>
                            <LoginForm />
                            </div>
                        </div>
                </InnerContainer>
            </section>
        </>
    );
};

export default Login;

export async function getStaticProps() {
    return {
        props: {
            protected: false,
        },
    };
}
