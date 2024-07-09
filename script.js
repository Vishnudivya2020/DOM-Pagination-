let Number = document.querySelector('#number');
console.log(Number);


let Currentpage = 1;
let itemspage = 7;
async function fetchdatas(){

    try{
        Page.innerHTML="";
        let StartIndex = (Currentpage-1)*itemspage;
        let endIndex =StartIndex+itemspage;
       
       
 //Get the json datas       
let Res= await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
let data=await Res.json()
data.slice(StartIndex , endIndex).map((ele)=>{
   
     Page.appendChild(createDataCard(ele))  ;
});
}catch(err){
     Pagenation.innerHTML +=`<h1 style="text-align:center">Error occured Sorry!🤷‍♀️</h1>`
   
}
    
};


//create datacard;
 let Page=document.getElementById("Pagenation");

function createDataCard(ele){
   const card = document.createElement("div");
   card.setAttribute('class','Card')
   card.innerHTML +=`
    
    
    <div class="container">
    <h4 >id:<span style=color:blue >${ele.id}</span></h4>
    <h4>Name:<span style=color:blue>${ele.name}</span></h4>
    <h4>Email:<span style=color:blue>${ele.email}</span></h4>
   </div> 
    
    `
    console.log(card);
    return card;
}

fetchdatas();


let buttons=document.getElementById('BUTTON')

function firstButton(){
    if(Currentpage>1){
        Currentpage--;
        fetchdatas();
    }
}
function preButton(){
    Currentpage++;
    fetchdatas();
};


// Function to create buttons and PageNumber
let BTN_container = document.getElementById('button-container')
 console.log(BTN_container);
 const pageNumber= document.querySelector('.count');
 console.log(pageNumber);

 function createButtons(){

 for(let i=2;i<=15;i++){
    const Button=document.createElement('button');
    Button.textContent=`${i}`;
   
    Button.classList.add('pageBtn');
     Button.onclick=function (){
        if(Currentpage=i){
           
           Button.textContent=i;
           pageNumber.textContent=i;
           fetchdatas(); 
        }
       
 }
        BTN_container .appendChild( Button)
        
   
    };
   
   };
   

  createButtons();















   










