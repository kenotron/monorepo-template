module.exports = {
  pipeline: {
    typecheck: ["^typecheck"],
    build: [],
    test: ["build"],
    lint: [],
  },
  npmClient: "yarn",
};
