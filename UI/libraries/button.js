import classNames from "classnames";
const Button = ({children, className, disabled = false, onClick}) => {
  const disabledClass = classNames(className, {
    "o-20": disabled,
  })
  return (
    <div className={`pa2 bg-blue br2 white tc pointer ${disabledClass}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button;
