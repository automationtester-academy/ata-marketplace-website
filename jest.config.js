module.exports = {
  
  "testEnvironment": "jsdom",

  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif)$": "<rootDir>/src/__mocks__/fileMock.js"
  },

  // Other Jest configurations...
};
