export type LocalUserT = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company?: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type UserT = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company?: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type NotFoundT = {
  message: string;
  documentation_url: string;
};
