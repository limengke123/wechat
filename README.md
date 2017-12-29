## 微信接口调用

* 开始项目
```apple js
npm install
```
访问localhost:3030 即可
* 修改配置

根据自身微信公众号去修改配置文件中appid appsecret

* 生成access_token

访问localhost:3030/token

微信的access_token返回，生成本地文件到file下，此access_token是后续接口的必备

* 用户列表接口

访问localhost:3030/list/openid，返回微信公众号关注者openid

* 用户详情接口

访问localhost:3030/list

用openid去拿到用户详情

