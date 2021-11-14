import React from 'react';
import ProNav from '../Pro_nav/ProNav'
import Footer from '../../Footer/Footer';
import { Container, Col, Row, Button} from 'react-bootstrap';
import plant from './plant_logo.png'
import badge from './green_king.png'
import { useHistory } from 'react-router';
import { useContext , useState, useEffect} from 'react';
import { FireBaseContext, AuthContext } from '../../../store/FireBaseContext';
import  { PostContext } from '../../../store/PostContext';

import plant_a_tree from './plant_a_tree.jpg'
import './Profile.css'
import userpro from './user.jpg'
function Profile() {
  const [MyProducts, setMyProducts] = useState([]);
  const history = useHistory();
  const {firebase} = useContext(FireBaseContext);
  const {user} = useContext(AuthContext);
  const {PostDetails, setPostDetails} = useContext(PostContext);
   
  var [points, setPoints] = useState(0);
   useEffect(() => {
      firebase.firestore().collection('products').get().then((snapshot)=>{
         const allPost = snapshot.docs.filter((product)=>(
          product.data().userId == user.uid )).map((pdt)=>{
           setPoints(points+=1)
          return{
              ...pdt.data(), id:pdt.id
            }
         })
        setMyProducts(allPost);
        console.log(`updated`)
        
      })
    },[])
    return (
        <div className="m1">
      <ProNav/>
          <div className="main"> 
           <Row>
               <Col lg={6} md={12}>
                 <div className="hello">Hello,</div>
                 <div className="displayName"> {user.displayName}</div>
                 <div className="point-header">Your Total Points:</div>
                <span className="point"></span><img src={plant} className="plant"></img>
                 <div className="seperator"></div>
                 <div className="point-header">Badge:</div>
                 <div className="badge"><img  src={badge} style={{width:75, height:75}}></img></div>
                 <div className="button-o1" onClick={()=>history.push("/create")}><div className="button-o2">Contribute</div></div>

               </Col>
               <Col lg={6} md={12}>
                   <img src={userpro} className="user-image"></img>
               </Col>
           </Row>
     </div> 

     {/* CArds */}

     <div className="conatin">
          <h1>Your Works</h1>
 <Row className="car ds">

 {MyProducts.map(product=>{
             
             if(product.verification) {
            
              return(
              <Col lg={6} md={6} xs={12}>
              <div className="card-main">
                <div className="card">
                  <img src={product.url} className="card-img"></img>
                  <div className="card-heading">{product.name}</div>
                  <div className="card-text">{product.Description}</div>
                </div>
              </div>
              </Col>
             )
             }
            })
             }
     {/* Repeat this column */}
   
   
</Row>
        </div>
        {/* <Button onClick={()=>history.push("/verify")}>Verify</Button> */}
    <Footer></Footer>
    </div>
    )
}

export default Profile
