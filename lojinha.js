const Items =[
    {
     id: 0,
     nome: "anel0",
     img: "anel1.jpg",
     quantidade: 0
    },
    {
     id: 1,
     nome: "anel1",
     img: "anel2.jpg",
     quantidade: 0
    },
    {
     id: 2,
     nome: "anel2",
     img: "anel3.jpg",
     quantidade: 0
    },
    {
     id: 3,
     nome: "anel3",
     img: "anel4.jpg",
     quantidade: 0
    },
    {
     id: 4,
     nome: "pingente1",
     img: "pingente1.jpg",
     quantidade: 0
    },
    {
     id: 5,
     nome: "pingente2",
     img: "pingente2.jpg",
     quantidade: 0
    },
    {
     id: 6,
     nome: "pingente3",
     img: "pingente3.jpg",
     quantidade: 0
    },
    {
     id: 7,
     nome: "pingente4",
     img: "pingente4.jpg",
     quantidade: 0
    },
    {
     id: 8,
     nome: "brinco1",
     img: "brinco1.jpg",
     quantidade: 0
    },
    {
     id: 9,
     nome: "brinco2",
     img: "brinco2.jpg",
     quantidade: 0
    },
    {
     id: 10,
     nome: "brinco3",
     img: "brinco3.jpg",
     quantidade: 0
    },
    {
     id: 11,
     nome: "brinco4",
     img: "brinco4.jpg",
     quantidade: 0
    },

 ]
     
 function inicializarLoja(){
 
var   containerProduto = document.getElementById("Produtos");
Items.map((val)=>{
  containerProduto.innerHTML+= `

  <div class= "produto-single"> 
      <img src="`+val.img+`" />
      <p>`+val.nome+`</p>
      <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>

  </div>

  `
})
  }
  inicializarLoja();

  atualizarCarrinho = () => {
    console.log(Items);
}

var links = document.getElementsByTagName("a");

   for(var i = 0; i < links.length; i++){
   links[i].addEventListener("click",function(){
      let key = this.getAttribute("key");
      Items[key].quantidade++;
      atualizarCarrinho();
      return false;
   })
   }

  




