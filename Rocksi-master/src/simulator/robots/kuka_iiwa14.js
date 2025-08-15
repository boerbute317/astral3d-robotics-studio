import Robot from './robotbase';

class KukaIIWA14 extends Robot {
	constructor() {
		super("KUKA iiwa14", "kuka_iiwa14", "iiwa14.urdf");

		this.robotRoot = "base_link";
		this.handRoot = "tool0";

		this.modelScale = 10;
		
		// KUKA iiwa14 默认姿态 (7个关节的安全位置)
		this.defaultPose = {
			joint_a1: 0.0,
			joint_a2: 0.0,
			joint_a3: 0.0,
			joint_a4: -1.57, // -90度，避免奇异点
			joint_a5: 0.0,
			joint_a6: 0.0,
			joint_a7: 0.0,
		};

		// 工具中心点 (TCP) 设置
		this.tcp.parent = "tool0";
		this.tcp.position = [0, 0, 0.081]; // 末端法兰距离

		// 逆运动学启用的关节 (前4个主要关节)
		this.ikEnabled = [
			"joint_a1",
			"joint_a2",
			"joint_a3",
			"joint_a4",
			// "joint_a5", // 可选
			// "joint_a6", // 可选
			// "joint_a7", // 可选
		];

		// 关节限制 (避免奇异配置)
		this.interactionJointLimits = {
			joint_a4: { 
				lower: -2.97, // 约-170度
				upper: -0.17  // 约-10度
			},
		};
	}
}

const kukaIIWA14 = new KukaIIWA14();
export default kukaIIWA14; 