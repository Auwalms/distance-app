const request = require("request");

const apiKey = process.env.PORT;
const endpointURL = "https://www.zipcodeapi.com/rest";
console.log(process.env);
const distance = {
    get: function(req, res, next) {
        // console.log(req.params);

        let callURL = `${endpointURL}/${apiKey}/distance.json/${
            req.params.zipcode1
        }/${req.params.zipcode2}/mile`;
        request(callURL, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                details = JSON.parse(body);
                res.send(details);
            } else {
                console.log(
                    `Call failed with status code ${response.statusCode}`
                );
                res.send({ distance: -1 });
            }
        });
    }
};

module.exports = distance;
