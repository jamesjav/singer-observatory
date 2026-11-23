import { useEffect, useState } from 'react';
import { formatCoordinates } from '../astronomy/coordinates';
import { isLocated, safeArticleUrl } from '../data/providers/news';
import type { NewsItem, NewsSnapshot } from '../data/providers/types';

interface Props {
  event: NewsItem | null;
  silent: boolean;
  snapshot: NewsSnapshot | null;
  onSelect: (event: NewsItem | null) => void;
  onLocate: (event: NewsItem) => void;
  onHover: (event: NewsItem | null) => void;
}

export function ObservationLog({ event, silent, snapshot, onSelect, onLocate, onHover }: Props) {
  const [text, setText] = useState('');
  const [collapsed, setCollapsed] = useState(false);
  const [unlocatedOnly, setUnlocatedOnly] = useState(false);
  const [chineseOnly, setChineseOnly] = useState(false);
  useEffect(() => {
    setText('');
    if (!event || silent) return;
    let count = 0;
    const timer = window.setInterval(() => {
      count += Math.max(1, Math.ceil(event.summary.length / 65));
      setText(event.summary.slice(0, count));
      if (count >= event.summary.length) window.clearInterval(timer);
    }, 30);
    return () => window.clearInterval(timer);
  }, [event, silent]);

  const unlocated = snapshot?.events.filter((item) => !isLocated(item)) ?? [];
  const baseList = unlocatedOnly ? unlocated : (snapshot?.events ?? []);
  const filtered = chineseOnly ? baseList.filter((item) => /\p{Script=Han}/u.test(item.summary)) : baseList;
  const list = [...filtered].sort((a, b) => (Date.parse(b.publishedAt ?? '') || 0) - (Date.parse(a.publishedAt ?? '') || 0));
  const label = event?.demo ? '演示' : snapshot?.mode === 'demo' ? '离线演示' : snapshot?.mode === 'cached' ? '缓存' : snapshot ? '实源' : '接通中';
  const url = safeArticleUrl(event?.url);
  return <section className={`observation-log live-log ${silent ? 'is-silent' : ''} ${collapsed ? 'log-collapsed' : ''}`} aria-label="表面噪音观测日志" onMouseLeave={() => onHover(null)}>
    <div className="section-heading"><span className="section-number">02</span><button className="log-collapse" aria-expanded={!collapsed} onClick={() => { setCollapsed(!collapsed); onHover(null); }}>表面噪音流 <span>{collapsed ? '+' : '−'}</span></button><span className="micro-tag">{label}</span></div>
    {!collapsed && (silent ? <p className="quiet-copy">观测距离超出阈值，<br />表面噪音已低于背景噪声。</p> : event ? <>
      <div className="log-navigation"><button onClick={() => onSelect(null)}>← 返回噪音流</button>{isLocated(event) && <button onClick={() => onLocate(event)}>定位地表 ↗</button>}</div>
      <div className="event-location"><span>{isLocated(event) ? `地表参照 / ${event.settlement}` : '未定位杂波'}</span><span className={event.entropy > 0.75 ? 'event-tag anomaly' : 'event-tag'}>{event.tag}</span></div>
      <p className="event-coordinates">{isLocated(event) ? formatCoordinates(event) : '无可靠地名匹配 · 不投射地表'}</p>
      {isLocated(event) && <p className="location-precision">{event.precision === 'seismic' ? `USGS 震中 · M ${event.magnitude?.toFixed(1)} · 深度 ${event.depthKm?.toFixed(1)} km · 可修订` : event.precision === 'country' ? '国家中心近似 · 非事件精确坐标' : event.precision === 'city' ? '标题/摘要地名匹配 · 城市中心近似' : event.precision === 'reported' ? 'GDELT 提及地点 · 非事发地核证' : '离线坐标参考样本'}{event.displayCoordinates ? ' · 显示点微偏移' : ''}</p>}
      <p className="event-copy">{text}<span className="typing-cursor" aria-hidden="true">_</span></p>
      <div className="event-source"><span>{event.source}</span>{url && <a href={url} target="_blank" rel="noopener noreferrer" data-testid="article-link">原始信号 ↗</a>}</div>
      <p className="event-published">{event.demo ? '离线演示样本 · 非真实资讯' : event.publishedAt ? `${new Date(event.publishedAt).toISOString().slice(0, 16).replace('T', ' ')} UTC` : '源未提供发布时间'}</p>
    </> : <>
      <div className="log-navigation">
        <span>{snapshot ? `${snapshot.events.length} 条实时新闻/地震` : '正在建立外部监听'}</span>
        <span className="log-filters">
          <button onClick={() => setChineseOnly(!chineseOnly)} aria-pressed={chineseOnly}>仅中文</button>
          <button onClick={() => setUnlocatedOnly(!unlocatedOnly)} aria-pressed={unlocatedOnly}>{unlocatedOnly ? '全部信号' : `未定位 ${unlocated.length}`}</button>
        </span>
      </div>
      <div className="news-stream" aria-label={unlocatedOnly ? '未定位噪音流' : '已捕获噪音流'}>
        {list.map((item) => <button key={item.id} onClick={() => onSelect(item)} onMouseEnter={() => onHover(item)} onFocus={() => onHover(item)} onBlur={() => onHover(null)} data-news-id={item.id}><span className={`stream-title ${item.kind === 'quake' ? 'seismic-title' : ''}`}>{item.kind === 'quake' ? `◎ ${item.magnitude?.toFixed(1) ?? ''}级地震 · ` : ''}{item.summary}</span><small><span>{item.source}</span><span>{isLocated(item) ? item.settlement : '未定位'}</span></small></button>)}
        {list.length === 0 && <p className="quiet-copy">{snapshot ? '该频段暂无可辨认信号。' : '各源独立响应，地球观测不受影响。'}</p>}
      </div>
      <p className="event-source stream-hint" title={snapshot?.warning}>{snapshot?.mode === 'demo' ? '离线演示样本 · 非真实资讯' : snapshot?.mode === 'cached' ? '链路不可达 · 当前为真实信号缓存' : '微点 / 人类喧嚣 · 细环 / USGS 地壳微震'}</p>
    </>)}
  </section>;
}
