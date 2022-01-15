import { Layout } from 'components/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [user, setUser] = useState(null)

  
  useEffect(() => {
      const getAuthStatus = () => {
        const token = localStorage.getItem('token') !== null ? true : false
        setUser(localStorage.getItem('user') !== null ? true : false)
        !token && router.pathname !== '/' 
        ? router.replace('/')
        : token && router.pathname === '/' && router.replace('/brain')
        pageProps.statusCode === 404 && router.replace('/')
      }
      getAuthStatus()
    return () => {}
  })
  
  if ( pageProps.protected && !user || router.pathname === '/' && user) {
    return null
  }

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
