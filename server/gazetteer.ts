import type { NewsItem } from '../src/data/providers/types.ts';

export interface Place {
  name: string;
  lat: number;
  lon: number;
  kind: 'city' | 'country';
  aliases: readonly string[];
}

type Row = readonly [string, string, number, number, string?];
const places = (kind: Place['kind'], rows: readonly Row[]): Place[] => rows.map(
  ([name, english, lat, lon, aliases = '']) => ({
    name, lat, lon, kind, aliases: [...new Set([name, english, ...aliases.split('|')].filter(Boolean))],
  }),
);

// Country centroids and city centres are approximate; ambiguous personal names require qualifiers.
export const GAZETTEER: readonly Place[] = [
  ...places('country', [
    ['中国', 'China', 35.86, 104.2, '中國|中华人民共和国|中華人民共和國|Chinese'],
    ['日本', 'Japan', 36.2, 138.25, 'Japanese'],
    ['韩国', 'South Korea', 36.5, 127.8, '韓國|大韩民国|大韓民國|South Korean'],
    ['朝鲜', 'North Korea', 40.34, 127.51, '朝鮮|North Korean'],
    ['蒙古', 'Mongolia', 46.86, 103.85],
    ['印度', 'India', 22.97, 78.66, 'Indian'],
    ['巴基斯坦', 'Pakistan', 30.38, 69.35, 'Pakistani'],
    ['孟加拉国', 'Bangladesh', 23.68, 90.36, '孟加拉國'],
    ['尼泊尔', 'Nepal', 28.39, 84.12, '尼泊爾'],
    ['斯里兰卡', 'Sri Lanka', 7.87, 80.77, '斯里蘭卡'],
    ['阿富汗', 'Afghanistan', 33.94, 67.71, 'Afghan'],
    ['伊朗', 'Iran', 32.43, 53.69, 'Iranian'],
    ['伊拉克', 'Iraq', 33.22, 43.68, 'Iraqi'],
    ['叙利亚', 'Syria', 34.8, 38.99, '敘利亞|Syrian'],
    ['黎巴嫩', 'Lebanon', 33.85, 35.86, 'Lebanese'],
    ['以色列', 'Israel', 31.05, 34.85, 'Israeli'],
    ['巴勒斯坦', 'Palestine', 31.95, 35.23, 'Palestinian territories|Palestinian'],
    ['约旦', 'Kingdom of Jordan', 30.59, 36.24, '約旦|country of Jordan'],
    ['沙特阿拉伯', 'Saudi Arabia', 23.89, 45.08, '沙烏地阿拉伯|沙特'],
    ['阿联酋', 'United Arab Emirates', 23.42, 53.85, '阿聯酋|阿拉伯联合酋长国|阿拉伯聯合大公國'],
    ['卡塔尔', 'Qatar', 25.35, 51.18, '卡塔爾|卡達'],
    ['科威特', 'Kuwait', 29.31, 47.48],
    ['阿曼', 'Oman', 21.47, 55.98],
    ['也门', 'Yemen', 15.55, 48.52, '也門|葉門'],
    ['土耳其', 'Türkiye', 38.96, 35.24, 'Turkey'],
    ['格鲁吉亚', 'Republic of Georgia', 42.32, 43.36, '格魯吉亞|喬治亞共和國|country of Georgia'],
    ['亚美尼亚', 'Armenia', 40.07, 45.04, '亞美尼亞'],
    ['阿塞拜疆', 'Azerbaijan', 40.14, 47.58, '亞塞拜然'],
    ['哈萨克斯坦', 'Kazakhstan', 48.02, 66.92, '哈薩克斯坦'],
    ['乌兹别克斯坦', 'Uzbekistan', 41.38, 64.59, '烏茲別克斯坦'],
    ['吉尔吉斯斯坦', 'Kyrgyzstan', 41.2, 74.77, '吉爾吉斯斯坦'],
    ['塔吉克斯坦', 'Tajikistan', 38.86, 71.28],
    ['土库曼斯坦', 'Turkmenistan', 38.97, 59.56, '土庫曼斯坦'],
    ['缅甸', 'Myanmar', 21.91, 95.96, '緬甸|Burma'],
    ['泰国', 'Thailand', 15.87, 100.99, '泰國'],
    ['越南', 'Vietnam', 14.06, 108.28, 'Viet Nam'],
    ['老挝', 'Laos', 19.86, 102.5, '老撾|寮國'],
    ['柬埔寨', 'Cambodia', 12.57, 104.99],
    ['马来西亚', 'Malaysia', 4.21, 101.98, '馬來西亞'],
    ['印度尼西亚', 'Indonesia', -0.79, 113.92, '印度尼西亞|印尼'],
    ['菲律宾', 'Philippines', 12.88, 121.77, '菲律賓|Philippine'],
    ['澳大利亚', 'Australia', -25.27, 133.78, '澳大利亞|澳洲|Australian'],
    ['新西兰', 'New Zealand', -40.9, 174.89, '新西蘭|紐西蘭'],
    ['巴布亚新几内亚', 'Papua New Guinea', -6.31, 143.96, '巴布亞新幾內亞'],
    ['俄罗斯', 'Russia', 61.52, 105.32, '俄羅斯|Russian'],
    ['乌克兰', 'Ukraine', 48.38, 31.17, '烏克蘭|Ukrainian'],
    ['白俄罗斯', 'Belarus', 53.71, 27.95, '白俄羅斯'],
    ['波兰', 'Poland', 51.92, 19.15, '波蘭|Polish'],
    ['德国', 'Germany', 51.17, 10.45, '德國|German'],
    ['法国', 'France', 46.6, 2.21, '法國|French'],
    ['英国', 'United Kingdom', 55.38, -3.44, '英國|Britain|Great Britain|British'],
    ['爱尔兰', 'Ireland', 53.14, -7.69, '愛爾蘭|Irish'],
    ['西班牙', 'Spain', 40.46, -3.75, 'Spanish'],
    ['葡萄牙', 'Portugal', 39.4, -8.22],
    ['意大利', 'Italy', 41.87, 12.57, '義大利|Italian'],
    ['瑞士', 'Switzerland', 46.82, 8.23, 'Swiss'],
    ['奥地利', 'Austria', 47.52, 14.55, '奧地利|Austrian'],
    ['荷兰', 'Netherlands', 52.13, 5.29, '荷蘭|Dutch'],
    ['比利时', 'Belgium', 50.5, 4.47, '比利時|Belgian'],
    ['挪威', 'Norway', 64.5, 11.0],
    ['瑞典', 'Sweden', 62.2, 17.64],
    ['芬兰', 'Finland', 64.5, 26.0, '芬蘭'],
    ['丹麦', 'Denmark', 56.26, 9.5, '丹麥'],
    ['捷克', 'Czechia', 49.82, 15.47, 'Czech Republic'],
    ['匈牙利', 'Hungary', 47.16, 19.5],
    ['罗马尼亚', 'Romania', 45.94, 24.97, '羅馬尼亞'],
    ['保加利亚', 'Bulgaria', 42.73, 25.49, '保加利亞'],
    ['希腊', 'Greece', 39.07, 21.82, '希臘'],
    ['塞尔维亚', 'Serbia', 44.02, 21.01, '塞爾維亞'],
    ['克罗地亚', 'Croatia', 45.1, 15.2, '克羅地亞'],
    ['立陶宛', 'Lithuania', 55.17, 23.88],
    ['拉脱维亚', 'Latvia', 56.88, 24.6, '拉脫維亞'],
    ['爱沙尼亚', 'Estonia', 58.6, 25.01, '愛沙尼亞'],
    ['美国', 'United States', 39.83, -98.58, '美國|United States of America|American'],
    ['加拿大', 'Canada', 56.13, -106.35, 'Canadian'],
    ['墨西哥', 'Mexico', 23.63, -102.55, 'Mexican'],
    ['古巴', 'Cuba', 21.52, -77.78, 'Cuban'],
    ['海地', 'Haiti', 18.97, -72.29],
    ['巴拿马', 'Panama', 8.54, -80.78, '巴拿馬'],
    ['巴西', 'Brazil', -14.24, -51.93, 'Brazilian'],
    ['阿根廷', 'Argentina', -38.42, -63.62],
    ['智利', 'Chile', -35.68, -71.54],
    ['秘鲁', 'Peru', -9.19, -75.02, '秘魯'],
    ['哥伦比亚', 'Colombia', 4.57, -74.3, '哥倫比亞'],
    ['委内瑞拉', 'Venezuela', 6.42, -66.59, '委內瑞拉'],
    ['厄瓜多尔', 'Ecuador', -1.83, -78.18, '厄瓜多爾'],
    ['玻利维亚', 'Bolivia', -16.29, -63.59, '玻利維亞'],
    ['埃及', 'Egypt', 26.82, 30.8],
    ['利比亚', 'Libya', 26.34, 17.23, '利比亞'],
    ['突尼斯', 'Tunisia', 33.89, 9.54, '突尼西亞'],
    ['阿尔及利亚', 'Algeria', 28.03, 1.66, '阿爾及利亞'],
    ['摩洛哥', 'Morocco', 31.79, -7.09],
    ['苏丹', 'Sudan', 15.0, 30.0, '蘇丹'],
    ['南苏丹', 'South Sudan', 6.88, 31.31, '南蘇丹'],
    ['埃塞俄比亚', 'Ethiopia', 9.15, 40.49, '埃塞俄比亞|衣索比亞'],
    ['索马里', 'Somalia', 5.15, 46.2, '索馬里|索馬利亞'],
    ['肯尼亚', 'Kenya', -0.02, 37.91, '肯尼亞|肯亞'],
    ['乌干达', 'Uganda', 1.37, 32.29, '烏干達'],
    ['坦桑尼亚', 'Tanzania', -6.37, 34.89, '坦桑尼亞|坦尚尼亞'],
    ['刚果民主共和国', 'Democratic Republic of the Congo', -4.04, 21.76, '剛果民主共和國|DR Congo'],
    ['尼日利亚', 'Nigeria', 9.08, 8.68, '尼日利亞|奈及利亞'],
    ['加纳', 'Ghana', 7.95, -1.02, '加納'],
    ['塞内加尔', 'Senegal', 14.5, -14.45, '塞內加爾'],
    ['马里', 'Mali', 17.57, -4.0, '馬里'],
    ['尼日尔', 'Niger', 17.61, 8.08, '尼日爾'],
    ['乍得', 'Republic of Chad', 15.45, 18.73, '查德'],
    ['南非', 'South Africa', -30.56, 22.94],
    ['津巴布韦', 'Zimbabwe', -19.02, 29.15, '津巴布韋|辛巴威'],
    ['赞比亚', 'Zambia', -13.13, 27.85, '贊比亞|尚比亞'],
    ['莫桑比克', 'Mozambique', -18.67, 35.53, '莫三比克'],
    ['马达加斯加', 'Madagascar', -18.77, 46.87, '馬達加斯加'],
  ]),
  ...places('city', [
    ['伦敦', 'London', 51.5074, -0.1278, '倫敦'],
    ['巴黎', 'Paris', 48.8566, 2.3522],
    ['柏林', 'Berlin', 52.52, 13.405],
    ['罗马', 'Rome', 41.9028, 12.4964, '羅馬'],
    ['马德里', 'Madrid', 40.4168, -3.7038, '馬德里'],
    ['巴塞罗那', 'Barcelona', 41.3851, 2.1734, '巴塞羅那'],
    ['里斯本', 'Lisbon', 38.7223, -9.1393],
    ['布鲁塞尔', 'Brussels', 50.8503, 4.3517, '布魯塞爾'],
    ['阿姆斯特丹', 'Amsterdam', 52.3676, 4.9041],
    ['日内瓦', 'Geneva', 46.2044, 6.1432, '日內瓦'],
    ['苏黎世', 'Zurich', 47.3769, 8.5417, '蘇黎世|Zürich'],
    ['维也纳', 'Vienna', 48.2082, 16.3738, '維也納'],
    ['华沙', 'Warsaw', 52.2297, 21.0122, '華沙'],
    ['布拉格', 'Prague', 50.0755, 14.4378],
    ['布达佩斯', 'Budapest', 47.4979, 19.0402, '布達佩斯'],
    ['雅典', 'Athens', 37.9838, 23.7275],
    ['斯德哥尔摩', 'Stockholm', 59.3293, 18.0686, '斯德哥爾摩'],
    ['奥斯陆', 'Oslo', 59.9139, 10.7522, '奧斯陸'],
    ['赫尔辛基', 'Helsinki', 60.1699, 24.9384, '赫爾辛基'],
    ['哥本哈根', 'Copenhagen', 55.6761, 12.5683],
    ['都柏林', 'Dublin', 53.3498, -6.2603],
    ['爱丁堡', 'Edinburgh', 55.9533, -3.1883, '愛丁堡'],
    ['曼彻斯特', 'Manchester', 53.4808, -2.2426, '曼徹斯特'],
    ['莫斯科', 'Moscow', 55.7558, 37.6173],
    ['圣彼得堡', 'Saint Petersburg', 59.9311, 30.3609, '聖彼得堡|St Petersburg'],
    ['基辅', 'Kyiv', 50.4501, 30.5234, '基輔|Kiev'],
    ['哈尔科夫', 'Kharkiv', 49.9935, 36.2304, '哈爾科夫|Kharkov'],
    ['敖德萨', 'Odesa', 46.4825, 30.7233, '敖德薩|Odessa'],
    ['明斯克', 'Minsk', 53.9006, 27.559],
    ['伊斯坦布尔', 'Istanbul', 41.0082, 28.9784, '伊斯坦布爾'],
    ['安卡拉', 'Ankara', 39.9334, 32.8597],
    ['纽约', 'New York', 40.7128, -74.006, '紐約|New York City|NYC|NY'],
    ['华盛顿', 'Washington DC', 38.9072, -77.0369, '華盛頓|Washington, D.C.|Washington D.C.|Washington, DC'],
    ['洛杉矶', 'Los Angeles', 34.0522, -118.2437, '洛杉磯'],
    ['旧金山', 'San Francisco', 37.7749, -122.4194, '舊金山|三藩市'],
    ['芝加哥', 'Chicago', 41.8781, -87.6298],
    ['波士顿', 'Boston', 42.3601, -71.0589, '波士頓'],
    ['西雅图', 'Seattle', 47.6062, -122.3321, '西雅圖'],
    ['休斯敦', 'Houston', 29.7604, -95.3698, '休士頓'],
    ['迈阿密', 'Miami', 25.7617, -80.1918, '邁阿密'],
    ['渥太华', 'Ottawa', 45.4215, -75.6972, '渥太華'],
    ['多伦多', 'Toronto', 43.6532, -79.3832, '多倫多'],
    ['温哥华', 'Vancouver', 49.2827, -123.1207, '溫哥華'],
    ['蒙特利尔', 'Montreal', 45.5017, -73.5673, '蒙特利爾|Montréal'],
    ['墨西哥城', 'Mexico City', 19.4326, -99.1332],
    ['哈瓦那', 'Havana', 23.1136, -82.3666],
    ['圣保罗', 'São Paulo', -23.5505, -46.6333, '聖保羅|Sao Paulo'],
    ['里约热内卢', 'Rio de Janeiro', -22.9068, -43.1729, '里約熱內盧'],
    ['布宜诺斯艾利斯', 'Buenos Aires', -34.6037, -58.3816, '布宜諾斯艾利斯'],
    ['圣地亚哥', 'Santiago', -33.4489, -70.6693, '聖地亞哥'],
    ['利马', 'Lima', -12.0464, -77.0428, '利馬'],
    ['波哥大', 'Bogotá', 4.711, -74.0721, 'Bogota'],
    ['加拉加斯', 'Caracas', 10.4806, -66.9036],
    ['北京', 'Beijing', 39.9042, 116.4074],
    ['上海', 'Shanghai', 31.2304, 121.4737],
    ['广州', 'Guangzhou', 23.1291, 113.2644, '廣州'],
    ['深圳', 'Shenzhen', 22.5431, 114.0579],
    ['成都', 'Chengdu', 30.5728, 104.0668],
    ['武汉', 'Wuhan', 30.5928, 114.3055, '武漢'],
    ['香港', 'Hong Kong', 22.3193, 114.1694],
    ['澳门', 'Macau', 22.1987, 113.5439, '澳門|Macao'],
    ['台北', 'Taipei', 25.033, 121.5654, '臺北'],
    ['东京', 'Tokyo', 35.6762, 139.6503, '東京'],
    ['大阪', 'Osaka', 34.6937, 135.5023],
    ['首尔', 'Seoul', 37.5665, 126.978, '首爾'],
    ['平壤', 'Pyongyang', 39.0392, 125.7625],
    ['新德里', 'New Delhi', 28.6139, 77.209, 'Delhi|德里'],
    ['孟买', 'Mumbai', 19.076, 72.8777, '孟買|Bombay'],
    ['加尔各答', 'Kolkata', 22.5726, 88.3639, '加爾各答|Calcutta'],
    ['班加罗尔', 'Bengaluru', 12.9716, 77.5946, '班加羅爾|Bangalore'],
    ['伊斯兰堡', 'Islamabad', 33.6844, 73.0479, '伊斯蘭堡'],
    ['卡拉奇', 'Karachi', 24.8607, 67.0011],
    ['达卡', 'Dhaka', 23.8103, 90.4125, '達卡'],
    ['加德满都', 'Kathmandu', 27.7172, 85.324, '加德滿都'],
    ['科伦坡', 'Colombo', 6.9271, 79.8612, '科倫坡'],
    ['喀布尔', 'Kabul', 34.5553, 69.2075, '喀布爾'],
    ['德黑兰', 'Tehran', 35.6892, 51.389, '德黑蘭'],
    ['巴格达', 'Baghdad', 33.3152, 44.3661, '巴格達'],
    ['大马士革', 'Damascus', 33.5138, 36.2765, '大馬士革'],
    ['贝鲁特', 'Beirut', 33.8938, 35.5018, '貝魯特'],
    ['耶路撒冷', 'Jerusalem', 31.7683, 35.2137],
    ['特拉维夫', 'Tel Aviv', 32.0853, 34.7818, '特拉維夫'],
    ['加沙城', 'Gaza City', 31.5017, 34.4668],
    ['安曼', 'Amman', 31.9454, 35.9284],
    ['利雅得', 'Riyadh', 24.7136, 46.6753],
    ['迪拜', 'Dubai', 25.2048, 55.2708, '杜拜'],
    ['多哈', 'Doha', 25.2854, 51.531],
    ['萨那', "Sana'a", 15.3694, 44.191, '薩那|Sanaa'],
    ['曼谷', 'Bangkok', 13.7563, 100.5018],
    ['河内', 'Hanoi', 21.0278, 105.8342, '河內'],
    ['胡志明市', 'Ho Chi Minh City', 10.8231, 106.6297],
    ['仰光', 'Yangon', 16.8409, 96.1735, 'Rangoon'],
    ['金边', 'Phnom Penh', 11.5564, 104.9282, '金邊'],
    ['吉隆坡', 'Kuala Lumpur', 3.139, 101.6869],
    ['新加坡', 'Singapore', 1.3521, 103.8198],
    ['雅加达', 'Jakarta', -6.2088, 106.8456, '雅加達'],
    ['马尼拉', 'Manila', 14.5995, 120.9842, '馬尼拉'],
    ['悉尼', 'Sydney', -33.8688, 151.2093, '雪梨'],
    ['墨尔本', 'Melbourne', -37.8136, 144.9631, '墨爾本'],
    ['奥克兰', 'Auckland', -36.8485, 174.7633, '奧克蘭'],
    ['开罗', 'Cairo', 30.0444, 31.2357, '開羅'],
    ['喀土穆', 'Khartoum', 15.5007, 32.5599],
    ['亚的斯亚贝巴', 'Addis Ababa', 8.9806, 38.7578, '亞的斯亞貝巴'],
    ['内罗毕', 'Nairobi', -1.2921, 36.8219, '內羅畢'],
    ['摩加迪沙', 'Mogadishu', 2.0469, 45.3182],
    ['拉各斯', 'Lagos', 6.5244, 3.3792],
    ['金沙萨', 'Kinshasa', -4.4419, 15.2663, '金沙薩'],
    ['约翰内斯堡', 'Johannesburg', -26.2041, 28.0473, '約翰內斯堡|約翰尼斯堡'],
    ['开普敦', 'Cape Town', -33.9249, 18.4241, '開普敦'],
  ]),
];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const matchers = GAZETTEER.flatMap(place => place.aliases.map(alias => ({
  place, alias,
  // Chinese aliases are substring matches; Latin names require Unicode word boundaries.
  expression: /\p{Script=Han}/u.test(alias) ? null : new RegExp(
    `(?<![\\p{L}\\p{N}_])${escapeRegExp(alias)}(?![\\p{L}\\p{N}_])`,
    alias === 'NY' || alias === 'NYC' ? 'u' : 'iu',
  ),
})));

// Precision describes mention granularity, not confidence in the actual incident location.
export function mapPlace(text: string): { lat: number; lon: number; name: string; precision: 'city' | 'country' } | null {
  let best: { place: Place; length: number; index: number } | undefined;
  for (const { place, alias, expression } of matchers) {
    const index = expression ? text.search(expression) : text.indexOf(alias);
    if (index < 0) continue;
    // Common personal-name uses are safer left unlocated than asserted as cities.
    const context = text.slice(Math.max(0, index - 10), index + alias.length + 12);
    if (/Paris Hilton|Jack London|George Washington|Denzel Washington|华盛顿总统|華盛頓總統/i.test(context)) continue;
    if (!best || (place.kind === 'city' && best.place.kind === 'country') ||
      (place.kind === best.place.kind && (alias.length > best.length ||
        (alias.length === best.length && index < best.index)))) {
      best = { place, length: alias.length, index };
    }
  }
  return best ? { lat: best.place.lat, lon: best.place.lon, name: best.place.name, precision: best.place.kind } : null;
}

// Stable-ID ordering keeps display offsets independent of source arrival order.
export function withDisplayCoordinates(items: readonly NewsItem[]): NewsItem[] {
  const result = items.map(({ displayCoordinates: _previous, ...item }) => ({ ...item }) as NewsItem);
  const groups = new Map<string, NewsItem[]>();
  for (const item of result) {
    if (item.lat === null || item.lon === null || !Number.isFinite(item.lat) || !Number.isFinite(item.lon)) continue;
    const key = `${item.lat},${item.lon}`;
    const group = groups.get(key) ?? [];
    group.push(item);
    groups.set(key, group);
  }
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    group.sort((a, b) => a.id.localeCompare(b.id, 'en'));
    group.forEach((item, index) => {
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      const radius = 0.012 + 0.012 * (index / group.length);
      item.displayCoordinates = {
        lat: Math.max(-90, Math.min(90, item.lat! + radius * Math.sin(angle))),
        lon: Math.max(-180, Math.min(180, item.lon! + radius * Math.cos(angle))),
      };
    });
  }
  return result;
}
