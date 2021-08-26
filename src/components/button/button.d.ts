interface IButton {
  className?: string
  children?: any
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  icon?: boolean
  loading?: boolean
  id?: string
  onClick?: Function
  onMouseEnter?: Function
  onMouseLeave?: Function
}
