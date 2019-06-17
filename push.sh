#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

if [ -z $1 ];then  
  echo "params is necessary"   
  exit 1
fi    

webpack --config webpack.config.pro.js

webpack --config webpack.config.min.js

rm ./lib/style.umd.js

node changeVersion.js

npm publish

git add -A

git commit -m $0

git push -u origin master
