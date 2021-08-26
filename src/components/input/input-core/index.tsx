import { FC, memo } from 'react'
import { inputCoreActualValue, inputCoreClassName } from './helper'

export const InputCore: FC<IInput> = memo((props) => {
  if (props.control)
    return (
      <input
        data-testid="input-core"
        type={props.type}
        name={props.name}
        ref={props.fieldRef}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.fieldValue || ''}
        onClick={props.onClick}
        onChange={props.fieldChange}
        className={inputCoreClassName(
          props.fieldError,
          props.withError,
          props.size,
          props.icon
        )}
      />
    )
  else
    return (
      <input
        data-testid="input-core"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={inputCoreActualValue(props.value)}
        onClick={props.onClick}
        onChange={props.onChange}
        className={inputCoreClassName(
          props.error,
          props.withError,
          props.size,
          props.icon
        )}
      />
    )
})
