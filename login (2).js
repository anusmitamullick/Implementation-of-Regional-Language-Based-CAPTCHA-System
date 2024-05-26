
const captchaInput = document.getElementById("captcha-form");


function generateCaptcha() {
 const captchaText = "অআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৎ";
  //  const captchaText = "अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह"
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * captchaText.length);
    captcha += captchaText.charAt(randomIndex);
  }
  return captcha;
}


function showCaptcha() {
  const captchaPreview = document.querySelector(".preview");
  captchaPreview.textContent = generateCaptcha();
}


const captchaRefreshButton = document.querySelector(".captcha-refresh");
captchaRefreshButton.addEventListener("click", showCaptcha);


showCaptcha();


const formSubmitButton = document.getElementById("Submit");
formSubmitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  const userCaptcha = captchaInput.value;
  const actualCaptcha = document.querySelector(".preview").textContent;
  
  if (userCaptcha === actualCaptcha) {
    Swal.fire({
      title: "ক্যাপচা সঠিক।",
     //title: "कैप्चा सही है.",
      text: " ",
      icon: "success"
    });  
    
  } else {
    
    Swal.fire("অনুগ্রহ করে আবার চেষ্টা করুন।!!");
    //Swal.fire("कृपया पुन: प्रयास करें।!");
    
  }
});
const keys = document.querySelectorAll('.key');
const input = document.getElementById('captcha-form');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const char = key.dataset.char;
        input.value += char;
    });
});

document.addEventListener('keydown', (event) => {
    const char = event.key;
    if (keys.length > 0) {
        const key = document.querySelector(`[data-char="${char}"]`);
        if (key) {
            key.classList.add('active');
            setTimeout(() => {
                key.classList.remove('active');
            }, 200);
            input.value += char;
        }
    }
});