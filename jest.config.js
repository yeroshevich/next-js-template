const { pathsToModuleNameMapper } = require('ts-jest');
const { defaults } = require('jest-config');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/api/(.*)$': '<rootDir>/src/api/$1',
		'^@/app/(.*)$': '<rootDir>/src/app/$1',
		'^@/assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@/constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/models/(.*)$': '<rootDir>/src/models/$1',
		'^@/providers/(.*)$': '<rootDir>/src/providers/$1',
		'^@/stores/(.*)$': '<rootDir>/src/stores/$1',
		'^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/components/widgets/(.*)$": "<rootDir>/src/components/widgets/$1",
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
