
// import React, { useState } from 'react';
// import './form.css';
// import Submitted from './submitted';
// import { useNavigate } from 'react-router-dom' ;

// function Form() {

//   const navigate= useNavigate();
//   const [selectedIssue, setSelectedIssue] = useState('');
//   const [formValues, setFormValues] = useState({
//     name: '',
//     supplier: '',
//     issue: '',
//     productionOrderId: '',
//     fileUpload: '',
//     textArea: '',
//   });
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     if (id === 'supplier'){
//       setFormValues((prevValues) => ({ ...prevValues, supplier: value }));
//     } else {
//       setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
//     }
//   };
    

//   const handleIssueChange = (event) => {
//     setSelectedIssue(event.target.value);
//     setFormValues((prevValues) => ({ ...prevValues, issue: event.target.value }));
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = { ...formValues, textArea: selectedIssue === 'other' ? formValues.textArea : null, };
         
         
//           localStorage.setItem('submittedData', JSON.stringify(formData));

      
//       // const response = await fetch('https://subcontract-backend-97436e1451f2.herokuapp.com/submit-form', {
//         const response = await fetch('https://https://subackend-327fc6ed026e.herokuapp.com/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         console.log('Form submitted successfully!');
//         setSubmittedData(formData);
       
//         navigate('/result');

//       } else {
//         console.error('Form submission failed:', result.message);
//       }
//     } catch (error) {
//       console.error('Error creating form:', error.message);
//     }
//   };

//   return (
//     <div className='Container'>
//       {submittedData ? (
//         <Submitted submittedData={submittedData} />
//       ) : (
//         <form onSubmit={handleFormSubmit}>
//           <h1>SubContract Order Tracker</h1>
//           <h3>Collect information on issues with Subcontract Production Order and Supplier QAD usage.</h3>

//           <div className='form-group'>
//             <label htmlFor='name'>Enter your name:</label>
//             <input type='text' id='name' name='name' onChange={handleInputChange} />
//           </div>

//           <div className='form-group'>
//             <label htmlFor='supplier'>Supplier:</label>
//             <select id='supplier' name='supplier' onChange={handleInputChange}>
//               <option value='Curtis'></option>
//               <option value='Curtis'>Curtis</option>
//               <option value='supplier2'>Supplier 2</option>
//             </select>
//           </div>

//           <div className='form-group'>
//             <div className='form-group'>
//               <label>Issue:</label>
//               <div className='radio-group'>
            
//                     <div>
//                      <input
//                       type='radio'
//                       id='missingMaterial'
//                       name='issue'
//                       value='missingMaterial'
//                       onChange={handleIssueChange}
//                     />
//                     <label htmlFor='missingMaterial'>Missing Material</label>
//                   </div>
    
//                   <div>
//                     <input
//                       type='radio'
//                       id='wrongTubCount'
//                       name='issue'
//                       value='wrongTubCount'
//                       onChange={handleIssueChange}
//                     />
//                     <label htmlFor='wrongTubCount'>Wrong Tub Count</label>
//                   </div>
    
//                   <div>
//                     <input
//                       type='radio'
//                       id='wrongWeight'
//                       name='issue'
//                       value='wrongWeight'
//                       onChange={handleIssueChange}
//                     />
//                     <label htmlFor='wrongWeight'>Wrong Weight on Subcontract Production Order</label>
//                   </div>
    
//                   <div>
//                     <input
//                       type='radio'
//                       id='unableToSubmit'
//                       name='issue'
//                       value='unableToSubmit'
//                       onChange={handleIssueChange}
//                     />
//                     <label htmlFor='unableToSubmit'>Unable to Submit Receipt in Portal</label>
//                   </div>
    
//                   <div>
//                     <input
//                       type='radio'
//                       id='other'
//                       name='issue'
//                       value='other'
//                       onChange={handleIssueChange}
//                     />
//                     <label htmlFor='other'>Other</label>
//                   </div>
    
             
//                 {selectedIssue === 'other' && (
//                   <div className='comment-section'>
//                     <label htmlFor='comment'>Comments:</label>
//                     <textarea
//                       id='textArea'
//                       name='TextArea'
//                       rows='2'
//                       cols='50'
//                       onChange={handleInputChange}
//                     ></textarea>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className='form-group'>
//             <label htmlFor='productionOrderId'>Subcontract Production Order ID:</label>
//             <input
//               type='text'
//               id='productionOrderId'
//               name='productionOrderId'
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className='form-group'>
//             <label htmlFor='fileUpload'>Upload documents showing the issue (BOL or Subcontract Production Order):</label>
//             <div>
//               <input
//                 type='file'
//                 id='fileUpload'
//                 name='fileUpload'
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className='form-group'>
//             <button type='submit'>Submit</button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Form;

import React, { useState } from 'react';
import './form.css';
import Submitted from './submitted';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    supplier: '',
    issue: '',
    productionOrderId: '',
    fileUpload: null, 
    textArea: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'supplier') {
      setFormValues((prevValues) => ({ ...prevValues, supplier: value }));
    } else {
      setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
    }
  };

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
    setFormValues((prevValues) => ({ ...prevValues, issue: event.target.value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValues((prevValues) => ({ ...prevValues, fileUpload: file }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('supplier', formValues.supplier);
      formData.append('issue', formValues.issue);
      formData.append('productionOrderId', formValues.productionOrderId);
      formData.append('textArea', selectedIssue === 'other' ? formValues.textArea : '');

      if (formValues.fileUpload) {
        formData.append('fileUpload', formValues.fileUpload);
      }

      localStorage.setItem('submittedData', JSON.stringify(formData));

      const response = await fetch('https://dashboard.heroku.com/apps/subackend', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully!');
        setSubmittedData(formData);
        navigate('/result');
      } else {
        console.error('Form submission failed:', result.message);
      }
    } catch (error) {
      console.error('Error creating form:', error.message);
    }
  };

  return (
    <div className='Container'>
      {submittedData ? (
        <Submitted submittedData={submittedData} />
      ) : (
        <form onSubmit={handleFormSubmit}>
                 <h1>SubContract Order Tracker</h1>
           <h3>Collect information on issues with Subcontract Production Order and Supplier QAD usage.</h3>

         <div className='form-group'>
             <label htmlFor='name'>Enter your name:</label>
             <input type='text' id='name' name='name' onChange={handleInputChange} />
           </div>

           <div className='form-group'>
            <label htmlFor='supplier'>Supplier:</label>
             <select id='supplier' name='supplier' onChange={handleInputChange}>
               <option value='Curtis'></option>
              <option value='Curtis'>Curtis</option>
              <option value='supplier2'>Supplier 2</option>
             </select>
         </div>

          <div className='form-group'>
            <div className='form-group'>
             <label>Issue:</label>              <div className='radio-group'>
            
                    <div>
                    <input
                      type='radio'
                      id='missingMaterial'
                      name='issue'
                      value='missingMaterial'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='missingMaterial'>Missing Material</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='wrongTubCount'
                      name='issue'
                      value='wrongTubCount'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='wrongTubCount'>Wrong Tub Count</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='wrongWeight'
                      name='issue'
                      value='wrongWeight'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='wrongWeight'>Wrong Weight on Subcontract Production Order</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='unableToSubmit'
                      name='issue'
                      value='unableToSubmit'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='unableToSubmit'>Unable to Submit Receipt in Portal</label>
                  </div>
    
                  <div>
                    <input
                      type='radio'
                      id='other'
                      name='issue'
                      value='other'
                      onChange={handleIssueChange}
                    />
                    <label htmlFor='other'>Other</label>
                  </div>
    
             
                {selectedIssue === 'other' && (
                  <div className='comment-section'>
                    <label htmlFor='comment'>Comments:</label>
                    <textarea
                      id='textArea'
                      name='TextArea'
                      rows='2'
                      cols='50'
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='productionOrderId'>Subcontract Production Order ID:</label>
            <input
              type='text'
              id='productionOrderId'
              name='productionOrderId'
              onChange={handleInputChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='fileUpload'>Upload documents showing the issue (BOL or Subcontract Production Order):</label>
            <div>
              <input
                type='file'
                id='fileUpload'
                name='fileUpload'
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className='form-group'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
