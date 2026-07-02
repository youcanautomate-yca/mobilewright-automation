# MobileWright Automation

A MobileWright automation repository for iOS mobile app testing using MobileWright.

## Project Overview

This repository contains a MobileWright test suite configured for iOS using the `mobilewright.config.ts` file. The current setup targets the `com.Imen.ecommerceApp` bundle ID and uses the `./tests` directory for test files.

MobileWright YouTube playlist:

https://www.youtube.com/playlist?list=PLLz4P06JoExtiTX5RO0JiBHL2K5LwhVoK

## Key Files

- `mobilewright.config.ts` - MobileWright configuration file
- `package.json` - Node package configuration and development dependencies
- `tests/` - Test suite directory
- `.gitignore` - Ignore rules for Node, Playwright, and generated files

## Dependencies

- `mobilewright`
- `@mobilewright/test`
- `@types/node`

These dependencies are installed via npm.

## Installation

```bash
npm install
```

## Running Tests

Update the `bundleId` and `deviceName` in `mobilewright.config.ts` as needed, then run:

```bash
npx mobilewright test
```

## Notes

- `node_modules/`, `playwright-report/`, and `test-results/` are excluded from git tracking via `.gitignore`.
- The repository is already initialized with git and connected to `git@github.com:youcanautomate-yca/mobilewright-automation.git`.

## Helpful Resources


