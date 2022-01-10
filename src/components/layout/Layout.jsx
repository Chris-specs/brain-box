import Button from 'components/shared/Button';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { IoFlashOutline, IoLogOutOutline } from 'react-icons/io5';
import { InnerContainer } from '.';

const Layout = ({ children }) => {
    const router = useRouter();
    const { isAuth, logOut } = useAuth();

    return (
        <>
            <header>
                <InnerContainer>
                    <div className='h-16 flex justify-between items-center'>
                        <h1>Header</h1>
                        {isAuth && (
                            <div className='w-12 h-10'>
                                <Button onClick={() => logOut()}>
                                    <IoLogOutOutline className='text-lg' />
                                </Button>
                            </div>
                        )}
                    </div>
                </InnerContainer>
            </header>
            <main className='relative'>{children}</main>
            <footer>
                {router.pathname === '/tasks' && (
                    <div className='w-14 h-14 fixed bottom-10 right-10 z-10 rounded-2xl overflow-hidden'>
                        <Button>
                            <IoFlashOutline className='text-2xl' />
                        </Button>
                    </div>
                )}
            </footer>
        </>
    );
};

export default Layout;
