export default function FollowData({fun,author,setSeguir,seguir,isSeguir,listeners}) {
  return (
    <div className="listeners">
      {listeners && <p>{listeners}</p>}
      {author && <h3>{isSeguir ? <a href="">{author}</a>:<small>{author}</small>} <div>{fun.map(e => <span key={e}>{e}</span>)}</div> </h3>}
      {isSeguir && <button onClick={()=>setSeguir(!seguir)}>{seguir ? 'Deixar de seguir':'Seguir'}</button>}
    </div>
  )
}
