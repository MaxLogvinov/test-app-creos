import { useSelector } from 'react-redux';
import { RootState } from '../../servises/store';
import { formatDistanceToNow } from 'date-fns';

const Comments = () => {
  const comments = useSelector((state: RootState) => state.comments.commentsData);

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
  );

  return (
    <div>
      <section>
        <h2>Последние комментарии</h2>
        {sortedComments.slice(0, 10).map(comment => (
          <div key={comment.id}>
            <img src={comment.designer.avatar} alt={comment.designer.username} />
            <p>{comment.designer.username}</p>
            <p>{formatDistanceToNow(new Date(comment.date_created), { addSuffix: true })}</p>
            <p>{comment.issue}</p>
            <p>{comment.message}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Comments;
