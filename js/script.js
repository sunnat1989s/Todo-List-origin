let row = document.querySelector("#row");

let DataSozlar = ["assalomualekum", "bugun havo yaxshi", "gruppa nimaga tinch"];

const MapQilish=(qiymat)=>{
    qiymat.map((v,i) =>{
        let addCard = document.createElement("div");
        let col = document.createElement("div");
        let cardP= document.createElement("div");
        let cardButton = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        
        //qiymat berish
        
        p1.innerHTML = i;
        p2.innerHTML = v;
        button1.innerHTML = "Del";
        button2.innerHTML = "Edit";
        
        // style bersh
        cardP.classList.add("d-flex");
        addCard.classList.add("addCard");
        col.classList.add("col-6", "offset-3")
         
        //appendchild
        cardP.appendChild(p1);
        cardP.appendChild(p2);
        cardButton.appendChild(button1);
        cardButton.appendChild(button2);
        addCard.appendChild(cardP);
        addCard.appendChild(cardButton);
        col.appendChild(addCard);
        row.appendChild(col);
        
        
    })
}
MapQilish(DataSozlar)