import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const htmlClasses = document.documentElement.classList;

        localStorage.setItem('theme', enabled ? 'dark' : 'light');

        enabled ? htmlClasses.add('dark') : htmlClasses.remove('dark');
        return () => {};
    }, [enabled]);

    return (
        <>
            <button
                className='bg-gray-900 dark:bg-white relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75'
                role='switch'
                aria-checked={enabled}
                onClick={() => setEnabled(!enabled)}
            >
                <span className='absolute w-[1px] h-[1px] -m-[1px] overflow-hidden whitespace-nowrap'></span>
                <span
                    className={`${
                        enabled ? 'translate-x-9' : 'translate-x-0'
                    } pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white dark:bg-black shadow-lg transform ring-0 transition ease-in-out duration-200`}
                ></span>
            </button>
        </>
    );
};

export default ThemeToggle;
