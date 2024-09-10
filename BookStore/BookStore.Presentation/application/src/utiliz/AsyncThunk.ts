import { createAsyncThunk } from '@reduxjs/toolkit';

interface ThunkArgs {
    [key: string]: any;
}

export const createGenericAsyncThunk = <ReturnedType, ThunkArg = ThunkArgs>(
    actionType: string,
    asyncFunction: (args: ThunkArg) => Promise<ReturnedType>
) => {
    return createAsyncThunk<ReturnedType, ThunkArg>(actionType, async (args, thunkAPI) => {
        try {
            const response = await asyncFunction(args);
            return response;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
        }
    });
};