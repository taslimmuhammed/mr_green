import React, { Fragment } from 'react';
import './Create.css';
// import Header from '../Header/Header';
import { useState, useContext } from 'react';
import { FireBaseContext, AuthContext } from '../../store/FireBaseContext';
import { useHistory } from 'react-router';
const Create = () => {
  const history = useHistory();
  const {firebase} = useContext(FireBaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState("");
  // const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  // const [image1, setimage1] = useState(null);
  const [image, setimage] = useState(null);

  const date = new Date();
 const handleSubmit= ()=>{
  firebase.storage().ref(`/image/${image.name}`).put(image)
     .then(({ref})=>ref.getDownloadURL().then((url)=>{console.log(url)
    firebase.firestore().collection('products').add({
      name,
      Description,
      url,
      createdAt: date.toDateString(),
      userId:user.uid,
      verification:false
    })
  .then(alert("Your Project has been submitted successfully. It will be verified by admin ").then(history.push("/profile")))}))
  
 }  
  return (
    // <Fragment >
    <div className="login-main">
     {/* <Header /> */}
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name of project</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>{
               setName(e.target.value)
              }}
            />
            {/* <br /> */}
            {/* <label htmlFor="fname">Category</label> */}
            {/* <br /> */}




          
            {/* <select className="input"
           id="fname"
           name="category"
           defaultValue="cars"
           value={Category}
           onChange={(e)=>{
            setCategory(e.target.value)
           }}>
           <option value="car">cars</option>
            <option value="bike">bikes</option>
             <option value="scooter">scooter</option>
             <option value="phone">phones</option>
             <option value="laptop">laptops</option>
            <option value="house">houses</option>
            <option value="">other products         </option>
             <option value="apartment">apartments</option>
             <option value="watch">watches</option>
        
            </select> */}
           {/* <div className="c1"></div> */}


            <br />
            <label htmlFor="fname">Description</label>
            <br />
            <input className="input" type="text" id="fname" name="Description"   value={Description}
              onChange={(e)=>{
               setDescription(e.target.value) 
              }} maxLength="50"/>
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image): null}></img>
      
            <br />
            <input type="file" 
              onChange={(e)=>{
               setimage(e.target.files[0])
              }}/>
            <br />
            <br />
            <button onClick={handleSubmit} className="uploafirebasetn" >upload and Submit</button>
        </div>
      </card>
    </div>
  );
};

export default Create;
