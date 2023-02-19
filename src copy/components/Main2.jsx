import React from 'react';
import SectionEducacion  from './subComponents/SectionEducacion'


const Main2 = () => {
  return (
    <div className='col-8 ps-5'>
      <section className='m-5'>
        <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>EDUCATION</h2>
            
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
        />
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
        />
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
        />
      </section>

      <section className='m-5'>
      <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>EXPERIENCE</h2>
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
        />
        <SectionEducacion
          tittle='Teaching / Law'
          subTittle='New York / 2015 / University California'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam distinctio doloribus. Rerum debitis, inventore, iure sit nulla amet placeat iusto voluptatem quibusdam non tempora, eligendi explicabo excepturi maiores ea.'
        />
      </section>

      <section className='m-5'>
        <h2 className='d-inline p-2 px-3 bg text-white fw-bold'>ACHIVEMENTS</h2>

        <div className='d-flex'>
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
