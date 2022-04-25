import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github } from '../components/AllSvgs'

const Box = styled.li`
  width: 16rem;
  height: 40vh;
  background-color: ${props => props.theme.text};
  color : ${props => props.theme.body};
  padding : 1.5rem 2rem;
  margin-left: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.2s ease;

  &:hover{
    background-color: ${props => props.theme.body} ;
    color: ${props => props.theme.text} ;
    border: 1px solid ${props=> props.theme.text}
  }
`
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;

`
const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap ;
  ${Box}:hover &{
    border-top: 2px solid ${props=> props.theme.text};
  }
`

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between ;
  a:first-child{
    text-decoration: none ;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    padding: 0.5rem calc(2vw + 2rem);
    border-radius: 0 0 0 50px;
    font-size: calc( 1rem+ 0.5vw);

  }
  ${Box}:hover &>a{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }


`




function CardComponent(props) {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id}>
      <Title>
        {name}
      </Title>
      <Description>
        {description}
      </Description>
      <Tags>
        {tags.map((tag, id) => { return <Tag key={id}>#{tag}</Tag>}  )  }
      </Tags>
      <Footer>
        <a href={demo} target="_blank" rel="noreferrer"> Visit</a>
        <a href={github} target="_blank" rel="noreferrer">
          <Github width={30} height={30}> </Github>
        </a>
      </Footer>
    </Box>
  )
}

export default CardComponent
