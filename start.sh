#!/bin/bash

if [ $DEPLOY_ENV = 'dev' ]
then
  sed -i 's,<urlA>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'test' ]
then
  sed -i 's,<urlA>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'pre' ]
then
  sed -i 's,<urlA>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'prd' ]
then
  sed -i 's,<urlA>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
fi

mv /etc/nginx/conf.d/nginx_app.conf /etc/nginx/conf.d/default.conf
sed -i 's/www-data/root/' /etc/nginx/nginx.conf

nginx -g "daemon off"\; # 启动 nginx

# sed -i "s/<SERVER_URL>/http:\/\/$SERVER_URL/" /etc/nginx/conf.d/nginx_app.conf

# sed -i 's/www-data/root/' /etc/nginx/nginx.conf
