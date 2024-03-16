import { useState } from 'react'
import ToolTil from '../components/ToolTil';
import AuthorTitle from '../components/AuthorTitle';
import PerfilCard from '../components/PerfilCard';
import Credits from '../components/Credits';
import Digression from '../components/Digression';
import HeaderLateral from '../components/HeaderLateral';
import Fila from '../components/Fila';
function App() {
  const [search, setSearch]=useState(false);
  const [bilioteca, setBiblioteca]=useState(false);
  const [lateral, setLateral]=useState(false);
  const [favorito, setFavorito]=useState(false);
  const [imgLateral, setImgLateral]=useState(false);
  const [seguir, setSeguir]=useState(false);
  let others=[
    {
      id:1,
      author:"Edu Monteiro",
      fun:["Compositor, ", "Letrista, ", "Produtor"],
      isSeguir:false,
    },
    {
      id:2,
      author:"Hóracio Castro",
      fun:["Compositor, ", "Letrista, ", "Produtor"],
      isSeguir:false,
    }
  ];
  return (
    <div className='body'>
      <div className='main'>
        <div className={bilioteca ? `lateral-left-hidden`:`lateral-left` }>
          <nav className='l' style={lateral ? {width:584}:{}}>
            <ul className='home-left'>
                <li><a href=""><svg data-encore-id="icon" role="img" aria-hidden="true" className="img" viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg> {bilioteca ? '':'Início'}</a></li>
                <li onClick={()=>setSearch(true)}><a >{search ? <svg data-encore-id="icon" role="img" aria-hidden="true" className="img" viewBox="0 0 24 24"><path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path><path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path></svg>:<svg data-encore-id="icon" role="img" aria-hidden="true" className="img" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path></svg></svg>}{bilioteca ? '':'Procurar'}</a></li>
            </ul>

            <div className='menu-left'  >
              <div className='menu-left-header' >
                <div className='menu-left-header-1' >
                  <div onClick={()=>setBiblioteca(!bilioteca)}>
                    <span className='menu-left-header-1-svg'> {bilioteca ? <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="img"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg> : <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="img"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>}</span>
                    <span>{bilioteca ? '':'A tua Biblioteca'}</span>
                  </div>
                  <span className='padding'><ToolTil texto="Criar playlist ou pasta" position="top center"/><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg></span>
                  <span onClick={()=>setLateral(!lateral)} className='padding'><ToolTil texto={lateral ? 'Mostrar menos':'Mostrar mais'} position="top center"/>{lateral ? <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z"></path></svg>:<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg>}</span>
                </div>
                <div></div>
              </div>
            </div>
          </nav>
          <div className='resize'></div>
        </div>
        <main></main>
        {imgLateral && 
        <div className='lateral-right'>
          <div className='resize'></div>
          <div className='lateral-right-conteudo'>
            <HeaderLateral setImgLateral={()=>setImgLateral(false)} close={true} url="/" title="Matias Damásio Radio"/>
            <div className='cover'>
              <img src="https://i.scdn.co/image/ab67616d0000b273e6df9c1fd68e0ebb14d9644b" alt="" />
            </div>
            <AuthorTitle onClick={()=>setFavorito(!favorito)} title="Tratar Bem" favorito={favorito} position="top center" author="Anselmo Ralph"/>
            <PerfilCard setSeguir={setSeguir} isSeguir={true} seguir={seguir} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url("https://i.scdn.co/image/ab6761670000ecd46d17fcf5df7c59c86055dbf0")`}} author="Anselmo Ralph" listeners="464 295 ouvintes por mês" text="Multi-award-winning Anselmo Ralph is considered one of the leading African artists of his"/>
            <Credits others={others} setSeguir={setSeguir} seguir={seguir} author="Anselmo Ralph" fun={['Artista Principal, ', 'Letrista, ']} />
            <Digression title="Em Digressão"/>
            <Fila title="Próximas na fila" more="Abrir fila"/>
          </div>
          
        </div>}
        
      </div>
      <footer>
        <div className='footer-1'>
          <div className='footer-1-img'>
            <div className='botao' onClick={()=>setImgLateral(!imgLateral)}>
              {imgLateral ?<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path></svg>: <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path></svg> }
           </div>
            <img src="https://i.scdn.co/image/ab67616d00004851e6df9c1fd68e0ebb14d9644b" alt="" />
          </div>
          <div className='autor'>
            <a href="" alt="">Tratar Bem</a>
            <a href="" alt="">Anselmo Ralph</a>
          </div>
          <div className='favoritos' onClick={()=>setFavorito(!favorito)}>
            <span>{!favorito ? <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>: <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16 img-green" /* style={{fill:'#1ed760'}} */><path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path></svg>}</span>
          </div>
        </div>
        <div className='footer-2'>
          <div className='footer-2-control'>
            <span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg></span>
            <span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg></span>
            <span className='play'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></span>
            <span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg></span>
            <span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg></span>
          </div>
          <div className='footer-2-player'>
            <small>1:07</small>
            <span></span>
            <small>3:10</small>
          </div>
        </div>
        <div className='footer-3'></div>
      </footer>
    </div>
    
  )
}

export default App
