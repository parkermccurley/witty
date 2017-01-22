# witty
Twitter on Node

### Synopsis
A simple CLI for searching twitter, and saving the results as a .csv.

### Installation
`cd ./src/ && npm install -g`

### Use
`witty -q / --query <query> (Optional -c / --count <count>)`

Witty takes one required argument, --query, and one optional argument, count.
The query searches the most recent tweets and returns them based on relevance.
When a count is used, the results are limited to that amount.

### Notes
* `tweets.csv` will be saved in the directory that `witty` is run.
* For witty to work, a file named `core.js` must be placed in the `src/` folder
with this format, referring to the auths needed by `https://api.twitter.com`

```javascript
/* eslint-disable */
export default {
  applicationKey: 'string dadada dadada dadada',
  bearerToken: 'string dadada dadada dadada'
}
```

Built with `everywhere.js`.
