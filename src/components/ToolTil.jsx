export default function ToolTil({position,texto}) {
    return <div className={'tooltip '+ position}><small>{texto}</small></div>
}
