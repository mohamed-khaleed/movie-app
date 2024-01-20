import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE={
     watchingList:[],
     watchingListCount: 0,
}

const watchingListSlice = createSlice({
  name: "watchingList",
  initialState: INITIAL_STATE,
  reducers: {
    addToWatchingList: (state, action) => {
      console.log("Adding to watching list:", action.payload);
      state.watchingList.push(action.payload);
      state.watchingListCount += 1;
    },
    removeFromWatchingList: (state, action) => {
      console.log("Removing from watching list:", action.payload);
      state.watchingList = state.watchingList.filter(movie => movie.id !== action.payload.id);
      state.watchingListCount -= 1;
    },
    
  },
});
export const { addToWatchingList, removeFromWatchingList  } = watchingListSlice.actions;
export default watchingListSlice.reducer;