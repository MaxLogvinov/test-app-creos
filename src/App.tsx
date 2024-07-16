import { useEffect } from 'react';
import { fetchGetDesigners } from './servises/thunks/designersThunk';
import { fetchGetIssues } from './servises/thunks/issuesThunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './servises/store';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetDesigners());
    dispatch(fetchGetIssues());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<h1>Hihihih</h1>} />
        </Route>
      </Routes>
    </>
  );
}
