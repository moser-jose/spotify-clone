export default function Button({text,svg,style, className}) {
  return (
    <button style={style} className={'button ' + className}>{svg}{text}</button>
  )
}
