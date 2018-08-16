import axios from 'axios';

class Account {
  static getProfile(userId, platform = 'psn', region = 'us') {
    let query = `https://ow-api.com/v1/stats/${platform}/${region}/${userId}/profile`;
    // console.log(query)
    return axios.get(query);
  }
}

export default Account;