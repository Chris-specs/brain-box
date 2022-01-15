import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from 'services';

const useAuth = () => {
    const router = useRouter();

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const authData = () => {
            setIsAuth(localStorage.getItem('token') !== null ? true : false);
            setUser(JSON.parse(localStorage.getItem('user')));
        };
        authData();
        return () => {};
    }, []);

    const authRequest = async (form) => {
        try {
            setLoading(true);
            const response = await auth(form);
            localStorage.setItem('user', JSON.stringify(response.data.data));
            localStorage.setItem('token', JSON.stringify(response.data.token));
            router.push('/brain');
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/');
    };

    return { user, isAuth, authRequest, logOut, loading, error };
};

export default useAuth;
