module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["next/babel","custom"],
  ignorePatterns: ["!**/*"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
