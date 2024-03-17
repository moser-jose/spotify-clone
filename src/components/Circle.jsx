import ToolTil from "./ToolTil";

export default function Circle({onClick,element,position, texto, tooltip,}) {
  return (
    <span className='close' onClick={onClick}>
        {tooltip && <ToolTil texto={tooltip} position={position}/>}
        {element}
    </span>
  )
}
