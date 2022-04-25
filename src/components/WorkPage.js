import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { LightTheme, DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent';
import SocialMediaIcon from '../subComponents/SocialMediaIcon';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import { Works } from "../data/WorkData";
import CardComponent from '../subComponents/CardComponent';
import { useRef } from 'react';
import { useEffect } from 'react';
import { YinYang } from './AllSvgs';
import { motion } from 'framer-motion';

const Box = styled.div`
background: ${props => props.theme.body} ;

height: 400vh;
position: relative;
overflow: hidden;

`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem+ 15vw);
  height: 40vh;
  display: flex;
  color: white;

`

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  z-index: 1;

`


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,

    }
  }
}

function WorkPage(click) {
  const ref = useRef(null);
  const yinyang = useRef(null);
  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
    }
    window.addEventListener('scroll', rotate)
    return () => window.removeEventListener('scroll', rotate)
  },[])
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'></LogoComponent>
        <SocialMediaIcon theme='dark'></SocialMediaIcon>
        <PowerButton></PowerButton>
        <ParticleComponent theme='dark' />

        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {
            Works.map(work => (
              <CardComponent key={work.id} data={work}></CardComponent>
            )

            )
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text}></YinYang>
        </Rotate>
      </Box>



    </ThemeProvider>
  )
}

export default WorkPage
