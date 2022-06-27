let axios = require("axios");

const requestBearerTokenURL =
  "https://api.twitter.com/oauth2/token?grant_type=client_credentials";
const timelineByUserURL =
  "https://api.twitter.com/1.1/statuses/user_timeline.json";
TWITTER_COUNT_TWEETS = 5;
TWITTER_API_KEY = "KRy7l0v8wex3w8Sy5zThai3Ea";
TWITTER_API_SECRET_KEY = "X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu";

// Get user tweets by username
export const tweetsByUserName = async (event) => {
  const { pathParameters } = event;
  const id = pathParameters ? pathParameters.id : "elonmusk";
  try {
    const stringAuth = Buffer.from(
      `${TWITTER_API_KEY}:${TWITTER_API_SECRET_KEY}`
    ).toString("base64");
    const auth = `Basic ${stringAuth}`;
    const options_access_token = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: auth,
      },
    };
       // Get request bearer
    let bearer = await axios.post(
      requestBearerTokenURL,
      {},
      options_access_token
    );
    console.log(bearer);
    const url = `${timelineByUserURL}?screen_name=${id}&count=${TWITTER_COUNT_TWEETS}`;
    const options = {
      headers: {
        Authorization: `Bearer ${bearer.data.access_token}`,
      },
    };

    const tweets = await axios.get(url, options);
    console.log(tweets.data);
    return tweets.data;
  } catch (e) {
    console.log(e.message);
  }
};
export default tweets;
//module.exports = {
//tweetsByUserName
//};
