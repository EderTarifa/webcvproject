import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// Configuración del worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function CVTraditional() {
  return (
    <section>
      <h2>CV Tradicional</h2>
      <Document file="/files/CV_TRADICIONAL.pdf">
        <Page pageNumber={1} />
      </Document>
    </section>
  );
}
