const qrFormEl =document.getElementById("qr-Form");
const qrContainerEl =document.getElementById("qr-container");
const qrImage =document.getElementById("qr-image");
const qrBtnEl =document.getElementById("qrBtn");
const qrInputEl =document.getElementById("qrInputText");

const renderImage =(url) =>{
 if(!url)return;
qrBtnEl.innerText = "Generate QR code Updating ....."
  qrImage.src =url;
  

}

const onloadImage =()=>{
    const inerval =setInterval(()=>{
        qrContainerEl.classList.add('show');
        clearInterval(inerval);
        qrBtnEl.innerText ="Generate Qr code"
    },500)
}

qrImage.addEventListener("load",onloadImage)



qrFormEl.addEventListener(
    "submit",
    (event) =>{
        event.preventDefault();
      const formData = new FormData(qrFormEl);
      const text = formData.get('qrtext');
      const qrCodeurl =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
     renderImage(qrCodeurl)
    }
)

qrInputEl.addEventListener("keyup",
()=>{
    if(!qrInputEl.value.trim()){
        qrContainerEl.classList.remove('show')
    }
}
)



