import axiosInstance from "@/api/AxiosInterceptor";
interface MovieSearchParams {
  s: string;
  page?: number;
  type?: 'movie' | 'series' | 'episode';
  year?: string;
  Search?:[];
}

export interface MovieByIdParams {
  i: string;
  plot?: 'short' | 'full';
}

export const searchMovies = async (params: MovieSearchParams) => {
  try {
    const response = await axiosInstance.get('', { params });
    if (response.data.Response === 'True') {
      return response.data;
    }
    throw new Error(response.data.Error || 'Unknown error occurred');
  } catch (error:any) {
    throw new Error(error)
  }
};

export const getMovieById = async (params: MovieByIdParams) => {
  try {
    const response = await axiosInstance.get('', { params });
    if (response.data.Response === 'True') {
      return response.data;
    }
    throw new Error(response.data.Error || 'Unknown error occurred');
  } catch (error:any) {
    throw new Error(error)
  }
};