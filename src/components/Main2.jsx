import React from 'react';
import SectionEducacion  from './subComponents/SectionEducacion'


const Main2 = () => {
  return (
    <div className='col-12 col-lg-8 ps-0 ps-lg-3 ps-xxl-5 mt-5'>
      <section className='mt-5 mx-3 mx-md-4 mx-lg-5'>
        <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>EDUCACION</h2>
            
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea'
        />
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempo'
        />
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempo'
        />
      </section>

      <section className='mt-5 mx-3 mx-md-4 mx-lg-5'>
      <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>SERVICIOS</h2>
        <ul>
          <li className='m-0 mt-5 fs-2 fw-bolder'>Procesos Inmoviliarios</li>
          <li className='m-0 fs-2 fw-bolder'>Actos de ventas</li>
          <li className='m-0 fs-2 fw-bolder'>Actos de alquiler</li>
          <li className='m-0 fs-2 fw-bolder'>Retiro de fichas</li>
          <li className='m-0 fs-2 fw-bolder'>Asesoria migratoria</li>
          <li className='m-0 fs-2 fw-bolder'>Legalizacion</li>
          <li className='m-0 fs-2 fw-bolder'>Constitucion de compañia</li>
          <li className='m-0 fs-2 fw-bolder'>Permisos de viaje para menores</li>
        </ul>
      </section>

      <section className='mt-5 mx-3 mx-md-4 mx-lg-5'>
        <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>TRABAJOS</h2>

        <div className='d-block d-lg-flex'>
          <div>
            <SectionEducacion
              tittle='Big Projetc'
              subTittle='2017'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
            />
          </div>
          <div>
          <SectionEducacion
              tittle='Big Projetc'
              subTittle='2017'
              content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
            />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Main2;
