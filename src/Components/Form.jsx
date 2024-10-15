import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from "./Firebase";

export default function Form() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile, setMobile] = useState('')
  const [Gender, setGender] = useState('')
  const [Father, setFather] = useState('')
  const [Mother, setMother] = useState('')
  const [Nationality, setNationality] = useState('')
  const [Country, setCountry] = useState('')
  const [State, setState] = useState('')
  const [City, setCity] = useState('')
  const [District, setDistrict] = useState('')
  const [PinCode, setPinCode] = useState('')
  const [College, setCollege] = useState('')
  const [Course, setCourse] = useState('')
  const [Duration, setDuration] = useState('')
  const [Cgpa, setCgpa] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (Name === '' || Email === '' || Mobile === '' || Gender === '' || Father === '' || Mother === '' || Nationality === '' || Country === '' || State === '' || City === '' || District === '' || PinCode === '' || College === '' || Course === '' || Duration === '' || Cgpa === ''){
      return
    }
  const scholarCollRef = collection(db, 'ApplicationForm')
  addDoc(scholarCollRef, {Name, Email, Mobile, Gender, Father, Mother, Nationality, Country, State, City, District, PinCode, College, Course, Duration, Cgpa})
  .then(response => {
    console.log(response)
    alert("Details Submitted Successfully ! ")
    window.location.href = "/form/payment";
  })
  .catch(error => {
    console.log(error.message)
  })
  }
  return (
    <>
    <div className='form'>
        <h1>Apply for the Scholars Creators Scholarship Test</h1>
        <div className="personal">
          <h2>Personal Details</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="application">
              <div className="apply">
                <label>Enter Your Full Name *</label>
                <input id='Name' type='Text' value={Name} required onChange={e => setName (e.target.value)} />
              </div>
              <div className="apply">
                <label>Enter Your Email-id *</label>
                <input id='Email' type='email' value={Email} required onChange={e => setEmail (e.target.value)} />
              </div>
              <div className="apply">
                <label>Enter Your Phone No *</label>
                <input id='Mobile' type='number' value={Mobile} required onChange={e => setMobile (e.target.value)} />
              </div>
              <div className="apply">
                <label>Gender *</label>
                <input id='Gender' type='text' value={Gender} required onChange={e => setGender (e.target.value)} />
              </div>
              <div className="apply">
                <label>Father's Name *</label>
                <input id='Father' type='text' value={Father} required onChange={e => setFather (e.target.value)} />
              </div>
              <div className="apply">
                <label>Mother's Name *</label>
                <input id='Mother' type='text' value={Mother} required onChange={e => setMother (e.target.value)} />
              </div>
              <div className="apply">
                <label>Nationality *</label>
                <input id='Nationality' type='text' value={Nationality} required onChange={e => setNationality (e.target.value)} />
              </div>

              <h2>Address</h2>
              <div className="apply">
                <label>Country *</label>
                <input id='Country' type='text' value={Country} required onChange={e => setCountry (e.target.value)} />
              </div>
              <div className="apply">
                <label>State *</label>
                <input id='State' type='text' value={State} required onChange={e => setState (e.target.value)} />
              </div>
              <div className="apply">
                <label>Village/City *</label>
                <input id='City' type='text' value={City} required onChange={e => setCity (e.target.value)} />
              </div>
              <div className="apply">
                <label>District *</label>
                <input id='District' type='text' value={District} required onChange={e => setDistrict (e.target.value)} />
              </div>
              <div className="apply">
                <label>Pin Code *</label>
                <input id='PinCode' type='number' value={PinCode} required onChange={e => setPinCode (e.target.value)} />
              </div>

              <h2>Qualification</h2>

              <div className="apply">
                <label>College Name *</label>
                <input id='College' type='text' value={College} required onChange={e => setCollege (e.target.value)} />
              </div>
              <div className="apply">
                <label>Course Name *</label>
                <input id='Course' type='text' value={Course} required onChange={e => setCourse (e.target.value)} />
              </div>
              <div className="apply">
                <label>Course Duration *</label>
                <input id='Duration' type='text' value={Duration} required onChange={e => setDuration (e.target.value)} />
              </div>
              <div className="apply">
                <label>Last Year Percentage/CGPA *</label>
                <input id='Cgpa' type='text' value={Cgpa} required onChange={e => setCgpa (e.target.value)} />
              </div>

              <button className='button' type='submit'>Save & Next</button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}
