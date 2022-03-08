import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ReservationState = {
  value: [],
};

interface ReservationState {
  value: string[];
}

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      console.log("hello");
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
