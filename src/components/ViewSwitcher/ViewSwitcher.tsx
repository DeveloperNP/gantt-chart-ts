import s from './ViewSwitcher.module.css'
import { ViewMode } from "gantt-task-react"
import { Button } from '@consta/uikit/Button'
import { Switch } from '@consta/uikit/Switch'

type ViewSwitcherProps = {
  isChecked: boolean
  onViewListChange: (isChecked: boolean) => void
  onViewModeChange: (viewMode: ViewMode) => void
}

export const ViewSwitcher = ({ onViewModeChange, onViewListChange, isChecked }: ViewSwitcherProps) => {
  return (
    <>
      <div className={s.viewModeContainer}>
        <Button size='s' label='Quarter of Day' onClick={() => onViewModeChange(ViewMode.QuarterDay)} />
        <Button size='s' label='Half of Day' onClick={() => onViewModeChange(ViewMode.HalfDay)} />
        <Button size='s' label='Day' onClick={() => onViewModeChange(ViewMode.Day)} />
        <Button size='s' label='Week' onClick={() => onViewModeChange(ViewMode.Week)} />
        <Button size='s' label='Month' onClick={() => onViewModeChange(ViewMode.Month)} />
        <Button size='s' label='Year' onClick={() => onViewModeChange(ViewMode.Year)} />
      </div>
      <div className={s.switcher}>
        <Switch size='m' checked={isChecked} label='Show Task List' onClick={() => onViewListChange(!isChecked)} />
      </div>
    </>
  )
}
