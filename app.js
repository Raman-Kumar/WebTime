(function(){
    var firebase = app_fireBase;
    var firestore = firebase.firestore();

    // const docRef = firestore.doc("samples/sandwichData");
    var db = firebase.firestore();
    const outputHeader = document.querySelector("#hotDogOutput");
    const inputTextField = document.querySelector("#latestHotDogStatus");
    const saveButton = document.querySelector("#saveButton");
    
    // saveButton.addEventListener("click", function(){
    //     const textToSave = inputTextField.value;
    //     console.log("I am going to save "+ textToSave + " to Firestore");
    //     docRef.set({
    //         hotDogStatus: textToSave
    //     }).then(function(){
    //         console.log("Status saved");
    //     }).catch(function(){
    //         console.log("Got an error: ", error);
    //     });
    // })

    db.collection("users").add({
        first: "Adaf",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})()