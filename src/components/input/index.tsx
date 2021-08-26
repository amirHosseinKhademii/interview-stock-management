import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { Error } from 'components/error'

import { InputLabel } from './input-label'
import { InputCore } from './input-core'
import { InputIcon } from './input-icon'

export const Input: FC<IInput> = memo((props) => {
  const {
    required,
    max,
    min,
    later,
    error,
    className,
    validation,
    precent,
    control,
    name,
    hours,
    minutes,
    number,
  } = props
  const { validate } = useValidation({
    required,
    max,
    min,
    later,
    validation,
    precent,
    hours,
    minutes,
    number,
  })

  if (control)
    return (
      <Controller
        name={name}
        rules={{ validate }}
        control={control}
        render={({
          field: { onChange: fieldChange, value: fieldValue, ref: fieldRef },
          fieldState: { error: fieldError },
        }) => (
          <div className={`w-full col-start relative ${className}`}>
            <InputLabel {...props} />
            <InputCore
              validate={validate}
              fieldChange={fieldChange}
              fieldValue={fieldValue}
              fieldError={fieldError}
              fieldRef={fieldRef}
              {...props}
            />

            <InputIcon {...props} />
            <Error error={fieldError} className="absolute top-[78px] left-0" />
          </div>
        )}
      />
    )
  else
    return (
      <div className={`w-full col-start relative ${className}`}>
        <InputLabel {...props} />
        <InputCore validate={validate} {...props} />
        <InputIcon {...props} />
        <Error error={error} />
      </div>
    )
})
