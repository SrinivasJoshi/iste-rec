// inputs
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const DOBInput = document.getElementById("DOB");
const emailInput = document.getElementById("email");
const ContactNumberInput = document.getElementById("Contact-number");
const hobbiesInput = document.getElementById("hobbies");

submitBtn.addEventListener('click',(e)=>{
    validateInputs();
})

// validate on length
const validateInputs =()=>{
    if(nameInput.value.length===0)
    {
        alert('Name field is required');
        return;
    }
    else if(DOBInput.value.length===0)
    {
        alert('Date of Birth field is required');
        return;
    }
    else if(emailInput.value.length===0)
    {
        alert('Email field is required');
        return;
    }
    else if(ContactNumberInput.value.length===0)
    {
        alert('Contact Numer is required');
        return;
    }
    else if(hobbiesInput.value.length===0)
    {
        alert('Hobbies field is required');
        return;
    }
    
    if(!validateEmail(emailInput.value))
    {
        alert('Email is invalid');
        return;
    }
    if(!validateContactNum(ContactNumberInput.value))
    {
        alert('Contact number is invalid');
        return;
    }
    alert('Form submitted successfully!');
    clearInputs();
}

// validation for email
const validateEmail=(email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// validation for contact number
const validateContactNum =(num)=>{
    const number = parseInt(num);
    console.log(number);
    if(number < 1000000000 && number > 9999999999)
    {
        return false;
    }
    return true;
}
// after submitted, clear form
const clearInputs=()=>{
    nameInput.value='';
    DOBInput.value='';
    emailInput.value='';
    ContactNumberInput.value='';
    hobbiesInput.value='';
}