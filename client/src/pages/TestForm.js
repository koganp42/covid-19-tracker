// import React, { useState, useEffect } from "react"; import { Form, Field } from 'react-final-form'
// import API from "../utils/API";
// import { Link } from "react-router-dom";

// const required = value => (value ? undefined : 'Required');
// const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
// const mustBeRecognizedGender = value => (value === "Male" || "Female" || "Non-Binary" ? undefined : 'Required');
// const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);

// const TestForm = () => {
//   const [testForm, setTestForm] = useState({});
//   // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

//   // const onSubmit = async values => {
//   // await sleep(300)

//   // }
//   return (
//     <Form
//       //onSubmit={onSubmit}
//       validate={values => {
//         const errors = {}
//         if (!values.email) {
//           errors.email = "Required"
//         }
//         if (!values.password) {
//           errors.password = "Required"
//         }
//         if (!values.firstName) {
//           errors.firstName = "Required"
//         }
//         if (!values.lastName) {
//           errors.lastName = "Required"
//         }

//         return errors
//       }}

//       onSubmit={handleSubmit}>

//       {/* User Model Section */}

//       <Field name="email">
//         {({ input }) => (
//           <div>
//             <label>Email</label>
//             <input {...input} type="text" placeholder="Username" />
//           </div>
//         )}
//       </Field>
//       <Field name="password">
//         {({ input, meta }) => (
//           <div>
//             <label>Password</label>
//             <input {...input} type="password" placeholder="Password" />
//             {meta.error && meta.touched && <span>{meta.error}</span>}
//           </div>
//         )}
//       </Field>

//       {/* Person Model Section */}

//       <Field name="firstName" validate={required}>
//         {({ input, meta }) => (
//           <div>
//             <label>First Name</label>
//             <input {...input} type="text" placeholder="First Name" />
//             {meta.error && meta.touched && <span>{meta.error}</span>}
//           </div>
//         )}
//       </Field>
//       <Field name="lastName" validate={required}>
//         {({ input, meta }) => (
//           <div>
//             <label>Last Name</label>
//             <input {...input} type="text" placeholder="Last Name" />
//             {meta.error && meta.touched && <span>{meta.error}</span>}
//           </div>
//         )}
//       </Field>
//       <Field
//         name="age"
//         validate={composeValidators(required, mustBeNumber, minValue(18))}
//       >
//         {({ input, meta }) => (
//           <div>
//             <label>Age</label>
//             <input {...input} type="text" placeholder="Age" />
//             {meta.error && meta.touched && <span>{meta.error}</span>}
//           </div>
//         )}
//       </Field>
//       <div>
//         <label>Gender</label>
//         <div>
//           <label>
//             <Field
//               name="gender"
//               component="input"
//               type="radio"
//               value="male"
//             />{' '}
//                 Male
//               </label>
//           <label>
//             <Field
//               name="gender"
//               component="input"
//               type="radio"
//               value="female"
//             />{' '}
//                 Female
//               </label>
//           <label>
//             <Field
//               name="gender"
//               component="input"
//               type="radio"
//               value="non-binary"
//             />{' '}
//                 Non-Binary
//               </label>
//           <label>
//             <Field
//               name="gender"
//               component="input"
//               type="radio"
//               value="no response"
//             />{' '}
//                 Prefer not to respond
//               </label>
//         </div>
//       </div>




//       <div className="buttons">
//         <button type="submit" disabled={submitting}>
//           Submit
//             </button>
//         <button
//           type="button"
//           onClick={form.reset}
//           disabled={submitting || pristine}
//         >
//           Reset
//             </button>
//       </div>
//       <pre>{JSON.stringify(values, 0, 2)}</pre>
//     </Form>
    
//   )};


// export default TestForm;
