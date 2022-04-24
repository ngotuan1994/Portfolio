import React from 'react'
import styled from 'styled-components'
import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"
import Particles from 'react-tsparticles'

const Box = styled.div`
  position: absolute;
  top: 0 ;
  right: 0;
  bottom: 0;
  left: 0;
  z-index:0;
`


function ParticleComponent(props) {

  return (
    <Box>
      <Particles id="tsparticles"  params={props.theme === "light" ? configLight : configDark} />
    </Box>
  )
}

export default ParticleComponent
