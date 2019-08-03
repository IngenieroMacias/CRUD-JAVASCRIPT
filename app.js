class Product{
    constructor(name, price,year){
     this.name=name;
     this.price=price;
     this.year=year;
    }
}


class UI{
   addProduct(product){
   const productList=document.getElementById('product-list');
   const element=document.createElement('div');

   element.innerHTML=`
    <div class="card text-center mb-4">
      <div class="card-body"> 
      <strong>Product Name </strong>: ${product.name}
      <strong>Product Price </strong>: ${product.price}
      <strong>Product Year </strong>: ${product.year}
      <a href="#" class="btn btn-danger" name="delete"> Delete </a>
      </div>
      
    </div> 
    
   `;


   productList.appendChild(element);

    }

    suma(a,b){
     return a+b;
    }

    deleteProduct(element){
    if(element.name==='delete'){
       element.parentElement.parentElement.parentElement.remove(); 
       this.showMessage('producto eliminado satisfactoriamente','danger');
    }
    }
   
    resetForm(){
        document.getElementById('product-form').reset();
    }

    showMessage(message,cssClass){
    const div= document.createElement('div');
    div.className=`alert alert-${cssClass} mt-3`;
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector('.container');
    const app=document.querySelector('#app')
    container.insertBefore(div,app);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
    }
}



document.getElementById('product-form').addEventListener('submit',(e)=>{
 const name=document.getElementById('name').value;
 const price=document.getElementById('price').value;
 const year=document.getElementById('year').value;
 const product= new Product(name,price,year);
 const ui=new UI();
 ui.addProduct(product);
 ui.resetForm();
 ui.showMessage('producto agregado satisfactoriamente','primary');
 ui.suma(product.price,price);
 e.preventDefault();

})

document.getElementById('product-list').addEventListener('click',(e)=>{
  const ui= new UI();
  ui.deleteProduct(e.target);
})



