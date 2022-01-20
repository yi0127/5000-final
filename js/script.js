
    // INITIALIZE FIREBASE
    var firebaseConfig= {
      apiKey: "AIzaSyCNQteRgyOe0B56w98hQFyIrwhQMzDO9IA",
      authDomain: "finalweb-6834c.firebaseapp.com",
      projectId: "finalweb-6834c",
      storageBucket: "finalweb-6834c.appspot.com",
      messagingSenderId: "64968769058",
      appId: "1:64968769058:web:c6518bd71fb27fcac7947b",
      measurementId: "G-KF2E0E1LY9"
    };
    
    firebase.initializeApp(firebaseConfig);
    var firestore = firebase.firestore()
    
    //Variable to access database collection
    const db = firestore.collection("formData")
    
    //Get Submit Form
    let submitButton = document.getElementById('submit')
    
    //Create Event Listener To Allow Form Submission
    submitButton.addEventListener("click", (e) => {
      //Prevent Default Form Submission Behavior
      e.preventDefault()
    
      //Get Form Values
      let name = document.getElementById('name').value
      let email = document.getElementById('email').value
      let message = document.getElementById('message').value
    
      //Save Form Data To Firebase
      db.doc().set({
        name: name,
        email: email,
        message: message
      }).then( () => {
        console.log("Data saved")
      }).catch((error) => {
        console.log(error)
      })
    
      //alert
      alert("Your Form Has Been Submitted Successfully")
    })

  //   let usersRef = db.collection("users");
  //   usersRef.doc("1167").set({
  //     "name": "Alex",
  //     "age": 20,
  //     "tel": {
  //       "tel1": "111-112",
  //       "tel2": "222-112"
  //     }
  //   });
  //   usersRef.doc("test1").set({
  //     "meme":{
  //       "t1":"popcat",
  //       "t2":"jojo"
  //     }
  //   });
  
  //   let docRef = usersRef.doc("1167");
  //   docRef.get().then(function(doc){
  //     $title.html(`doc 1167 name = ${doc.data().name}`)
  //   });

  //   // let docRef2 = usersRef.doc("test1");
  //   // // docRef2.get().then(function(doc){
  //   // //   $doc.html(`doc test name = ${doc.data().meme["t1"]}`)
  //   // // });

  //   // docRef.set({
  //   //   "name": "Alex1",
  //   //   "age": 27,
  //   //   "tel": {
  //   //     "tel1": "111-111",
  //   //     "tel2": "222-111"
  //   //   }
  //   // });

  //   // docRef.update({
  //   //   "name": "John Doe"
  //   // });
  
  //   docRef.onSnapshot(
  //     function(doc){
  //       $doc.html(`user name = ${doc.data().name}, 
  //       user age = ${doc.data().age},
  //       else = ${doc.data().tel["tel1"]}`);
  //     }
  //   );
  // });
