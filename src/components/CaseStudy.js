import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import caseStudyPDF from "../assets/SuperFlixCaseStudy.pdf";
import { Button } from "react-bootstrap";

export default function CaseStudy() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  // const { caseStudyPDF } = props;

  const DownloadButton = ({ filename, fileurl }) => {
    const downloadFile = () => {
      fetch(fileurl)
        .then((response) => {
          response
            .blob()
            .then((blob) => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement("a");
              a.href = url;
              a.download = filename;
              a.click();
            })
            .catch(() => console.log("failed to create blob"));
        })
        .catch(() => console.log("Failed to fetch file"));
    };
    return <button onClick={downloadFile}>Download {filename}</button>;
  };

  return (
    <>
      <DownloadButton filename="CaseStudy.pdf" fileurl={caseStudyPDF} />
      <Document
        className="caseStudy_pdf"
        file={caseStudyPDF}
        options={{ workerSrc: "pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <Button disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </Button>
        <Button disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </Button>
      </div>
    </>
  );
}
