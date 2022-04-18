import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Github, YouTube,LinkedIn } from "../components/AllSvgs"
import styled from "styled-components"
const Icons = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: center ;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index:3;


&>*:not(:last-child){
  margin: 0.5rem 0;
}
`

const Line = styled.span`
  width:2px;
  height: 8rem;
  background-color: ${props=> props.theme.text};
`

function SocialMediaIcon() {
  return (
    <Icons>
        <div>
          <a href="https://github.com/ngotuan1994" style={{color:'inherit'}} target="_blank"  rel="noreferrer">
            <Github width={25} height={25} fill="currentColor"></Github>
          </a>
        </div>
        <div>
          <a style={{color:'inherit'}} target="_blank" href= "https://linkedin.com/in/tuanngo1994" rel="noreferrer">
            <LinkedIn width={32} height={30} fill="currentColor"></LinkedIn>
          </a>

      </div>
      <Line></Line>
    </Icons>
  )
}

export default SocialMediaIcon
