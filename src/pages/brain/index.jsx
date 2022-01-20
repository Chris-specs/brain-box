import Head from 'next/head';
import Idea from 'components/Idea';
import useTask from 'hooks/useTask';
import { useEffect } from 'react';

const Brain = () => {
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
            <section className='flex justify-center dark:bg-black'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <ul className='w-full flex flex-wrap gap-4 py-4'>
                        {tasks.map((task, i) => (
                            <Idea key={i} task={task} />
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
