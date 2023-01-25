# Gendiff

## Description

Gendiff is a CLI command for generating diff between two json or yaml files. It features three formatting styles: stylish, plain for differences and json for diff structure.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/Dend3lion/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Dend3lion/frontend-project-lvl2/actions)
[![Node.js CI](https://github.com/Dend3lion/frontend-project-lvl2/actions/workflows/node.js.yml/badge.svg)](https://github.com/Dend3lion/frontend-project-lvl2/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/b22bce92a36ab33728ba/maintainability)](https://codeclimate.com/github/Dend3lion/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b22bce92a36ab33728ba/test_coverage)](https://codeclimate.com/github/Dend3lion/frontend-project-lvl2/test_coverage)

## Example

[![asciicast](https://asciinema.org/a/Xphd0VCHjy7E7c1BGkjJBN4yu.svg)](https://asciinema.org/a/Xphd0VCHjy7E7c1BGkjJBN4yu)

## Requirements

Installed Node.JS version > 14.0

## Setup

```bash
make install
```

## Run tests

```bash
make tests
```

## Usage

```bash
npm link
```

Help:

```bash
gendiff -h
```

Get diff in stylish mode:

```bash
gendiff <filename1> <filename2>
```

Get diff in plain mode:

```bash
gendiff <filename1> <filename2> --format plain
```

Get diff in json mode:

```bash
gendiff <filename1> <filename2> --format json
```
