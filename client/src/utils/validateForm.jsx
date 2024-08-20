const ValidateForm = (name,email,username,phone) =>{
    console.log(name,email,username,phone);
    if(!name || !email ||  !username || !phone){
        console.log("All Fields are required");
      return false;
    }
    const emailRegEx =  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    const phoneRegEx = /^\d{10}$/;
    if(!emailRegEx.test(email) || !phoneRegEx.test(phone)){
        console.log("Invalid Email or phone number");
      return false;
    }
}

export default ValidateForm;