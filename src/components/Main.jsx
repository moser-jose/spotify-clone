import { useState } from "react";
import Button from "./Button";
import Circle from "./Circle";
import Icon from "./Icon";

export default function Main({onClick1, onClick2}) {
    const [user, setUser]=useState(false);
    const [backgroundHover, setBackgroundHover]=useState({});
  return (
    <>
        <div className="background-main" style={backgroundHover} ></div>
        <div className="header-main">
            <div className="header-main-">
                <div className="header-main-operation">
                    <Circle onClick={onClick1} tooltip="Retroceder" position="bottom" element={<svg data-encore-id="icon" role="img" aria-hidden="true" className="img img-16" viewBox="0 0 16 16"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>} />
                    <Circle onClick={onClick2} tooltip="Avançar" position="bottom" element={<svg data-encore-id="icon" role="img" aria-hidden="true" className="img img-16" viewBox="0 0 16 16"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>} />
                </div>
                <div className="header-main-operation-others">
                    <Button text="Explorar o Premium" svg="" style={{backgroundColor:'#fff',color:'#000'}} className="" />
                    <Button text="Instalar app" svg={<svg data-encore-id="icon" style={{fill:'#fff'}} role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg>} style={{backgroundColor:'#000000B3',color:'#fff'}} className="" />
                    <Circle onClick={onClick1} tooltip="Novidades" position="bottom" element={<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path></svg>} />
                    <div className="tooltip-main" onClick={()=>setUser(!user)}>
                        <div className="tooltip-" style={user ? {display:"block"}:{display:"none"}}>
                            <ul>
                                <li><a href="">Conta <Icon svg={<svg data-encore-id="icon" role="img" aria-label="Ligação externa" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg>} /></a></li>
                                <li><a href="">Perfil</a></li>
                                <li><a href="">Atualiza para o Premium <Icon svg={<svg data-encore-id="icon" role="img" aria-label="Ligação externa" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path><path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path></svg>} /></a></li>
                                <li><a href="">Definições</a></li>
                                <li className="line"><a href="">Terminar sessão</a></li>
                            </ul>
                        </div>
                        <Circle onClick={onClick2} tooltip="Moser José" position="bottom right"  element={<span className="circle-user" style={{backgroundColor: 'rgb(180, 155, 200)', color: 'rgb(0, 0, 0)'}}>M</span>} />
                    </div>
                </div>
            </div>
        </div>

        <div className="main-content">
            <div className="main-content-header">
                <a onMouseOver={()=>setBackgroundHover({backgroundColor:'rgb( 152,182, 200)'})} href="" className="main-content-header-">
                    <div className="main-content-header-p">
                        <div className="img-main-content">
                            <img src="https://i.scdn.co/image/ab67706f0000000275ccecb5e095fb4cc3688bf8" alt="" />
                        </div>
                        <span>Soft 10s</span>
                    </div>
                    <span className="circle-green"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></span>
                </a>
                <a onMouseOver={()=>setBackgroundHover({backgroundColor:'rgb(160, 72, 64)'})} href="" className="main-content-header-">
                    <div className="main-content-header-p">
                        <div className="img-main-content">
                            <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc36dd9eb55fb0db4911f25dd/4/pt-PT/default" alt="" />
                        </div>
                        <span>Mix do Dia 4</span>
                    </div>
                    <small className="barr-play" style={{marginRight:'8px'}}><img src="https://open.spotifycdn.com/cdn/images/equaliser-green.f8937a92.svg" alt="" /></small>
                    <span className="circle-green"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg></span>
                </a>
                <a onMouseOver={()=>setBackgroundHover({backgroundColor:'rgb(32, 64, 80)'})} href="" className="main-content-header-">
                    <div className="main-content-header-p">
                        <div className="img-main-content">
                            <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7556e4e000416978383b6433/1/pt-PT/default" alt="" />
                        </div>
                        <span>Mix do Dia 1</span>
                    </div>
                    <span className="circle-green"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></span>
                </a>
                <a onMouseOver={()=>setBackgroundHover({backgroundColor:'rgb(128, 8, 24)'})} href="" className="main-content-header-">
                    <div className="main-content-header-p">
                        <div className="img-main-content">
                            <img src="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0E0XPqa6BzxSkhmhvzA3k2/pt-PT" alt="" />
                        </div>
                        <span>Rádio de Matias Damásio</span>
                    </div>
                    <span className="circle-green"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></span>
                </a>
            </div>
        </div>
    </>
  )
}
