#!/bin/sh
if [ $DEPLOY_ENV = 'dev' ]
then
  sed -i 's,<dist>,/root/app/dist,' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's,<capi_url>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'test' ]
then
  sed -i 's,<dist>,/root/app/dist,' /etc/nginx/conf.d/nginx_app.conf
  if [ $PROJECT_ID -eq '8805' ]
  then
    sed -i 's,<capi_url>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
  else
    sed -i 's,<capi_url>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
  fi
elif [ $DEPLOY_ENV = 'pre' ]
then
  sed -i 's,<dist>,/root/app/dist,' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's,<capi_url>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'prd' ]
then
  sed -i 's,<dist>,/root/app/app,' /etc/nginx/conf.d/nginx_app.conf
  sed -i 's,<capi_url>,https://yxbservice-test.zhongan.io,' /etc/nginx/conf.d/nginx_app.conf
fi

mv nginx.default.conf /etc/nginx/conf.d/default.conf
sed -i 's/www-data/root/' /etc/nginx/nginx.conf

nginx -g "daemon off"\; # 启动 nginx