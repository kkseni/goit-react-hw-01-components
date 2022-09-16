import styled from "styled-components";

 export const Card = styled.div`
width:250px;
height:400px;
margin:0 auto;
border-radius:5px;

padding:25px 25px;
background:blue;
color:white; `

export const Description = styled.div`
padding:25px;
background:white;
color: black;
border-radius:5px;
`
export const Photo = styled.img`
margin-left:15px;
`

export const Name = styled.p`
margin-left:100px;
color:black;
`
export const Tag = styled.p`
margin-left:50px;
color:grey;
`
export const Location = styled.p`
margin-left:20px;
color:grey;`
export const Stats = styled.ul`
list-style:none;
padding:0;
display:flex;`

export const Label = styled.li`
border:1px solid grey;
height:60px;
width:70px;
background-color:white;
color:black;
font-size:18px;
padding:10px;
border-radius:5px;
`
export const Span = styled.span`
line-height:2;
color:black;`