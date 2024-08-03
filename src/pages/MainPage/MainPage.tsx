import Comments from '../../components/Comments/Comments';
import TopDesigners from '../../components/TopDesigners/TopDesigners';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../servises/store';
import Loading from '../../components/Loading/Loading';

export default function MainPage() {
  const isLoadingDesigners = useSelector(
    (state: RootState) => state.designers.isLoadingDesignersData
  );
  // const isLoadingComments = useSelector((state: RootState) => state.comments.isLoadingCommentsData);

  return (
    <>
      <main className="main">
        <h1>Main Page</h1>
        <Comments />
        {/* {isLoadingComments ? <Loading /> : <Comments />} */}
        {isLoadingDesigners ? <Loading /> : <TopDesigners />}
      </main>
    </>
  );
}
