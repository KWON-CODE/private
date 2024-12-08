import Title from "../Components/common/Title";
import Button from "../Components/common/Button";
import InputText from "../Components/common/InputText";
import styled from "styled-components";
import MainReview from "@/Components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import MainNewBooks from "@/Components/main/MainNewBooks";
import MainBest from "@/Components/main/MainBest";
import Banner from "@/Components/common/banner/Banner";
import { useMediaQuery } from "@/hooks/useMediaQuery";


function Home() {
    const { reviews, newBooks, bestBooks, banners } = useMain(); 
    const { isMobile } = useMediaQuery();

    return(
    <HomeStyle>
        {/* 배너 */}
        <Banner banners={banners}/>

        {/* 베스트셀러 */}
        <section className="section">
            <Title size="large">베스트 셀러</Title>
            <MainBest books={bestBooks}/>
        </section>

        {/* 신간 */}
        <section className="section">
            <Title size="large">신간 안내</Title>
            <MainNewBooks books={newBooks}/> 
        </section>

        {/* 리뷰 */}
        <section className="section">
            <Title size="large">리뷰</Title>
            <MainReview reviews={reviews}/>
        </section>
    </HomeStyle>
    );   
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export default Home;
