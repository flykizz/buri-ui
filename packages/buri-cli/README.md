# Brui Cli

## Install

#### NPM

```shell
npm i @buri-ui/cli -D
```

#### YARN

```shell
yarn add @buri-ui/cli --dev
```

## Commands

#### Build Changelog

```shell
buri changelog ./name.md
```

#### Commit Lint

```json
"husky": {
  "hooks": {
    "commit-msg": "buri commit-lint"
  }
}
```
