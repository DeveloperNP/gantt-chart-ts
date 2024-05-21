import './App.css';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";

const histogramRows = [
  {
    id: 1,
    dateFrom: 'Wed, 01 Oct 2019 07:59:00 GMT',
    dateTo: 'Wed, 01 Dec 2020 07:59:00 GMT',
    background: 'blue',
  },
  {
    id: 2,
    dateFrom: 'Wed, 01 May 2020 07:59:00 GMT',
    dateTo: 'Wed, 03 Jun 2021 07:59:00 GMT',
    background: 'green',
  },
  {
    id: 3,
    dateFrom: 'Wed, 01 Apr 2020 07:59:00 GMT',
    dateTo: 'Wed, 03 Dec 2022 07:59:00 GMT',
    background: 'red',
  },
  {
    id: 4,
    dateFrom: 'Wed, 21 Apr 2021 07:59:00 GMT',
    dateTo: 'Wed, 03 Dec 2021 07:59:00 GMT',
    background: 'brown',
  },
  {
    id: 5,
    dateFrom: 'Wed, 01 Feb 2021 07:59:00 GMT',
    dateTo: 'Wed, 03 Dec 2024 07:59:00 GMT',
    background: 'yellow',
  },
];

let tasks: Task[] = [
  {
    start: new Date(2019, 9, 1),
    end: new Date(2020, 11, 1),
    name: 'Idea',
    id: 'Task 1',
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: 'blue', progressSelectedColor: '#ff9e0d' },
  },
  {
    start: new Date(2020, 4, 1),
    end: new Date(2021, 5, 3),
    name: 'Idea',
    id: 'Task 2',
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: 'green', progressSelectedColor: '#ff9e0d' },
  },
  {
    start: new Date(2020, 3, 1),
    end: new Date(2022, 11, 3),
    name: 'Idea',
    id: 'Task 3',
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: 'red', progressSelectedColor: '#ff9e0d' },
  },
  {
    start: new Date(2021, 3, 21),
    end: new Date(2021, 11, 3),
    name: 'Idea',
    id: 'Task 4',
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: 'brown', progressSelectedColor: '#ff9e0d' },
  },
  {
    start: new Date(2021, 1, 1),
    end: new Date(2024, 11, 3),
    name: 'Idea',
    id: 'Task 5',
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: 'yellow', progressSelectedColor: '#ff9e0d' },
  }
];


function App() {

  const mappedTasks: Task[] = histogramRows.map(el => ({
    start: new Date(el.dateFrom),
    end: new Date(el.dateTo),
    name: '',
    id: `Task ${el.id}`,
    type: 'task',
    progress: 100,
    isDisabled: true,
    styles: { progressColor: el.background }
  }))

  return (
    <>
      <h1>GANTT CHART</h1>
      {/* <Gantt tasks={tasks} viewMode={ViewMode.Year} /> */}
      <Gantt tasks={mappedTasks} viewMode={ViewMode.Year} />
    </>
  );
}

export default App;
