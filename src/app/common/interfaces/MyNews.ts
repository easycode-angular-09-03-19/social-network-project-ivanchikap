import { MyImages } from "./MyImages";

export interface MyNews {
  date: string;
  owner: {
    avatar: string;
    country: string;
    full_name: string;
    _id: string;
  }
  pictures: MyImages[];
  __v: number;
  _id: string;
}
