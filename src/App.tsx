import type { FC, JSX } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GenerateArticles from './pages/Dashboard/Article/GenerateArticle';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import CreateArticle from './pages/Dashboard/Article/CreateArticle';
import KeywordProject from './pages/Dashboard/Article/KeywordProject';
import AIKeyword from './pages/Dashboard/Article/AIKeyword';
import NotFound from './pages/NotFound';

interface RouteConfig {
  path: string;
  element: JSX.Element;
}

const articleRoutes: RouteConfig[] = [
  { path: "create", element: <CreateArticle /> },
  { path: "generate", element: <GenerateArticles /> },
  { path: "keyword-project", element: <KeywordProject /> },
  { path: "ai-keyword", element: <AIKeyword /> },
];

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/articles/generate" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="articles/generate" replace />} />

          <Route path="articles">
            <Route index element={<Navigate to="generate" replace />} />
            {articleRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
