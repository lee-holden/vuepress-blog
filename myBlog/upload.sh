#!/usr/bin/env sh
set -e

npm run build
cd public
git init 
git remote add blog git@106.13.229.31:/home/git/repos/blog.git
git add .
git commit -m "deploy"
git push blog master -f
cd -
