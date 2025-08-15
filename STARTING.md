# 🤖 Astral3D Editor with Rocksi

> **3D机器人仿真与可视化编程平台** - 支持URDF机器人模型的Web端仿真环境

## ✨ 项目特性

- 🎯 **3D机器人可视化** - 基于Three.js的实时渲染
- 🦾 **多机器人支持** - 机械臂 (Franka、Niryo、Sawyer、KUKA iiwa14) + 移动机器人 (Husky)
- 🧩 **可视化编程** - Blockly拖拽式编程界面
- ⚙️ **物理仿真** - 集成Cannon-es物理引擎
- 📁 **URDF支持** - 标准机器人描述文件格式

---


### 🛠️ 技术栈 & 系统要求

**前端：**
- 🟢 **Vue 3** + **Vite 5** - 现代化构建工具
- 📡 **Axios** + **WebSocket** - HTTP & 实时通信
- 🎨 **Three.js** (3D引擎) + **Cannon-es** (物理仿真)
- 🧩 **Rocksi积木编程** - 基于Blockly + URDF机器人加载

**后端：**
- 🚀 **Go 1.20+** + **Beego 2.x** - 高性能Web框架
- 🗄️ **MySQL 8.x** (utf8mb4) - 关系型数据库
- 🔧 **Bee开发工具** - 热重载开发环境

**环境要求：**
- **Node.js** 16+ (推荐18+)
- **MySQL** 5.7+ 或 8.0+ (推荐8.0+)
- **Go** 1.16+ (推荐1.20+)
- **现代浏览器** (Chrome 90+、Firefox 88+、Edge 90+)

### 第1步：初始化数据库

**选项A：使用提供的SQL文件（推荐）**
```bash
# 使用sudo权限运行（避免MySQL权限问题）
sudo mysql < init_database.sql
```

**选项B：手动创建**
```bash
sudo mysql -e "
CREATE DATABASE astral3d DEFAULT CHARSET utf8mb4;
CREATE USER 'astral'@'localhost' IDENTIFIED BY 'Astral@2025#';
GRANT ALL PRIVILEGES ON astral3d.* TO 'astral'@'localhost';
FLUSH PRIVILEGES;
"
```

### 第2步：启动后端服务

**选项A：连续执行（推荐）**
```bash
cd astral3d-editor-with-rocksi-main/Astral3DEditorGoBack && pwd && echo "=== Files check ===" && ls go.mod main.go && echo "=== Starting bee immediately ===" && bee run
```

**选项B：分步执行**
```bash
cd astral3d-editor-with-rocksi-main/Astral3DEditorGoBack
pwd  # 确认当前目录
ls go.mod main.go  # 验证关键文件存在
bee run
```

**后端启动成功标志：**
```
[INFO] [app.go:36] 🚀 Server running on http://127.0.0.1:8080
```

### 第3步：启动前端开发服务器

**新开终端窗口，选择以下任一方式：**

**选项A：连续执行（推荐）**
```bash
cd astral3d-editor-with-rocksi-main/Astral3DEditor && pwd && echo "=== Starting frontend ===" && npm run dev
```

**选项B：分步执行**
```bash
cd astral3d-editor-with-rocksi-main/Astral3DEditor
pwd  # 确认当前目录
npm run dev
```

**前端启动成功标志：**
```
Local:   http://127.0.0.1:3000/
Network: http://192.168.x.x:3000/
```

---

## 🌐 访问地址

| 服务 | 地址 | 说明 |
|-----|------|------|
| **前端主界面** | http://127.0.0.1:3000 | Vue3 + Cesium 3D编辑器 |
| **机器人仿真** | http://127.0.0.1:8080/rocksi/ | Blockly可视化编程 |
| **后端API** | http://127.0.0.1:8080 | Go + Beego REST API |

## 🤖 支持的机器人

### 直接访问机器人仿真

| 机器人类型 | 访问链接 | 说明 |
|-----------|----------|------|
| **Franka Panda** | http://127.0.0.1:8080/rocksi/index.html?robot=franka | 7自由度协作机械臂 |
| **Niryo One** | http://127.0.0.1:8080/rocksi/index.html?robot=niryo | 6自由度教育机械臂 |
| **Rethink Sawyer** | http://127.0.0.1:8080/rocksi/index.html?robot=sawyer | 7自由度协作机械臂 |
| **KUKA iiwa14** | http://127.0.0.1:8080/rocksi/index.html?robot=kukaiiwa14 | 7自由度工业机械臂 |
| **Clearpath Husky** | http://127.0.0.1:8080/rocksi/index.html?robot=husky | 四轮移动机器人 |

### 操作说明

**机械臂操作：**
- 🖱️ **鼠标拖拽** - 交互式关节控制
- 🧩 **Blockly编程** - Moving、Objects、Logic、Extras类别
- 🎯 **逆运动学** - 末端位置控制
- 🤏 **夹爪控制** - 抓取物体仿真

**移动机器人操作：**
- 🧩 **Blockly编程** - Mobile Movement专用类别
- 🔄 **运动控制** - 前进、后退、转向、停止
- ⚙️ **轮速控制** - 差动驱动参数调节
- 📍 **位置导航** - 目标点移动

---

## 🔧 故障排除

### 常见问题

**1. 数据库连接失败**
```bash
# 检查MySQL服务状态
sudo systemctl status mysql
sudo systemctl start mysql

# 验证数据库和用户创建
sudo mysql -e "SHOW DATABASES; SELECT User, Host FROM mysql.user WHERE User='astral';"
```

**2. 后端启动失败 - 端口占用**
```bash
# 查看8080端口占用
sudo lsof -i :8080
# 杀死占用进程
sudo kill -9 <PID>
```

**3. 前端启动失败 - 依赖问题**
```bash
cd astral3d-editor-with-rocksi-main/Astral3DEditor
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**4. 机器人模型不显示**
- 强制刷新浏览器 (`Ctrl + Shift + R`)
- 检查控制台错误信息 (`F12`)
- 确保后端服务正常运行

**5. MySQL权限问题**
```bash
# 如果遇到权限错误，使用sudo
sudo mysql < astral3d-editor-with-rocksi-main/init_database.sql

# 或重置MySQL root密码
sudo mysql_secure_installation
```

### 端口配置

如需修改默认端口：

**后端端口** (默认8080):
```bash
# 编辑 astral3d-editor-with-rocksi-main/Astral3DEditorGoBack/conf/app.conf
httpport = 8080
```

**前端端口** (默认3000):
```bash
# 编辑 astral3d-editor-with-rocksi-main/Astral3DEditor/package.json
"dev": "vite --port 3000"
```

---

## 📖 详细文档

- 📚 **URDF机器人集成指南** - [URDF_ROBOT_INTEGRATION_GUIDE.md](./URDF_ROBOT_INTEGRATION_GUIDE.md)
- 🏗️ **项目架构说明** - [BACKEND_INDEPENDENT_DEVELOPMENT_GUIDE.md](./BACKEND_INDEPENDENT_DEVELOPMENT_GUIDE.md)

---

## 🎯 项目架构

```
astral3d-editor-with-rocksi/
├── Astral3DEditor/           # Vue3前端 (端口3000)
│   ├── src/components/       # 3D编辑器组件
│   ├── src/cesium/          # Cesium地图集成
│   └── package.json
├── Astral3DEditorGoBack/     # Go后端 (端口8080)
│   ├── controllers/         # API控制器
│   ├── models/             # 数据模型
│   ├── static/rocksi/      # Rocksi仿真静态文件
│   └── conf/app.conf       # 配置文件
├── Rocksi-master/           # 机器人仿真核心
│   ├── src/simulator/      # 3D仿真引擎
│   ├── src/editor/         # Blockly编程界面
│   └── assets/models/      # 机器人URDF模型
└── init_database.sql       # 数据库初始化脚本
```

---

## 🎮 使用示例

### 1. 机械臂编程示例

1. 访问：http://127.0.0.1:8080/rocksi/index.html?robot=franka
2. 拖拽Blockly块创建程序：
   ```
   📦 Start
   ├── 🏠 Default pose
   ├── 🎯 Move to position [0.5, 0, 0.5]
   ├── 🤏 Gripper open
   └── 🏁 End
   ```
3. 点击 ▶️ 运行按钮执行程序

### 2. 移动机器人编程示例

1. 访问：http://127.0.0.1:8080/rocksi/index.html?robot=husky
2. 使用Mobile Movement块编程：
   ```
   📦 Start
   ├── 🔄 Move forward 2米 速度0.5m/s
   ├── ↪️ Turn left 90度 速度0.5rad/s
   ├── 🔄 Move forward 1米 速度0.5m/s
   └── ⏹️ Stop
   ```

---

## 📞 技术支持

**问题反馈：**
- 🐛 功能异常 - 请提供控制台错误信息
- 💡 功能建议 - 欢迎提出改进意见
- 📖 文档问题 - 参考详细集成指南

**系统信息收集：**
```bash
# 收集系统信息（用于问题诊断）
echo "Node: $(node --version)"
echo "npm: $(npm --version)" 
echo "MySQL: $(mysql --version)"
echo "Go: $(go version)"
echo "OS: $(uname -a)"
```

---

**🚀 项目启动完成！开始您的机器人仿真之旅吧！**
