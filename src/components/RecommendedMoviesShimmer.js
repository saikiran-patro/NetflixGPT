import React from "react";
// import { Progress } from "@radix-ui/react-progress"
import { Loading } from "./Loading";

const RecommendedMoviesShimmer = () => {
  return (
    <div className="p-4 text-white w-[100%] flex justify-center items-center">
    
    <Loading />
    </div>
  );
};

export default RecommendedMoviesShimmer;
