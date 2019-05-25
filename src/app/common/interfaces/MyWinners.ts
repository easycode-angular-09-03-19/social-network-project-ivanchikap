import { MyImages } from "./MyImages";

export interface MyWinners {
  challenge_id: string;
  member_id: {
    challenge_id: string;
    exposure_value: number;
    images: {
      glories: string[];
      image_basic: MyImages[];
      votes: number;
      id: string;
    }
    level: {
      curent_level: number;
      votes_to_next_level: number;
    }
    points: number;
    submited_time: string;
    total_votes: number;
    user_id: {
      avatar: string;
      _id: string;
      full_name: string;
    }
    __v: 1
    _id: string;
  }
  public_user_id: string;
  submited_time: string;
  __v: number;
  _id: string;
}
