let signupForm= document.getElementById("signupForm");

signupForm.addEventListener("submit", saveDataForm);

function saveDataForm(e){
    e.preventDefault();

    var name1= document.getElementById("name");
    var lastname1= document.getElementById("lastname");
    var email1 = document.getElementById("email");
    

    var dataForm=[
        {name:name1, lastname:lastname1, email:email1},

    ];

    console.log(typeof dataForm);

    dataForm=JSON.stringify(dataForm);

    localStorage.setItem("data", dataForm);

    contactForm.reset();
}