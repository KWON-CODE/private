import { RootState } from "../store";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();

//const logger = useSelector((state) => state.logger);

// interface Obj<T>{
//     name: T; 
    
// }


// interface State {
//     state: {
//         data: string,
//         loading: boolean
//     }
// }

// const obj: Obj<State> = {
//     name : {
//         state: {
//             data: 'abcd',
//             loading: false
//         }
//     }
// }