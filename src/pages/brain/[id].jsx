import { InnerContainer } from 'components/layout';
import useTask from 'hooks/useTask';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { IoTrashBinOutline, IoEllipsisVerticalSharp } from 'react-icons/io5';

const Idea = () => {
    const { getTask, updateTask, deleteTask, task, error } = useTask();
    const router = useRouter();

    const [show, setShow] = useState(false);

    const name = useRef(null);
    const content = useRef(null);

    useEffect(() => {
        getTask(window.location.pathname.split('/brain/')[1]);
        router.beforePopState(() => {
            const data = {};

            if (
                name.current.defaultValue !== name.current.value ||
                content.current.defaultValue !== content.current.value
            ) {
                name.current.defaultValue !== name.current.value
                    ? (data.name = name.current.value)
                    : null;
                content.current.defaultValue !== content.current.value
                    ? (data.content = content.current.value)
                    : null;
                const saveIdea = async () => {
                    await updateTask(router.asPath.split('/brain/')[1], data);
                    router.replace('/brain');
                };
                saveIdea();
            } else {
                return true;
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
            <section className='flex justify-center dark:bg-black'>
                <InnerContainer>
                    <div className='w-full h-[calc(100vh-7rem)]'>
                        <input
                            className='w-full dark:bg-black dark:text-white text-lg font-medium px-0 border-0 focus:ring-0'
                            type='text'
                            defaultValue={task.name}
                            ref={name}
                        />
                        <textarea
                            className='w-full h-[calc(100%-2rem)] dark:bg-black dark:text-white px-0 border-0 focus:ring-0 resize-none scrollbar-hidden'
                            type='text'
                            defaultValue={task.content}
                            ref={content}
                        />
                    </div>
                </InnerContainer>

                <div
                    className={`${ show ? 'opacity-100 z-40' : 'opacity-0 -z-50' } w-screen h-screen bg-black/60 fixed top-0 transition-opacity duration-300`}
                    onClick={() => setShow(!show)}
                ></div>
                <div className={`${ show ? 'translate-y-0' : 'translate-y-52'} w-full bg-gray-brand fixed z-50 bottom-0 transition-transform duration-300`}>
                    <button
                        className='w-full flex items-center gap-4 text-gray-700 dark:text-white/70 text-sm rounded-l p-4'
                        onClick={() => deleteTaskNow()}
                    >
                        <IoTrashBinOutline className='text-xl' /> Delete
                    </button>
                </div>

                <div className='w-full h-10 flex justify-between items-center fixed bg-white dark:bg-black text-gray-900 dark:text-white bottom-0 z-10 px-6 overflow-hidden'>
                    <div>
                        <IoTrashBinOutline className='text-transparent' />
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
