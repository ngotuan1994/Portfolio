import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from './Themes'
import { Design  } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialMediaIcon from '../subComponents/SocialMediaIcon';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import spaceman from "../assets/images/spaceman.png"
import { keyframes } from 'styled-components'

const Box = styled.div`
background: ${props => props.theme.body} ;
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};

  padding: 2rem;
  width: 50vw;
  height: 60vh;

  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex ;
  flex-direction: column ;
  justify-content: center;
  align-items:center ;
  font-size: calc(0.6rem + 1vw);
  font-style: italic;
  backdrop-filter: blur(8px);
  z-index: 0;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 5rem;

`


const rotate = keyframes`
0%{
  transform: rotate(0);
}
25%{
  transform: rotate(10deg) translateX(-60vw);

}
50%{
  transform: rotate(90deg) translateX(10vw);

}
100%{
  transform: rotate(360deg) ;
}

`
const SpaceMan = styled.div`
  position: absolute;
  top: 10%;
  right: 5% ;
  width: 20vw;
  animation: ${rotate} infinite 10s linear;



`

function About(click) {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'></LogoComponent>
        <SocialMediaIcon theme='dark'></SocialMediaIcon>
        <PowerButton></PowerButton>
        <ParticleComponent theme='dark' />
        <SpaceMan>
          <img src={spaceman} alt="Spaceman Picture" />
        </SpaceMan>
        <Main>
          I have graduated since Jan 2022. My major is Computer Science
          <br></br>
          I'm a software  engineer located in California. I love to create simple yet beautiful websites with great user experience.
          <br></br>
          I'm interested in the whole MERN stack, and I like trying new things and building great projects. I love reading books
          <br></br>

        </Main>
      </Box>



    </ThemeProvider>
  )
}

export default About
