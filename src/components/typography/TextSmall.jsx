function TextSmall(props) {
  return (
    <p className={`${props.className} text-sm font-primary`}>{props.children}</p>
  )
}
export default TextSmall