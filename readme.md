# 功能
- 将自己加入telegram的所有群和频道(不包括机器人/用户对话等私密对话)的所有消息实时保存到数据库, 包括时间/内容/发表用户/转发回复/文件信息等等
- 可用于中文分词检索, 用户分析, 关键词触发提醒等等
- 保护隐私, 不记录下载所使用账号的相关信息
- 大约1万条消息1MB

# 教程
1. 前往 https://my.telegram.org 获取 api_id 和 api_hash
2. 安装 mongodb
3. 将 config_example.json 改名为 config.json 并将其中的参数修改为自己的信息
4. 安装 python3, 执行 pip install -r requirements.txt 安装相关包
5. 执行 python -u data_to_mongo.py 实时获取群和频道消息到数据库. 终止后再运行会自动接着数据库中最新消息接着下载
   - 消息存储例子: <img src="message.png" width = "320" alt="" align=center />
6. 获取之后修改 search.py 中的检索正则, 然后执行 python search.py 测试检索
   - 例如: <img src="search.png" width = "320" alt="" align=center />
7. 用搜索到的 message 整句在客户端中检索找到上下文

# 计划
- 扩充分词等字段, 用于快速检索
- 其他分析, 例如群每日活跃/用户活跃/话题趋势等等
