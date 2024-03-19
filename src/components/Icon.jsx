import ToolTil from "./ToolTil";

export default function Icon({svg,onClick, tooltip,position,pointer,state}) {
  return (
    <span onClick={onClick} className={state && pointer ? 'icon-svg pointer point-after' : pointer  ? 'icon-svg pointer': state ? 'point-before icon-svg':'icon-svg'} /* style={pointer ? {cursor:'pointer' }:{}} */>
        {tooltip && <ToolTil texto={tooltip} position={position}/>}
        {svg}
    </span>
  )
}
