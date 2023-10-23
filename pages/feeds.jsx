import mongoose from "mongoose";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// run npm install axios, to install axios dependency
import axios from 'axios'

export default function Feed() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phone: "",
  });
  const [msg, setMsg] = useState('');
  function onChangeHandler(e) {
    e.preventDefault();
    const { firstname, lastname, age, phone } = person;
    // if (!firstname) {
    //   setMsg("please in put first name");
    // }
    // if (!lastname) {
    //   setMsg("please in put lastname name");
    // }
    console.log(e);
    // destructure our state person
    const { name, value } = e.target;

    // when changing the value of a state, if you are depending on teh previous vlaue of the
    // state, you need to use prevState

    // setPerson(prevPerson=>({
    //      ...prevPerson,
    //     [name]:value

    // }))

    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        [name]: value,
      };
    });

    // sending persondat to an api
    makeApi()
  }

  async function makeApi(){
  const res =await axios.post('/api/feeds',person);
   let result=await res.json()
  }
  return (
    <>
      <Head>
        <title>feed project</title>
      </Head>
      <Image src="/favicon.ico" width={500} height={500} />

      {/* controlled way of  handling */}

      {msg!='' ? msg : ""}
      {/* {msg&& msg} */}
      <form onSubmit={onChangeHandler}>
        <label htmlFor="">firsname</label>
        <input
          type="text"
          name="firstname"
          value={person.firstname}
          onChange={onChangeHandler}
        />
        <br></br>
        <label htmlFor="">lastname</label>
        <input
          type="text"
          name="lastname"
          value={person.lastname}
          onChange={onChangeHandler}
        />
        <br></br>

        <label htmlFor="">phone</label>
        <input
          type="text"
          name="phone"
          value={person.phone}
          onChange={onChangeHandler}
        />
        <br></br>

        <label htmlFor="">age</label>
        <input
          type="text"
          name="age"
          value={person.age}
          onChange={onChangeHandler}
          required
        />
        <br></br>
        <button>register</button>
        <h1>{person.firstname}</h1>
        {console.log(person.firstname)}
        <h1>{person.lastname}</h1>
        {console.log(person.lastname)}
      </form>
    </>
  );
}
