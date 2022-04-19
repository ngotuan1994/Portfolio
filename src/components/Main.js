import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialMediaIcon from '../subComponents/SocialMediaIcon'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import { keyframes } from 'styled-components'
const MainContainer = styled.div`
  background: ${props => props.theme.body};
  color: ${props=> props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,h3,h4,h5,h6{
    font-family: sans-seris;
    font-weight: 500;

  }
`
const Container = styled.div
  `
    padding: 2rem;
  `
const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none ;
z-index: 1 ;

`
const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(-90deg) translate(-50%,-50%);
text-decoration: none ;
z-index: 1 ;

`
const BottomBar = styled.div`

position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display : flex;
justify-content: space-evenly ;
text-decoration: none ;
z-index: 1 ;

`
const About = styled(NavLink)`
color: ${props => props.theme.text};


text-decoration: none ;
z-index: 1 ;

`

const Skills = styled(NavLink)`
color: ${props => props.theme.text};


text-decoration: none ;
z-index: 1 ;

`
const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}

`
const Center = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
display : flex;
flex-direction: column ;
justify-content: center ;
align-items:center ;
&>:first-child{
  animation: ${rotate} infinite 3s linear;
}
&>:last-child{
  padding-top: 1rem;
}

`
function Main() {
  return (
    <MainContainer>
      <Container>
        <PowerButton></PowerButton>
        <LogoComponent></LogoComponent>
        <SocialMediaIcon />
        <Center>
          <YinYang width={150} height={150} fill='currentColor' />
          <span> Click Here</span>
        </Center>



        <Contact target="_blank" href="mailto:ericdev14@gmail.com" rel='noreferrer'>
          <h3>
            Say Hi .....
          </h3>
        </Contact>
        <Work  to="/work">
          <h3> Work</h3>
        </Work>
        <BottomBar>

          <About to='/about'>
            <h3>About</h3>
          </About>
          <Skills to='/skills'>
            <h3>Skills</h3>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  )
}

export default Main
