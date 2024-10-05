
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getToken } from "../Services/LocalStorageServices";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const ContactStyled = styled.div`
  padding: 20px;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 70%;
  border: 2px solid #AFEEEE;
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f9f9f9;
  color: black;

  th, td {
    border: 1px solid #AFEEEE;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #00CCCC;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .delete-button {
    background-color: #2774AE;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .delete-button:hover {
    background-color: #1e5b85;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 14px;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    font-size: 8px;
    margin-top: 10px;

    th, td {
      padding: 5px;
    }
  }
`;

const ContactDetails = () => {
  const { access_token } = getToken();
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/follow_up/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContact(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact details:", error);
        setLoading(false);
      }
    };

    fetchContact();
  }, [access_token]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/delete_contact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
        
      }
      setContact((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
    
      );
      Swal.fire('Deleted!', 'Your contact has been deleted.', 'success');
    } catch (error) {
      console.error("Error deleting contact:", error);
      Swal.fire('Error!', 'There was an issue deleting the contact.', 'error');
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!contact || contact.length === 0) {
    return <p>Contact details not available.</p>;
  }

  return (
    <>
      <Navbar />
      <ContactStyled>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email id</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>
                    <button
                      onClick={() => confirmDelete(item.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      </ContactStyled>
    </>
  );
};

export default ContactDetails;


