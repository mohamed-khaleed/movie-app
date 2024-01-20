import { configureStore } from "@reduxjs/toolkit";


import watchingListSlice from './slices/watchilngList';


export default configureStore({
  reducer:{
    
    watchingList: watchingListSlice
  }
})