import React, { Suspense, useEffect, useState } from 'react'

// router
import { Route, Routes, Navigate } from 'react-router-dom'

// redux
import { useSelector } from 'react-redux'
import { commonData } from '../redux/slices/common'
import { themeData } from '../redux/slices/theme'

// antd
import { Spin } from 'antd'

// pages
import getPages from '../pages'

// components
import { Layout } from '../components'

// styles, assets
import GlobalStyles from '../styles'
import { ThemeProvider } from 'styled-components'

const Login = React.lazy(() => import('../pages/LoginPage'))

const Router = () => {
  const isLoadingGlobal: any = useSelector(commonData)?.isLoading
  const themeGlobal: any = useSelector(themeData)

  const [pages, setPages] = useState([])
  // pages will come from backend, we will need to pass new path and element location to BE when we make new page
  const retrieve = async () => {
    const data = await getPages()
    setPages(data)
  }
  useEffect(() => {
    retrieve()
  }, [])

  return (
    <ThemeProvider theme={themeGlobal}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Layout>
            <Routes>
              <Route path='/' element={<Navigate to='/dashboard' />} />
              <Route path='/login' element={<Login />} />
              {pages?.map((route: any) => {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={
                      <Suspense fallback={<Spin size='large' />}>
                        <Spin size='large' spinning={isLoadingGlobal}>
                          <route.element />
                        </Spin>
                      </Suspense>
                    }
                  />
                )
              })}
            </Routes>
          </Layout>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Router
