import { useState } from "react";
import Button from "./Button";
import Circle from "./Circle";
import Icon from "./Icon";
import CardButton from "./CardButton";
import HeaderLateral from "./HeaderLateral";
import CardMain from "./CardMain";

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
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb( 152,182, 200)" url="" play={false} img="https://i.scdn.co/image/ab67706f0000000275ccecb5e095fb4cc3688bf8" alt="" titulo="Soft 10s" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb(160, 72, 64)" url="" play={false} img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc36dd9eb55fb0db4911f25dd/4/pt-PT/default" alt="Mix do Dia 4" titulo="Mix do Dia 4" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb(32, 64, 80)" url="" play={false} img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7556e4e000416978383b6433/1/pt-PT/default" alt="Mix do Dia 1" titulo="Mix do Dia 1" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb(128, 8, 24)" url="" play={true} img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0E0XPqa6BzxSkhmhvzA3k2/pt-PT" alt="Rádio de Matias Damásio" titulo="Rádio de Matias Damásio" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb( 192, 0, 0)" url="" play={false} img="https://i.scdn.co/image/ab6761610000e5ebe99c4a5e7a11178e57430c42" alt="Fábio Hustle" titulo="Fábio Hustle" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb(136, 192, 176)" url="" play={false} img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/7bXgB6jMjp9ATFy66eO08Z/pt-PT" alt="Rádio de Chris Brown" titulo="Rádio de Chris Brown" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb(88, 48, 88)" url="" play={false} img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4VnA54lsQnc9ImvrEY34fO/pt-PT" alt="Rádio de Gerilson Insrael" titulo="Rádio de Gerilson Insrael" />
                <CardButton setBackgroundHover={setBackgroundHover} backgroundColor="rgb(232, 184, 88)" url="" play={false} img="https://dailymix-images.scdn.co/v2/img/3de68d33a1cc5dd51b61ddf68e7471955ba8266c/5/pt-PT/default" alt="Mix do Dia 5" titulo="Mix do Dia 5" />
            </div>
            <div className="row">
                <div style={{padding:'0 24px'}}><HeaderLateral className="text-option" more="Mostrar tudo" url="/" title="Feito para Moser José"/></div>
                <div className="row-content">
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Rihanna, Bruno Mars, Bebe Rexha e mais" text="Mix do dia 2" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb99e4fca7c0b7cb166d915789/2/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Ed Sheeran, Adele, Maisie Peters e mais" text="Mix do dia 3" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3bcef85e105dfc42399ef0ba/3/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="The Weeknd, Anson Seabra, Alec Benjamin..." text="Mix do dia 6" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb/6/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='artist' play={false} info="Artista" text="Ary" url="/" img="https://i.scdn.co/image/ab67616100005174643831ce4163e9e90cb44515"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="A tua compilação semanal de música nov..." text="Descoberta da sem..." url="/" img="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/2MUgCYK9l6fFHrnaFLT8PQ==/VFAtdHBUUC10cFRQLXRwVA=="/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Fica a par das últimas músicas dos artistas qu..." text="Radar de Novidades" url="/" img="https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb35a621f656a1b1d3cb44a1b4/pt-PT"/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div style={{padding:'0 24px'}}><HeaderLateral className="text-option" more="Mostrar tudo" url="/" title="Rádio Popular"/></div>
                <div className="row-content">
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com Trey Songz, T-Pain, Ne-Yo e mais" text="Rádio de Chris Brown" url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/7bXgB6jMjp9ATFy66eO08Z/pt-PT"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com 3 Finer, Anderson Mário, Filho do Zua e mais" text="Rádio de Gerilson..." url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4VnA54lsQnc9ImvrEY34fO/pt-PT"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com Don G, NGA, Monsta e mais" text="Rádio de Prodigio" url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0Zsw8N0usCdHtEtFtwZKg5/pt-PT"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com Black Spygo, Button Rose, Anderson Mário e..." text="Rádio de Chelsea..." url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0iFUMxC62joHJMxZwMZvzp/pt-PT"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com Button Rose, Jordânia, Cage One e mais" text="Rádio de Anderson..." url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/1CS75XxFYNouLuB55te4YO/pt-PT"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com Fábio Hustle, Button Rose, Cleyton M e mais" text="Rádio de 3 Finer" url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/0gGg41vqYrv92MZmSt6pT5/pt-PT"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div style={{padding:'0 24px'}}><HeaderLateral className="text-option" more="Mostrar tudo" url="/" title="Reproduzido Recentemente"/></div>
                <div className="row-content">
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Rihanna, Bruno Mars, Bebe Rexha e mais" text="Mix do dia 2" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb99e4fca7c0b7cb166d915789/2/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Ed Sheeran, Adele, Maisie Peters e mais" text="Mix do dia 3" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3bcef85e105dfc42399ef0ba/3/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="The Weeknd, Anson Seabra, Alec Benjamin..." text="Mix do dia 6" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb/6/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='artist' play={false} info="Artista" text="Fábio Hustle" url="/" img="https://i.scdn.co/image/ab67616100005174e99c4a5e7a11178e57430c42"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Mellow songs from the 2010s. " text="Soft 10s" url="/" img="https://i.scdn.co/image/ab67706f0000000275ccecb5e095fb4cc3688bf8"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Com Button Rose, Jordânia, Cage One e mais" text="Rádio de Anderson..." url="/" img="https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/1CS75XxFYNouLuB55te4YO/pt-PT"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div style={{padding:'0 24px'}}><HeaderLateral className="text-option" more="Mostrar tudo" url="/" title="Para fãs de Chris Brown"/></div>
                <div className="row-content">
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="This is Chris Brown. Todas as faixas essenciais num..." text="This Is Chris Brown" url="/" img="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4fRiko-default.jpg"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="The biggest songs of the 2000s. Cover: Kelly..." text="All Out 2000s" url="/" img="https://i.scdn.co/image/ab67706f00000002603c97e588c19d27695b69c5"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Where R&B lives. Cover: PARTYNEXTDOOR" text="RNB X" url="/" img="https://i.scdn.co/image/ab67706f000000029bf59ef776a23dbac31ddc81"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Press play, press start." text="Top Gaming Tracks" url="/" img="https://i.scdn.co/image/ab67706f00000002f8b3113ff97bf94e7c8f6354"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="The most essential R&B songs from the '00s..." text="I Love My '00s R&B" url="/" img="https://i.scdn.co/image/ab67706f00000002c0f1c52bef7fcb323f7149a4"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="A mix of the biggest pop, dance, and hip hop party..." text="Party Hits" url="/" img="https://i.scdn.co/image/ab67706f0000000258827f4e6b3f0ed1ae579e62"/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div style={{padding:'0 24px'}}><HeaderLateral className="text-option" more="Mostrar tudo" url="/" title="Mais como K-Ci & Jojo"/></div>
                <div className="row-content">
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Rihanna, Bruno Mars, Bebe Rexha e mais" text="Mix do dia 2" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb99e4fca7c0b7cb166d915789/2/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Ed Sheeran, Adele, Maisie Peters e mais" text="Mix do dia 3" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3bcef85e105dfc42399ef0ba/3/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="The Weeknd, Anson Seabra, Alec Benjamin..." text="Mix do dia 3" url="/" img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb/6/pt-PT/default"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='artist' play={false} info="Artista" text="Ary" url="/" img="https://i.scdn.co/image/ab67616100005174643831ce4163e9e90cb44515"/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="A tua compilação semanal de música nov..." text="Descoberta da sem..." url="/" img="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/2MUgCYK9l6fFHrnaFLT8PQ==/VFAtdHBUUC10cFRQLXRwVA=="/>
                    </div>
                    <div className="row-content-">
                        <CardMain type='playlist' play={false} info="Fica a par das últimas músicas dos artistas qu..." text="Radar de Novidades" url="/" img="https://newjams-images.scdn.co/image/ab67647800003f8a/dt/v3/release-radar/ab6761610000e5eb35a621f656a1b1d3cb44a1b4/pt-PT"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
