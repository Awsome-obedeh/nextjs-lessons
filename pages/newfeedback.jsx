
import React, { useState } from 'react';
import axios from 'axios';
const [data, setData]=useState([])

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/feedbacks', formData);
      console.log('Data sent successfully:', response.msg);
      const data=await response.json();
      if(response.status==200){
          setData(data)
      }
      console.log(data);
      
    } catch (error) {
      console.error('Error sending data:', error);
    //   display error messages, 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* maping over our data gotten from a database */}

      {data.map(data=>{
        return <>
          <h1></h1>
        </>
      })}
    </div>
  );
}
