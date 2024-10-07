import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS, API_BASE_URL, LANG_OPTIONS } from '../constant';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies } from '../movieSlice';

const useListMovies = () => {
  const dispatch = useDispatch();
  
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    const categories = ['now_playing', 'popular', 'top_rated', 'upcoming'];

    const getListMovies = async (category) => {
      const data = await fetch(API_BASE_URL + category + LANG_OPTIONS, API_OPTIONS);
      const dataJson = await data.json();

      if (category === 'now_playing') {
        dispatch(addNowPlayingMovies(dataJson.results));
      } else if (category === 'popular') {
        dispatch(addPopularMovies(dataJson.results));
      } else if (category === 'top_rated') {
        dispatch(addTopRatedMovies(dataJson.results));
      } else if (category === 'upcoming') {
        dispatch(addUpComingMovies(dataJson.results));
      }
    };

    categories.forEach((category) => {
      if (category === 'now_playing' && !nowPlayingMovies) {
        return getListMovies(category);
      } else if (category === 'popular' && !popularMovies) {
        return getListMovies(category);
      } else if (category === 'top_rated' && !topRatedMovies) {
        return getListMovies(category);
      } else if (category === 'upcoming' && !upComingMovies) {
        return getListMovies(category);
      }
    });
  }, [dispatch]);
};

export default useListMovies;
