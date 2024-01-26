function HeadingLarge(props) {
  return (
    <h1 className={`${props.className} md:text-2xl text-xl font-semibold text-dark`}>{props.children}</h1>
  )
}
export default HeadingLarge