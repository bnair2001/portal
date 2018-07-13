import { MODAL_CLOSE,MODAL_OPEN } from "./modalConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialStste=null;

export const openModal =(state, payload)=>{
    const{modalType, modalProps}=payload;
    return{modalType, modalProps}
}
export const closeModal=(state,payload)=>{
    return null

}
export default createReducer(initialStste, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})