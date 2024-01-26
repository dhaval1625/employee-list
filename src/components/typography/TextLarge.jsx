function TextLarge(props) {
  return (
    <p className={`${props.className} text-base md:text-xl font-medium font-primary`}>{props.children}</p>
  )
}
export default TextLarge