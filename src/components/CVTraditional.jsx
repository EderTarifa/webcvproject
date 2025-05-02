// src/components/CVTraditional.jsx
import React from 'react';

export default function CVTraditional() {
  return (
    <section>
      <h2>CV Tradicional</h2>
      <object
        data={`${process.env.PUBLIC_URL}/files/CV_TRADICIOINAL.pdf`}
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <p>
          Tu navegador no soporta PDFs. Descarga la carta{' '}
          <a href={`${process.env.PUBLIC_URL}/files/CV_TRADICIOINAL.pdf`}>
            aquí
          </a>
          .
        </p>
      </object>
    </section>
  );
}
