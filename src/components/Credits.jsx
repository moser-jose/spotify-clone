import FollowData from "./FollowData";
import HeaderLateral from "./HeaderLateral";

export default function Credits({fun,author,setSeguir,seguir,others}) {
  return (
    <div className="credits">
        <HeaderLateral title="Créditos" more="Mostrar Tudo"/>
        <FollowData seguir={seguir} setSeguir={setSeguir} isSeguir={true} author={author} fun={fun}/>
        {others && others.map(e => <FollowData key={e.id} seguir={seguir} setSeguir={setSeguir} isSeguir={e.isSeguir} author={e.author} fun={e.fun}/>)}
            
    </div>
  )
}
