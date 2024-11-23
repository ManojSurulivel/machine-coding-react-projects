

import PdfViewer from "./Projects/ReactPdf/PdfViewer";
import "./assets/sample.pdf"; // Direct import

function App() {
  return (
    <div className="App">
      <h1>PDF Viewer</h1>
      <PdfViewer pdf="./sample.pdf" />  {/* Use the correct file name */}
    </div>
  );
}

export default App;