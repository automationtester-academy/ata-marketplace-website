module.exports = {
  // ...other Jest configurations
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg|ico)$': '<rootDir>/fileMock.js', // If you also have image imports
  },

  testEnvironment: 'jsdom',
  
};
