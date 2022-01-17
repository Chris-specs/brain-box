import Head from 'next/head';
import Task from 'components/Task';
import useAuth from 'hooks/useAuth';
import useTask from 'hooks/useTask';
import Button from 'components/shared/Button';
import { useEffect } from 'react';

const Brain = () => {
    const { user } = useAuth();
    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks()
        return () => {}
    }, [])

    return (
        <>
            <Head>
                <title>Brain</title>
                <meta name='description' content='Look your ideas' />
            </Head>
            <section className='flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <h1>Brain {user.name}</h1>
                    <ul className='w-full flex flex-wrap gap-4'>
                        {tasks.map((task, i) => (
                            <Task key={i} task={task} />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Brain;

export async function getStaticProps() {
    return {
        props: {
            protected: true,
        },
    };
}
