import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialMediaIcon from '../subComponents/SocialMediaIcon'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import { keyframes } from 'styled-components'
import { useState } from 'react'
import Intro from './Intro'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'



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
transition: transform 1s;
:hover{
  transform: scale(1.2);

}
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
color: ${props => props.click ? props.theme.body : props.theme.text};

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
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
display : flex;
flex-direction: column ;
justify-content: center ;
align-items:center ;
transition: all 0.6s linear;
&>:first-child{
  animation: ${rotate} infinite 3s linear;
}
&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
}

`
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  transition: height 0.5s linear, width 1s linear 0.5s;
  z-index:1;
  background-color: #000;
`
function Main() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }
  return (

    <MainContainer>

      <Container>
        <PowerButton></PowerButton>
        <LogoComponent theme={click ? 'dark' : 'light' }></LogoComponent>
        <SocialMediaIcon theme={click ? 'dark' : 'light' }/>
        <DarkDiv click={click}>

        </DarkDiv>
        <Center click={click}>
          <YinYang onClick={()=> handleClick()} width={150} height={150} fill='currentColor' />
          <span> Click Here</span>
        </Center>



        <Contact target="_blank" href="mailto:ericdev14@gmail.com" rel='noreferrer'>
          <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{scale: 0.8}}
          >
            Say Hi .....
          </motion.h2>
        </Contact>
        <Work  to="/work">
          <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{scale: 0.8}}
          > Work</motion.h2>
        </Work>
        <BottomBar>

          <About to='/about' click={click}>
            <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{scale: 0.8}}
          >About</motion.h2>
          </About >
          <Skills to='/skills'>
            <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{scale: 0.8}}
            >Skills</motion.h2>

          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click}></Intro> : null}


    </MainContainer>

  )
}

export default Main
