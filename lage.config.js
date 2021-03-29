module.exports = {
  pipeline: {
    typecheck: [],
    build: ["^build"],
    test: ["build"],
    lint: [],
  },
  npmClient: "yarn",
};
