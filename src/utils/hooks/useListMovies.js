import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS, API_BASE_URL, LANG_OPTIONS} from '../constant';
import { addNowPlayingMovies,addPopularMovies, addTopRatedMovies , addUpComingMovies } from '../movieSlice';

const useListMovies=()=>{

    const dispatch=useDispatch();
    useEffect(()=>{
 
       const catogories = ['now_playing','popular','top_rated','upcoming']
    
       const getListMovies= async (category) =>{
        const data= await fetch(API_BASE_URL +category+LANG_OPTIONS,API_OPTIONS)
        const dataJson= await data.json();
                            
  
        if(category==='now_playing'){
            dispatch(addNowPlayingMovies(dataJson.results))
        }
        else if(category==='popular'){
          dispatch(addPopularMovies(dataJson.results))
        }
        else if(category==='top_rated'){
          dispatch(addTopRatedMovies(dataJson.results))
        }
        else if(category==='upcoming'){
          dispatch(addUpComingMovies(dataJson.results))
        }
        
      }
  
     
      catogories.map((category) =>{
            
        return getListMovies(category)
           
  
      })
  
  
    },[dispatch])

}


export default useListMovies;