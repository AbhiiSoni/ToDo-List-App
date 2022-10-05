const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const tasks = document.querySelector(".tasks");


//button disabled
input.addEventListener('keyup',() => {
   if(input.value != 0){
    button.classList.add('active');
   }else{
    button.classList.remove('active');
   }
})


//enter value
button.addEventListener('click',()=>{
    if(input.value != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value = "";
    }else{
        alert('Please enter task')
    }
})


tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-pen-to-square')){
    e.target.parentElement.parentElement.classList.toggle('lineThrough');
    }
})