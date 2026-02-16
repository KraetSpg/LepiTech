import * as React from "react"
import { SoftwareItemList } from "./SoftwareItemList"

const SelectSoftwareComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className="flex flex-wrap gap-4 justify-start items-center">
    <SoftwareItemList></SoftwareItemList>
  </div>
))

export { SelectSoftwareComponent }