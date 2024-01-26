function HeadingMedium(props) {
  return (
    <h1 className={`${props.className} text-base md:text-xl font-semibold text-dark`}>{props.children}</h1>
  )
}
export default HeadingMedium