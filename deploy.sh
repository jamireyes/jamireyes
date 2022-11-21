#!/usr/bin/env sh
GIT_REPO_URL=$(git config --get remote.origin.url)

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push --set-upstream -f $GIT_REPO_URL

cd -