import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { QUERYSTRING } from "../constants/querystring";
import { LIMIT } from "../constants/pagination";
import { fetchBooks } from "../api/books.api";
import { useInfiniteQuery, useQuery } from "react-query";

export const useBooksInfinite = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const getBooks = ({ pageParam } : {pageParam: number}) => 
        { const params = new URLSearchParams(location.search); 
        const category_id = params.get(QUERYSTRING.CATEGORY_ID) ? 
        Number(params.get(QUERYSTRING.CATEGORY_ID)) :
         undefined;
         const news = params.get(QUERYSTRING.NEWS) ? true :
         undefined;
          const limit = LIMIT;
          const currentPage = pageParam;

            return fetchBooks({
            category_id,
            news,
            limit,
            currentPage,
          })
    }

    const {data, fetchNextPage, hasNextPage, isFetching} = useInfiniteQuery(["books", location.search], 
        ({pageParam = 1}) => getBooks({ pageParam }),
        {getNextPageParam: (lastPage) => {
            const isLastPage = Math.ceil(
                lastPage.pagination.totalCount / LIMIT) === lastPage.pagination.currentPage

            return isLastPage ? null : lastPage.pagination.currentPage + 1;
        }});

    // const { data: booksData, isLoading: isBooksLoading } = useQuery(["books", location.search], 
    //     () => fetchBooks({
    //         category_id: params.get(QUERYSTRING.CATEGORY_ID) ? 
    //         Number(params.get(QUERYSTRING.CATEGORY_ID)) :
    //          undefined,
    //         news: params.get(QUERYSTRING.NEWS) ? true :
    //          undefined,
    //         currentPage: params.get(QUERYSTRING.PAGE) ? Number
    //         (params.get(QUERYSTRING.PAGE)) : 1,
    //         limit: LIMIT,
    //     }) )

    const books = data ? data.pages.flatMap((page) => page.books) : []
    const pagination = data ? data.pages[data.pages.length -1].pagination : {};
    const isEmpty = books.length === 0;

   return {
    books,
    pagination,
    isEmpty, 
    isBooksLoading : isFetching,
    fetchNextPage,
     hasNextPage,
   };
};