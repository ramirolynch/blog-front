export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface BlogPost {
  id: number;
  title: string;
  body: string;
  post_ts: string;
  author_id: number;
  first_name: string;
  last_name: string;
  admin: boolean;
  email: string;
}

export interface CommentFace {
  id: number;
  body: string;
  comment_ts: string;
  author_id: number;
  post_id: number;
  first_name: string;
  last_name: string;
  email: string;
}
