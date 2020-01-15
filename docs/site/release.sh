#!/usr/bin/env sh
buri-cli build-site

superman-cdn /buri ./site/*.js

rm -rf site/*.js

gh-pages -d site --add
