import { InnerContainer } from 'components/layout';
import useTask from 'hooks/useTask';
import { useEffect, useState } from 'react';

const Task = () => {
    const { getTask, task } = useTask();

    const initialState = {
        name: task.name,
        content: task.content,
    };

    const [taskUpdate, setTaskUpdate] = useState(initialState);

    useEffect(() => {
        getTask(window.location.pathname.split('/tasks/')[1]);
        return () => {};
    }, []);

    return (
        <>
            <InnerContainer>
                <div className='w-full h-[calc(100vh-8rem)]'>
                    <input
                        className='w-full text-lg font-medium px-0 border-0 focus:ring-0'
                        type='text'
                        defaultValue={task.name}
                        onChange={(e) =>
                            setTaskUpdate(
                                (taskUpdate = {
                                    ...taskUpdate,
                                    name: e.target.value,
                                })
                            )
                        }
                    />
                    <textarea
                        className='w-full h-full px-0 border-0 focus:ring-0'
                        type='text'
                        defaultValue={task.content}
                        onChange={(e) =>
                            setTaskUpdate(
                                (taskUpdate = {
                                    ...taskUpdate,
                                    content: e.target.value,
                                })
                            )
                        }
                    />
                </div>
                <div className='w-14 h-14 fixed bottom-10 right-10 z-10 rounded-2xl overflow-hidden'>
                        
                </div>
            </InnerContainer>
        </>
    );
};

export default Task;

// export async function getStaticProps() {
//     return {
//         props: {
//             protected: true,
//         },
//     };
// }
