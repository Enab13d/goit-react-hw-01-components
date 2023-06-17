import styled from '@emotion/styled';
import { theme } from 'constants';

export const FriendCard = styled.li`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
column-gap: ${theme.sizing(3)};
margin-top: ${theme.sizing(2)};
padding-top: ${theme.sizing(1)};
padding-bottom: ${theme.sizing(1)};
padding-left: ${theme.sizing(5)};
box-shadow: -2px 3px 5px 1px rgba(0,0,0,0.75);
transition: transform ${theme.animation.duration} ${theme.animation.timingFunction};
&:hover, &:focus {
    transform: scale(1.03);
}
`;
const setColor = props => props.networkStatus ? 'green' : 'red';

export const Status = styled.span`
background-color: ${setColor};
display: block;
width: ${theme.sizing(3)};
height: ${theme.sizing(3)};
border-radius: 50%;
`;

export const FriendAvatar = styled.img`
border-radius: ${theme.sizing(1)};;
overflow: hidden;
`;
export const FriendName = styled.p`

`