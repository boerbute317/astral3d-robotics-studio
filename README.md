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

---

# 🤖 Astral3D Editor - URDF机器人集成完整指南

> **Astral3D Editor with Rocksi** - 基于Web的3D机器人仿真和可视化编程平台

## 📋 目录

- [项目概述](#-项目概述)
- [技术栈](#-技术栈)
- [支持的机器人类型](#-支持的机器人类型)
- [通用准备工作](#-通用准备工作)
- [添加新机械臂](#-添加新机械臂)
- [添加新移动机器人](#-添加新移动机器人)
- [关键注意事项](#-关键注意事项)
- [常见问题解决](#-常见问题解决)
- [调试技巧](#-调试技巧)
- [完整检查清单](#-完整检查清单)

---

## 🎯 项目概述

**Astral3D Editor with Rocksi** 是一个强大的Web平台，支持：

- **3D机器人可视化**：基于Three.js的实时3D渲染
- **URDF模型加载**：支持标准URDF格式的机器人描述文件
- **可视化编程**：使用Blockly进行拖拽式机器人编程
- **物理仿真**：集成Cannon-es物理引擎
- **多机器人支持**：机械臂和移动机器人

## 🛠 技术栈

### 前端 (AstralDEditor)
- **Vue 3** + **Vite** - 主应用框架
- **Three.js** - 3D图形渲染
- **Cesium** - 地理信息可视化
- **TypeScript** - 类型安全

### 仿真核心 (Rocksi)
- **Three.js** - 3D场景管理
- **Cannon-es** - 物理仿真引擎
- **Blockly** - 可视化编程界面
- **URDF-loader** - 机器人模型加载器

### 后端 (AstralEditorGoBack)
- **Go** + **Beego框架** - 服务器端
- **MySQL** - 数据存储
- **WebSocket** - 实时通信

---

## 🤖 支持的机器人类型

### 机械臂 (Manipulator)
- **Franka Emika Panda** - 7自由度协作机械臂
- **Niryo One** - 6自由度教育机械臂  
- **Rethink Sawyer** - 7自由度协作机械臂
- **KUKA iiwa14** - 7自由度工业机械臂

### 移动机器人 (Mobile Robot)
- **Clearpath Husky** - 四轮差动驱动移动平台

### 特性对比

| 机器人类型 | Blockly操作块 | 主要功能 | IK支持 |
|----------|-------------|---------|-------|
| 机械臂 | Moving, Objects, Gripper | 关节控制、末端定位、抓取 | ✅ |
| 移动机器人 | Mobile Movement | 运动控制、导航、轮速控制 | ❌ |

---

## 📦 通用准备工作

### 1. URDF文件格式要求

```diff
✅ 支持的网格格式：
+ .dae (COLLADA) - 推荐，完全支持
+ .stl - 基本支持

❌ 不支持的格式：  
- .obj - 会报"No loader available"错误
- .mjcf/.xml (MuJoCo) - 非URDF格式
```

### 2. 标准目录结构

```
Rocksi-master/assets/models/机器人名称/
├── robots/
│   └── robot.urdf           # 主URDF描述文件
├── meshes/
│   ├── visual/              # 视觉网格文件（.dae推荐）
│   │   ├── base_link.dae
│   │   ├── link1.dae
│   │   └── ...
│   └── collision/           # 碰撞网格（可选）
├── textures/                # 材质纹理（可选）
└── config/                  # 配置文件（可选）
```

### 3. URDF路径修改

URDF文件中的网格路径需要从ROS包路径修改为相对路径：

```xml
<!-- ❌ 修改前（ROS package路径） -->
<mesh filename="package://robot_description/meshes/visual/base_link.dae"/>

<!-- ✅ 修改后（相对路径） -->
<mesh filename="../meshes/visual/base_link.dae"/>
```

---

## 🦾 添加新机械臂

### 步骤1：准备URDF文件和资源

1. **获取完整的机器人包**：
   ```bash
   # 示例：下载KUKA iiwa14
   git clone https://github.com/robotics-toolbox/robotics-toolbox
   cp -r robotics-toolbox/kuka_description/* Rocksi-master/assets/models/kuka_iiwa14/
   ```

2. **验证网格格式**：
   ```bash
   find Rocksi-master/assets/models/kuka_iiwa14/ -name "*.obj"
   # 如果有.obj文件，需要转换为.dae格式
   ```

3. **组织目录结构**：
   ```bash
   mkdir -p Rocksi-master/assets/models/kuka_iiwa14/robots
   mv Rocksi-master/assets/models/kuka_iiwa14/*.urdf Rocksi-master/assets/models/kuka_iiwa14/robots/
   ```

### 步骤2：修改URDF文件

编辑 `robots/robot.urdf` 文件：

```xml
<?xml version="1.0"?>
<robot name="iiwa14">
  <!-- 根链接 -->
  <link name="base_link">
    <visual>
      <geometry>
        <!-- 修改路径：package:// → 相对路径 -->
        <mesh filename="../meshes/visual/base.dae" scale="1 1 1"/>
      </geometry>
      <material name="Grey">
        <color rgba="0.7 0.7 0.7 1"/>
      </material>
    </visual>
  </link>

  <!-- 关节定义 -->
  <joint name="joint_a1" type="revolute">
    <parent link="base_link"/>
    <child link="link_1"/>
    <origin xyz="0 0 0.15" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
    <limit lower="-2.967" upper="2.967" effort="320" velocity="1.71"/>
  </joint>

  <!-- 更多链接和关节... -->
</robot>
```

### 步骤3：创建机器人配置文件

在 `Rocksi-master/src/simulator/robots/` 创建配置文件：

```javascript
// 文件：kuka_iiwa14.js
import Robot from './robotbase';

class KUKAiiwa14 extends Robot {
    constructor() {
        super("KUKA iiwa14", "kuka_iiwa14", "iiwa14.urdf");

        // 基础配置
        this.robotRoot = "base_link";           // 机器人根链接
        this.handRoot = "tool0";                // 末端执行器链接
        this.modelScale = 1;                    // 模型缩放

        // 默认关节角度（弧度）
        this.defaultPose = {
            joint_a1: 0.0,
            joint_a2: 0.0,
            joint_a3: 0.0,
            joint_a4: 0.0,
            joint_a5: 0.0,
            joint_a6: 0.0,
            joint_a7: 0.0,
        };

        // 关节分组
        this.partNames = {
            arm: ["joint_a1", "joint_a2", "joint_a3", "joint_a4", "joint_a5", "joint_a6", "joint_a7"],
            hand: [],  // 如果有夹爪，在这里定义
        };

        // 工具中心点(TCP)配置
        this.tcp.parent = "tool0";
        this.tcp.position = [0, 0, 0];

        // 逆运动学支持的关节
        this.ikEnabled = ["joint_a1", "joint_a2", "joint_a3", "joint_a4", "joint_a5", "joint_a6", "joint_a7"];

        // 关节角度限制（度）
        this.interactionJointLimits = {
            joint_a1: [-170, 170],
            joint_a2: [-120, 120],
            joint_a3: [-170, 170],
            joint_a4: [-120, 120],
            joint_a5: [-170, 170],
            joint_a6: [-120, 120],
            joint_a7: [-175, 175],
        };
    }
}

const kukaIIWA14 = new KUKAiiwa14();
export default kukaIIWA14;
```

### 步骤4：注册到场景系统

编辑 `Rocksi-master/src/simulator/scene.js`：

```javascript
// 导入新机器人
import franka from './robots/franka';
import niryo from './robots/niryo';
import sawyer from './robots/sawyer';
import kukaIIWA14 from './robots/kuka_iiwa14';  // 新增

// 机器人映射表（支持多种URL参数格式）
let robotMap = {
    franka,
    niryo,
    sawyer,
    
    // 新机器人的多种变体（处理URL编码和命名差异）
    "kuka%20iiwa14": kukaIIWA14,
    "kukaiiwa14": kukaIIWA14,
    "kuka iiwa14": kukaIIWA14,
    "kuka_iiwa14": kukaIIWA14,
    "kuka-iiwa14": kukaIIWA14,
    "iiwa14": kukaIIWA14,
};
```

### 步骤5：更新GUI选择器

编辑 `Rocksi-master/src/simulator/gui.js`：

```javascript
// 机器人显示名称列表
const theRobots = ['Franka', 'Niryo', 'Sawyer', 'KUKA iiwa14'];
```

### 步骤6：构建和测试

```bash
# 构建前端
cd Rocksi-master
npm run build

# 部署到后端
cp -r dist/build/* ../Astral3DEditorGoBack/static/rocksi/

# 测试URL
# http://localhost:8080/rocksi/index.html?robot=kukaiiwa14
```

---

## 🚗 添加新移动机器人

### 关键差异

移动机器人与机械臂的主要区别：

1. **关节类型**：使用 `continuous` 关节（轮子）
2. **控制方式**：线速度/角速度而非关节角度
3. **Blockly块**：专用的移动控制块
4. **配置特殊性**：需要特殊的 `handRoot` 和 `partNames` 设置

### 移动机器人配置示例

```javascript
// 文件：husky.js
import Robot from './robotbase';

class ClearpathHusky extends Robot {
    constructor() {
        super("Clearpath Husky", "husky", "husky.urdf");

        // 移动机器人特殊配置
        this.robotRoot = "base_link";
        this.handRoot = "front_left_wheel_link";  // ⚠️ 必须设置为实际存在的link

        this.modelScale = 10;                     // 移动机器人通常需要放大

        // 轮子关节初始状态
        this.defaultPose = {
            front_left_wheel: 0.0,
            front_right_wheel: 0.0,
            rear_left_wheel: 0.0,
            rear_right_wheel: 0.0,
        };

        // ⚠️ 关键：轮子必须归类到"arm"（Rocksi设计要求）
        this.partNames = {
            arm: ["front_left_wheel", "front_right_wheel", "rear_left_wheel", "rear_right_wheel"],
            hand: [],
        };

        // TCP设置为机器人中心
        this.tcp.parent = "base_link";
        this.tcp.position = [0, 0, 0];

        // 移动机器人不使用逆运动学
        this.ikEnabled = [];
        this.interactionJointLimits = {};
        
        // 移动机器人标识和参数
        this.isMobile = true;
        this.wheelRadius = 0.1;              // 轮子半径（米）
        this.wheelSeparation = 0.555;        // 左右轮间距（米）
    }
    
    // ===============================================
    // 移动机器人控制方法（必须实现）
    // ===============================================
    
    mobile_move_forward(distance, speed) {
        console.log(`${this.name}前进: 距离=${distance}m, 速度=${speed}m/s`);
        this.setLinearVelocity(speed, 0, 0);
        setTimeout(() => this.setLinearVelocity(0, 0, 0), distance / speed * 1000);
    }
    
    mobile_move_backward(distance, speed) {
        console.log(`${this.name}后退: 距离=${distance}m, 速度=${speed}m/s`);
        this.setLinearVelocity(-speed, 0, 0);
        setTimeout(() => this.setLinearVelocity(0, 0, 0), distance / speed * 1000);
    }
    
    mobile_turn_left(angle, speed) {
        console.log(`${this.name}左转: 角度=${angle}度, 角速度=${speed}rad/s`);
        const angleRad = angle * Math.PI / 180;
        this.setAngularVelocity(0, 0, speed);
        setTimeout(() => this.setAngularVelocity(0, 0, 0), angleRad / speed * 1000);
    }
    
    mobile_turn_right(angle, speed) {
        console.log(`${this.name}右转: 角度=${angle}度, 角速度=${speed}rad/s`);
        const angleRad = angle * Math.PI / 180;
        this.setAngularVelocity(0, 0, -speed);
        setTimeout(() => this.setAngularVelocity(0, 0, 0), angleRad / speed * 1000);
    }
    
    mobile_stop() {
        console.log(`${this.name}停止`);
        this.setLinearVelocity(0, 0, 0);
        this.setAngularVelocity(0, 0, 0);
    }
    
    mobile_set_wheel_speeds(leftSpeed, rightSpeed) {
        console.log(`${this.name}设置轮速: 左=${leftSpeed}, 右=${rightSpeed}`);
        // 差动驱动运动学
        const linearVel = (leftSpeed + rightSpeed) / 2;
        const angularVel = (rightSpeed - leftSpeed) / this.wheelSeparation;
        this.setLinearVelocity(linearVel, 0, 0);
        this.setAngularVelocity(0, 0, angularVel);
    }
    
    mobile_move_to_position(x, y, speed) {
        console.log(`${this.name}移动到: (${x}, ${y}), 速度=${speed}m/s`);
        // 简单实现，可扩展为复杂路径规划
        this.setLinearVelocity(speed * 0.5, 0, 0);
        setTimeout(() => this.setLinearVelocity(0, 0, 0), 2000);
    }
    
    // 底层运动控制接口
    setLinearVelocity(x, y, z) {
        if (this.body && this.body.setVelocity) {
            this.body.setVelocity(x, y, z);
        }
        console.log(`设置线速度: (${x}, ${y}, ${z})`);
    }
    
    setAngularVelocity(x, y, z) {
        if (this.body && this.body.setAngularVelocity) {
            this.body.setAngularVelocity(x, y, z);
        }
        console.log(`设置角速度: (${x}, ${y}, ${z})`);
    }
}

const husky = new ClearpathHusky();
export default husky;
```

### 移动机器人Blockly块

移动机器人会自动获得专用的操作块：

```
📱 Mobile Movement 类别：
├── 🔄 Move forward    - 前进指定距离
├── 🔄 Move backward   - 后退指定距离  
├── ↪️ Turn left       - 左转指定角度
├── ↩️ Turn right      - 右转指定角度
├── ⏹️ Stop            - 停止运动
├── ⚙️ Set wheel speeds - 设置左右轮速度
└── 📍 Move to position - 移动到指定坐标
```

---

## ⚠️ 关键注意事项

### 1. 网格格式兼容性

```diff
🚨 常见错误：
- .obj文件 → "No loader available"
- .mjcf文件 → 不是URDF格式

✅ 解决方案：
+ 使用.dae (COLLADA) 格式
+ 从支持.dae的URDF包获取模型
+ 使用在线转换工具：obj → dae
```

### 2. 路径配置问题

```bash
# ❌ 错误的URDF路径
package://robot_description/meshes/visual/link1.dae

# ✅ 正确的相对路径  
../meshes/visual/link1.dae

# 🔧 批量修改脚本
sed -i 's|package://[^/]*/|../|g' robots/*.urdf
```

### 3. 移动机器人特殊配置

```javascript
// ❌ 常见错误配置
this.handRoot = null;                // 会导致traverse错误
this.defaultPose = {};               // 连续关节需要初始值
this.partNames.arm = [];             // Rocksi无法识别关节

// ✅ 正确配置
this.handRoot = "front_left_wheel_link";  // 实际存在的link
this.defaultPose = {                      // 所有轮子设初始值
    front_left_wheel: 0.0,
    front_right_wheel: 0.0,
    rear_left_wheel: 0.0,
    rear_right_wheel: 0.0,
};
this.partNames.arm = ["front_left_wheel", "front_right_wheel", 
                      "rear_left_wheel", "rear_right_wheel"];
```

### 4. URL参数映射

```javascript
// ✅ 全面的URL参数支持
let robotMap = {
    // 处理空格和编码
    "kuka%20iiwa14": kukaIIWA14,
    "kuka iiwa14": kukaIIWA14,
    
    // 处理连接符变化
    "kuka_iiwa14": kukaIIWA14,
    "kuka-iiwa14": kukaIIWA14,
    
    // 简化名称
    "kukaiiwa14": kukaIIWA14,
    "iiwa14": kukaIIWA14,
};
```

---

## 🔧 常见问题解决

### 问题1：机器人模型不显示

**症状**：页面显示loading，但机器人不出现

**原因分析**：
- URDF文件路径错误
- 网格文件格式不支持
- robotMap键名不匹配

**解决步骤**：
```bash
# 1. 检查文件存在性
ls Rocksi-master/assets/models/机器人名称/robots/*.urdf
ls Rocksi-master/assets/models/机器人名称/meshes/visual/*.dae

# 2. 检查控制台错误
# 浏览器F12 → Console → 查看红色错误信息

# 3. 检查网络请求
# 浏览器F12 → Network → 查看404错误
```

### 问题2：关节无法交互

**症状**：机器人显示但不能拖动关节

**解决方案**：
```javascript
// 检查关节配置
this.partNames = {
    arm: ["joint1", "joint2", ...],  // 必须包含所有可动关节
    hand: ["gripper_joint", ...],    // 夹爪关节（如果有）
};

// 检查关节限制
this.interactionJointLimits = {
    joint1: [-180, 180],  // 角度范围（度）
    joint2: [-90, 90],
};
```

### 问题3：Blockly操作块错误

**症状**：拖拽操作块出现红色控制台错误

**机械臂解决**：
```javascript
// 确保robot()函数调用格式正确
Blockly.JavaScript["move"] = function (block) {
    let pose = Blockly.JavaScript.valueToCode(block, 'POSE', Blockly.JavaScript.ORDER_COMMA) || 0;
    let poseType = block.getInputTargetBlock('POSE').outputConnection.getCheck()[0];
    var code = 'robot("move", "' + poseType + '", ' + pose + ');\n';
    return code;
};
```

**移动机器人解决**：
```javascript
// 确保移动控制方法已实现
class MobileRobot extends Robot {
    mobile_move_forward(distance, speed) { /* 实现 */ }
    mobile_turn_left(angle, speed) { /* 实现 */ }
    // ... 其他方法
}
```

### 问题4：工具箱显示异常

**症状**：
- 机械臂显示移动操作块
- 移动机器人主菜单消失

**解决方案**：
```javascript
// 确保机器人类型检测正确
export function isMobileRobot(robot) {
    if (!robot) return false;
    
    const robotName = typeof robot === 'string' ? robot : 
                     (robot.name || robot.constructor?.name || '').toLowerCase();
    
    return ['husky', 'clearpath', 'mobile', 'wheeled'].some(keyword => 
           robotName.includes(keyword));
}
```

---

## 🔍 调试技巧

### 1. 控制台日志监控

**关键信息**：
```javascript
// 机器人类型检测
"机器人类型检测结果: {robotName: 'KUKA iiwa14', isMobile: false}"

// URDF加载状态
"URDF loaded successfully" / "URDF loading failed"

// Blockly状态
"工具箱已更新以匹配当前机器人类型"
"移动机器人操作块注册完成"
```

### 2. 网络请求检查

**步骤**：
1. 打开浏览器开发者工具 (F12)
2. 切换到 **Network** 标签
3. 刷新页面
4. 检查红色的失败请求（404、500等）

**常见失败请求**：
- `robot.urdf` - URDF文件路径错误
- `*.dae` - 网格文件路径错误  
- `*.js` - 机器人配置文件路径错误

### 3. 分步验证流程

```bash
# 步骤1：验证文件结构
tree Rocksi-master/assets/models/机器人名称/

# 步骤2：验证URDF语法
# 使用在线URDF验证器或ROS工具

# 步骤3：验证配置文件语法
cd Rocksi-master
npm run build  # 检查JavaScript语法错误

# 步骤4：验证URL访问
curl http://localhost:8080/rocksi/models/机器人名称/robots/robot.urdf
```

### 4. 常用调试代码

```javascript
// 在机器人配置文件中添加调试信息
constructor() {
    super("Robot Name", "package", "robot.urdf");
    console.log(`机器人 ${this.name} 初始化完成`);
    console.log('默认姿态:', this.defaultPose);
    console.log('关节分组:', this.partNames);
}

// 在scene.js中添加加载调试
function onLoadComplete() {
    console.log('机器人加载完成:', robot.name);
    console.log('机器人类型:', robot.constructor.name);
    console.log('是否移动机器人:', isMobileRobot(robot));
}
```

---

## ✅ 完整检查清单

### 📋 机械臂集成清单

**文件准备**：
- [ ] URDF文件使用.dae网格格式
- [ ] 网格文件路径修改为相对路径 `../meshes/visual/`
- [ ] 目录结构符合标准：`robots/`, `meshes/visual/`

**配置文件**：
- [ ] 机器人配置文件创建完成 (`robots/robot_name.js`)
- [ ] `robotRoot` 和 `handRoot` 正确设置
- [ ] `defaultPose` 包含所有关节的初始角度
- [ ] `partNames.arm` 包含所有可动关节
- [ ] `ikEnabled` 设置IK支持的关节
- [ ] `interactionJointLimits` 设置关节角度限制

**系统集成**：
- [ ] `scene.js` 中导入新机器人模块
- [ ] `robotMap` 添加多种URL参数变体
- [ ] `gui.js` 中添加机器人显示名称

**测试验证**：
- [ ] 项目构建成功 (`npm run build`)
- [ ] 静态文件部署完成
- [ ] 浏览器强制刷新 (Ctrl+Shift+R)
- [ ] 机器人模型正确显示
- [ ] 关节可以交互拖动
- [ ] 默认展开"Moving"类别
- [ ] Blockly操作块功能正常
- [ ] IK和抓手功能正常（如适用）

### 📋 移动机器人集成清单

**包含上述机械臂所有检查项，额外增加**：

**移动机器人特殊配置**：
- [ ] `handRoot` 设置为实际存在的link（非null）
- [ ] `defaultPose` 包含所有轮子关节的初始值
- [ ] `partNames.arm` 包含所有轮子关节
- [ ] `isMobile = true` 标识设置
- [ ] 轮子参数配置：`wheelRadius`, `wheelSeparation`

**移动控制方法**：
- [ ] `mobile_move_forward()` 实现
- [ ] `mobile_move_backward()` 实现  
- [ ] `mobile_turn_left()` 实现
- [ ] `mobile_turn_right()` 实现
- [ ] `mobile_stop()` 实现
- [ ] `mobile_set_wheel_speeds()` 实现
- [ ] `mobile_move_to_position()` 实现
- [ ] `setLinearVelocity()` 和 `setAngularVelocity()` 实现

**移动机器人特殊测试**：
- [ ] 显示"Mobile Movement"类别而非"Moving"
- [ ] 工具箱主菜单保持显示（不消失）
- [ ] 移动操作块JavaScript生成正确
- [ ] 拖拽操作块不产生控制台错误
- [ ] 运行程序时显示移动控制日志

---

## 🚀 快速开始示例

### 添加一个新的机械臂（以UR5为例）

```bash
# 1. 下载UR5 URDF文件
wget https://github.com/ros-industrial/universal_robot/archive/kinetic-devel.zip
unzip kinetic-devel.zip

# 2. 复制到项目
mkdir -p Rocksi-master/assets/models/ur5
cp -r universal_robot-kinetic-devel/ur_description/meshes Rocksi-master/assets/models/ur5/
mkdir Rocksi-master/assets/models/ur5/robots
cp universal_robot-kinetic-devel/ur_description/urdf/ur5.urdf Rocksi-master/assets/models/ur5/robots/

# 3. 修改URDF路径
sed -i 's|package://ur_description/|../|g' Rocksi-master/assets/models/ur5/robots/ur5.urdf

# 4. 创建配置文件
cat > Rocksi-master/src/simulator/robots/ur5.js << 'EOF'
import Robot from './robotbase';

class UniversalUR5 extends Robot {
    constructor() {
        super("Universal UR5", "ur5", "ur5.urdf");
        
        this.robotRoot = "base_link";
        this.handRoot = "tool0";
        this.modelScale = 1;
        
        this.defaultPose = {
            shoulder_pan_joint: 0.0,
            shoulder_lift_joint: 0.0,
            elbow_joint: 0.0,
            wrist_1_joint: 0.0,
            wrist_2_joint: 0.0,
            wrist_3_joint: 0.0,
        };
        
        this.partNames = {
            arm: ["shoulder_pan_joint", "shoulder_lift_joint", "elbow_joint", 
                  "wrist_1_joint", "wrist_2_joint", "wrist_3_joint"],
            hand: [],
        };
        
        this.tcp.parent = "tool0";
        this.tcp.position = [0, 0, 0];
        
        this.ikEnabled = ["shoulder_pan_joint", "shoulder_lift_joint", "elbow_joint", 
                          "wrist_1_joint", "wrist_2_joint", "wrist_3_joint"];
        
        this.interactionJointLimits = {
            shoulder_pan_joint: [-180, 180],
            shoulder_lift_joint: [-180, 180],
            elbow_joint: [-180, 180],
            wrist_1_joint: [-180, 180],
            wrist_2_joint: [-180, 180],
            wrist_3_joint: [-180, 180],
        };
    }
}

const ur5 = new UniversalUR5();
export default ur5;
EOF

# 5. 更新场景配置
# 手动编辑 scene.js 和 gui.js...

# 6. 构建和测试
cd Rocksi-master
npm run build
cp -r dist/build/* ../Astral3DEditorGoBack/static/rocksi/

# 测试: http://localhost:8080/rocksi/index.html?robot=ur5
```

---

## 📞 技术支持

### 遇到问题时的信息收集

**请提供以下信息**：
1. **机器人类型**：机械臂 / 移动机器人
2. **URDF来源**：GitHub链接或文件来源
3. **网格格式**：.dae / .stl / .obj
4. **错误现象**：模型不显示 / 关节不能动 / Blockly报错
5. **控制台日志**：完整的红色错误信息
6. **网络请求**：失败的HTTP请求（404/500）

### 相关资源

- **URDF官方文档**: http://wiki.ros.org/urdf
- **Three.js文档**: https://threejs.org/docs/
- **Blockly文档**: https://developers.google.com/blockly
- **COLLADA格式**: https://www.khronos.org/collada/

---

## 📝 更新日志

- **v1.0.0** (2024-01): 支持Franka、Niryo、Sawyer机械臂
- **v1.1.0** (2024-01): 添加KUKA iiwa14机械臂支持  
- **v1.2.0** (2024-01): 添加Clearpath Husky移动机器人支持
- **v1.3.0** (2024-01): 完善移动机器人Blockly操作块和工具箱管理

---

**✨ 祝您使用愉快！如有问题，欢迎参考本指南或寻求技术支持。** 