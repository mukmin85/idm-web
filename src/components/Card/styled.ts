import styled from 'styled-components'

// card style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: left;
  background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-tertiary)' : 'var(--clr-white-primary)')};
  min-height: ${({ fullPage }) => (fullPage ? '80vh' : '0')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0 0;
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme.darkmode ? 'rgba(var(--clr-blue-secondary-rgb), 0.30) ' : 'var(--clr-white-primary)')};
  box-shadow: ${({ theme }) => (theme.darkmode ? '0px' : '0px 1px 8px rgba(181, 181, 195, 0.28)')};
`

// card stack style
const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: left;
  background-color: transparent;
  padding: ${({ fluid }) => (fluid ? '20px 0px' : '20px 50px')};
  :last-of-type {
    margin-bottom: 10px;
  }
`
const StackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ fluid }) => (fluid ? '0px 20px 20px 20px' : '0px 0px 20px 0px')};
`

const RightHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 0 20px;
  background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-tertiary)')};
  border-radius: 0 0 10px 10px;
`
const Actions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export { Container, Header, StackContainer, StackHeader, RightHeader, Content, Footer, Actions }
