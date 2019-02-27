#!/bin/bash
#
# Installation guideline:
# cd ./.git/hooks
# ln -s ../../pre-push.sh pre-push && chmod +x pre-push
#

[[ -z "$GIT_DIR" ]] && GIT_DIR='.';
CHANGES=`git status --porcelain`
if [[ ! -z "$CHANGES" ]];
then
  echo "Putting local changes to stash...";
  git stash --quiet -u;
fi;

echo "Checking if en.json changed...";
node ./node_modules/crowdin-helper/crowdin-helper pre-push

echo "TSLint check...";
npm run lint && echo -e "$All fine!${NC}"
RESULT=$?;

if [[ ! -z "$CHANGES" ]];
then
    echo "Getting local changes from stash...";
    git stash pop --quiet;
fi;

exit $RESULT;