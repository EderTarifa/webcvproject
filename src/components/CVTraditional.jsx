// src/components/CVTraditional.jsx
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Worker (usa la .mjs en CDN o en public, según tu preferencia)
pdfjs.GlobalWorkerOptions.workerSrc = 
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CVTraditional() {
  const pdfUrl = `${process.env.PUBLIC_URL}/files/CV_TRADICIONAL.pdf`;

  return (
    <section>
      <h2></h2>
      <Document
        file={{ url: pdfUrl }}
        onLoadError={error => console.error('Error loading PDF:', error)}
        loading="Cargando CV…"
        noData="No hay ningún CV para mostrar"
      >
        <Page pageNumber={1} />
      </Document>
      <Document
        file={{ url: pdfUrl }}
        onLoadError={error => console.error('Error loading PDF:', error)}
        loading="Cargando CV…"
        noData="No hay ningún CV para mostrar"
      >
        <Page pageNumber={2} />
      </Document>
    </section>
  );
}
