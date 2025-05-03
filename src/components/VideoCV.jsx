// src/components/CVTraditional.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './pages.css';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Pages() {
  const fileUrl = `${process.env.PUBLIC_URL}/files/Blog_Divulgativo.pdf`;
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages: total }) {
    setNumPages(total);
  }

  return (
    <section className="cv-wrapper">
      <div className="document-container">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          {/* 2) Wrapper para las páginas */}
          <div className="pages-wrapper">
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                width={800}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </div>
        </Document>
      </div>
    </section>
  );
}
