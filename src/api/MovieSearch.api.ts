import axiosInstance from "@/api/AxiosInterceptor";
import { MovieByIdParams, MovieDetails, MovieSearchParams } from "@/types/Movie";

export const searchMovies = async (params: MovieSearchParams) => {
  const response = await axiosInstance.get("", { params });
  if (response.data.Response === "True") {
    return response.data;
  }
  throw new Error(response.data.Error || "Unknown error occurred");
};

export const getMovieById = async( params: MovieByIdParams): Promise<MovieDetails>=> {
  const response = await axiosInstance.get("", { params });
  if (response.data.Response === "True") {
    return response.data;
  }
  throw new Error(response.data.Error || "Unknown error occurred");
};
