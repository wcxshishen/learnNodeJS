-- 01-mysql 数据库操作

    -- 连接数据库
    mysql -u root -p

    -- 退出数据库
    exit

    -- 显示版本
    select version();

    -- 查看当前使用的数据库
    select database();

    -- 查看所有数据库
    show databases;

    -- 创建数据库
    -- create database 数据库名 charset=utf8;
    create database wcx66 charset=utf8;

    -- 使用数据库
    -- use 数据库名
    use wcx66;

    -- 删除数据库
    -- drop database 数据库名;


-- 02. 数据表结构

    -- 查看当前数据中所有表
    show tables;

    -- 创建表
    -- int unsigned 无符号整形
    -- decimal(5,2) eg:183.23
    -- enum 枚举 enum('男','女',......) default '男'
    -- auto_increment 表示自动增长跟主键在一起
    -- not null 表示不能为空
    -- primary key 表示主键
    -- default 默认值
    -- create table 数据表名字 (字段 类型 约束[, 字段 类型 约束]);
    create table test(name varchar(30) not null, age int unsigned);

   
    -- 查看表结构
    -- desc 数据表名称
    desc test;

    -- 创建 teacher 表(有id、name、age、high (decimal)、gender (enum)、cls_id这些字段)
    create table teachers(id int unsigned primary key auto_increment,name varchar(30) not null,age int unsigned not null,high decimal(3,2) not null,gender enum('男', '女', '保密', '中性') default '男', cls_id int unsigned);

    -- 查看表的创建语句
    -- show create table 表名;
    show create table teachers;


    -- 修改表 
    -- 添加字段 mascot
    -- alter table 表名 modify 列名 类型及约束
    alter table teachers add mascot varchar(100) not null;

    -- 修改字段，不重命名
    -- alter table 表名 modify 列名 类型及约束
    alter table teachers modify mascot varchar(30);

    -- 修改字段，重命名
    -- alter table 表名 change 原名 新名 类型及约束
    alter table teachers change mascot mascots int unsigned;

    -- 删除字段
    -- alter table 表名 drop 字段名;
    alter table teachers drop mascots;

    -- 删除表
    -- drop table 表名
    -- 删除库
    -- drop database 库名

-- 03. 增删改查
    -- 全列插入
    -- insert into 表名（字段1，字段2） values（值1，值2）
    -- 主键字段可以用 0 null default 来占位
    insert into classes(id, name) values(1, 'qd22');
    insert into classes(id, name) values(3, 'qd23');
    -- 主键给0时，先当与空，切根据最大的主键值加一！
    insert into classes(id, name) values(0, 'qd24');


    -- 全部插入
    -- 向teachers表中添加一个学生信息
    -- insert into 表名 values(值1，值2，值3，。。。。);
    insert into teachers values(1, '张三', 18, 1.83, '男', 1);

    -- 部分插入
    -- insert into 表名(列1, ......) values(值1, .......);
    insert into teachers(name) values('李四');
    insert into teachers(name, age) values('王五', 20);

    -- 多行插入
    -- insert into 表名(列1, ......) values(值1, ......),(值1, ......);
    insert into teachers(name) values('铁蛋'),('wcx');


-- 修改
-- update 表名 set 列1=值1, 列2=值2, ..... where 条件
    -- 全部修改
    update teachers set age = 16;

    -- 按条件修改
    update teachers set age = 20 where id = 3;

    -- 按条件修改多个值
    update teachers set age = 99, high = 1.80 where name = '李四';


-- 删除
    -- 物理删除,不可逆的真正删了
    -- delete from 表名 where 条件
    delete from teachers where name = 'wcx';

    -- 逻辑删除
    -- 用一个字段来表示，这条信息是否已经不再使用
    -- alter table 表名 add 字段名 类型 default 默认值;
    alter table teachers add is_delete bit default 0;
    -- update 表名 set 字段名=xxxx where 条件;\
    update teachers set is_delete = 1 where id = 1;