function HeadingExtraLarge(props) {
   return <h1 className={`md:text-3xl text-2xl font-bold text-dark ${props.className}`}>{props.children}</h1>;
}
export default HeadingExtraLarge;
