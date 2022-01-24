import Menu from 'components/Menu';
import useAuth from 'hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoFlashOutline, IoLogOutOutline } from 'react-icons/io5';
import { InnerContainer } from '.';
import Logo from '../../../public/assets/logo.png';

const Layout = ({ children }) => {
    const router = useRouter();
    const { isAuth } = useAuth();
    const [show, setShow] = useState(false);

    return (
        <>
            <header className='flex flex-col justify-center items-center bg-white dark:bg-black sticky top-0 z-40 overflow-y-scroll'>
                <InnerContainer>
                    {isAuth && (
                        <div className='h-16 flex justify-between items-center'>
                            <div className='w-10 h-10 relative'>
                                <Image src={Logo} alt='Logo' layout='fill' />
                            </div>
                            <div className='w-12 h-10 flex justify-center items-center'>
                                <button onClick={() => setShow(!show)}
                                    className='h-full'
                                >
                                    <div
                                        className={`before:block before:h-[1px] before:w-6 before:bg-gray-900 dark:before:bg-white before:transition-transform before:-translate-y-1 ${
                                            show &&
                                            'before:rotate-45 before:transition-transform before:translate-y-1 after:-rotate-45 after:transition-transform after:translate-y-0'
                                        } after:block after:h-[1px] after:w-6 after:bg-gray-900 dark:after:bg-white after:transition-transform after:translate-y-1`}
                                    ></div>
                                </button>
                            </div>
                        </div>
                    )}
                </InnerContainer>
                {show && <Menu />}
            </header>
            <main className='relative dark:bg-black'>{children}</main>
            <footer className='flex justify-center'>
                {router.pathname === '/brain' && (
                    <div className='w-14 h-14 fixed bottom-10 right-10 md:-translate-x-3 lg:-translate-x-12 xl:-translate-x-36 2xl:-translate-x-96 z-10 rounded-2xl overflow-hidden'>
                        <Link href='/brain/new'>
                            <a className='w-full h-full flex justify-center items-center bg-gray-900 dark:bg-white text-white dark:text-black'>
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
