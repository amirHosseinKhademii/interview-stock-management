interface IButton {
  className?: string
  onClick?: any
  children?: any
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset'
  icon?: boolean
  loading?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
  id?: string
}
