import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resumePDF from "../assets/Molony.Katy.Resume.pdf";
import "./Resume.css";

export default function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
    <div>
      <DownloadButton filename="Resume.pdf" fileurl={resumePDF} />
      <Document
        className="resume_pdf"
        file={resumePDF}
        options={{ workerSrc: "pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
