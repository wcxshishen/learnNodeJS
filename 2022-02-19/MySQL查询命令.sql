-- 查询的基本使用
    -- 查询所有列
    -- select * from 表名;
    -- 查询teachers中的所有信息
    select * from teachers;

    -- 条件查询
    select * from teachers where id = 1;

    -- 查询指定列
    -- select 列1, 列2, ...... from 表名;
    select name, age from teachers;
    select name, age from teachers where name = "张三";

    -- 可以使用as为列和表指定别名
    -- select 字段[as 别名]，字段[as 别名] from 表名; 别名起到展示作用
    select name as '姓名', age as '年龄' from teachers;

    -- 字段顺序,age在前，name在后。
    select age, name from teachers;

    -- 多表连接查询 select 表名.字段, ...... from 表名
    select teachers.age, teachers.name from teachers;

    -- 使用as 给表起别名
    -- select 别名.字段 ...... from 表名 as 别名;
    select s.name, s.age from students as s;

    -- 消除重复项
    -- distinct
    select distinct gender from students;

-- 条件查询
    -- 比较运算符
        -- > 大于
        -- 查询年龄大于18的学生
        select * from students where age > 18;
        -- < 小于
        -- <= 小于等于
        -- >= 大于等于
        -- = 等于
        -- !=或<>  不等于
        select * from students where age <> 18;

    -- 逻辑运算符
        -- and / between .. and ..
        -- 查询18到28之间所有学生的信息 and相当与 &&且
        select * from students where age > 18 and age < 28;
        -- 包含18到28
        select * from students where age between  18 and 28;

        -- or 相当于 || 或
        select * from teachers where age > 18 or high > 180.00;

        -- not() 不在这个范围
        select * from students where not (age > 18 and gender = 2);

-- 模糊查询（where name like 要查询的数据）
    -- like
    -- % 替换任意个
    -- _ 替换一个
    -- 查询姓名中以‘小’开头所有的学生信息
    select * from students where name like "小%";

    -- 查询姓名中有‘小’所有的学生信息
    select * from students where name like "%小%";

    -- 查询姓名为2个字的学生信息
    select * from students where name like "__";

    -- 查询有三个字的
    select * from students where name like "___";

    -- 查询至少有两个的
    select *from students where name like "__%";

-- 范围查询
    -- in(1, 3, 8) 表示在一个非连续的范围内
    -- 查询年龄为13或34的学生信息
    -- select students where age = 18 or age = 34;
    select * from students where age in (18, 30);

    -- 查询不在18或34的学生信息
    select * from students where age not in (18, 34);

    -- between ... and ... 表示在一个连续范围内
    select * from students where age between 18 and 34;

    -- not between ... and ... 
    
-- 空判断
    -- 判断是否为空 is null
    -- 查询所有身高为空的学生信息
    select * from students where height is null;

    -- 判断非空 is not null
    select * from students where height is not null;


-- 排序查询
    -- order by 字段名 升降序,  字段名 升降序, ...
    -- asc 从大到小排列，即降序。
    -- desc 从小到大排列，即升序。

    -- 查询年龄在18到34之间的男性，按照年龄降序排列
    select * from students where age between 18 and 34 and gender = 1 order by age asc;

    -- 查询年龄在18到34之间的女性，按身高降序排列
    select * from students where age between 18 and 34 and gender = '女' order by height desc;

    -- 查询年龄在18到34之间的女性，按身高降序排列，若身高相同按照年龄来排序
    select * from students where age between 18 and 34 and gender = '女' order by height desc, age asc, id desc;

-- 聚合函数
    -- 总数
    -- count

    -- 查询男性有多少人
    