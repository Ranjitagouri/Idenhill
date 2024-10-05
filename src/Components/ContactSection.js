// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { SectionStyled } from '../Layouts';
// import map from '../img/map.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const ContactSection = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can add code to send the form data to your backend or handle it as needed
//     console.log('Form submitted:', { name, email, message });
//     // Reset the form after submission if needed
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <ContactSectionStyled id='contact'>
//       <SectionStyled>
//         <div className="contact-box">
//           <div className="contact-info">
//             <h2>Get In Touch</h2>
//             <p>
//               Please fill out the form below to send us an email and we will
//               get back to you as soon as possible.
//             </p>
//             <p>
//               <strong>Phone:</strong> +91 8590399616
//             </p>
//             <p>
//               <strong>Email:</strong>{' '}
//               <a href="mailto:admin@idenhills.com">admin@idenhills.com</a>
//             </p>
//             <p>
//               <strong>Address:</strong> #201, 2nd Floor, Patil Arcade, 1st
//               Cross Road, Hindwadi, Belgaum, Karnataka, 560011
//             </p>
//             <div className="social-icons">
//               <a
//                 href="https://www.facebook.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon" />
//               </a>
//               <a
//                 href="https://www.instagram.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
//               </a>
//             </div>
//           </div>
//           <div className="contact-form">
//             <h3>Contact Form</h3>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={handleNameChange}
//                 required
//               />
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={handleMessageChange}
//                 rows={8}
//                 required
//               ></textarea>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//         <div className="bg-image">
//           <img src={map} alt="" />
//         </div>
//       </SectionStyled>
//     </ContactSectionStyled>
//   );
// };

// const ContactSectionStyled = styled.section`
//   background-color: #020a27; /* Set to dark blue color */
//   padding: 4rem 0;
//   position: relative;
//   z-index: 1;

//   .contact-box {
//     max-width: 800px;
//     margin: 0 auto;
//     display: flex;
//     justify-content: space-between;
//     background-color: #ffffff;
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//     border-radius: 8px;
//     padding: 2rem;
//     position: relative;
//     z-index: 2;
//   }

//   .contact-info,
//   .contact-form {
//     flex: 1;
//     padding: 1rem;
//   }

//   .contact-info {
//     margin-right: 2rem; /* Add margin between info and form */
//   }

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 1rem;
//     color: #333333;
//   }

//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
//     color: #333333;
//   }

//   p {
//     margin-bottom: 0.5rem;
//     color: #666666;
//   }

//   label {
//     display: block;
//     margin-bottom: 0.5rem;
//     font-weight: bold;
//     color: #333333;
//   }

//   input[type='text'],
//   input[type='email'],
//   textarea {
//     width: 100%;
//     padding: 0.5rem;
//     margin-bottom: 1rem;
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     font-size: 1rem;
//   }

//   textarea {
//     resize: vertical;
//   }

//   button {
//     background-color: #eb3fa9;
//     color: white;
//     border: none;
//     padding: 0.75rem 1.5rem;
//     border-radius: 4px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   button:hover {
//     background-color: #d1368c;
//   }

//   .bg-image {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     z-index: -1;

//     img {
//       width: 80%;
//       opacity: 0.08;
//     }
//   }

//   .social-icons {
//     display: flex;
//     postion:relative;
//      justify-content: center;
//     margin-top: 2rem;

//   }

//   .social-icons a {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-decoration: none;
//     color: #666666;
//     margin-right: 1rem;
//     transition: color 0.3s ease;
//     border: 2px solid #666666; /* Border around the circle */
//     width: 50px; /* Adjust size of the circle */
//     height: 50px;
//     border-radius: 50%; /* Make it a circle */
//   }

//   .social-icons a:hover {
//     color: #eb3fa9;
//     border-color: #eb3fa9;
//   }

//   .icon {
//     margin: auto;
//   }
// `;

// export default ContactSection;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { SectionStyled } from '../Layouts';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const ContactSection = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can add code to send the form data to your backend or handle it as needed
//     console.log('Form submitted:', { name, email, message });
//     // Reset the form after submission if needed
//     setName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <ContactSectionStyled id='contact'>
//       <SectionStyled>
//         <div className="contact-box">
//           <div className="contact-info">
//             <h2>Get In Touch</h2>
//             <p>
//               Please fill out the form below to send us an email and we will
//               get back to you as soon as possible.
//             </p>
//             <p>
//               <strong>Phone:</strong> +91 8590399616
//             </p>
//             <p>
//               <strong>Email:</strong>{' '}
//               <a href="mailto:admin@idenhills.com">admin@idenhills.com</a>
//             </p>
//             <p>
//               <strong>Address:</strong> #201, 2nd Floor, Patil Arcade, 1st
//               Cross Road, Hindwadi, Belgaum, Karnataka, 560011
//             </p>
//             <div className="social-icons">
//               <a
//                 href="https://www.facebook.com/people/Idenhills-PVT-LTD/61558005225619/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon" />
//               </a>
//               <a
//                 href="https://www.instagram.com/idenhillsofficial/?igsh=dG0NyNjNzODFsNXZ"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
//               </a>
//             </div>
//           </div>
//           <div className="contact-form">
//             <h3>Contact Form</h3>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={handleNameChange}
//                 required
//               />
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//               <label htmlFor="message">Message:</label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={handleMessageChange}
//                 rows={8}
//                 required
//               ></textarea>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
       
//       </SectionStyled>
//     </ContactSectionStyled>
//   );
// };

// const ContactSectionStyled = styled.section`
//   background-color: #020a27; /* Set to dark blue color */
//   padding: 4rem 0;
//   position: relative;
//   z-index: 1;

//   .contact-box {
//     max-width: 800px;
//     margin: 0 auto;
//     display: flex;
//     justify-content: space-between;
//     background-color: #ffffff;
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//     border-radius: 8px;
//     padding: 2rem;
//     position: relative;
//     z-index: 2;

//     @media (max-width: 425px) {
//       flex-direction: column;
//       padding: 1rem;
//     }
//   }

//   .contact-info,
//   .contact-form {
//     flex: 1;
//     padding: 1rem;

//     @media (max-width: 425px) {
//       padding: 0;
//     }
//   }

//   .contact-info {
//     margin-right: 2rem; /* Add margin between info and form */

//     @media (max-width: 425px) {
//       margin-right: 0;
//     }
//   }

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 1rem;
//     color: #333333;

//     @media (max-width: 425px) {
//       font-size: 1.5rem;
//     }
//   }

//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
//     color: #333333;

//     @media (max-width: 425px) {
//       font-size: 1.25rem;
//     }
//   }

//   p {
//     margin-bottom: 0.5rem;
//     color: #666666;

//     @media (max-width: 425px) {
//       font-size: 0.875rem;
//     }
//   }

//   label {
//     display: block;
//     margin-bottom: 0.5rem;
//     font-weight: bold;
//     color: #333333;

//     @media (max-width: 425px) {
//       font-size: 0.875rem;
//     }
//   }

//   input[type='text'],
//   input[type='email'],
//   textarea {
//     width: 100%;
//     padding: 0.5rem;
//     margin-bottom: 1rem;
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     font-size: 1rem;

//     @media (max-width: 425px) {
//       font-size: 0.875rem;
//     }
//   }

//   textarea {
//     resize: vertical;
//   }

//   button {
//     background-color: #00FFFF;
//     color: white;
//     border: none;
//     padding: 0.75rem 1.5rem;
//     border-radius: 4px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     @media (max-width: 425px) {
//       width: 100%;
//       padding: 0.75rem;
//       font-size: 0.875rem;
//     }
//   }

//   button:hover {
//     background-color: #3244a8;
//   }

//   .bg-image {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     z-index: -1;

//     img {
//       width: 80%;
//       opacity: 0.08;

//       @media (max-width: 425px) {
//         width: 100%;
//       }
//     }
//   }

//   .social-icons {
//     display: flex;
//     justify-content: center;
//     margin-top: 2rem;

//     @media (max-width: 425px) {
//       flex-direction: row;
//       gap:16px;
//     }
//   }

//   .social-icons a {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-decoration: none;
//     color: #666666;
//     margin-right: 1rem;
//     transition: color 0.3s ease;
//     border: 2px solid #666666; /* Border around the circle */
//     width: 50px; /* Adjust size of the circle */
//     height: 50px;
//     border-radius: 50%; /* Make it a circle */

//     @media (max-width: 425px) {
//       margin-right: 0;
//       margin-bottom: 1rem;
//     }
//   }

//   .social-icons a:hover {
//     color: #eb3fa9;
//     border-color: #eb3fa9;
//   }

//   .icon {
//     margin: auto;
//   }
// `;

// export default ContactSection;
import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import { useSnackbar } from 'notistack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const ContactSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/add_contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.error && data.error.non_field_errors) {
        enqueueSnackbar(<p>{data.error.non_field_errors[0]}</p>, {
          variant: 'error',
        });
        return;
      }

      if (data.msg) {
        enqueueSnackbar(<p>{data.msg}</p>, { variant: 'success' });
        clearState();
      }
    } catch (error) {
      enqueueSnackbar('Enter the fields now', { variant: 'error' });
    }
  };

  return (
    <ContactSectionStyled id='contact'>
      <SectionStyled>
        <div className="contact-box">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
            
            <p><strong>Email:</strong> <a href="mailto:admin@idenhills.com">admin@idenhills.com</a></p>
            <p>
              <strong>Phone:</strong> +91 8590399616
            </p>
            <p><strong>Address:</strong> #201, 2nd Floor, Patil Arcade, 1st Cross Road, Hindwadi, Belgaum, Karnataka, 560011</p>
            <div  className="social-icons">
              <a href="https://www.facebook.com/people/Idenhills-PVT-LTD/61558005225619/"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon" />
              </a>
              <a href="https://www.instagram.com/idenhillsofficial/?igsh=dG0NyNjNzODFsNXZ"  target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                rows={8}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </SectionStyled>
    </ContactSectionStyled>
  );
};

const ContactSectionStyled = styled.section`
  background-color: #020a27;
  padding: 4rem 0;
  position: relative;
  z-index: 1;

  .contact-box {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    z-index: 2;
  

    @media (max-width: 425px) {
      flex-direction: column;
      padding: 1rem;
    }
  }

  .contact-info,
  .contact-form {
    flex: 1;
    padding: 1rem;

    @media (max-width: 425px) {
      padding: 0;
    }
  }

  .contact-info {
    margin-right: 2rem;

    @media (max-width: 425px) {
      margin-right: 0;
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333333;

    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333333;

    @media (max-width: 425px) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 0.5rem;
   color:rgb(24 23 23);

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333333;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }

  input[type='text'],
  input[type='email'],
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 1rem;

    @media (max-width: 425px) {
      font-size: 0.875rem;
    }
  }

  textarea {
    resize: vertical;
  }

  button {
         background-color: rgb(6 13 51);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    @media (max-width: 425px) {
      width: 100%;
      padding: 0.75rem;
      font-size: 0.875rem;
    }
  }

  button:hover {
    background-color: #3244a8;
  }

  .bg-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    img {
      width: 80%;
      opacity: 0.08;

      @media (max-width: 425px) {
        width: 100%;
      }
    }
  }

  .social-icons {
   
    display: none;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 425px) {
      flex-direction: row;
      gap:16px;
    }
  }

  .social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #666666;
    margin-right: 1rem;
    transition: color 0.3s ease;
    border: 2px solid #666666;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    @media (max-width: 425px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  .social-icons a:hover {
    color: #eb3fa9;
    border-color: #eb3fa9;
  }

  .icon {
    margin: auto;
  }
`;

export default ContactSection;
