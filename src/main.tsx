import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/global.css';
import './styles/live-data.css';
import './styles/narrative.css';
import './styles/surface-signals.css';
import './styles/chaos.css';

createRoot(document.getElementById('root')!).render(<App />);
