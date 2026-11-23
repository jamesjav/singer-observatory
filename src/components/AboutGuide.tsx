interface Props {
  onClose: () => void;
  onOpenCredits: () => void;
  onReplayPrologue: () => void;
}

const GUIDE_ITEMS = [
  { mark: '●', tone: 'news', title: '表面噪音 · 实时新闻', copy: '地球上的白色/琥珀微点与引线是此刻全球真实新闻（BBC、半岛、卫报、联合国等），点击列表或引线可飞向事发地并查看原文。' },
  { mark: '◎', tone: 'quake', title: '地壳微震 · 实时地震', copy: '蓝灰色同心扩散细环来自 USGS 全球 24 小时真实地震数据，标注真实震中、震级与深度。' },
  { mark: '＋', tone: 'weather', title: '薄层大气扰动 · 实时天气', copy: '点击地球任意角落，即时查询该经纬度此刻的气温、风速、风向、气压与云量（Open-Meteo 实时气象模型）。' },
  { mark: '»', tone: 'sun', title: '真实日照阴影与时间轴', copy: '昼夜分界线按此刻真实 UTC 天文太阳位置渲染；底部可暂停或加速，观看日夜阴影扫过地表。' },
  { mark: '↗', tone: 'deep', title: '深空退远 · 暗淡蓝点', copy: '将镜头平滑退远至地月轨道之外，看地球缩成星海尘埃，所有喧嚣衰减至背景噪声以下。' },
  { mark: '▭', tone: 'foil', title: '清理预演 · 二向箔', copy: '体验三维地球连同灯火与新闻缓慢展平为二维星图的可逆艺术演出，随时可点击「时空回溯」复原。' },
  { mark: 'H', tone: 'quiet', title: '静默巡航与深空声景', copy: '按 H 进入无文字沉浸环绕模式（移至屏幕边缘或再按 H 退出）；右上角可开启程序合成的深空环境低鸣。' },
  { mark: '∞', tone: 'chaos', title: '地球下方 · 人类命运共同体混沌系统', copy: '下滑或点击「混沌相空间 ↓」，实时地缘安全、大国秩序、经贸与科技新闻直接耦合进混沌相空间与三体引力轨道，直观呈现蝴蝶效应双轨分叉。' },
] as const;

export function AboutGuide({ onClose, onOpenCredits, onReplayPrologue }: Props) {
  return (
    <div className="guide-backdrop" role="presentation" onClick={onClose}>
      <section className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guide-title" onClick={(event) => event.stopPropagation()}>
        <header className="guide-header">
          <div>
            <span className="eyebrow">关于作品 / 观测导览</span>
            <h2 id="guide-title">歌者 · 第三行星观测终端</h2>
          </div>
          <button className="guide-close" onClick={onClose} aria-label="关闭项目说明">×</button>
        </header>

        <div className="guide-body">
          <div className="guide-block">
            <h3>01 / 你现在看到的是什么？</h3>
            <p className="guide-lead">
              这是一颗按此刻真实时间运转的 3D 地球。地表亮起的微点与引线是<strong>此刻全球正在发生的真实新闻</strong>，扩散细环是<strong>刚刚发生的真实地震</strong>，明暗分界是<strong>真实的太阳日照与黑夜</strong>；拖动旋转、滚轮缩放，点击任意位置都能读出当地此刻的真实天气。
            </p>
          </div>

          <div className="guide-block">
            <h3>02 / 为什么要做成「歌者文明」视角？</h3>
            <p>
              <strong>人类的执念：</strong>两百年前黑格尔相信历史将在理性中走向完满，冷战后福山宣告“历史的终结”——人类总习惯把自己眼前的制度、冲突与输赢当成宇宙的中心。
            </p>
            <p>
              <strong>宇宙的冷眼：</strong>但换到《三体》歌者文明的视角，地球不过是星海边缘一颗普通岩球。我们每天吵翻天的新闻与悲欢，全被装在厚仅 100 公里（不到地球半径 <strong>1.57%</strong>）的薄薄空气层里。在宇宙尺度下，轰轰烈烈的“历史”只是一阵微弱噪音，甚至随时可能被一片“二向箔”像归档文件一样顺手抹平。
            </p>
            <p>
              <strong>留给观者的余韵：</strong>把人类此刻的喧嚣与冷漠的太阳、大气、地壳并置在一起，不是为了虚无——而是让人在看见自身的渺小之后，更觉黑夜里每一簇微弱灯火的脆弱与珍贵。
            </p>
          </div>

          <div className="guide-block">
            <h3>03 / 术语对照与怎么玩</h3>
            <div className="guide-grid">
              {GUIDE_ITEMS.map((item) => (
                <div className="guide-item" key={item.title}>
                  <span className={`guide-mark mark-${item.tone}`} aria-hidden="true">{item.mark}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="guide-footer">
          <div className="guide-footer-links">
            <button className="guide-link" onClick={onReplayPrologue}>重看开屏序幕</button>
            <span aria-hidden="true">/</span>
            <button className="guide-link" onClick={onOpenCredits}>底图与技术数据档案 →</button>
          </div>
          <button className="guide-enter" onClick={onClose}>返回观测</button>
        </footer>
      </section>
    </div>
  );
}
