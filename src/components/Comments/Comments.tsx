import { useSelector } from 'react-redux';
import { RootState } from '../../servises/store';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, List } from 'antd';
import './Comments.scss';

const Comments = () => {
  const comments = useSelector((state: RootState) => state.comments.commentsData);
  const isLoadingComments = useSelector((state: RootState) => state.comments.isLoadingCommentsData);

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
  );

  return (
    <section className="comments">
      <h2>Последние комментарии</h2>
      <List
        className="comments__list"
        itemLayout="horizontal"
        loading={isLoadingComments}
        bordered={false}
        dataSource={sortedComments.slice(0, 10)}
        renderItem={comment => (
          <List.Item className="comments__item" key={comment.id}>
            <List.Item.Meta
              avatar={<Avatar src={comment.designer.avatar} />}
              title={
                <>
                  <p className="comments__text">{comment.designer.username}</p>
                  <p className="comments__text">{comment.issue}</p>
                </>
              }
              description={
                <>
                  <p className="comments__text">{comment.message}</p>
                  <p className="comments__text">
                    {formatDistanceToNow(new Date(comment.date_created), { addSuffix: true })}
                  </p>
                </>
              }
            />
          </List.Item>
        )}
      />
    </section>
  );
};

export default Comments;
