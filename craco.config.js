/* eslint-disable */ 
const path = require('path');

module.exports = {
  parser: '',
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
    }
  },
  eslint: {
    configure: {
      rules: {
        'no-unused-vars': 'error',
        'react/jsx-no-duplicate-props': 'error'
      }
    }
  }
};
