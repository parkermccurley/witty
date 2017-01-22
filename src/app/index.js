import * as twitter from './services/twitter.service';
import constants from './core';

twitter.getBearerToken(constants.applicationKey)
  .then(body => console.log(body))
  .catch(error => console.log(error))
