import styled from "@emotion/styled";
import { theme } from "constants";

export const ProfileCard = styled.div`
margin-top: ${theme.sizing(3)};
margin-left: auto;
margin-right: auto;
width: 300px;
box-shadow: -5px 6px 11px 1px rgba(0,0,0,0.75);
border-radius: 4px;
transition: transform ${theme.animation.duration} ${theme.animation.timingFunction};
&:hover, &:focus {
    transform: scale(1.03);
}
`;
export const Description = styled.div`
text-align: center;
padding-top: ${theme.sizing(7)};
padding-bottom: ${theme.sizing(2)};
display: flex;
flex-direction: column;
align-items: center;
`
export const Avatar = styled.img`
width: 150px;
border-radius: 50%;
padding-bottom: ${theme.sizing(2)};
`;
export const Title = styled.p`
font-weight: 600;
font-size: 18px;
`;
export const Info = styled.p`
line-height: 1.2;
color: ${theme.colors.infoText};
`
export const Stats = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
background-color: ${theme.colors.statsBg};
border-radius: 0 0 4px 4px;
`;
export const Item = styled.li`
flex-basis: calc((100% - ${theme.sizing(3)})/3);
padding: ${theme.sizing(3)};
border: 1px solid #9B9FA1;
`;
export const Label = styled.p`
text-align: center;
font-size: 12px;
`;
export const Counter = styled.p`
font-weight: 600;
text-align: center;
`;