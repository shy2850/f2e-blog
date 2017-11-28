title: Zabbix创建触发器
keywords: zabbix
description: 根据已经完成的监控项数据创建触发器
date: 2017/11/28

# Zabbix创建触发器
触发器的主要作用是通过监听监控项数据变化，触发监控状态修改的行为工具

创建触发器的入口和[创建监控项](../items-trigger/)是类似的

配置 -> 主机 -> 触发器

![主机创建触发器](../img/graph-link.png)

进入后点击右上角的 <a class="tag is-link">创建触发器</a>

![创建触发器表单](../img/trigger-create.png)

![触发器列表](../img/trigger-list.png)

触发器完成以后通常在 仪表盘上面就能看到相关报警了

![触发器状态](../img/trigger-active.png)

触发器完成后，我们可以通过配置一个动作，来触发状态变化时候发送邮件到个人邮箱以提醒运维人员及时登录服务器查看状态

Go: [报警配置-通过脚本发送邮件](../create-alert/)
