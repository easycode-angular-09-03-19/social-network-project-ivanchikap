import  { MyFollowersFollowings } from "./MyFollowersFollowings";

export interface FollowersFollowingsAnswer {
  counts: number;
  users: MyFollowersFollowings[];
}
