import HeaderLateral from "./HeaderLateral";

export default function Digression({title}) {
  return (
    <div className="digression">
        <HeaderLateral title={title} />
        <a href="" className="digression-">
            <div className="digression-data">
                <small>Nov.</small>
                <span>22</span>
            </div>
            <div className="digression-time">
                <p>Lisboa</p>
                <span>Anselmo Ralph</span>
                <small>sexta, 22:00 - Campo Pequeno</small>
            </div>
        </a>
    </div>
  )
}
