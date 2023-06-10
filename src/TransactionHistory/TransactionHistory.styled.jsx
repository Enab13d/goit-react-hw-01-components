import styled from "@emotion/styled";
import { theme } from "constants";

export const TransactionTable = styled.table`
text-align: center;
font-size: 14px;
width: 700px;
margin-left: auto;
margin-right: auto;
margin-top: ${theme.sizing(5)};
margin-bottom: ${theme.sizing(5)};
border: 1px solid ${theme.colors.tableRowAccent};
border-radius: 4px;
`;
export const TableHead = styled.thead`
color: ${theme.colors.white};
text-transform: uppercase;
th {
    background-color: ${theme.colors.tableHead};
}
`;
export const TableRow = styled.tr`
background-color: ${theme.colors.tableRowAccent};
&:nth-of-type(even) {
    background-color: ${theme.colors.white}
}
`;
export const TableBody = styled.tbody`
color: ${theme.colors.statsTitle};

`;