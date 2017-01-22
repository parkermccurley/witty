import request from 'request-promise';

const url = 'https://api.twitter.com';

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
  };

  let bearerToken = request(options)
    .then(body => body)
    .catch(error => error)

  return bearerToken;
}

export function search(bearerToken, query) {

}
