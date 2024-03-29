export default function CardMain({type,img,play,url,text,info,onClickPlay}) {
  return (
    <div>
        <div className="image-row-content" >
            <span onClick={onClickPlay} className="circle-green">
            {play ? <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>:<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>}</span>
            <img style={type==='artist'?{borderRadius:'50%'}:{borderRadius:'8px'}} src={img} alt={text} />
        </div>
        <div className="row-content-text">
            <a href={url}>{text}</a>
            <small>{info}</small>
        </div>
    </div>
  )
}
