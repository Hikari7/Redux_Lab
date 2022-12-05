import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const personSlice = createSlice({
  name: "person",
  initialState: [],
  reducers: {
    addPerson: (state, action) => {
      const newPerson = {
        id: uuidv4(),
        name: "John",
        age: Math.floor(Math.random() * 40),
      };
      state.push(newPerson);
    },
    deletePerson: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    //ここで定義したpersonが、呼び出した時の名前になる
    //.reducer、で定義したらそのreducerになる
    //snack sliceとかdrink slinceとか複数のsliceがあった場合
    person: personSlice.reducer,
  },
});

export const { addPerson, deletePerson } = personSlice.actions;

export default personSlice.reducer;
