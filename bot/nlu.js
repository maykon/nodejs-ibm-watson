const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");

const nlu = new NaturalLanguageUnderstandingV1({
  iam_apikey: process.env.NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY,
  version: "2018-04-05",
  url: process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL
});

module.exports = async sentence => {
  return new Promise((resolve, reject) => {
    nlu.analyze(
      {
        html: sentence,
        features: {
          concepts: {},
          keywords: {},
          categories: {},
          emotion: {},
          entities: {},
          metadata: {},
          relations: {},
          semantic_roles: {},
          sentiment: {},
          syntax: {}
        }
      },
      (error, response) => {
        if (error) reject(error);
        resolve(response);
      }
    );
  });
};
