export interface DataResponse {
  info: Data[];
}


export interface Data {
  created_at:                string;
  id:                        number;
  id_str:                    string;
  text:                      string;
  truncated:                 boolean;
  entities:                  WelcomeEntities;
  source:                    string;
  in_reply_to_status_id:     number;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id:       number;
  in_reply_to_user_id_str:   string;
  in_reply_to_screen_name:   string;
  user:                      User;
  geo:                       null;
  coordinates:               null;
  place:                     null;
  contributors:              null;
  is_quote_status:           boolean;
  retweet_count:             number;
  favorite_count:            number;
  favorited:                 boolean;
  retweeted:                 boolean;
  lang:                      string;
  extended_entities?:        ExtendedEntities;
  possibly_sensitive?:       boolean;
}

export interface WelcomeEntities {
  hashtags:      any[];
  symbols:       any[];
  user_mentions: UserMention[];
  urls:          URL[];
  media?:        Media[];
}

export interface Media {
  id:              number;
  id_str:          string;
  indices:         number[];
  media_url:       string;
  media_url_https: string;
  url:             string;
  display_url:     string;
  expanded_url:    string;
  type:            string;
  sizes:           Sizes;
}

export interface Sizes {
  thumb:  Large;
  small:  Large;
  medium: Large;
  large:  Large;
}

export interface Large {
  w:      number;
  h:      number;
  resize: string;
}

export interface URL {
  url:          string;
  expanded_url: string;
  display_url:  string;
  indices:      number[];
}

export interface UserMention {
  screen_name: string;
  name:        string;
  id:          number;
  id_str:      string;
  indices:     number[];
}

export interface ExtendedEntities {
  media: Media[];
}

export interface User {
  id:                                 number;
  id_str:                             string;
  name:                               string;
  screen_name:                        string;
  location:                           string;
  description:                        string;
  url:                                null;
  entities:                           UserEntities;
  protected:                          boolean;
  followers_count:                    number;
  friends_count:                      number;
  listed_count:                       number;
  created_at:                         string;
  favourites_count:                   number;
  utc_offset:                         null;
  time_zone:                          null;
  geo_enabled:                        boolean;
  verified:                           boolean;
  statuses_count:                     number;
  lang:                               null;
  contributors_enabled:               boolean;
  is_translator:                      boolean;
  is_translation_enabled:             boolean;
  profile_background_color:           string;
  profile_background_image_url:       string;
  profile_background_image_url_https: string;
  profile_background_tile:            boolean;
  profile_image_url:                  string;
  profile_image_url_https:            string;
  profile_banner_url:                 string;
  profile_link_color:                 string;
  profile_sidebar_border_color:       string;
  profile_sidebar_fill_color:         string;
  profile_text_color:                 string;
  profile_use_background_image:       boolean;
  has_extended_profile:               boolean;
  default_profile:                    boolean;
  default_profile_image:              boolean;
  following:                          null;
  follow_request_sent:                null;
  notifications:                      null;
  translator_type:                    string;
  withheld_in_countries:              any[];
}

export interface UserEntities {
  description: Description;
}

export interface Description {
  urls: any[];
}
