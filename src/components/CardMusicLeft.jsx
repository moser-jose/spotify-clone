export default function CardMusicLeft({lateral, reproduzido,dataCriacao, type, tittle, img, info1, info2}) {
  return (
    <li className="music-left">
        <div className="div-text">
            <div className="music-img">
                <img style={type=="artist"? {borderRadius:'50%'}:{}} src={img} alt={tittle} />
            </div>
            <div className="music-text">
                <p>{tittle}</p>
                <span>{info1}{info2 ? ' • '+ info2:''}</span>
            </div>
        </div>
        {lateral ? <><span className="data-criacao">{dataCriacao}</span><span className="reproduzido">{reproduzido}</span></>:''}        
    </li>
  )
}
