# vite-learn

启动项目: pnpm start



1.  `pnpm changeset` 更改版本级别，填写版本变更 changelog

2.  `pnpm commit` 消费 changelog，更改版本号

2.  `pnpm log` 

4.  `npm_config_registry=http://81.70.168.49:8081/repository/npm-hosted/ pnpm publish ` 发布到 nexus

6.  去 nexus 查看是否存在包，也可在项目中安装依赖，测试使用。