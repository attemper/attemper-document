# 参数

[在任务中使用参数](/feature/dispatch/job.md#参数)

## 类型

| 参数类型  | 说明     | 参数值(示例)       | 格式           |
| :-------- | -------- | ------------------ | -------------- |
| String    | 字符串   | 中国               |                |
| Boolean   | 布尔值   | `true` `false`     |                |
| Integer   | 整型     | `-2^31`到`2^31-1`  |                |
| Long      | 长整型   | `-2^63`到`2^63-1`  |                |
| Date      | 日期     | 20200101           | yyyyMMdd       |
| Time      | 时间     | 010101             | HHmmss         |
| DateTime  | 日期时间 | 20200101010101     | yyyyMMddHHmmss |
| List      | 列表     | 基本数据类型的列表 |                |
| Map       | 键值对   | 基本数据类型的 Map |                |
| Sql       | SQL 语句 | 结果集             |                |
| Gist      | 代码片段 | 代码片段的文本内容 |                |
| TradeDate | 交易日   | 20201111           | yyyyMMdd       |

部分参数类型的详细解释如下

### Sql 语句(Sql)

仅支持查询语句(`select`开头),可指定[数据源](/feature/dispatch/datasource.md)

### 代码片段(Gist)

任务中需要通过 EL 表达式注入代码片段，所以必须为需要使用的代码片段绑定参数

### 交易日(TradeDate)

在证券等行业经常有 T 日、T+1 日等说法，调度中心将其抽取为参数，可以在运行时计算该日期
