const sendJSONResponse = (status, content) => (req, res) => {
  res.status(status);
  res.json(content);
};

const notAuthorized = (req, res) => sendJSONResponse(401, { error: { 
  message: 'You do not have privileges to edit this account' 
}})(req, res);

module.exports = {
  sendJSONResponse,
  notAuthorized,
};
