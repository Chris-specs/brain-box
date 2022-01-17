import { InnerContainer } from 'components/layout';
import useTask from 'hooks/useTask';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { IoTrashBin, IoEllipsisVerticalSharp } from 'react-icons/io5';

const Idea = () => {
    const { getTask, updateTask, deleteTask, task, error } = useTask();
    const router = useRouter();

    const [show, setShow] = useState(false);

    const name = useRef(null);
    const content = useRef(null);

    useEffect(() => {
        getTask(window.location.pathname.split('/brain/')[1]);
        router.beforePopState(() => {

            const data = {}

            if (
                name.current.defaultValue !== name.current.value ||
                content.current.defaultValue !== content.current.value
            ) {
                name.current.defaultValue !== name.current.value ? data.name = name.current.value : null
                content.current.defaultValue !== content.current.value ? data.content = content.current.value : null
                const saveIdea = async () => {
                    await updateTask(router.asPath.split('/brain/')[1], data )
                    router.replace('/brain');
                }
                saveIdea()
            } else {
                return true
            }
        });
        return () => {};
    }, []);

    error && router.replace('/');

    const date = new Date(task.updatedAt);
    const deleteTaskNow = async () => {
        await deleteTask(router.asPath.split('/brain/')[1]);
        router.replace('/brain');
    };

    return (
        <>
            <section className='flex justify-center'>
                <InnerContainer>
                    <div className='w-full h-[calc(100vh-7rem)]'>
                        <input
                            className='w-full text-lg font-medium px-0 border-0 focus:ring-0'
                            type='text'
                            defaultValue={task.name}
                            ref={name}
                        />
                        <textarea
                            className='w-full h-[calc(100%-2rem)] px-0 border-0 focus:ring-0 resize-none'
                            type='text'
                            defaultValue={task.content}
                            ref={content}
                        />
                    </div>
                </InnerContainer>
                {show && (
                    <button
                        className='w-40 h-10 flex items-center gap-2 text-gray-700 text-sm border border-r-0 border-gray-400 fixed bottom-10 right-0 px-2 rounded-l animate-fade-left'
                        onClick={() => deleteTaskNow()}
                    >
                        <IoTrashBin className='text-base text-red-400' /> Delete
                    </button>
                )}
                <div className='w-full h-10 flex justify-between items-center fixed text-gray-900 bottom-0 z-10 px-6 overflow-hidden'>
                    <div>
                        <IoTrashBin className='text-transparent' />
                    </div>
                    <h1 className='text-xs text-center'>
                        Last update:{' '}
                        {date.toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                        })}
                    </h1>
                    <button onClick={() => setShow(!show)}>
                        <IoEllipsisVerticalSharp />
                    </button>
                </div>
            </section>
        </>
    );
};

export default Idea;
