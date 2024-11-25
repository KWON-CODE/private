import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useBook } from "../hooks/useBook";
import { getImgSrc } from "../utils/image";
import Title from "../Components/common/Title";
import { BookDetail as IBookDeatil } from "../models/book.model";

const bookInfoList = [
    {
        label: "카테고리",
        key: "categoryName"
    },
    {
        label: "포맷",
        key: "form"
    },
    {
        label: "페이지",
        key: "pages"
    },
    {
        label: "ISBN",
        key: "isbn"
    },
    {
        label: "출간일",
        key: "pubDate"
    },
    {
        label: "가격",
        key: "price"
    },
]



function BookDetail() {
    const { bookId } = useParams();
    const { book } = useBook(bookId);

    if (!book) return null;

    return <BookDetailStyle>
        <header className="header">
            <div className="img">
                <img src={getImgSrc(book.img)} 
                alt={book.title} />
            </div>
            <div className="info">
                <Title size="large" color="text">
                    {book.title}
                </Title>
                <dl>
                    <dt>카테고리</dt>
                    <dd> {book.categoryName}</dd>
                </dl>
                <dl>
                    <dt>포맷</dt>
                    <dd> {book.form}</dd>
                </dl>
                {
                    bookInfoList.map((item) => (
                        <dl>
                            <dt>{item.label}</dt>
                            <dd>{book[item.key as keyof IBookDeatil]}</dd>
                        </dl>
                    ))
                }
            </div>
        </header>
        <div className="content">

        </div>
    </BookDetailStyle>
}

const BookDetailStyle = styled.div``;

export default BookDetail;