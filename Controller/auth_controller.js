const teacherModel = require("../Model/teacher.js");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
  teacherModel
    .findOne({ email: req.body.email, password: req.body.password })
    .then((data) => {
      if (!data) throw new Error("not authenticated");

      let token = jwt.sign(
        { _id: data._id, role: data.role },
        "nurseryteacher",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ data: data, token: token });
    })
    .catch((err) => next(err));
};

// jwt sign : signature of the server that is << sent within the response >>
// it returns a token and it takes the payload data or object that you want to preserve
// you can add a role to the payload
// the payload is used to allow the server to identify the user in each request
// the signature also takes a secret key used to encrypt and decrypt a part of the token
// you can add expiration time interval to the token
// the expiry is used to make the user sign out after session expiry and redirects him to the login page again

// the client should send the token within each request
// how ?
// the token resides in the header of the request named authorization
// in postman you copy the token returned from the server response and paste it in the bearer token
// in the authorization header
// but first you need to check for the token and the role in each handler
// to make sure that the token exist inside each request you need to check for it inside the authentication layer
