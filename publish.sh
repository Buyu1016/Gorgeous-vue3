#!/usr/bin/env bash
npm config get registry
npm config set registry=https://registry.npmjs.org
echo '请进行登录相关操作：'
npm login
echo "-------publishing-------"
npm publish --no-git-checks --access public
echo "镜像源已重置"
npm config set registry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo "发布完成"
exit