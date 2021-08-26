import { FC, memo } from 'react'
import { inputIconClassName } from './helper'

export const InputIcon: FC<IInput> = memo(({ label, icon, size }) => {
  if (icon)
    return <div className={inputIconClassName(label, size)}>{icon()}</div>
  else return null
})
