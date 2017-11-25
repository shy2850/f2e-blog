title: Zabbix 是什么
keywords: zabbix, 运维, 自动化运维
description: 介绍 zabbix 在自动化运维中的应用场景
date: 2017/11/25

# Zabbix 是什么

运维监控 的初衷就是当某些指标不符合我们预期的时候，我们能够在第一时间发现异常以便尽快处理。

所以运维监控工具的一个核心功能应该是: `定期收集被监测主体的各项指标数据、定义合理指标范围 并对异常情况进行后续操作`

Zabbix就是这样的工具

# Zabbix 有什么

1. 监控项: 定义监控基本单位，包括开启状态、指标数值、日志、名称标识等
    - 定义监控项键值
    - 监控项获取间隔
    - 历史记录
    - 来源类型
    - 关联触发器

2. 图形-聚合图形
    - 图形：根据数值型监控项的历史记录，创建数据图表
    - 聚合图形： 几个图形的聚合布局模块

3. 触发器: 通过定义监控项的合理指标范围, 定时检测监控项触发

4. 可配置告警
    - 告警用户
    - 告警媒介类型

5. 自动发现
    - 主机自动发现配置
    - 监控项发现配置

6. 主机-主机群组
    - 一台主机包括：监控项、图形、触发器、监控项自动发现等
    - 主机群组就是一系列主机的分组

7. 模板-应用集
    - 模板： 针对一个主机的一系列 监控项、图形、触发器、自动发现等配置的模型
    - 应用集： 一个模板内监控项的分组

# Zabbix 安装
[https://www.zabbix.com/documentation/3.4/zh/manual/installation/install_from_packages](https://www.zabbix.com/documentation/3.4/zh/manual/installation/install_from_packages)

> 官网文档中 RHEL/CentOS rpm安装包路径错误

> `# rpm -ivh http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-1.el7.noarch.rpm`

> 可改为

> `# rpm -ivh http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-2.el7.noarch.rpm`

# WEB 页面简单介绍 （针对 v3.4）

![Zabbix Web 页面](../img/base.png)
