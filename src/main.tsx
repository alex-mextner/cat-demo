import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CanvasPreview from './__canvas_preview__';
import App from './App.tsx';
import './index.css';

const PreviewGuard = () => {
  if (process.env.NODE_ENV !== 'development') {
    return <div style={{ padding: '20px' }}>Preview not available in production</div>;
  }
  return <CanvasPreview />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test-preview" element={<PreviewGuard />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
