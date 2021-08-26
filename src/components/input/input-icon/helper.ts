import { classNames } from 'utils/classes'

export const inputIconClassName = (label, size) =>
  classNames(
    'absolute  left-3',
    label
      ? size === 'small'
        ? 'top-6'
        : 'top-12'
      : size === 'small'
      ? 'top-2'
      : 'top-4'
  )
