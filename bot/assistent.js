var AssistantV1 = require("ibm-watson/assistant/v1");

let workspace_id = "";

var assistant = new AssistantV1({
  iam_apikey: process.env.ASSISTANT_IAM_APIKEY,
  url: process.env.ASSISTANT_URL,
  version: "2018-02-16"
});

module.exports = async text => {
  return new Promise((resolve, reject) => {
    assistant
      .message({
        input: { text: text },
        workspace_id: process.env.WORKSPACE_ID
      })
      .then(result => {
        console.log(JSON.stringify(result, null, 4));
        resolve(result);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
