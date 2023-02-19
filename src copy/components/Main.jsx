import React from 'react';
import imgPerfil from '../imagenes/imgPerfi.JPG';
import SectionHighlights from './subComponents/SectionHighlights';


const Main = () => {
  return (
    <section className='section col-4 p-0'>
        <img src={imgPerfil} alt="" className='w-100' style={{clipPath:'polygon(0 0, 100% 0%, 100% 78%, 0% 100%)'} } />

        <h1 className='fw-bold text-center mt-3'>LIC. DOMINGA FLORES</h1>
        <p className='fs-4 text-center text-secondary'>ABOGADA</p>

        <section className='m-5'>
            <h2 className='d-inline p-2 px-3 text-white fw-bold bg'>ABOUT ME</h2>
            <p className='mt-4 fs-5 fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.</p>
        </section>

        <section className='m-5'>
            <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>CONTACTO</h2>
            <a className='text-decoration-none text-black' href="https://api.whatsapp.com/send/?phone=18299108808&text&app_absent=0" target='_blank'>
                <p className='m-0 mt-4 fs-4 fw-bolder'>(829)-910-8808</p>
            </a>
            <a className='text-decoration-none text-black' href="https://goo.gl/maps/xtopJpFZvj7DfUAS8" target='_blank'>
                <p className='m-0 fs-4 fw-bolder'>Ubicacion: San Antonio de Guerra c/mella num. 35</p>
            </a>
            <a className='text-decoration-none text-black' href="#" target='_blank'>
                <p className='m-0 fs-4 fw-bolder'>WWW.WEBSIDE.COM</p>
            </a>
            <a className='text-decoration-none text-black' href="mailto:alamrd2016@gmail.com?Subject=interesado%20en%20servicios%20de%20desarrollo%20web" target='_blank'>
                <p className='m-0 fs-4 fw-bolder'>name@gmail.com</p>
            </a>

            {/* <p className='m-0 fs-4 fw-bolder'>1234 adrees city,</p> */}
            {/* <p className='m-0 fs-4 fw-bolder'>postal</p>
            <p className='m-0 fs-4 fw-bolder'>WWW.WEBSIDE.COM</p>
            <p className='m-0 fs-4 fw-bolder'>name@gmail.com</p> */}
        </section>

        <section className='m-5'>
            <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>HIGHLIGHTS</h2>
            
						<SectionHighlights
							tittle='Psicologia'
							level='25'
						/>
						<SectionHighlights
							tittle='Escritura'
							level='50'
						/>
						<SectionHighlights
							tittle='Comunicacion Oral'
							level='75'
						/>

						{/* <p className='mt-4 fs-4 fw-bolder'>Psicologia</p>
            <div className="progress border border-2 border-primary rounded-0" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:'25px'}}>
                <div className="progress-bar" style={{width:'50%'}}></div>
            </div>

            <p>Escritura</p>
            <div className="progress " role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar"></div>
            </div>

            <p>Comunicacion Oral</p>
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar"></div>
            </div> */}
        </section>
    </section>
  )
}

export default Main;
