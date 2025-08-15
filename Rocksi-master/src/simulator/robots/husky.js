import Robot from './robotbase';

class ClearpathHusky extends Robot {
	constructor() {
		super("Clearpath Husky", "husky", "husky.urdf");

		this.robotRoot = "base_link";
		this.handRoot = "front_left_wheel_link"; // 使用一个实际存在的link

		this.modelScale = 10;
		
		// 移动机器人的四个轮子关节
		this.defaultPose = {
			front_left_wheel: 0.0,
			front_right_wheel: 0.0,
			rear_left_wheel: 0.0,
			rear_right_wheel: 0.0,
		};

		// 为移动机器人指定关节分类
		this.partNames = {
			arm: ["front_left_wheel", "front_right_wheel", "rear_left_wheel", "rear_right_wheel"],
			hand: [],
		};

		// TCP设置为基座中心
		this.tcp.parent = "base_link";
		this.tcp.position = [0, 0, 0];

		// 移动机器人不使用IK
		this.ikEnabled = [];

		// 移动机器人没有关节限制
		this.interactionJointLimits = {};
	}
}

const husky = new ClearpathHusky();
export default husky; 