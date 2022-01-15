import Button from 'components/shared/Button';
import useAuth from 'hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoFlashOutline, IoLogOutOutline } from 'react-icons/io5';
import { InnerContainer } from '.';
import Logo from '../../../public/assets/logo.png';

const Layout = ({ children }) => {
    const router = useRouter();
    const { isAuth, logOut } = useAuth();

    return (
        <>
            <header className='flex justify-center'>
                <InnerContainer>
                    {isAuth && (
                        <div className='h-16 flex justify-between items-center'>
                            <div className='w-10 h-10 relative'>
                                <Image
                                    src={Logo}
                                    alt='Logo'
                                    layout='fill'
                                />
                            </div>
                            <div className='w-12 h-10'>
                                <Button onClick={() => logOut()}>
                                    <IoLogOutOutline className='text-lg' />
                                </Button>
                            </div>
                        </div>
                    )}
                </InnerContainer>
            </header>
            <main className='relative'>{children}</main>
            <footer className='flex justify-center'>
                {router.pathname === '/brain' && (
                    <div className='w-14 h-14 fixed bottom-10 right-10 z-10 rounded-2xl overflow-hidden'>
                        <Link href='/brain/new'>
                            <a className='w-full h-full flex justify-center items-center bg-gray-900 text-white'>
                                <IoFlashOutline className='text-2xl' />
                            </a>
                        </Link>
                    </div>
                )}
            </footer>
        </>
    );
};

export default Layout;
