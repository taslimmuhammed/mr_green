import React from 'react';
// import ProNav from '../Pro_nav/ProNav'
import { Container, Col, Row, Button} from 'react-bootstrap';
// import plant from './plant_logo.png'
// import badge from './green_king.png'
import { useHistory } from 'react-router';
import { useContext , useState, useEffect} from 'react';
import { FireBaseContext, AuthContext } from '../../store/FireBaseContext';
import  { PostContext } from '../../store/PostContext';

// import plant_a_tree from './plant_a_tree.jpg'
import './Verifier.css'
// import user from './user.jpg'
function Profile() {
  const [MyProducts, setMyProducts] = useState([]);
  const history = useHistory();
  const {firebase} = useContext(FireBaseContext);
  const [points, setpoints] = useState(0);
  const {user} = useContext(AuthContext);
  const {PostDetails, setPostDetails} = useContext(PostContext);
 
   useEffect(() => {
      firebase.firestore().collection('products').get().then((snapshot)=>{
         const allPost = snapshot.docs.filter((product)=>(
          product.data().verification!=true )).map((pdt)=>{
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
     <div className="conatin">
          <h1>Your Works</h1>
 <Row className="cards">

 {MyProducts.map(product=>{
            //  if(product.verification!=true){
                return(
                    <Col lg={6} md={6} xs={12}>
                    <div className="card-main">
                      <div className="card">
                        <img src={product.url} className="card-img"></img>
                        <div className="card-heading">{product.name}</div>
                        <div className="card-text">{product.Description}</div>
                    
                        <button onClick={()=> 
                        // alert("project verified") 
                        firebase.firestore().collection("products")
                   .doc(product.id)
                     .update({
                    verification: true,

                     }).then(alert("Verified sucessfully")).then(history.push("/signup"))
                   } 
                
                        >verfify</button>
                    <div className="favorite" onClick={()=>
           firebase.firestore().collection('products').doc(product.id).delete().then(()=>{
                alert(`${product.name}  deleted succesfully`);
                history.push("/verify")

            }).catch(()=>alert(`Error, could not delete the item`))} className="delete">
                   Remove Content
               </div>
                      </div>
                    </div>
                   
                    </Col>
                   )
            //  } 
            // else(
            //     <div>
            //         <h2>No items left for verification</h2>
            //     </div>
            // ) 
            })
             }
     {/* Repeat this column */}
   
   
</Row>
        </div>
    </div>
    )
}

export default Profile
