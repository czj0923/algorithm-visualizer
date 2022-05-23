module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "chore",
        "revert",
      ],
    ],
    "subject-max-length": [1, "always", 150],
  },
};
