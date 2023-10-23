import Head from "next/head";
import styles from "./../styles/feedbacks.module.css";
import { GetStaticProps } from "next";

import { useRef, useState } from "react";
export default function Feedbacks() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const phoneRef = useRef();
//   console.log(userdata);

  // submit form
  const [msg, setMsg] = useState();

  function submitHandler(e) {
    e.preventDefault();
    const firstNameValue = firstNameRef.current.value;
    const lastNameValue = lastNameRef.current.value;
    const ageValue = ageRef.current.value;
    const phoneValue = phoneRef.current.value;

    // store input values in an object
    const userData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      age: ageValue,
      phone: phoneValue,
    };

    // validation
    if (firstNameValue === undefined) {
      setMsg("please fill in firstNAme");
    }

    // sending the request to an Api
    // send a post request to our api
    async function sendApi() {
      const response = await fetch("/api/feedbacks", {
        method: "POST",
        body: JSON.stringify(userData),
        header: {
          "content-type": "application/json",
        },
      });
      if(response.status===201){
           setMsg('user registered successfully')
      }

      if(response.status==442){
         setMsg('Enter input fields')
      }
      // get the response from the request
      const data = await response.json();
      console.log(data);
    }
    // call the sendApi function
    sendApi();
  }

  // get staticprops
  

 
  return (
    <>
    {/* adding a title */}
    <Head>
      <title>feedbacks</title>
      <meta name="keywords" content="feedabacks of user" />
    </Head>
  <div className={styles.wrapper}>
   
    
    
      {/* show error message */}
      {msg ? msg: '' }

      <form onSubmit={submitHandler}>
        <div className={styles.formControl}>
          <label>Firstname</label>
          <input className={styles.input} ref={firstNameRef}></input>
        </div>

        <div className={styles.formControl}>
          <label>lastname</label>
          <input className={styles.input} ref={lastNameRef}></input>
        </div>

        <div className={styles.formControl}>
          <label>Age</label>
          <input className={styles.input} ref={ageRef}></input>
        </div>

        <div className={styles.formControl}>
          <label>Phone Number</label>
          <input className={styles.input} ref={phoneRef}></input>
        </div>
        <button>Register</button>
      </form>
    </div>
    </>
  );
}


// export async function getStaticProps(){
//    const res= await fetch("http//localhost:3000/api/feedbacks");
//     return  {props:{userdata:{userData}}}
// }

export async function getStaticProps(){
    return {
      props:{data: {id:1},name:"obed",class:'ss3'},

      // fetching from a database
      // fetch(/*endpoint*/)

      
    }
  }