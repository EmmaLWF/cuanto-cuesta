/** @type { import ('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],  // Looks for .test.ts files inside a __tests__ folder
  verbose: true,
};