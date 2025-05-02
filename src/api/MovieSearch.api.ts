import axiosInstance from "@/api/AxiosInterceptor";
interface MovieSearchParams {
  s: string;
  page?: number;
  type?: "movie" | "series" | "episode";
  year?: string;
  Search?: [];
}

export interface MovieByIdParams {
  i?: string;
  plot?: "short" | "full";
  [key: string] : string; 
   
}

export const searchMovies = async (params: MovieSearchParams) => {
  const response = await axiosInstance.get("", { params });
  if (response.data.Response === "True") {
    return response.data;
  }
  throw new Error(response.data.Error || "Unknown error occurred");
};

export const getMovieById = async (params: MovieByIdParams) => {
  const response = await axiosInstance.get("", { params });
  if (response.data.Response === "True") {
    return response.data;
  }
  throw new Error(response.data.Error || "Unknown error occurred");
};
