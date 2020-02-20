# 盎司一起 - H5

```bash
# 本地build之后，再提交
yarn build

# 启动本地服务(build之后的文件)
# PWA: 访问http://127.0.0.1:8080可以安装
# npm install http-server -g
# or `npx http-server`
yarn serve
```
baseURL: http://aliyun.eagle711.win:8082
--------------------------------------------------
方法: POST
接口名称：/total_user
说明: 领取用户总数
参数：
    header: "token":"111111"
返回值:
    {"total":2}
-------------------------------------------------
方法: POST
接口名称：/verify_code
说明: 验证码请求
参数：{"phone":"18012347799"}
返回值: {"msg":"SMS sent","verify_code":"112233"}
--------------------------------------------------
方法: POST
接口名称：/login
说明: 登录
参数： {"phone":"18012347799","verify_code":"112233"}
返回值: {"token":"111111"}
--------------------------------------------------
方法: POST
接口名称：/receipt_address
说明：付款地址
参数：
    header: "token":"1111111111"
    body: {}
返回值:  {"address":"0x1234..."}
--------------------------------------------------
方法: POST
接口名称： /update_token_address
说明:eth钱包地址
参数：
    header: "token":"11111111"
    body: {"address":"0x1123..."}
返回值:
    {"msg":"OK"}
--------------------------------------------------
方法: POST
接口名称：/complete_pay
说明:支付完成
参数：
    header: "token":"1111111"
返回值:
    {"msg":"OK"}
--------------------------------------------------
方法: POST
接口名称：/transfer_badge_link
说明: 返回"前往查看链接"
参数：
    header: "token":"111111"
返回值:
    {"link":"http://etherscan.io/tx/0x1111234"}
--------------------------------------------------
方法: POST
接口名称：/user_status
用户付款状态
参数：
    header: "token":"111111"
返回值:
    {"status":0|1|2}
返回值说明:
    0：未支付
    1：支付验证中
    2：支付完成