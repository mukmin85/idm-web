import styled from 'styled-components'
import backgroundImg from '../../assets/login-bg.jpg'

const LoginBG = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const LoginContainer = styled.div`
  width: 400px;
  height: 450px;
  background: var(--clr-white-primary);
  border-radius: 20px;
  margin-bottom: 15vh;
`

const LoginCenter = styled.div`
  align-self: center;
`

export { LoginBG, LoginContainer, LoginCenter }
