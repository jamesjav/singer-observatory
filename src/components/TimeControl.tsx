import { TIME_MODES } from '../simulation/clock';
import type { TimeMode } from '../simulation/clock';

export function TimeControl({ utc, mode, onChange }: { utc: number; mode: TimeMode; onChange: (mode: TimeMode) => void }) {
  const date = new Date(utc);
  const fraction = (date.getUTCHours() * 3600 + date.getUTCMinutes() * 60 + date.getUTCSeconds()) / 86400;
  return <footer className="time-footer">
    <div className="time-rail" aria-hidden="true">
      {Array.from({ length: 49 }, (_, i) => <span key={i} className={i % 12 === 0 ? 'major-tick' : ''}>{i % 12 === 0 && <b>{String(i / 2).padStart(2, '0')}</b>}</span>)}
      <div className="time-needle" style={{ left: `${fraction * 100}%` }} />
    </div>
    <div className="time-controls-row">
      <div className="epoch"><span className="eyebrow">观测纪元 / UTC</span><time dateTime={date.toISOString()}>{date.toISOString().slice(0, 10).replaceAll('-', '.')}<span>{date.toISOString().slice(11, 19)}</span></time></div>
      <div className="time-controls" role="group" aria-label="时间流速">
        {TIME_MODES.map((item) => <button key={item.id} className={mode === item.id ? 'active' : ''} aria-pressed={mode === item.id} onClick={() => onChange(item.id)} data-testid={`time-${item.id}`}>
          <span className={`time-symbol symbol-${item.id}`} aria-hidden="true">{item.id === 'paused' ? 'Ⅱ' : item.id === 'live' ? '·' : item.id === 'hour' ? '›' : '»'}</span>{item.label}
        </button>)}
      </div>
      <div className="time-scale-note"><span>{mode === 'paused' ? '时间切片已冻结' : mode === 'live' ? '与母恒星时序同步' : '加速观测 · 非当前时刻'}</span><span>光抵达这里，需要 8 分 20 秒</span></div>
    </div>
  </footer>;
}
