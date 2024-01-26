function TextPrimary(props) {
  return (
    <p className={`${props.className} text-base font-primary text-gray`}>{props.children}</p>
  )
}
export default TextPrimary