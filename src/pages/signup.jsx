import Head from 'next/head';
import Image from 'next/image';

// Components
import SignupForm from 'components/SignupForm';
import { InnerContainer } from 'components/layout';

const SignUp = () => {
    return (
        <>
            <Head>
                <title>Sign up | Brain Box</title>
                <meta name='description' content='Sign up to start' />
            </Head>
            <section className='flex justify-center dark:bg-black'>
                <InnerContainer>
                        <div className='h-screen flex justify-center items-center'>
                            <div className='w-full max-w-sm flex justify-center items-center'>
                            <SignupForm />
                            </div>
                        </div>
                </InnerContainer>
            </section>
        </>
    );
};

export default SignUp;

export async function getStaticProps() {
    return {
        props: {
            protected: false,
        },
    };
}
