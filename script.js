firstUpdate();
add = document.getElementById("add");
add.addEventListener("click", update);

function update(){
    console.log('Clicked');
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    
    if(localStorage.getItem('itemJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([title,description]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title,description]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    
    let table = document.getElementById("tableBody");
    let str = "";
    
    itemJsonArray.forEach((element,index) => {
        str += `
            <tr>
              <th scope="row">${index+1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button id="deleted" class="btn-danger" onclick="remove(${index})">Delete</button></td>
            </tr>`; 
    });
    table.innerHTML = str;
}

function firstUpdate(){
    console.log('Clicked');
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    
    if(localStorage.getItem('itemJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
    }
    
    let table = document.getElementById("tableBody");
    let str = "";
    
    itemJsonArray.forEach((element,index) => {
        str += `
            <tr>
              <th scope="row">${index+1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button id="deleted" class="btn-danger" onclick="remove(${index})">Delete</button></td>
            </tr>`; 
    });
    table.innerHTML = str;
} 


function remove(index){
    itemJsonArrayStr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(index,1);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    firstUpdate();
}