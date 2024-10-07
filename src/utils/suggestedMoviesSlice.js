
import { createSlice } from "@reduxjs/toolkit";

const suggestedMovieSlice= createSlice({

    name:"suggestedMovies",
    initialState:{
        showWindow:false,
        showShimmer:true,
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
        },
        toggleShimmer:(state)=>{
            state.showShimmer= !state.showShimmer;
        }
    }
})

export const { toggleWindow , getRecommendedMovie , getRecommendedMovieNames, toggleShimmer }= suggestedMovieSlice.actions;

export default suggestedMovieSlice.reducer;