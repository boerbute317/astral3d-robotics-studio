-- 初始化Astral3D数据库
CREATE DATABASE IF NOT EXISTS astral3d DEFAULT CHARSET utf8mb4;

-- 创建专用用户
CREATE USER IF NOT EXISTS 'astral'@'localhost' IDENTIFIED BY 'Astral@2025!';

-- 授权
GRANT ALL PRIVILEGES ON astral3d.* TO 'astral'@'localhost';

-- 刷新权限
FLUSH PRIVILEGES;

-- 显示结果
SHOW DATABASES;
SELECT User, Host FROM mysql.user WHERE User = 'astral'; 