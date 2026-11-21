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
          <p className="prologue-p1">
            从黑格尔相信历史将在人类理性中抵达静止，<br />
            到福山宣告世界步入「历史的终结」——<br />
            <span>人类总习惯把自己的争端与输赢，当成宇宙的中心。</span>
          </p>

          <p className="prologue-p2">
            但退远到《三体》歌者文明的视线里，<br />
            我们全部的战争、新闻与悲欢，<br />
            都被困在厚仅 100 公里、不足地球半径 <strong>1.57%</strong> 的大气薄层内；<br />
            <span>在宇宙尺度上，轰轰烈烈的历史不过是一阵微弱噪音，随时可能被一片「二向箔」顺手归档。</span>
          </p>

          <p className="prologue-p3">
            <strong>这里呈现的不是动画，而是此刻正在发生的真实地球：</strong><br />
            全球实时新闻、真实地震、真实日照阴影与实时天气。<br />
            <span>借宇宙的冷眼照见渺小，也凝视黑夜里脆弱而微弱的灯火。</span>
          </p>
        </div>

        <div className="prologue-action">
          <button className="prologue-enter" onClick={dismiss} data-testid="enter-observatory">
            进入观测 <span aria-hidden="true">↗</span>
          </button>
          <p className="prologue-legend">
            <span>● 白色/琥珀微点与引线 · 全球实时新闻</span>
            <b>/</b>
            <span>◎ 扩散细环 · 实时地震</span>
            <b>/</b>
            <span>＋ 点选地表 · 实时天气</span>
            <b>/</b>
            <span>▭ 右上角 · 二向箔清理预演</span>
          </p>
        </div>
      </div>
    </section>
  );
}
