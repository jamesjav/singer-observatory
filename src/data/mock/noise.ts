import type { NoiseEvent, NoiseProvider } from '../providers/types';

const samples: Omit<NoiseEvent, 'url' | 'publishedAt' | 'collectedAt' | 'demo' | 'precision'>[] = [
  { id: 'LON', settlement: '伦敦', lat: 51.5, lon: 0, summary: '低熵聚落的交换系统持续振荡。个体将数字的位移，误认作生存的意义。', source: '模拟观测 · 欧洲频段', tag: '集体焦虑', entropy: 0.43 },
  { id: 'TYO', settlement: '东京', lat: 35.7, lon: 139.7, summary: '高密度聚落进入周期性迁徙。数千万低熵体，沿预定轨道重复移动。', source: '模拟观测 · 东亚频段', tag: '表面喧嚣', entropy: 0.31 },
  { id: 'NYC', settlement: '纽约', lat: 40.7, lon: -74.0, summary: '资源定价信号跨越大洋。信号的振幅，与这颗行星的质量无关。', source: '模拟观测 · 北美频段', tag: '集体焦虑', entropy: 0.48 },
  { id: 'SHA', settlement: '上海', lat: 31.23, lon: 121.47, summary: '大陆边缘的能量交换维持高频。薄层中的灯火，尚未意识到黑暗。', source: '模拟观测 · 东亚频段', tag: '资源迁移', entropy: 0.36 },
  { id: 'DEL', settlement: '新德里', lat: 28.61, lon: 77.21, summary: '气溶胶在聚落上空累积。低熵体继续交换关于空气的意见。', source: '模拟观测 · 南亚频段', tag: '集体焦虑', entropy: 0.58 },
  { id: 'CAI', settlement: '开罗', lat: 30.04, lon: 31.24, summary: '水流两岸出现周期性信号聚集。古老的物种，依旧依附同一条河流。', source: '模拟观测 · 北非频段', tag: '表面喧嚣', entropy: 0.25 },
  { id: 'SAO', settlement: '圣保罗', lat: -23.55, lon: -46.63, summary: '热带边缘的物流网络短暂拥塞。表面噪音增强，未达到关注阈值。', source: '模拟观测 · 南美频段', tag: '资源迁移', entropy: 0.4 },
  { id: 'SYD', settlement: '悉尼', lat: -33.87, lon: 151.21, summary: '南半球沿海聚落完成一次明暗交替。没有发生值得记录的变化。', source: '模拟观测 · 大洋洲频段', tag: '表面喧嚣', entropy: 0.19 },
  { id: 'NAI', settlement: '内罗毕', lat: -1.29, lon: 36.82, summary: '赤道附近的通信密度上升。新的节点，加入了同一片低频杂波。', source: '模拟观测 · 东非频段', tag: '资源迁移', entropy: 0.3 },
  { id: 'IST', settlement: '伊斯坦布尔', lat: 41.01, lon: 28.98, summary: '大陆连接处出现边界争论。对于球面，边界只是短暂的想象。', source: '模拟观测 · 欧亚频段', tag: '局部冲突', entropy: 0.82 },
  { id: 'LAX', settlement: '洛杉矶', lat: 34.05, lon: -118.24, summary: '影像生产聚落输出大量虚构信号。该物种正在模拟自身的命运。', source: '模拟观测 · 北美频段', tag: '表面喧嚣', entropy: 0.34 },
  { id: 'SIN', settlement: '新加坡', lat: 1.35, lon: 103.82, summary: '狭窄海峡内，物质转移维持稳定。文明的重量，仍小于一片云。', source: '模拟观测 · 东南亚频段', tag: '资源迁移', entropy: 0.28 },
];

export const MOCK_EVENTS: NoiseEvent[] = samples.map((event) => ({
  ...event, source: '离线演示样本', url: null, publishedAt: null,
  collectedAt: '2026-11-21T00:00:00Z', demo: true, precision: 'reference',
}));

export const mockNoiseProvider: NoiseProvider = {
  mode: 'simulated',
  async getEvents() { return MOCK_EVENTS; },
};
