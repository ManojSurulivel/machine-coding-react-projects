import React, { useRef, useState } from "react";
import { Document, Page } from 'react-pdf';
import { GrNext, GrPrevious } from "react-icons/gr";
import "./PdfViewer.css"; // Import CSS for styling

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const divRef = useRef();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPage) => prevPage - 1);
    }
  };

  return (
    <div ref={divRef} className="pdf-viewer-container">
      <div className="pdf-page-controls">
        <span>Page {pageNumber} of {numPages}</span>
      </div>
      <div className="pdf-navigation-buttons">
        {pageNumber > 1 && (
          <button onClick={handlePreviousPage}>
            <GrPrevious /> Previous
          </button>
        )}
        {pageNumber < numPages && (
          <button onClick={handleNextPage}>
            Next <GrNext />
          </button>
        )}
      </div>
      <div className="pdf-document">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            width={divRef.current ? divRef.current.clientWidth * 0.95 : 600}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
