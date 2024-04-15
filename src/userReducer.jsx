import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./Data";

const userslice = createSlice({
    name: "users",
    initialState: userlist,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const userIndex = state.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state[userIndex].name = name;
                state[userIndex].email = email;
            }
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user.id !== userId);
        }
    }
});

export const { addUser, updateUser, deleteUser } = userslice.actions;
export default userslice.reducer;
