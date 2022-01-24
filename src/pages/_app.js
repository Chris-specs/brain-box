import { Layout } from 'components/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { publicRoutes } from 'utils/routes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [user, setUser] = useState(null)

  
  useEffect(() => {
    
      if (localStorage.getItem('theme')) {
        localStorage.getItem('theme') === 'dark' && document.documentElement.classList.add('dark')
      } else {
        localStorage.setItem('theme', 'dark')
      }

      const getAuthStatus = () => {
        const token = localStorage.getItem('token') !== null ? true : false
        setUser(localStorage.getItem('user') !== null ? true : false)
        // console.log(!publicRoutes.includes(router.pathname));
        // !token && router.pathname !== '/'
        !token && !publicRoutes.includes(router.pathname)
        ? router.replace('/')
        : token && publicRoutes.includes(router.pathname) && router.replace('/brain')
        pageProps.statusCode === 404 && router.replace('/')
      }
      getAuthStatus()
    return () => {}
  })
  
  if ( pageProps.protected && !user || publicRoutes.includes(router.pathname) && user || pageProps.statusCode === 404 ) {
    return null
  }

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
