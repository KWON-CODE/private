import Title from "../Components/common/Title";
import Button from "../Components/common/Button";
import InputText from "../Components/common/InputText";

function Home() {
    return(
    <>
    <Title size= "medium" color="background">
        제목 테스트
        </Title>
        <Button size="large" scheme="normal">
            버튼 테스트
            </Button>
            <InputText placeholder="여기에 입력하세요" />
    <div>Home Body</div>
    </>
    );
    
}
export default Home;