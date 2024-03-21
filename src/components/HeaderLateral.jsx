import Circle from './Circle'

export default function HeaderLateral({className,onClick, circle, more,link,url, title, tooltip, position, element}) {
  return (
    <div className='header-lateral'>
        {url ? <a className={className} href={url}>{title}</a> : <h1 className={className}>{title}</h1>}
        {more && <span className='more'>{more}</span>}
        {circle && <Circle onClick={onClick} tooltip={tooltip} position={position} element={element} />}
    </div>
  )
}
