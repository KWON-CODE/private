import styled from "styled-components";
import Title from "../Components/common/Title";
import BooksFilter from "../Components/books/BooksFilter";
import BooksList from "../Components/books/BooksList";
import BooksEmpty from "../Components/books/BooksEmpty";
import Pagination from "../Components/books/Pagination";
import BooksViewSwitcher from "../Components/books/BooksViewSwitcher";
import { useBooks } from "../hooks/useBooks";



function Books() {
    const { books, pagination, isEmpty } = useBooks();

    return (
        <>
        <Title size="large">도서 검색 결과</Title>
        <BookStyle>
            <div className="filter">
            <BooksFilter />
            <BooksViewSwitcher />
            </div>
            {!isEmpty && <BooksList books={books} /> }
            {isEmpty && <BooksEmpty /> } 
            {!isEmpty && <Pagination pagination={pagination}/> }            
        </BookStyle>
        </>
    );
}

const BookStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    .filter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
`;

export default Books;