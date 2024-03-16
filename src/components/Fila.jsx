import HeaderLateral from './HeaderLateral'

export default function Fila({more, title}) {
  return (
    <div className='fila'>
        <HeaderLateral title={title} more={more} />
        <div className='list-fila'>
            <span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="img img-16"><path d="M10 2v9.5a2.75 2.75 0 1 1-2.75-2.75H8.5V2H10zm-1.5 8.25H7.25A1.25 1.25 0 1 0 8.5 11.5v-1.25z"></path></svg></span>
            <div className='img-fila'><img src="https://i.scdn.co/image/ab67616d00004851ebc2a44ec2610423e89a101b" alt="" /></div>
            <div className='author-fila'>
                <a href=''>Bai</a>
                <a href=''>Soraia Ramos</a>
            </div>
        </div>
    </div>
  )
}
