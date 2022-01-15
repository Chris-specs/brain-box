import { useState } from 'react';
import Link from 'next/link';
import useAuth from 'hooks/useAuth';

//Components
import Image from 'next/image';
import Button from './shared/Button';
import Input from './shared/Input';
import Loader from './shared/Loader';
import Logo from '../../public/assets/logo.png';

const LoginForm = ({}) => {
    const { authRequest, loading, error } = useAuth();

    const initialState = {
        email: '',
        password: '',
    };

    const [form, setForm] = useState(initialState);

    const submitForm = (e) => {
        e.preventDefault();
        authRequest(form);
    };

    return (
        <>
            <div className='w-full flex flex-col gap-10'>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-20 h-20 relative'>
                        <Image src={Logo} alt='Logo' layout='fill' />
                    </div>
                </div>
                <form onSubmit={submitForm} className='flex flex-col gap-6'>
                    <fieldset className='flex flex-col'>
                        <label className='text-sm'>Email</label>
                        <Input
                            type='email'
                            placeholder='email@todobox.com'
                            onChange={(e) =>
                                setForm(
                                    (form = { ...form, email: e.target.value })
                                )
                            }
                        />
                    </fieldset>
                    <fieldset className='flex flex-col'>
                        <label className='text-sm'>Password</label>
                        <Input
                            type='password'
                            placeholder=''
                            onChange={(e) =>
                                setForm(
                                    (form = {
                                        ...form,
                                        password: e.target.value,
                                    })
                                )
                            }
                        />
                    </fieldset>
                    {error && (
                        <p className='h-7 flex justify-center items-center bg-red-400 bg-opacity-30 text-xs text-red-400 rounded-md'>
                            User or password invalid
                        </p>
                    )}
                    <div className='w-full h-11'>
                        <Button disabled={loading}>
                            {loading ? <Loader /> : 'Login'}
                        </Button>
                    </div>
                    <p className='text-sm text-gray-600 text-center'>
                        Not a member?{' '}
                        <Link href='/signup'>
                            <a className='text-slate-900 font-semibold'>
                                Sign up now
                            </a>
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
