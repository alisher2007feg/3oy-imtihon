let elOrderForm=document.querySelector(".order-form"),userName=elOrderForm.querySelector(".user-name"),userTelNum=elOrderForm.querySelector(".user-tel-number"),userAddress=elOrderForm.querySelector(".user-address"),thicknessSelect=elOrderForm.querySelector(".thickness-select"),thicknessOption=elOrderForm.querySelector(".thickness-option"),elPizzaSize=elOrderForm.querySelector(".pizza-size"),onPizza=elOrderForm.querySelector(".on-pizza"),addToPizza=elOrderForm.querySelector(".add-to-pizza"),elDataList=document.querySelector(".data-list"),dataArray=[],price={sm25:{sizeName:"25sm",price:10},sm30:{sizeName:"30sm",price:12},sm35:{sizeName:"35sm",price:15}};elOrderForm.addEventListener("submit",e=>{e.preventDefault(),elDataList.innerHTML=null;let r=(thicknessSelectValue=thicknessSelect).options[thicknessSelectValue.selectedIndex].dataset.price,t=document.querySelector('input[name="pizza_size"]:checked').value,s=document.querySelectorAll('input[name="addings"]:checked'),a=[];for(let o of s)a.push(o.value);let l=document.querySelectorAll('input[name="add"]:checked'),i=[];for(let n of l)i.push(n.value);let d=Number(r)+Number(price[t].price)+Number(5*a.length)+Number(3*i.length),c={id:dataArray.length+1,name:userName.value.trim(),phone:Number(userTelNum.value.trim()),address:userAddress.value.trim(),thickness:thicknessSelect.value,pizzaSize:t,onPizzaa:a.join(", "),addBoxInfo:i.join(", "),price:d};for(let p of(console.log(c),dataArray.push(c),elDataList.style.display="block",console.log(dataArray),dataArray))elDataList.innerHTML+=`
      <li class="data-item rounded-3 mb-4 py-4 px-5">
         <h3>Order: ${p.id}</h3>
         <p><strong>Name:</strong> ${p.name}</p>
         <p><strong>Phone:</strong> ${p.phone}</p>
         <p><strong>Address:</strong> ${p.address}</p>

         <hr>

         <p><strong>Dough thickness:</strong> ${p.thickness}</p>
         <p><strong>Size:</strong>  ${price[`${p.pizzaSize}`].sizeName}</p>
         <p class="text-capitalize"><strong>On pizza:</strong> ${p.onPizzaa}</p>
         <p><strong>Add:</strong> ${p.addBoxInfo}</p>

         <hr>

         <strong class"d-block ms-auto">Total: ${p.price}$</strong>
       </li>
      `});