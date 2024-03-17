import Button from "./Button";
import Circle from "./Circle";

export default function HeaderMain({onClick1, onClick2}) {
  return (
    <>
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
                    <Circle onClick={onClick2} tooltip="Moser José" position="bottom right"  element={<span className="circle-user" style={{backgroundColor: 'rgb(180, 155, 200)', color: 'rgb(0, 0, 0)'}}>M</span>} />
                </div>
            </div>
        </div>

        <div className="main-content">

        </div>
    </>
  )
}
