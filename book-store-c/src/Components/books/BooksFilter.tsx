import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";
//import { URLSearchParams } from "url";

function BooksFilter() {
    const { category } = useCategory();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategory = (id: number | null) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());

        if (id === null) {
            newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
        } else {
            newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
        }

        setSearchParams(newSearchParams);
    };

    // const currentCategory = searchParams.get('category_id');
    // console.log(currentCategory);

    const handleNews = () => {
        const newSearchParams = new URLSearchParams(searchParams);

        if (newSearchParams.get(QUERYSTRING.NEWS)) {
            newSearchParams.delete(QUERYSTRING.NEWS);
        } else {
            newSearchParams.set(QUERYSTRING.NEWS, 'true');
        }
        setSearchParams(newSearchParams);
    }

    return (
        <BooksFilterStyle>
            <div className="category">
                {category.map((item) => (
                    <Button size="medium" scheme={item.isActive ? 'primary' : 'normal'} 
                    key={item.id} onClick={() => handleCategory(item.id)}>
                        {item.name}
                    </Button>
                ))}
            </div>
            <div className="new">
                <Button size="medium" scheme={searchParams.get('news') ? 'primary' : 'normal'}
                 onClick={() => handleNews()}>
                    신간
                </Button>
            </div>
        </BooksFilterStyle>
    );
}

const BooksFilterStyle = styled.div`
    display: flex;
    gap: 24px;

    .category {
        display: flex;
        gap: 8px;
    }
`;

export default BooksFilter;


// import styled from "styled-components";
// import { useCategory } from "../../hooks/useCategory";
// import Button from "../common/Button";
// import { useSearchParams } from "react-router-dom";
// import { URLSearchParams } from "url";

// function BooksFilter() {
//     // 상태
//     //1. 카테고리
//     //2. 신간 여부 true, false
    
//     const { category } = useCategory();
//     const [searchParams, setSearchParams] = useSearchParams();

//     const handleCategory = (id: number | null) => {
//         const newSearchParams = new URLSearchParams(searchParams);

//         if(id === null) {
//             newSearchParams.delete('category_id');
//         } else {
//             newSearchParams.set('category_id', id.toString());
//         }

//         setSearchParams(newSearchParams);
//     }

//     return (
//         <BooksFilterStyle>
//             <div className="category">
//                 {category.map((item) => (
//                         <Button size="medium" scheme="normal" key={item.id} onClick={() => handleCategory(item.id)}>
//                             {item.name}
//                         </Button>
//                     )) }
//             </div>
//             <div className="new">
//                 <Button size="medium" scheme="normal">
//                     신간
//                 </Button>
//             </div>
//         </BooksFilterStyle>
//     );
// }

// const BooksFilterStyle = styled.div`
//     display: flex;
//     gap: 24px;

//     .category {
//     display: flex;
//     gap: 8px;
//     }
// `;

// export default BooksFilter;