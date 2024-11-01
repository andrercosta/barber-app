module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest",
    },
    testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.stories.{ts,tsx}"],
    coverageDirectory: "coverage",
    collectCoverage: true,
    roots: ["<rootDir>/src"],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',  // Adiciona suporte para o alias @/
        '^next/font/(.*)$': '<rootDir>/__mocks__/next/font/local.js'  // Adiciona mock para next/font
      },
    setupFilesAfterEnv: ["<rootDir>/jest/setup.ts"],
    moduleDirectories: ['node_modules', '<rootDir>/src']
  };
  