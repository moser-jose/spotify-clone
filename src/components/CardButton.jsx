export default function CardButton({setBackgroundHover,backgroundColor, url,onClick, play, titulo, img, alt}) {
  return (
    <a onMouseOver={()=>setBackgroundHover({backgroundColor:backgroundColor})} href={url} className="main-content-header-">
        <div className="main-content-header-p">
            <div className="img-main-content">
                <img src={img} alt={alt} />
            </div>
            <span>{titulo}</span>
        </div>
        {play && <small className="barr-play" style={{marginRight:'8px'}}><img width="14" height="14" src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif" alt="" /></small>}
        <span onClick={onClick} className="circle-green">
        {play ? <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>:<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>}</span>
    </a>
  )
}
