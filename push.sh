#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


# rm ./lib/style.umd.js
webpack --config webpack.config.pro.js

webpack --config webpack.config.min.js

node changeVersion.js

npm publish

git add -A

git commit -m '脚本提交'

git push -u origin master

cd -