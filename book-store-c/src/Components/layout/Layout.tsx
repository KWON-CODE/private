import Footer from "../common/Footer"
import Header from "../common/Header"

interface LayoutProps{
    children: React.ReactNode;  // children prop을 받아서 children element를 Layout component의 children prop으로 전송
}

function Layout({ children  }: LayoutProps) {
    return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
    );
}

export default Layout;
