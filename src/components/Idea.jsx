import Link from 'next/link';

const Idea = ({ task }) => {

    const { _id, name, content } = task

    return (
        <>
            <li className='w-[calc(50%-0.5rem)] h-40 border border-gray-300 dark:border-white/50 text-gray-900 dark:text-white rounded-lg overflow-hidden'>
                <Link href={`/brain/${_id}`}>
                    <a className='w-full h-full flex flex-col p-3 overflow-hidden'>
                        <span className='text-sm font-medium mb-2'>{name}</span>
                        <span className='text-xs overflow-hidden'>{content}</span>
                    </a>
                </Link>
            </li>
        </>
    );
};

export default Idea;
