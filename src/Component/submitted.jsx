
import './submitted.css';
import React, { useEffect, useState } from 'react';

function Submitted({ submittedData }) {
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('submittedData'));
    setSavedData(dataFromLocalStorage);
  }, []);

  useEffect(() => {
    if (submittedData) {
     
    }
  }, [submittedData]);

  if (!savedData) {
    return <div>Form Submitted ....</div>;
  }

  return (
    <div className='container1'>
      <h1> SUBCONTRACT FORM SUBMITTED <img src = {process.env.PUBLIC_URL + '/done1.jpg'} alt= "" /> </h1>
      <div className='name'>
        <>
       
              <p>
                  <span className="document-label">Name:</span>
                  <span className="content">{savedData.name}</span>
              </p>
              <p>
                  <span className="document-label">Supplier:</span>
                  <span className="content">{savedData.supplier}</span>
              </p>
              <p>
                  <span className="document-label">Issue:</span>
                  <span className="content">{savedData.issue}</span>
              </p>
              <p>
                  <span className="document-label">Other Issue:</span>
                  <span className="content">{savedData.textArea}</span>
              </p>
              <p>
                  <span className="document-label">Subcontract Production Order ID:</span>
                  <span className="content">{savedData.productionOrderId}</span>
              </p>
              <p>
                  <span className="document-label">Document Uploaded:</span>
                  <span className="file-upload-content">{savedData.fileUpload}</span>
              </p>

        </>
      </div>
    </div>
  );
}

export default Submitted;


// import './submitted.css';
// import React, { useEffect, useState } from 'react';

// function Submitted() {
//   const [savedData, setSavedData] = useState(null);
//   const [fileBlob, setFileBlob] = useState(null);

//   useEffect(() => {
//     const dataFromLocalStorage = JSON.parse(localStorage.getItem('submittedData'));
//     setSavedData(dataFromLocalStorage);

//     // Fetch the file separately
//     const fetchFile = async () => {
//       const fileResponse = await fetch(`https://subcontract-backend-97436e1451f2.herokuapp.com/submit-form/${dataFromLocalStorage.fileUpload}`);
//       const fileBlob = await fileResponse.blob();
//       setFileBlob(fileBlob);
//     };

//     fetchFile();
//   }, []);

//   if (!savedData || !fileBlob) {
//     return <div>Form Submitted ....</div>;
//   }

//   return (
//     <div className='container1'>
//       <h1> SUBCONTRACT FORM SUBMITTED <img src={process.env.PUBLIC_URL + '/done1.jpg'} alt="" /> </h1>
//       <div className='name'>
//         <>
//           <p>
//             <span className="document-label">Name:</span>
//             <span className="content">{savedData.name}</span>
//           </p>
//           <p>
//             <span className="document-label">Supplier:</span>
//             <span className="content">{savedData.supplier}</span>
//           </p>
//           <p>
//             <span className="document-label">Issue:</span>
//             <span className="content">{savedData.issue}</span>
//           </p>
//           {savedData.issue === 'other' && (
//             <p>
//               <span className="document-label">Other Issue:</span>
//               <span className="content">{savedData.textArea}</span>
//             </p>
//           )}
//           <p>
//             <span className="document-label">Subcontract Production Order ID:</span>
//             <span className="content">{savedData.productionOrderId}</span>
//           </p>
//           <p>
//             <span className="document-label">Document Uploaded:</span>
//             <span className="file-upload-content">
//               <img src={URL.createObjectURL(fileBlob)} alt='Uploaded Document' />
//             </span>
//           </p>
//         </>
//       </div>
//     </div>
//   );
// }

// export default Submitted;
