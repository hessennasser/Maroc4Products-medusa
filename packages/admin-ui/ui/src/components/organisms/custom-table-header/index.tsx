import clsx from "clsx"
import { capitalize } from "lodash"
import React from "react"

type TableViewHeaderProps<T = string> = {
  views: T[]
  activeView?: T
  setActiveView?: (view: T) => void
}

const TableViewHeader: React.FC<TableViewHeaderProps> = ({
  views,
  activeView = views[0],
  setActiveView,
}) => {
  return (
    <div className="inter-large-semibold gap-base text-grey-40 flex medium:flex-row flex-col">
      {views.map((k, i) => (
        <div
          key={i}
          className={clsx("cursor-pointer", {
            ["text-grey-90"]: k === activeView,
          })}
          onClick={() => {
            if (setActiveView) {
              setActiveView(k)
            }
          }}
        >
          {capitalize(k)}
        </div>
      ))}
    </div>
  )
}

export default TableViewHeader
