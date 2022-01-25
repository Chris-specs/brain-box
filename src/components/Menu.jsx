import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { InnerContainer } from './layout';
import Button from './shared/Button';
import ThemeToggle from './ThemeToggle';

const Menu = () => {
    const { user, logOut } = useAuth();

    useEffect(() => {
        document.querySelector('main').classList.add('hidden');
        return () => {
            document.querySelector('main').classList.remove('hidden');
        };
    }, []);

    return (
        <>
            <div className='w-full h-[calc(100vh-4rem)] flex justify-center relative bottom-0 z-20 bg-white dark:bg-black'>
                <InnerContainer>
                    <div className='w-full flex justify-center items-center'>
                        <ul className='w-full max-w-sm'>
                            <li className='h-10 mt-10 capitalize text-center font-medium text-gray-900 dark:text-white'>
                                {user.name + ' ' + user.lastname}
                            </li>
                            <li className='h-10 mt-10'>
                                <Button onClick={() => logOut()}>
                                    {' '}
                                    Logout{' '}
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className='absolute bottom-10'>
                        <ThemeToggle />
                    </div>
                </InnerContainer>
            </div>
        </>
    );
};

export default Menu;
