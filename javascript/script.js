
var typed = new Typed('#element', {
    strings: ["Flutter Developer"," Mobile App Developer"],
    typeSpeed: 150,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });



 
/*----------protfolio---------- */
  document.querySelectorAll('.images-containe img').forEach(image =>{
    image.onclick =() =>{
      document.querySelector('.popup-image').style.display ='block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');

    }
  });

  document.querySelector('.popup-image span').onclick =() =>{
    document.querySelector('.popup-image').style.display='none';
  }





  
