import { useState } from 'react'
import ToolTil from '../components/ToolTil';
import AuthorTitle from '../components/AuthorTitle';
import PerfilCard from '../components/PerfilCard';
import Credits from '../components/Credits';
import Digression from '../components/Digression';
import HeaderLateral from '../components/HeaderLateral';
import Fila from '../components/Fila';
import Main from '../components/Main';
import Icon from '../components/Icon';
function App() {
  const [search, setSearch]=useState(false);
  const [bilioteca, setBiblioteca]=useState(false);
  const [lateral, setLateral]=useState(false);
  const [favorito, setFavorito]=useState(false);
  const [imgLateral, setImgLateral]=useState(false);
  const [seguir, setSeguir]=useState(false);
  const [deviceHover,setDeviceHover]=useState(false);
  const [countClick,setCountClick]=useState(0);

  const setHouver= ()=>{
      setCountClick(countClick+1);
      setDeviceHover(!deviceHover);
      if(countClick===1){
        setDeviceHover(false);
        setCountClick(0);
      }
      console.log(countClick)
  }
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
        <main>
          <Main/>
        </main>
        {imgLateral && 
        <div className='lateral-right'>
          <div className='resize'></div>
          <div className='lateral-right-conteudo'>
            <HeaderLateral onClick={()=>setImgLateral(false)} circle={true} url="/" tooltip="Fechar" title="Matias Damásio Radio" position="bottom" element={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path></svg>}/>
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
            <span>{!favorito ? <Icon tooltip="Guarda em A tua Biblioteca" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>}/>
            : <Icon tooltip="Remover em A tua Biblioteca" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16 img-green" /* style={{fill:'#1ed760'}} */><path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path></svg>}/>
            }</span>
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
        <div className='footer-3'>
          <Icon state={imgLateral} onClick={()=>setImgLateral(!imgLateral)} tooltip="Vista em Reprodução" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" style={imgLateral ? {fill:'#1ed760'}:{}} className="img img-16"><path d="M11.196 8 6 5v6l5.196-3z"></path><path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path></svg>}/>
          <Icon tooltip="Letra" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg>}/>
          <Icon tooltip="Fila" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path></svg>}/>
          <div className={deviceHover ? 'tooltip-devices tooltip-yep':'tooltip-devices tooltip-nop'} onClick={setHouver}>
            <div className='devices-body'>
                <div className='device-'>
                  <svg style={{fill:'#1ed760'}} className='img' data-encore-id="icon" role="presentation" aria-hidden="true" data-testid="device-icon" viewBox="0 0 24 24"><path d="M0 21a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zM3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6z"></path></svg>
                  <div className='device-text'>
                    <span>Dispositivo atual</span>
                    <span>Este navegador Web</span>
                  </div>
                </div>
                <p>Não foram encontrados outros dispositivos</p>
                <div className='device-'>
                  <span className='svg-icon'><svg data-encore-id="icon" role="presentation" aria-hidden="true" className='img img-24' viewBox="0 0 24 24"><path d="M17.692 14.572a.3.3 0 0 0-.03-.424A8.755 8.755 0 0 0 12 12.073a8.755 8.755 0 0 0-5.663 2.075.3.3 0 0 0-.029.424l.916 1.059a.302.302 0 0 0 .423.031A6.808 6.808 0 0 1 12 14.092c1.65 0 3.164.588 4.353 1.57a.302.302 0 0 0 .423-.031l.916-1.06z"></path><path d="M20.309 11.545a.302.302 0 0 0-.028-.425A12.651 12.651 0 0 0 12 8.036c-3.155 0-6.044 1.16-8.28 3.084a.302.302 0 0 0-.029.425l.916 1.06a.299.299 0 0 0 .421.029A10.704 10.704 0 0 1 12 10.054c2.653 0 5.084.97 6.972 2.58a.299.299 0 0 0 .421-.03l.916-1.06z"></path><path d="M1.99 9.578a.297.297 0 0 0 .42.029A14.599 14.599 0 0 1 12 6.018c3.656 0 7.003 1.35 9.59 3.589a.297.297 0 0 0 .42-.03l.916-1.059a.303.303 0 0 0-.028-.425C19.964 5.541 16.158 4 12 4 7.842 4 4.037 5.54 1.102 8.093a.303.303 0 0 0-.028.425l.916 1.06zm10.232 11.32L15 17.686a.293.293 0 0 0-.016-.405 4.384 4.384 0 0 0-5.966 0 .293.293 0 0 0-.016.405l2.777 3.212a.293.293 0 0 0 .444 0z"></path></svg></span>
                  <div className='device-text'>
                    <span>Verifica o teu Wi-Fi</span>
                    <small>Liga os dispositivos que estás a usar à mesma rede Wi-Fi.</small>
                  </div>
                </div>
                <div className='device-'>
                  <span className='svg-icon'><svg data-encore-id="icon" role="presentation" aria-hidden="true" className="img img-24" viewBox="0 0 24 24"><path d="M10 19a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v14zm3 1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-8z"></path><path d="M18.25 7.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM17 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3.5-1.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zM0 4a2 2 0 0 1 2-2h5v2H2v11h5v2H2a2 2 0 0 1-2-2V4zm7 18H4v-2h3v2z"></path></svg></span>
                  <div className='device-text'>
                    <span>Reproduzir a partir de outro dispositivo</span>
                    <small>Aparece automaticamente aqui.</small>
                  </div>
                </div>
                <div className='device-'>
                  <span className='svg-icon'><svg data-encore-id="icon" role="presentation" aria-hidden="true" className="img img-24" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path><path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1z"></path></svg></span>
                  <div className='device-text'>
                    <span>Muda para a app Spotify</span>
                    <small>A app pode detetar mais dispositivos.</small>
                  </div>
                </div>
                <a href='' className='device-button'>
                  <span>Não vês o teu dispositivo? <svg data-encore-id="icon" role="presentation" aria-hidden="true" data-testid="icon-external-link" className="img img-16" viewBox="0 0 16 16"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg></span>
                </a>
            </div>
            <Icon tooltip="Ligar a um Dispositivo" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="presentation" aria-hidden="true" className="img img-16" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>}/>
          </div>
          <div className="vol">
            <Icon tooltip="Silenciar" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="presentation" aria-label="Volume medium" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" className="img img-16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path></svg>}/>
            <small className='vol-'></small>
          </div>
          <Icon tooltip="Abrir Minileitor" pointer={true} position="center top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path><path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path></svg>}/>
          <Icon tooltip="Ecrã Completo" pointer={true} position="right top" svg={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path></svg>}/>
        </div>
      </footer>
    </div>
    
  )
}

export default App
