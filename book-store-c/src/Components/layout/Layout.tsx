import styled from "styled-components";
import Footer from "../common/Footer"
import Header from "../common/Header"

interface LayoutProps{
    children: React.ReactNode;  // children prop을 받아서 children element를 Layout component의 children prop으로 전송
}

function Layout({ children  }: LayoutProps) {
    return (
    <>
        <Header />
        <LayoutStyle>{children}</LayoutStyle>
        <Footer />
    </>
    );
}

const LayoutStyle = styled.main`
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme}) => theme.layout.width.large};
    padding: 20px 0;


`;

export default Layout;
