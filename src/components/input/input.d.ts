interface IInput {
  className?: string
  label?: string
  value?: any
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'date'
  error?: string
  name?: any
  id?: string
  later?: boolean | undefined
  required?: boolean | undefined
  max?: string | number | undefined
  min?: string | number | undefined
  precent?: boolean
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  onClick?: any
  withError?: boolean
  icon?: any
  interactive?: boolean
  open?: boolean
  toggle?: any
  validate?: any
  validation?: any
  onChange?: any
  control?: any
  fieldChange?: any
  fieldValue?: any
  fieldError?: any
  fieldRef?: any
  hours?: boolean
  minutes?: boolean
  number?: boolean
}
