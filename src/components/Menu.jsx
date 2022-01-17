import useAuth from 'hooks/useAuth';
import { InnerContainer } from './layout';
import Button from './shared/Button';
import ThemeToggle from './ThemeToggle';

const Menu = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <div className='w-full h-[calc(100vh-4rem)] fixed bottom-0 z-20 bg-white dark:bg-black'>
                <InnerContainer>
                    <ul>
                        <li className='h-10 mt-10 capitalize text-center font-medium text-gray-900 dark:text-white'>
                            {user.name + ' ' + user.lastname}
                        </li>
                        <li className='h-10 mt-10'>
                            <Button onClick={() => logOut()}> Logout </Button>
                        </li>
                    </ul>
                    <div className='absolute bottom-10'>
                        <ThemeToggle />
                    </div>
                </InnerContainer>
            </div>
        </>
    );
};

export default Menu;
