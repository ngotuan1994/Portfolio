import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './Themes'
import { Design  } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialMediaIcon from '../subComponents/SocialMediaIcon';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
background: ${props => props.theme.body} ;
width: 100vw;
height: 100vh;
position: relative;
display: flex ;
justify-content: space-evenly ;
align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color:  ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex ;
  flex-direction: column ;
  justify-content: space-between;
  :hover{
    background-color: ${props => props.theme.text};

    &>*{
      color: ${props => props.theme.body};
      cursor:pointer;

    }
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center ;
  align-items: center ;
  font-size: calc(1em + 1vw);

`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
`
function SkillsPage(click) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent></LogoComponent>
        <SocialMediaIcon></SocialMediaIcon>
        <PowerButton></PowerButton>
        <ParticleComponent theme='light' />
        <Main>
          <Title>
            <Design width={40} height={40}/> FrontEnd Developer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong> Skills</strong>
            <p>Html, Css, Js, React, Redux, Sass, e.t.c.</p>


          </Description>
          <Description>
            <strong> Tools</strong>
            <p>VScode, Git, Postman, SQL , NOSQL, e.t.c.</p>


          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40}/> BackEnd Developer

          </Title>
          <Description>
I love to create design which speaks, Keep it clean, minimal and simple.

          </Description>
        </Main>

      </Box>



    </ThemeProvider>
  )
}

export default SkillsPage
