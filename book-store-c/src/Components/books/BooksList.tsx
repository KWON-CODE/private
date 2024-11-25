import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";
import { useEffect, useState } from "react";
import { QUERYSTRING } from "../../constants/querystring";
import { ViewMode } from "./BooksViewSwitcher";
import { useLocation } from "react-router-dom";


interface Props {
    books: Book[];
}
// const dummyBook: Book = {
//     id: 1,
//     title: "Dummy Book",
//     img: 5,
//     category_id: 1,
//     summary: "Dummy Summary",
//     author: "Dummy Author",
//     price: 10000,
//     likes: 1,
//     form: "paperback",
//     isbn: "Dummy ISBN",
//     detail: "Dummy Detail",
//     pages: 100,
//     contents: "Dummy Contents",
//     PubDate: "2011-01-01"
// };


function BooksList({ books }: Props) {
    const [view, setView] = useState<ViewMode>('grid');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if(params.get(QUERYSTRING.VIEW)) {
            setView(params.get(QUERYSTRING.VIEW) as ViewMode);
        }
    }, [location.search]);

    return (
        <BooksListStyle view={view}>
           {
            books?.map((item) => (
                <BookItem key={item.id} book={item} view={view} />
            ))}
        </BooksListStyle>
    );
}

interface BooksListStyleProps {
    view: ViewMode;
}

const BooksListStyle = styled.div<BooksListStyleProps>`
    display: grid;
    grid-template-columns: ${({ view }) => (view === 'grid' ? "repeat(4, 1fr)" : "repeat(1,1fr)")}
    gap: 24px;
`;

export default BooksList;