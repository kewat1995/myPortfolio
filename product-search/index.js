(async () =>{
  const procductContainer =document.getElementById("product-container");
  const searchInputEl =document.getElementById("searchInput")
  const API ="https://fakestoreapi.com/products";
    async function getProduct(){
    try {
      const response = await fetch(API)
      return await response.json()
    } catch (error) {
      error
    }
   }

   const data = await getProduct();
  //  console.log(data)

   const showProducts =(item)=>{
    // console.log(item)
    return`<div class="card">
            <div class="product-image">
                <img src="${item.image}"/>
            </div>
            <div class="product-content">
                <h2>
                   ${item.title}
                  </h2>
                  <p> 
                  ${item.description.split(" ").slice(0, 20).join(" ")}
                  </p>
                   
                  <button>${item.price}$</button>

            </div>
        </div>
        `
   }

   const renderProducts = (data)=>{
    // console.log(data)
    procductContainer.innerHTML = " ";
    data.forEach((item) => {
      procductContainer.innerHTML += showProducts(item)
    });

   }
   const checkProducts =(text,searchText)=>{
    return text.toString().toLowerCase().includes(searchText);
   }
   
   const filterHandler =(event) =>{
 const searchText = event.target.value.toLowerCase();
 const productFilter = data.filter((item)=>{
  return checkProducts(item.title,searchText)||
  checkProducts(item.description,searchText)||
  checkProducts(item.price,searchText)
 })
 renderProducts(productFilter)
   }


 searchInputEl.addEventListener("keyup" ,filterHandler);
 renderProducts(data);
})()