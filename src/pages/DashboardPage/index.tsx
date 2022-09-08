import React, { useEffect, useState } from 'react'
import Api from 'services/api'

import { useSelector, useDispatch } from 'react-redux'

// styles, assets
import { NoAccess, NoDataImg } from './styled'

// components
import { Card } from '../../components'

// antd
import { Layout, Collapse } from 'antd'

import { Link } from 'react-router-dom'

import { setUserData, commonData, setUserMenu } from 'redux/slices/common'

const { Content } = Layout

const DashboardPage = () => {
  const [pageList, setPageList] = useState([])
  const dispatch = useDispatch()
  const sharedData: any = useSelector(commonData)
  const { Panel } = Collapse
  const getUserData = async () => {
    // if (sharedData?.userData?.UserUuid && sharedData?.menu?.length > 0) {
    //   const filteredData = sharedData?.menu
    //     .filter((d) => {
    //       return d.ParentMenuId === "";
    //     })
    //     .map((d) => {
    //       const MenuChild = sharedData?.menu.filter((dt) => {
    //         return dt.ParentMenuId === d.MenuId;
    //       });
    //       return { ...d, MenuChild };
    //     });
    //   setPageList(filteredData);
    // } else {
    const { data } = await Api({ url: '/server/paths', type: 'GET' })
    const { Menus, UserProfile } = data
    dispatch(setUserData({ userData: UserProfile }))
    dispatch(setUserMenu({ menu: Menus }))

    const filteredData = Menus.filter((d) => {
      return d.ParentMenuId === ''
    }).map((d) => {
      const MenuChild = Menus.filter((dt) => {
        return dt.ParentMenuId === d.MenuId
      })
      return { ...d, MenuChild }
    })
    setPageList(filteredData)
    // }
  }

  useEffect(() => {
    getUserData()
  }, [])

  if (pageList?.length <= 0) {
    return (
      <Content>
        <Card label='Laman Utama'>
          <NoAccess>
            <NoDataImg />
            Tiada Akses Dijumpa
          </NoAccess>
        </Card>
      </Content>
    )
  }

  return (
    <Content>
      <Card>
        <Card.Stack label='Laman Utama' fluid={true}>
          <Collapse accordion>
            {pageList.map((pl: any) => {
              if (pl.MenuChild?.length === 0) {
                return (
                  <Panel style={{ fontSize: 15 }} header={pl.MenuText} key={pl.MenuId}>
                    <div
                      style={{
                        display: 'flex',
                        flex: 1,
                        margin: '5px 0px 10px 80px',
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                      key={pl.MenuId}
                    >
                      <Link style={{ fontSize: 15, marginLeft: 5 }} to={pl.MenuPath}>
                        {pl.MenuText}
                      </Link>
                    </div>
                  </Panel>
                )
              }

              return (
                <Panel style={{ fontSize: 15 }} header={pl.MenuText} key={pl.MenuId}>
                  {pl.MenuChild.map((c: any) => {
                    if (c.disabled) return null
                    return (
                      <div
                        style={{
                          display: 'flex',
                          flex: 1,
                          margin: '10px 0px 10px 60px',
                          flexDirection: 'row',
                          alignItems: 'center'
                        }}
                        key={c.MenuId}
                      >
                        <Link style={{ fontSize: 15, marginLeft: 5 }} to={c.MenuPath}>
                          {c.MenuText}
                        </Link>
                      </div>
                    )
                  })}
                </Panel>
              )
            })}
          </Collapse>
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default DashboardPage
