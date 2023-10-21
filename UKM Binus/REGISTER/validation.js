  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('tombolSubmit');
  
    console.log(btn); 
  
    
    btn.addEventListener('click', () => {
        test();
    });
  });

  function test () {
    if(document.querySelector("#username").value.trim()=='') {
        alert('Please Input Your Name !');
    }else if(document.querySelector("#nim").value.trim()=='') {
        alert('Please Input Your NIM !');
    }else if(document.querySelector("#check").checked==false) {
        alert('You Must Agree With the Terms & Condition !');
    }else if(document.querySelector("#email").value.trim() == '') {
        alert('Please Input Your Email !');
    }else if(document.querySelector("#password").value.trim() == '') {
        alert('Please Input Your Password!');
    }else if(document.querySelector("#confirm-password").value.trim() == '') {
        alert('Please Input Your Password Confirmation !');
    }else if(document.querySelector("#confirm-password").value.trim() != document.querySelector("#password").value.trim()) {
        alert('Your Password and Password Confirmation is Not The Same !');
    }
}
