 
 const dataLoad = ( ) =>{
   loader(true)
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then(res => res.json())
    .then(data =>  displayData(data.data.tools.slice(0, 6)))
 }
 
 
 const displayData = (data ) =>{
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    for(const details of data){

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('col')
    cardDiv.innerHTML = `
    
   <div class="card p-3" style=" border-radius: 15px">
        <img src="${details.image}" class="card-img-top" style="border-radius: 8px">
     <div class="card-body">
       <h2 class="card-title py-2">Features</h2>
         <p>1. ${details.features[0]}</p>  
           <p style="line-height:0">2. ${details.features[1]}</p>  
             <p>3. ${details.features[2]}</p>  
     </div><hr>
         <div class="d-flex align-items-center justify-content-between">
            <div>
               <h4 class="fw-bold ">${details.name}</h4>
                  <p><span class=" me-1"><i class="fas fa-calendar"></span></i>${details.published_in}</p>
            </div>
               

                  <button onclick="showDetails('${details.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#showDetailsBtn">
                  <i class="fas fa-arrow-alt-circle-right"></i> 
                </button>
                

        </div>  
     </div>
    `;
    cardContainer.appendChild(cardDiv);

    }
    loader(false);
     
 }

//  loading progress 
 const loader = isLoading => {
   const loaderProgress = document.getElementById('loader');
   if(isLoading){
      loaderProgress.classList.remove('d-none');
       
   }else{
      loaderProgress.classList.add('d-none')
      
   }
 }
 dataLoad()



//  show more details 
const showDetails = id =>{
   fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
   .then(res => res.json())
   .then(id => displayCard(id.data))
}



 const displayCard = modalCard =>{
   // console.log(modalCard)
   const title = document.getElementById('exampleModalLabel');
   title.innerText = modalCard.description;
   
   const priceTitle = document.getElementById('priceSet');
   priceTitle.innerHTML = `
   <p style="  color: green; font-weight: bold;">${modalCard.pricing[0].price ? modalCard.pricing[0].price : 'No Found'}<br> ${modalCard.pricing[0].plan ? modalCard.pricing[0].plan : 'No Found'}</p>

   <p style=" color: red; font-weight: bold;">${modalCard.pricing[1].price ? modalCard.pricing[1].price : 'No Found'}<br> ${modalCard.pricing[1].plan ? modalCard.pricing[1].plan : "No Found"}</p>

   <p style=" color: blue; font-weight: bold;">${modalCard.pricing[2].price ? modalCard.pricing[2].price : " No Found" }<br> ${modalCard.pricing[2].plan ? modalCard.pricing[2].plan : "No Found"}</p>
   
   `;
   
    
   const featuresValue = document.getElementById('fetures');
   featuresValue.innerHTML = `
   <div>

   <h3>Features</h3>
   <li>${modalCard.features[1].feature_name ? modalCard.features[1].feature_name : 'No Found'}</li>
   <li>${modalCard.features[2].feature_name ? modalCard.features[2].feature_name : 'No Found'}</li>
   <li>${modalCard.features[3].feature_name ? modalCard.features[3].feature_name : 'No Found'}</li>
             
   </div>
   <div>
   <h3>Integration</h3>
   <li>${modalCard.integrations[0] ? modalCard.integrations[0] : 'Free Basic'}</li>
   <li>${modalCard.integrations[1] ? modalCard.integrations[1] : 'Free Pro'}</li>
   <li>${modalCard.integrations[2] ? modalCard.integrations[2] : 'Free Cost'}</li>
   </div>
   
   `;
   const features2 = document.getElementById('fetures2');
   features2.innerHTML = `
         <img src="${modalCard.image_link[0]}"  style="border-radius: 8px; width: 300px; height: 280px">
         <h3 class="my-2">${modalCard.input_output_examples[0].input}</h3>
         <p>${modalCard.input_output_examples[0].output}</p>
         <button class="accuracy btn btn-warning">${modalCard.accuracy.score ? modalCard.accuracy.score : 'No '} accuracy</button>

          
   `;


 }

  

 showAllData =() =>{
  
   fetch(`https://openapi.programming-hero.com/api/ai/tools`)
   .then(res => res.json())
   .then(data =>  displayData(data.data.tools.slice()))

    const hideButton = document.getElementById('See-More');
    
    hideButton.style.display = 'none';

 }
 
 

 