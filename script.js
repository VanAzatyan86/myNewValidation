let submit = document.querySelector("#inpSubmit");
let formsInput = document.querySelectorAll("#formsInput");
let myDiv = document.querySelector(".myDiv");
let mydiv = document.querySelector("#mydiv")
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirmPassword");

submit.addEventListener("click", function (event) {

  for (let index = 0; index < formsInput.length; index++) {
    if (formsInput[index].value == "") {
      myDiv.innerHTML = "you must be fill all fileds";
      myDiv.style.color = "red"
      formsInput[index].style.borderColor = "red";
      event.preventDefault()
    } else if (password.value != confirmPassword.value) {
      myDiv.innerHTML = "Not Matching"
      myDiv.style.color = "red";  
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
      event.preventDefault()
    }else{
      event.preventDefault()
      myDiv.innerHTML=formsInput[0].value+" "+formsInput[1].value+" "+formsInput[2].value;
      mydiv.src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fenfant.2Fenfants.2Fmots-d-enfants-15928.2F11854495-1-fre-FR.2Fles-mots-rigolos-des-enfants.2Ejpg/1200x1200/quality/80/crop-from/center/les-mots-rigolos-des-enfants.jpeg"
      mydiv.classList.add("myImg")
    }
  }
  /*function names(){
    event.preventDefault()
    let newelem = document.createElement("div");
    value = formsInput[0].value + " " + formsInput[1].value;
    document.querySelector(".myDiv").appendChild(newelem);
   let myImg = document.createElement("img");
    myImg.setAttribute('src',"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fenfant.2Fenfants.2Fmots-d-enfants-15928.2F11854495-1-fre-FR.2Fles-mots-rigolos-des-enfants.2Ejpg/1200x1200/quality/80/crop-from/center/les-mots-rigolos-des-enfants.jpeg")
    myImg.classList.add("myImg")
    document.querySelector(".forms").appendChild(myImg);
  }*/

}

)

