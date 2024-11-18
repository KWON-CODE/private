import{ styled } from "styled-components";

function Header() {
    return(
        <Headerstyle>
            <h1> book store </h1>
        </Headerstyle>
    );
}

const Headerstyle = styled.header `
    background-color: ${({ theme }) => theme.color.background};
   
    h1 {
    color: ${({ theme }) => theme.color.primary};
    }
`;

export default Header;