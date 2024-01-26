import ButtonBase from "./ButtonBase"

function ButtonLight(props) {
  return (
      <ButtonBase {...props} className={`${props.className ? props.className : ''} btn-light`}>
         {props.children}
      </ButtonBase>
  )
}

export default ButtonLight