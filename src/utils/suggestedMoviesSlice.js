
import { createSlice } from "@reduxjs/toolkit";

const suggestedMovieSlice= createSlice({

    name:"suggestedMovies",
    initialState:{
        showWindow:false,
        recommendedMovieList:[],
        recommendedMovieNameList:[]
    },
    reducers:{
        toggleWindow:(state)=>{
            state.showWindow= !state.showWindow;
        },
        getRecommendedMovie:(state,action)=>{
            state.recommendedMovieList=action.payload
        },
        getRecommendedMovieNames:(state,action)=>{
            state.recommendedMovieNameList=action.payload;
        }
    }
})

export const { toggleWindow , getRecommendedMovie , getRecommendedMovieNames }= suggestedMovieSlice.actions;

export default suggestedMovieSlice.reducer;