import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'

// styles, assets
import { MenuCardContainer, MenuHeader, BottomBtn, ToggleButton, LinkContainer } from './styled'

interface MainMenuCardProps {
  MenuText: string
  MenuChild: Array<any>
}

const MainMenuCard = ({ MenuText, MenuChild }: MainMenuCardProps) => {
  const [collapse, setCollapse] = useState(true)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <MenuCardContainer collapse={collapse}>
      <MenuHeader>{MenuText}</MenuHeader>
      <LinkContainer collapse={collapse}>
        {MenuChild.map((c: any) => {
          return (
            <div style={{ padding: 5 }} key={c.MenuId}>
              <Link to={c.MenuPath}>{c.MenuText}</Link>
            </div>
          )
        })}
      </LinkContainer>
      {MenuChild.length > 3 && (
        <BottomBtn onClick={() => handleCollapse()}>
          Show More <ToggleButton collapse={collapse} />
        </BottomBtn>
      )}
    </MenuCardContainer>
  )
}

export default MainMenuCard
