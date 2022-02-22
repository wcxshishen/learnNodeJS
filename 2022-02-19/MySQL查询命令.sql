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
    -- asc 从小到大排列，即升序。
    -- desc 从大到小排列，即降序。

    -- 查询年龄在18到34之间的男性，按照年龄降序排列
    select * from students where age between 18 and 34 and gender = 1 order by age asc;

    -- 查询年龄在18到34之间的女性，按身高降序排列
    select * from students where age between 18 and 34 and gender = '女' order by height desc;

    -- 查询年龄在18到34之间的女性，按身高降序排列，若身高相同按照年龄来排序
    select * from students where age between 18 and 34 and gender = '女' order by height desc, age asc, id desc;

-- 聚合函数
    -- 查询总数
    -- count

    -- 查询男性有多少人
    select count(*) from students where gender = 1;

    -- 最大值
    -- max
    -- 查询最大的年龄
    select max(age) from students;

    -- 最小值
    -- min
    select min(age) from students;

    -- 求和
    -- sum
    -- 求所有年龄的总和
    select sum(age) from students;

    -- 平均值
    -- avg
    select avg(age) from students;

    -- 计算平均值
    select sum(age)/count(*) as '平均值' from students;

    -- 四舍五入
    select round(sum(age)/count(*), 2) from students;
    select round(avg(age), 2) from students;

    # 聚合函数计算时并不会把null计算进去;
    select round(sum(height)/count(*), 2) from students where gender = 1; # 将null算进去了
    select round(avg(height), 2) from students where gender = 1;

-- 分组查询

    -- 分组
    -- select 分组的字段 from 表名 group by 分组字段;

    -- group by
    -- 按照性别分组，查询所有性别
    -- 可以使用分组的方法清除重复记录
    select gender from students group by gender;

    -- 计算每种性别中的人数
    select gender, count(*) from students group by gender;

    -- 看到每种，没类 就可以用分组
    -- 以什么分组前面就展示什么

    -- group_concat(...), 合并同组的字段
    -- 查询同种性别中的姓名
    select gender,group_concat(name) from students group by gender;

    -- 查询每组性别的平均年龄
    select gender, avg(age) from students group by gender;

    -- having(注意having和group by 连用，having后通常也要跟聚合函数),分组的条件
    -- 聚合函数如果作为条件，只能和having配合，不能和where配合
    -- 查询平均年龄超过30岁的性别，以及姓名
    select gender, avg(age), group_concat(name) from students group by gender having avg(age) > 30;

    -- 查询每种性别中的人数多于两个的信息
    select gender, count(*), group_concat(name) from students group by gender having count(*) > 2;

-- 分页查询
    -- limit start, count
    -- limit 放在最后面(注意)
    -- limit (要显示第几页-1) * 每页分多少个, 每页分多少个

    -- 查询前5个数据
    select * from students limit 5;

    -- 每页分2个，要显示第一页 （查询前两个数据）
    select * from students limit 2;

    -- 通用写法
    select * from students limit 0, 2;

    -- 每页有两个要显示第二页
    select * from students limit 2, 2;

    -- 每页分4个展示第二页
    select * from students limit 4, 4;

    -- 每页分两个，显示第6页信息，按照年龄从小到大排序
    -- 先整体排序，在进行分页
    select * from students order by age desc limit 10, 2;

-- 连接 （表与表之间的连接，为了更好的查出有效数据）
    -- inner join ... on
    -- selevt 表a inner join 表b;
    -- 查询 有能够对应班级的学生以及班级信息
    select * from students inner join classes on students.cls_id = classes.id;

    select students.name as "姓名", classes.name as "班级" from students inner join classes on students.cls_id = classes.id;

    -- 查询有能够对应班级班级学生以及班级信息，显示学生的所有信息，以及班级名称
    select s.*, c.name  from students as s inner join classes as c on s.cls_id = c.id;

    -- 在以上查询中将班级名显示在第一列
    select  c.name as "班级", s.* from students as s inner join classes as c on s.cls_id = c.id;

    -- 在以上查询中按照班级进行排序
    select  c.name as "班级", s.* from students as s inner join classes as c on s.cls_id = c.id order by c.name desc; 

    -- 当是同一个班级的时候，按照学生的id进行大小排序
    -- 若班级相同按照id排序
    select  c.name as "班级", s.* from students as s inner join classes as c on s.cls_id = c.id order by c.name, s.id asc ; 

-- 子查询,一个查询的结果作为另一个查询的一部分
    -- 标量子查询：子查询返回的结果是一个数据（一行一列）
    -- 列子查询：返回的结果是一列多行
    -- 行子查询：返回的结果是一行多列

    -- 查询高于平均身高的信息
    select avg(height) from students;

    select * from students where height > ( select avg(height) from students ); 

    -- 查询学生的班级号能够对应学生的名字
    select group_concat(s.name) from students as s inner join classes as c on s.cls_id = c.id;
    -- 子查询做法
    select id from classes;
    select s.name from students as s where s.cls_id in (select id from classes);