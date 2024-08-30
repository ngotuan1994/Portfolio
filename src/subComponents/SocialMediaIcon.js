import React from 'react'
import { Github,LinkedIn, Resume } from "../components/AllSvgs"
import styled from "styled-components"
import ResumeFile from "../assets/images/EricNgo-Resume.pdf"
import {DarkTheme} from '../components/Themes'
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
  background-color: ${props=> props.color ==='dark' ? DarkTheme.text : DarkTheme.body};
`

function SocialMediaIcon(props) {
  return (
    <Icons>
        <div>
          <a href="https://github.com/ngotuan1994" style={{color:'inherit'}} target="_blank"  rel="noreferrer">
            <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></Github>
          </a>
        </div>
        <div>
          <a style={{color:'inherit'}} target="_blank" href= "https://www.linkedin.com/in/ericngo14" rel="noreferrer">
            <LinkedIn width={32} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></LinkedIn>
          </a>

      </div>
      <div>
          <a style={{color:'inherit'}} target="_blank" href={ResumeFile} rel="noreferrer" download="EricNgo-resume.pdf">
            <Resume width={32} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}></Resume>
          </a>

      </div>
      <Line color={props.theme}></Line>
    </Icons>
  )
}

export default SocialMediaIcon
