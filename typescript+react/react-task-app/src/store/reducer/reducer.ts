
// Redux

import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

// 상태 관리 라이브러리 (선택사항)

// State, Props 상태를 여러 컴포넌트와 공유

// 앱 커지면 => 관리가 힘들고 , 소스코드 지저분

// ==> Redux

// Action 객체 Dispatch 함수 => Reducer 함수 type return => Redux Store State 
// 여기에 업데이트됨 한방향으로 흐른다, => React Component Rerendering

// Store를 생성하려면 Reducer가 있어야하는데,
// Toolkit 에서 Reducer를 생성하려면 Slice가 존재해야한다.

// sub reducer ===> reducer combine

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer
} 

export default reducer;