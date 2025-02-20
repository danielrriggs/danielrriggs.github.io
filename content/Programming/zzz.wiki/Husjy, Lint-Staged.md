feature/lintstaged-husky-poc
nx format:check
nx format:write

.nx:
// changing   "affected": {
    "defaultBase": "main"
  },
  in .nx from master to main will run nx:check on verything vs a few files. Trying to get .nxignore / .eslintignore / .eslint's ignorePatterns working.

  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "{apps,libs}/**/*.{ts,tsx,json,md,scss,html}": [
      "nx format:write --base main",
      "npm run affected:lint -- --base main"
  }