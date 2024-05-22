import './App.css'
import { Gantt, Task, ViewMode } from 'gantt-task-react'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { useGanttTaskReactAdapter } from '@consta/gantt-task-react-adapter/useGanttTaskReactAdapter'
import { useState } from 'react'
import { ViewSwitcher } from './components/ViewSwitcher/ViewSwitcher'


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
]

const tasks: Task[] = histogramRows.map(el => ({
  start: new Date(el.dateFrom),
  end: new Date(el.dateTo),
  name: '',
  id: `Task ${el.id}`,
  type: 'task',
  progress: 100,
  isDisabled: true,
  styles: { progressColor: el.background }
}))

export default function App() {
  const { prefix, ...styleOptions } = useGanttTaskReactAdapter({ size: 'l' })
  const [view, setView] = useState<ViewMode>(ViewMode.Month)
  const [isChecked, setIsChecked] = useState(false)

  let columnWidth
  if (view === ViewMode.QuarterDay) {
    columnWidth = 40
  } else if (view === (ViewMode.HalfDay || ViewMode.Day)) {
    columnWidth = 60
  } else if (view === ViewMode.Week) {
    columnWidth = 50
  } else if (view === ViewMode.Month) {
    columnWidth = 80
  } else if (view === ViewMode.Year) {
    columnWidth = 150
  }

  return (
    <Theme preset={presetGpnDefault}>
      <ViewSwitcher
        onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />

      <div className={prefix}>
        <h2>Gantt Chart</h2>
        <Gantt
          {...styleOptions}
          tasks={tasks}          
          viewMode={view}
          listCellWidth={isChecked ? "160px" : ""}
          columnWidth={columnWidth}
          preStepsCount={0}
          barCornerRadius={10}       
        />
      </div>
    </Theme>
  )
}