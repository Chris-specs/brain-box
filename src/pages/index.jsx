import Head from 'next/head';
import Image from 'next/image';

// Components
import LoginForm from 'components/LoginForm';

const Login = () => {
    return (
        <>
            <Head>
                <title>Brain Box</title>
                <meta name='description' content='Sign in to start' />
            </Head>
            <section className='flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='h-screen flex justify-center items-center'>
                        <LoginForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

export async function getStaticProps() {
    return {
        props: {
            protected: false
        }
    }
}
