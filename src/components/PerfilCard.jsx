import FollowData from "./followData"
export default function PerfilCard({style,setSeguir,isSeguir,seguir,author,listeners,text,}) {
  return (
    <div className="perfil-card">
        <div className="img-background" style={style}></div>
        <div className="data">
            <a href="" className="author">{author}</a>
            <FollowData seguir={seguir} isSeguir={isSeguir} setSeguir={setSeguir} listeners={listeners}/>
            <p className="text">{text}</p>
        </div>
    </div>
  )
}
