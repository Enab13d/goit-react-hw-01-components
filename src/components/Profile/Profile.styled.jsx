import styled from "@emotion/styled";

export const ProfileCard = styled.div`
margin: auto;
width: 300px;
box-shadow: -5px 6px 11px 1px rgba(0,0,0,0.75);
border-radius: 4px;
`;
export const Description = styled.div`
text-align: center;
padding-top: 30px;
padding-bottom: 20px;
display: flex;
flex-direction: column;
align-items: center;
`
export const Avatar = styled.img`
width: 150px;
border-radius: 50%;
padding-bottom: 20px;
`;
export const Title = styled.p`
font-weight: 600;
font-size: 18px;
`;
export const Info = styled.p`
line-height: 1.2;
color: #A5A5A5;
`
export const Stats = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
background-color: #C6D1D6;
border-radius: 0 0 4px 4px;
`;
export const Item = styled.li`
flex-basis: calc((100% - 10px)/3);
padding: 10px;
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