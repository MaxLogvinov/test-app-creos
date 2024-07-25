import Comments from '../../components/Comments/Comments';
import TopDesigners from '../../components/TopDesigners/TopDesigners';
import './MainPage.scss';

export default function MainPage() {
  return (
    <>
      <main className="main">
        <h1>Main Page</h1>
        <Comments />
        <TopDesigners />
      </main>
    </>
  );
}
