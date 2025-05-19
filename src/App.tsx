import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GenerateArticles from './pages/Dashboard/Article/GenerateArticle';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import CreateArticle from './pages/Dashboard/Article/CreateArticle';


const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/articles/generate" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="articles/generate" replace />} />
          <Route path="articles/create" element={<CreateArticle />} />
          <Route path="articles/generate" element={<GenerateArticles />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
