interface IGithubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

interface IGithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
}

type GithubUserState = {
  loading: boolean;
  users: IGithubUser[];
  error: string;
};

type GithubSearch = {
  q: string;
  per_page: number;
  page: number;
};

type GithubUser = {
  username: string;
};

type GithubRepoState = {
  loading: boolean;
  repos: IGithubRepo[];
  error: string;
};

type GitHubUserAction = {
  type: string;
  users: IGithubUser;
  error: string;
};

type GitHubRepoAction = {
  type: string;
  repos: IGithubRepo;
  error: string;
};

type DispatchUserType = (args: GitHubUserAction) => GitHubUserAction;
type DispatchRepoType = (args: GitHubRepoAction) => GitHubRepoAction;
