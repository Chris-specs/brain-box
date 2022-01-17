import { InnerContainer } from 'components/layout';
import useTask from 'hooks/useTask';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { createTask } from 'services/task';

const Idea = () => {
    const { newTask } = useTask();
    const router = useRouter();

    const name = useRef(null);
    const content = useRef(null);

    useEffect(() => {
        router.beforePopState(() => {
            const data = {
                name: name.current.value,
                content: content.current.value,
            };

            // name.current.value !== '' && newTask(data);

            if (name.current.value !== '') {

                const save = async () => {
                    await newTask(data)
                    router.replace('/brain');
                }
                save()
            } else {
                return true
            }
        });
        return () => {};
    });

    return (
        <>
            <section className='flex justify-center'>
                <InnerContainer>
                    <div className='w-full h-[calc(100vh-7rem)]'>
                        <input
                            className='w-full text-lg font-medium px-0 border-0 focus:ring-0'
                            type='text'
                            placeholder='Idea'
                            ref={name}
                        />
                        <textarea
                            className='w-full h-[calc(100%-2rem)] px-0 border-0 focus:ring-0'
                            placeholder='Content...'
                            type='text'
                            ref={content}
                        />
                    </div>
                </InnerContainer>
                <div className='w-full h-10 flex justify-center items-center fixed bottom-0 z-10 overflow-hidden'>
                    <h1 className='text-xs text-center'>New idea</h1>
                </div>
            </section>
        </>
    );
};

export default Idea;
