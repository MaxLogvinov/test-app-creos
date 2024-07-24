import { useEffect } from 'react';
import { fetchGetDesigners } from './servises/thunks/designersThunk';
import { fetchGetIssues } from './servises/thunks/issuesThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './servises/store';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import IssuesPage from './pages/IssuesPage/IssuesPage';
import DesignersPage from './pages/DesignersPage/DesignersPage';
import { fetchGetComments } from './servises/thunks/commentsThunk';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetDesigners());
    dispatch(fetchGetIssues());
    dispatch(fetchGetComments());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/designers" element={<DesignersPage />} />
        </Route>
      </Routes>
    </>
  );
}
