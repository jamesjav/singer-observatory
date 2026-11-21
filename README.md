# 歌者 / SINGER · 第三行星观测终端

> *薄层之下，众生喧哗。所有已知的悲欢，都被约束在这里。*

## 理念：从黑格尔、福山到歌者文明

两百年前，黑格尔将世界历史视为“绝对精神”自我展开、最终在理性与自由中抵达完满与静止的进程；冷战落幕之际，弗朗西斯·福山循此脉络提出“历史的终结”，仿佛人类意识形态的演进已触及终章，留下的只是技术治理与“末人”的琐碎焦虑。

这两种史观跨越两个世纪，却共享同一个隐秘前提：**人类中心主义**。然而俯瞰这颗行星每秒跳动的实时信号就会发现，历史既未在理性中圆满，也未在制度中静止——战火、选举、制裁、灾变与集体情绪，仍在厚仅 100 公里、不足行星半径 **1.57%** 的大气薄膜之下往复沸腾。

《三体》中的**歌者文明**，彻底掀翻了这个坐标系。在猎户臂外缘一位普通清理者的视野里，第三行星上一切被人类奉为史诗的宏大叙事，不过是低熵聚落发出的微弱表面噪音，与一次 3.4 级地壳微震并无高下之分。在宇宙尺度上，“历史的终结”不是思辨胜利，而是一次成本极低的常规归档：**清理，只是一份普通的工作。**

**「歌者 · 第三行星观测终端」**是一台宇宙尺度的哲学观测仪。它将人类正在发生的全球实时新闻，与冷漠运转的天文日照阴影、实时大气风场、USGS 全球地壳微震并置在深空之中——在极致祛魅与谦卑之后，重新凝视这层 1.57% 薄壳之下脆弱而微弱的万家灯火。

## 本地运行

需要 Node.js 24+：

```bash
npm install
npm run build
npm start
# 打开 http://127.0.0.1:5192/
```

运行单元测试：

```bash
npm test
```

## GitHub Actions 定时抓取 + 静态部署（适配 Qoder Sites / GitHub Pages）

项目内置了两个 GitHub Actions 工作流（均不污染 `main` 分支提交记录）：

1. **`.github/workflows/update-news.yml`**：每 15 分钟自动拉取 USGS 地震与 5 个国际/中文新闻源，生成静态快照 `data/news.json` 并推送到 `gh-pages` 分支。
2. **`.github/workflows/deploy-pages.yml`**：推送到 `main` 分支时自动测试、构建并部署完整静态站点到 `gh-pages` 分支。

### 开启步骤

1. 将本项目推送到你的 GitHub 仓库（默认分支 `main`）。
2. 进入仓库 **Settings → Pages**，将 Source 设为 **Deploy from a branch**，分支选 **`gh-pages`**（目录 `/ (root)`）。
3. 进入 **Actions** 标签页，先手动触发一次 **Deploy Site to GitHub Pages**（或 **Update Live News Snapshot**）。
4. 完成后即可获得：
   - 完整 GitHub Pages 站点：`https://<你的GitHub用户名>.github.io/<仓库名>/`
   - 实时新闻静态快照接口（原生支持 CORS）：`https://<你的GitHub用户名>.github.io/<仓库名>/data/news.json`

### 发布前端到 Qoder Sites

如果你把打包产物发布到 **Qoder Sites**，只需在构建前创建 `.env.production`（或配置构建环境变量）：

```env
VITE_NEWS_API_URL=https://<你的GitHub用户名>.github.io/<仓库名>/data/news.json
VITE_BASE_PATH=/
```

随后执行 `npm run build`，将生成的 `dist/` 发布到 Qoder Sites 即可——无需任何后端服务器，新闻每 15 分钟自动更新，天气与风场由前端直连 Open-Meteo。
