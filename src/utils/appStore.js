// creating store configuration file for slices.

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import movieSlice from './movieSlice'
import suggestedMoviesSlice from './suggestedMoviesSlice'

const appStore=configureStore({
    reducer:{

        user:userSlice,
        movies:movieSlice,
        suggestedMovie:suggestedMoviesSlice
    }
})

export default appStore;