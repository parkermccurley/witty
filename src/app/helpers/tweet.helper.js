export function tweetToJSON(tweet) {
  const json = {
    content: tweet.text,
    date: tweet.created_at,
    user: tweet.user.screen_name,
    followers: tweet.user.followers_count
  }

  return json
}
