import { MyOwner } from "./MyOwner";


export interface ModalImageAnswer {
  comments: string[];
  create_date: string;
  description: string;
  glories: string[];
  is_deleted: boolean;
  likes: string[];
  owner: MyOwner;
  title: string;
  total_votes: number;
  url: string;
  views: string[];
  _id: string;
}
