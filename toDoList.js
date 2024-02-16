const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById('list-container');
function addTask(){
    if(inputBox.value === ''){
        alert("please eneter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete';
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click',function() {
            li.remove()});
        deleteButton.classList.add('delete');


        let checkButton = document.createElement('button')
        checkButton.innerHTML = 'Check';
        li.appendChild(checkButton);
        checkButton.addEventListener('click',function() {
            li.classList.toggle('checked');
        });
        checkButton.classList.add('check');
            
       
    }
    inputBox.value = '';
}

