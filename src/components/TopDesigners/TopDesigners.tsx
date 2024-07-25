import { useSelector } from 'react-redux';
import { RootState } from '../../servises/store';
import { DesignerStats } from '../../types';
import { calculateMedian } from '../../utils/calculateMedian';

const TopDesigners = () => {
  const designers = useSelector((state: RootState) => state.designers.designersData);

  const topDesigners = designers
    .reduce<DesignerStats[]>((acc, designer) => {
      const completedTasks = designer.issues.filter(issue => issue.status === 'Done');
      if (completedTasks.length > 0) {
        const taskDurations = completedTasks.map(task => {
          const start = new Date(task.date_started_by_designer).getTime();
          const finish = new Date(task.date_finished_by_designer).getTime();
          return (finish - start) / (1000 * 60 * 60);
        });

        const medianTaskTime = calculateMedian(taskDurations);
        acc.push({
          avatar: designer.avatar,
          email: designer.email,
          username: designer.username,
          taskCount: completedTasks.length,
          medianTaskTime,
          averageTaskTime: medianTaskTime / completedTasks.length
        });
      }
      return acc;
    }, [])
    .sort((a, b) => b.taskCount - a.taskCount || a.averageTaskTime - b.averageTaskTime)
    .slice(0, 10);

  return (
    <div>
      <h2>Топ дизайнеры</h2>
      {topDesigners.map(designer => (
        <div key={designer.email}>
          <img src={designer.avatar} alt={designer.username} />
          <p>{designer.username}</p>
          <p>Медиана времени выполнения: {designer.medianTaskTime.toFixed(2)} ч.</p>
          <p>Количество выполненных задач: {designer.taskCount}</p>
          <p>Медиана времени на одну задачу: {designer.averageTaskTime.toFixed(2)} ч.</p>
        </div>
      ))}
    </div>
  );
};

export default TopDesigners;
