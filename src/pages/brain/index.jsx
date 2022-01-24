import Head from 'next/head';
import Idea from 'components/Idea';
import useTask from 'hooks/useTask';
import { useEffect } from 'react';
import { InnerContainer } from 'components/layout';

const Brain = () => {
    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks();
        return () => {};
    }, []);

    return (
        <>
            <Head>
                <title>Brain</title>
                <meta name='description' content='Look your ideas' />
            </Head>
            <section className='flex justify-center dark:bg-black'>
                <InnerContainer>
                        <ul className='w-full grid grid-cols-2 xl:grid-cols-3 gap-4 py-4'>
                            {tasks.map((task, i) => (
                                <Idea key={i} task={task} />
                            ))}
                        </ul>
                </InnerContainer>
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
