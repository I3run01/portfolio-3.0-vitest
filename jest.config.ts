export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: [
      "<rootDir>src/test//support/setupTests.ts"
   ],
    transform: {
      "^.+\\.tsx?$": "ts-jest" // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
      '^src/(.*)$': '<rootDir>/src/$1'
    },
  };
  