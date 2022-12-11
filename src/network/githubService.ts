import axiosInstance from './axiosInstance';

const searchByUser = async (q: string, per_page: number, page: number) => {
  const response = await axiosInstance.get<any>('/search/users', {
    params: {
      q,
      per_page,
      page,
    },
  });
  return response.data;
};

const searchByRepo = async (q: string, per_page: number, page: number) => {
  const response = await axiosInstance.get<any>('/search/repositories', {
    params: {
      q,
      per_page,
      page,
    },
  });
  return response.data;
};

const GithubService = {
  searchByUser,
  searchByRepo,
};

export default GithubService;
