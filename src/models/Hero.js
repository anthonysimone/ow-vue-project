import axios from 'axios';

class Hero {
  static all() {
    return axios.get('https://overwatch-api.net/api/v1/hero');
  }
}

export default Hero;