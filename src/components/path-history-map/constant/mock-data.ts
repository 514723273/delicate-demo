import { PointData } from '../interface/point';

// 一条路径
export const pathData: Array<PointData> = [
	{
		id: 1,
		lng: 116.405289,
		lat: 39.904987,
		riskLevel: 1,
		size: 4,
		timestamp: 100,
	},
	{
		id: 2,
		lng: 113.964458,
		lat: 38.54664,
		riskLevel: 1,
		size: 1,
		timestamp: 200,
	},
	{
		id: 3,
		lng: 111.47836,
		lat: 38.135964,
		riskLevel: 1,
		size: 1,
		timestamp: 300,
	},
	{
		id: 4,
		lng: 108.949297,
		lat: 37.670904,
		riskLevel: 2,
		size: 2,
		timestamp: 400,
	},
	{
		id: 5,
		lng: 106.380111,
		lat: 37.149509,
		riskLevel: 2,
		size: 1,
		timestamp: 500,
	},
	{
		id: 6,
		lng: 103.774185,
		lat: 36.56996,
		riskLevel: 2,
		size: 3,
		timestamp: 600,
	},
	{
		id: 7,
		lng: 101.135432,
		lat: 34.930601,
		riskLevel: 3,
		size: 1,
		timestamp: 700,
	},
	{
		id: 8,
		lng: 98.46826,
		lat: 34.229964,
		riskLevel: 3,
		size: 2,
		timestamp: 800,
	},
	{
		id: 9,
		lng: 95.777529,
		lat: 33.466798,
		riskLevel: 3,
		size: 2,
		timestamp: 900,
	},
	{
		id: 10,
		lng: 93.068486,
		lat: 32.64009,
		riskLevel: 4,
		size: 1,
		timestamp: 1000,
	},
	{
		id: 11,
		lng: 90.34669,
		lat: 31.749086,
		riskLevel: 4,
		size: 2,
		timestamp: 1100,
	},
	{
		id: 12,
		lng: 87.61792,
		lat: 31.793308,
		riskLevel: 5,
		size: 2,
		timestamp: 1200,
	},
];

// 多条路径
export const routeData = [
	pathData,
	[
		{
			id: 20,
			lng: 116.405289,
			lat: 39.904987,
			riskLevel: 1,
			size: 1,
			timestamp: 100,
		},
		{
			id: 21,
			lng: 115.964458,
			lat: 38.54664,
			riskLevel: 1,
			size: 1,
			timestamp: 200,
		},
		{
			id: 22,
			lng: 115.380111,
			lat: 38.149509,
			riskLevel: 1,
			size: 1,
			timestamp: 400,
		},
		{
			id: 23,
			lng: 115.774185,
			lat: 36.56996,
			riskLevel: 2,
			size: 2,
			timestamp: 500,
		},
		{
			id: 24,
			lng: 115.674185,
			lat: 36.36996,
			riskLevel: 2,
			size: 1,
			timestamp: 500,
		},
		{
			id: 25,
			lng: 115.674185,
			lat: 36.46996,
			riskLevel: 2,
			size: 1,
			timestamp: 500,
		},
		{
			id: 26,
			lng: 115.674185,
			lat: 36.66996,
			riskLevel: 2,
			size: 1,
			timestamp: 500,
		},
		{
			id: 27,
			lng: 115.374185,
			lat: 36.46996,
			riskLevel: 2,
			size: 1,
			timestamp: 500,
		},
		{
			id: 28,
			lng: 115.474185,
			lat: 36.56996,
			riskLevel: 2,
			size: 1,
			timestamp: 500,
		},
	],
];

export const LongTermActiveFence: Array<[number, number]> = [
	[120.15, 30.28],
	[120.2, 28.28],
	[119.2, 28.28],
	[119.0, 29.28],
];

// export const SelectedCityFence: Array<[number, number]> = [
// 	[120.1135, 29.8444],
// 	[120.1465, 29.8718],
// 	[120.1465, 29.9048],
// 	[120.1904, 29.9158],
// 	[120.2124, 29.9377],
// 	[120.2234, 29.9432],
// 	[120.2454, 29.9377],
// 	[120.2563, 29.9432],
// 	[120.2673, 29.9268],
// 	[120.2783, 29.9213],
// 	[120.2893, 29.9377],
// 	[120.3113, 29.9268],
// 	[120.3223, 29.9323],
// 	[120.3442, 29.9707],
// 	[120.3662, 29.9762],
// 	[120.3552, 30.0146],
// 	[120.3442, 30.0366],
// 	[120.3333, 30.0366],
// 	[120.3223, 30.0476],
// 	[120.3333, 30.0586],
// 	[120.3333, 30.097],
// 	[120.3113, 30.108],
// 	[120.3003, 30.097],
// 	[120.2893, 30.1025],
// 	[120.3113, 30.1355],
// 	[120.3223, 30.1245],
// 	[120.3442, 30.141],
// 	[120.3552, 30.141],
// 	[120.3552, 30.152],
// 	[120.3882, 30.1575],
// 	[120.3992, 30.1355],
// 	[120.4102, 30.1355],
// 	[120.4102, 30.1465],
// 	[120.4321, 30.13],
// 	[120.4431, 30.1355],
// 	[120.4541, 30.1465],
// 	[120.4651, 30.152],
// 	[120.4651, 30.1685],
// 	[120.498, 30.1685],
// 	[120.509, 30.1575],
// 	[120.542, 30.1575],
// 	[120.564, 30.1465],
// 	[120.6079, 30.152],
// 	[120.6409, 30.2179],
// 	[120.6738, 30.2344],
// 	[120.7178, 30.2838],
// 	[120.8496, 30.2454],
// 	[120.8826, 30.2509],
// 	[120.9265, 30.1685],
// 	[120.9375, 30.1245],
// 	[120.9265, 30.1135],
// 	[120.9485, 30.0916],
// 	[120.9705, 30.0916],
// 	[120.9705, 30.0696],
// 	[120.9924, 30.0531],
// 	[120.9924, 30.0256],
// 	[121.0364, 30.0146],
// 	[121.0474, 30.0037],
// 	[121.0474, 30.0092],
// 	[121.0583, 30.0037],
// 	[121.0693, 30.0037],
// 	[121.0913, 29.9872],
// 	[121.0693, 29.9597],
// 	[121.0474, 29.9542],
// 	[121.0364, 29.9268],
// 	[121.0144, 29.8938],
// 	[121.0364, 29.8718],
// 	[121.0583, 29.8553],
// 	[121.0693, 29.8608],
// 	[121.1023, 29.8389],
// 	[121.0913, 29.8169],
// 	[121.1023, 29.8059],
// 	[121.0803, 29.7839],
// 	[121.0583, 29.7784],
// 	[121.0474, 29.762],
// 	[121.0254, 29.762],
// 	[121.0364, 29.74],
// 	[121.0254, 29.729],
// 	[121.0364, 29.718],
// 	[121.0034, 29.707],
// 	[121.0144, 29.6906],
// 	[120.9924, 29.6851],
// 	[120.9924, 29.6741],
// 	[121.0254, 29.6686],
// 	[121.0583, 29.6851],
// 	[121.0803, 29.6631],
// 	[121.0693, 29.6356],
// 	[121.1023, 29.6246],
// 	[121.1023, 29.5917],
// 	[121.1023, 29.5807],
// 	[121.1133, 29.5532],
// 	[121.1353, 29.5532],
// 	[121.1462, 29.5422],
// 	[121.2231, 29.5313],
// 	[121.2341, 29.5148],
// 	[121.2122, 29.4598],
// 	[121.2231, 29.4489],
// 	[121.2122, 29.4379],
// 	[121.2122, 29.4159],
// 	[121.2341, 29.4104],
// 	[121.2341, 29.3665],
// 	[121.1902, 29.339],
// 	[121.2012, 29.328],
// 	[121.1682, 29.3225],
// 	[121.1572, 29.339],
// 	[121.1462, 29.3335],
// 	[121.1243, 29.339],
// 	[121.1133, 29.3335],
// 	[121.1243, 29.3115],
// 	[121.1133, 29.3005],
// 	[121.0913, 29.3115],
// 	[121.1023, 29.317],
// 	[121.0583, 29.3225],
// 	[121.0254, 29.306],
// 	[121.0034, 29.3225],
// 	[120.9924, 29.3115],
// 	[120.9705, 29.306],
// 	[120.9595, 29.2841],
// 	[120.9155, 29.306],
// 	[120.9045, 29.295],
// 	[120.9045, 29.2786],
// 	[120.8936, 29.2676],
// 	[120.9045, 29.2401],
// 	[120.8826, 29.2401],
// 	[120.8496, 29.2511],
// 	[120.8276, 29.2346],
// 	[120.8057, 29.2346],
// 	[120.7727, 29.2236],
// 	[120.7727, 29.2511],
// 	[120.7727, 29.2731],
// 	[120.7617, 29.2841],
// 	[120.7727, 29.306],
// 	[120.7507, 29.317],
// 	[120.7068, 29.3005],
// 	[120.6958, 29.317],
// 	[120.7068, 29.3335],
// 	[120.7068, 29.3445],
// 	[120.6738, 29.328],
// 	[120.6519, 29.3335],
// 	[120.6409, 29.328],
// 	[120.6079, 29.3335],
// 	[120.5859, 29.35],
// 	[120.575, 29.339],
// 	[120.575, 29.361],
// 	[120.553, 29.3719],
// 	[120.553, 29.3884],
// 	[120.52, 29.4049],
// 	[120.509, 29.4214],
// 	[120.509, 29.4434],
// 	[120.498, 29.4598],
// 	[120.498, 29.4708],
// 	[120.4761, 29.4873],
// 	[120.4321, 29.4818],
// 	[120.4102, 29.4543],
// 	[120.3882, 29.4543],
// 	[120.3662, 29.4434],
// 	[120.3772, 29.4159],
// 	[120.3333, 29.4049],
// 	[120.3223, 29.3829],
// 	[120.3113, 29.3774],
// 	[120.3003, 29.3555],
// 	[120.3003, 29.35],
// 	[120.2673, 29.3665],
// 	[120.2673, 29.3884],
// 	[120.2783, 29.4379],
// 	[120.2563, 29.4598],
// 	[120.2673, 29.4928],
// 	[120.2124, 29.5258],
// 	[120.2014, 29.5477],
// 	[120.1904, 29.5422],
// 	[120.1685, 29.5148],
// 	[120.1355, 29.5093],
// 	[120.1245, 29.4928],
// 	[120.0806, 29.5093],
// 	[120.0916, 29.5203],
// 	[120.0806, 29.5367],
// 	[120.0476, 29.5477],
// 	[120.0586, 29.5587],
// 	[120.0366, 29.5752],
// 	[120.0037, 29.5752],
// 	[120.0146, 29.6027],
// 	[120.0476, 29.6301],
// 	[120.0256, 29.6411],
// 	[120.0366, 29.6521],
// 	[120.0366, 29.6686],
// 	[120.0256, 29.6686],
// 	[120.0256, 29.6521],
// 	[120.0146, 29.6521],
// 	[119.9927, 29.6576],
// 	[119.9707, 29.6741],
// 	[119.9707, 29.696],
// 	[119.9377, 29.707],
// 	[119.9268, 29.7015],
// 	[119.9377, 29.696],
// 	[119.9158, 29.7015],
// 	[119.9158, 29.718],
// 	[119.9048, 29.729],
// 	[119.9048, 29.7455],
// 	[119.8938, 29.7565],
// 	[119.8938, 29.762],
// 	[119.9268, 29.7455],
// 	[119.9707, 29.7675],
// 	[119.9927, 29.7565],
// 	[120.0037, 29.7565],
// 	[120.0256, 29.7729],
// 	[120.0366, 29.7894],
// 	[120.0256, 29.8114],
// 	[120.0366, 29.8224],
// 	[120.0806, 29.8279],
// 	[120.0916, 29.8169],
// 	[120.1135, 29.8444],
// ];

export const SelectedCityFence: Array<[number, number]> = [
	[118.3447, 29.4763],
	[118.3557, 29.4763],
	[118.3777, 29.5093],
	[118.4326, 29.5038],
	[118.4436, 29.5148],
	[118.4656, 29.5038],
	[118.4985, 29.5203],
	[118.4985, 29.5752],
	[118.5315, 29.5917],
	[118.5754, 29.6356],
	[118.6194, 29.6521],
	[118.6523, 29.6466],
	[118.6853, 29.6906],
	[118.6963, 29.707],
	[118.7183, 29.707],
	[118.7512, 29.7455],
	[118.7512, 29.762],
	[118.7402, 29.7839],
	[118.7402, 29.8059],
	[118.7402, 29.8169],
	[118.7622, 29.8224],
	[118.7512, 29.8334],
	[118.7512, 29.8444],
	[118.7842, 29.8444],
	[118.8391, 29.8938],
	[118.8391, 29.9377],
	[118.8611, 29.9377],
	[118.8721, 29.9487],
	[118.894, 29.9377],
	[118.894, 29.9817],
	[118.894, 30.0092],
	[118.905, 30.0256],
	[118.894, 30.0421],
	[118.894, 30.0531],
	[118.8721, 30.0696],
	[118.8721, 30.1025],
	[118.8721, 30.1135],
	[118.8831, 30.119],
	[118.894, 30.1465],
	[118.8501, 30.152],
	[118.8501, 30.1575],
	[118.927, 30.2014],
	[118.927, 30.2124],
	[118.905, 30.2179],
	[118.894, 30.2454],
	[118.8831, 30.2509],
	[118.8831, 30.2563],
	[118.8721, 30.2893],
	[118.8831, 30.3168],
	[118.916, 30.3333],
	[118.949, 30.3607],
	[118.96, 30.3497],
	[118.9819, 30.3497],
	[118.9929, 30.3333],
	[119.0588, 30.3058],
	[119.0918, 30.3223],
	[119.1248, 30.3058],
	[119.2017, 30.2893],
	[119.2017, 30.3003],
	[119.2236, 30.3003],
	[119.2346, 30.2893],
	[119.2456, 30.3168],
	[119.2456, 30.3278],
	[119.2456, 30.3387],
	[119.2786, 30.3442],
	[119.3005, 30.3607],
	[119.3225, 30.3717],
	[119.3555, 30.3552],
	[119.3774, 30.3552],
	[119.3994, 30.3717],
	[119.4324, 30.3827],
	[119.4543, 30.4047],
	[119.4873, 30.4102],
	[119.5093, 30.4047],
	[119.5313, 30.4102],
	[119.5313, 30.4211],
	[119.5532, 30.4376],
	[119.5642, 30.4431],
	[119.5752, 30.4266],
	[119.5972, 30.4211],
	[119.6411, 30.4376],
	[119.6411, 30.4321],
	[119.6301, 30.4211],
	[119.6301, 30.3992],
	[119.6411, 30.3937],
	[119.6631, 30.3992],
	[119.707, 30.4321],
	[119.696, 30.4651],
	[119.707, 30.4871],
	[119.707, 30.5145],
	[119.696, 30.5585],
	[119.707, 30.564],
	[119.729, 30.553],
	[119.7729, 30.553],
	[119.762, 30.5145],
	[119.8389, 30.498],
	[119.8499, 30.498],
	[119.8718, 30.4761],
	[119.8828, 30.4761],
	[119.8718, 30.4596],
	[119.8938, 30.4541],
	[119.9268, 30.4596],
	[119.9268, 30.4486],
	[119.9487, 30.4431],
	[119.9597, 30.4321],
	[119.9817, 30.4486],
	[120.0476, 30.4266],
	[120.0696, 30.4266],
	[120.0696, 30.4486],
	[120.0586, 30.4706],
	[120.0696, 30.4926],
	[120.0806, 30.498],
	[120.1025, 30.498],
	[120.1025, 30.4871],
	[120.1135, 30.4761],
	[120.1465, 30.4816],
	[120.1465, 30.4706],
	[120.1575, 30.4651],
	[120.1685, 30.4706],
	[120.1794, 30.498],
	[120.1904, 30.5035],
	[120.2014, 30.5145],
	[120.2014, 30.509],
	[120.2783, 30.5035],
	[120.3003, 30.52],
	[120.3223, 30.52],
	[120.3333, 30.4706],
	[120.3442, 30.4706],
	[120.3442, 30.4651],
	[120.3442, 30.4321],
	[120.3113, 30.3937],
	[120.3442, 30.3662],
	[120.3992, 30.3827],
	[120.3992, 30.3717],
	[120.3882, 30.3442],
	[120.4102, 30.3223],
	[120.4651, 30.3882],
	[120.6409, 30.3992],
	[120.6628, 30.3882],
	[120.7068, 30.3058],
	[120.7178, 30.2838],
	[120.6738, 30.2344],
	[120.6409, 30.2179],
	[120.6079, 30.152],
	[120.564, 30.1465],
	[120.542, 30.1575],
	[120.509, 30.1575],
	[120.498, 30.1685],
	[120.4651, 30.1685],
	[120.4651, 30.152],
	[120.4541, 30.1465],
	[120.4431, 30.1355],
	[120.4321, 30.13],
	[120.4102, 30.1465],
	[120.4102, 30.1355],
	[120.3992, 30.1355],
	[120.3882, 30.1575],
	[120.3552, 30.152],
	[120.3552, 30.141],
	[120.3442, 30.141],
	[120.3223, 30.1245],
	[120.3113, 30.1355],
	[120.2893, 30.1025],
	[120.3003, 30.097],
	[120.3113, 30.108],
	[120.3333, 30.097],
	[120.3333, 30.0586],
	[120.3223, 30.0476],
	[120.3333, 30.0366],
	[120.3442, 30.0366],
	[120.3552, 30.0146],
	[120.3662, 29.9762],
	[120.3442, 29.9707],
	[120.3223, 29.9323],
	[120.3113, 29.9268],
	[120.2893, 29.9377],
	[120.2783, 29.9213],
	[120.2673, 29.9268],
	[120.2563, 29.9432],
	[120.2454, 29.9377],
	[120.2234, 29.9432],
	[120.2124, 29.9377],
	[120.1904, 29.9158],
	[120.1465, 29.9048],
	[120.1465, 29.8718],
	[120.1135, 29.8444],
	[120.0916, 29.8169],
	[120.0806, 29.8279],
	[120.0366, 29.8224],
	[120.0256, 29.8114],
	[120.0366, 29.7894],
	[120.0256, 29.7729],
	[120.0037, 29.7565],
	[119.9927, 29.7565],
	[119.9707, 29.7675],
	[119.9268, 29.7455],
	[119.8938, 29.762],
	[119.8938, 29.7565],
	[119.9048, 29.7455],
	[119.9048, 29.729],
	[119.9158, 29.718],
	[119.9158, 29.7015],
	[119.9377, 29.696],
	[119.9268, 29.7015],
	[119.9377, 29.707],
	[119.9707, 29.696],
	[119.9707, 29.6741],
	[119.8938, 29.6631],
	[119.8499, 29.6686],
	[119.8389, 29.6796],
	[119.7949, 29.6576],
	[119.7729, 29.6246],
	[119.7839, 29.6082],
	[119.762, 29.5972],
	[119.762, 29.5587],
	[119.729, 29.5422],
	[119.74, 29.5148],
	[119.718, 29.5038],
	[119.718, 29.4928],
	[119.707, 29.4708],
	[119.718, 29.4489],
	[119.707, 29.4324],
	[119.696, 29.4379],
	[119.6851, 29.4214],
	[119.6741, 29.4159],
	[119.6741, 29.4269],
	[119.6411, 29.4324],
	[119.6301, 29.4214],
	[119.6082, 29.3884],
	[119.6191, 29.3774],
	[119.6191, 29.3665],
	[119.5862, 29.3774],
	[119.5532, 29.3665],
	[119.5313, 29.3719],
	[119.5313, 29.3665],
	[119.5093, 29.339],
	[119.4873, 29.3335],
	[119.4763, 29.3335],
	[119.4543, 29.3665],
	[119.4543, 29.3884],
	[119.4434, 29.4214],
	[119.4324, 29.4214],
	[119.4324, 29.4049],
	[119.4104, 29.3994],
	[119.3884, 29.4324],
	[119.3665, 29.4159],
	[119.3445, 29.4104],
	[119.3225, 29.3994],
	[119.3445, 29.3829],
	[119.3335, 29.3555],
	[119.3445, 29.3335],
	[119.3445, 29.3225],
	[119.3225, 29.306],
	[119.3335, 29.295],
	[119.3225, 29.2786],
	[119.2896, 29.2786],
	[119.2786, 29.2621],
	[119.2566, 29.2456],
	[119.2346, 29.2621],
	[119.2236, 29.2841],
	[119.2017, 29.2896],
	[119.2017, 29.2731],
	[119.1907, 29.2566],
	[119.2126, 29.2456],
	[119.2126, 29.2236],
	[119.1907, 29.2291],
	[119.1907, 29.2181],
	[119.1907, 29.2072],
	[119.1467, 29.2291],
	[119.1248, 29.2236],
	[119.1248, 29.2346],
	[119.1028, 29.2291],
	[119.0808, 29.2291],
	[119.0039, 29.2126],
	[118.9819, 29.2291],
	[118.9819, 29.2566],
	[118.949, 29.2786],
	[118.96, 29.295],
	[118.927, 29.3115],
	[118.894, 29.3335],
	[118.8831, 29.3225],
	[118.8721, 29.3225],
	[118.8281, 29.2786],
	[118.8171, 29.2786],
	[118.7732, 29.2511],
	[118.7622, 29.2511],
	[118.7622, 29.2181],
	[118.7402, 29.2126],
	[118.7183, 29.1907],
	[118.6853, 29.2017],
	[118.6304, 29.1907],
	[118.6304, 29.2126],
	[118.6194, 29.2181],
	[118.6084, 29.2346],
	[118.6194, 29.2511],
	[118.6084, 29.2676],
	[118.6084, 29.2786],
	[118.6414, 29.2621],
	[118.6414, 29.2676],
	[118.5974, 29.328],
	[118.5205, 29.3445],
	[118.5205, 29.361],
	[118.4875, 29.3665],
	[118.4656, 29.361],
	[118.4216, 29.3884],
	[118.4216, 29.3994],
	[118.4106, 29.4049],
	[118.4106, 29.4214],
	[118.3887, 29.4214],
	[118.3667, 29.4489],
	[118.3557, 29.4543],
	[118.3447, 29.4763],
];
