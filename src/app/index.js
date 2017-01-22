import * as twitter from './services/twitter.service'
import constants from './core'

const query = 'hello'
const count = 100

twitter.search(query, count, constants.bearerToken)
  .then(response => console.log(response))
  .catch(error => console.log(error))
