newUserQuery = (email, fullName, clientId, phoneNum) => {
  let a =
    "INSERT INTO UsersTable VALUES('" +
    fullName +
    "', '" +
    email +
    "','" +
    clientId +
    "'," +
    "'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'" +
    "," +
    phoneNum +
    "," +
    0 +
    ", " +
    true +
    ");";

  return a;
};

getUserInfo = email => {
  let query = "SELECT * FROM UsersTable WHERE email = '" + email + "';";
  return query;
};

module.exports = {
  storeQuery: "SELECT * FROM StoreTable",
  newUser: newUserQuery,
  getUserInfo: getUserInfo
};
