import { useEffect, useState } from 'react';

interface Props {
  onEnter: () => void;
}

export function OpeningPrologue({ onEnter }: Props) {
  const [leaving, setLeaving] = useState(false);

  const dismiss = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(onEnter, 680);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === 'Escape' || event.key === ' ') {
        event.preventDefault();
        dismiss();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [leaving]);

  return (
    <section
      className={`prologue-screen ${leaving ? 'is-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="prologue-heading"
      data-testid="opening-prologue"
    >
      <button className="prologue-skip" onClick={dismiss} aria-label="跳过序幕">跳过 ↗</button>

      <div className="prologue-inner">
        <div className="prologue-eyebrow" id="prologue-heading">
          <span>歌 者</span>
          <i>/</i>
          <b>SINGER OBSERVATORY</b>
          <i>·</i>
          <span>SOL–III</span>
        </div>

        <div className="prologue-lines">
          <p className="prologue-p1 prologue-hook">
            <strong>这里不是动画，而是此刻正在发生的真实地球。</strong><br />
            <span>真实日照阴影、全球实时新闻、刚刚发生的地震与当地天气，正在这颗星球上同步运转。</span>
          </p>

          <p className="prologue-p2">
            从黑格尔将历史视为理性的宏大辩证，到福山宣告世界收敛于「历史的终结」，<br />
            <span>人类总以为文明终将驶入某种永恒的「恒纪元」。</span>
          </p>

          <p className="prologue-p3">
            向外看，在《三体》歌者文明的视线里，地球不过是厚仅 100 公里（不足半径 <strong>1.57%</strong>）的薄壳微尘，随时可被一片「二向箔」归档；<br />
            <span>向内看，这层薄壳却是一台强耦合的混沌机器——球面之上，从未有过孤立的局部噪音。</span>
          </p>
        </div>

        <div className="prologue-action">
          <button className="prologue-enter" onClick={dismiss} data-testid="enter-observatory">
            进入观测 <span aria-hidden="true">↗</span>
          </button>
          <p className="prologue-legend">
            <span>● 地球微点引线 · 实时新闻</span>
            <b>·</b>
            <span>◎ 扩散细环 · 实时地震</span>
            <b>·</b>
            <span>＋ 点选地表 · 实时天气</span>
            <b>·</b>
            <span>∞ 下方 · 蝴蝶效应与三体混沌</span>
            <b>·</b>
            <span>▭ 右上角 · 二向箔预演</span>
          </p>
        </div>
      </div>
    </section>
  );
}
