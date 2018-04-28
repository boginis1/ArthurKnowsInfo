const axios = require('axios');
const  {google} = require('googleapis');

module.exports = {
  verify: function (req, res) {
    axios.post('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' +req.body.token)
      .then((response) => {
        res.json({email: response.email, hd: response.hd});
    }).catch(( err) => console.log(err))
  },

}
