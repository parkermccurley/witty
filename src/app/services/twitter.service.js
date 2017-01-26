import request from 'request-promise'
const url = 'https://api.twitter.com'

export function getBearerToken(applicationKey) {
  const options = {
    url: url + '/oauth2/token',
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + applicationKey,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      grant_type: 'client_credentials'
    }
  }

  let bearerToken = request(options)
    .then(body => JSON.parse(body).access_token)

  return bearerToken
}

export function search(query, count, bearerToken) {
  const urlQuery = encodeURIComponent(query)
  const urlCount = encodeURIComponent(count)
  const options = {
    url: url + '/1.1/search/tweets.json?q=' + urlQuery + '&count=' + urlCount,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + bearerToken
    }
  }

  let tweets = request(options)
    .then(body => JSON.parse(body).statuses)

  return tweets
}
