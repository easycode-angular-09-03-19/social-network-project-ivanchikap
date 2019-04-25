import { MyChallenges } from "../../modules/home/interfaces/MyChallenges";
import { MyLevel } from "./MyLevel";

export interface MyUser {
  avatar: string;
  challenges: MyChallenges[];
  city: string;
  country: string;
  cover: string;
  date_of_birth_day: string;
  date_of_birth_month: string;
  date_of_birth_year: string;
  email: string;
  email_is_active: boolean;
  email_on_comments: boolean;
  email_on_comments_reply: boolean;
  email_on_every_challenge: boolean;
  email_on_likes: boolean;
  email_on_new_challenges_once_week: boolean;
  email_on_new_followers: boolean;
  email_weekly_articles: boolean;
  expert_photos: number;
  favourites: string[];
  first_name: string;
  followers: string[];
  followings: string[];
  full_name: string;

  gender_orientation: "male"
  glories: string[];
   got_levels: {
    'level-1': number;
    'level-2': number;
    'level-3': number;
    'level-4': number;
    'level-5': number;
  };
  is_blocked: boolean;
  is_deactivated: boolean;
  is_deleted: boolean;
  last_login_date: string;
  last_name: string;
  liked_photos?: any;
  my_images: string[];
  nickname: string;
  paypal_id: string;
  phone: string;
  picture: string;
  rank: {
    curent_rank: number;
    points: number;
    levels: MyLevel[];
    next_rank: "rank-3";
    expert_picks: number;
  }
  register_date: string;
  register_ip: string;
  type: string;
  vote_power: number;
  _id: string;
}
