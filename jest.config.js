module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/api/**/*.test.ts',
    '**/unit/**/*.test.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/e2e/'
  ],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: {
        module: 'commonjs'
      }
    }]
  }
};
