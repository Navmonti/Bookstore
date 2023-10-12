import { PayloadAction, createSlice } from "@reduxjs/toolkit"; 
import IModal from "../../interfaces/IModal";

const initialState: IModal = {
    isOpen: false,
    children: undefined,
    headerTitle: ""
};

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state , action : PayloadAction<IModal>) => {
            state.isOpen = true;
            state.children = action.payload.children
            state.headerTitle = action.payload.headerTitle
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
