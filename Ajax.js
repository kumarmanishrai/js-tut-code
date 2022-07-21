// console.log("Hello Console!");

// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler(){
//     console.log("you have clicked the button");
//     //instansiate an xhr object
//     const xhr = new XMLHttpRequest();

//     //open the object
//     xhr.open("GET", "harry.txt", true);

//     //what to do on progress
//     xhr.onprogress = function(){
//         console.log("on progress");
//     }

//     //can also use ready state in place of onload 
//     xhr.onload = function(){
//         //200 os https code
//         if(this.status === 200){
//             console.log(this.responseText);

//         }
//         else{
//             console.error("some error");
//         }
//     }

//     // send the request
//     xhr.send();
// }


// ........................................................................... 

//POST request
// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler(){
//     console.log("you have clicked the button");
//     //instansiate an xhr object
//     const xhr = new XMLHttpRequest();

//     //open the object
//     xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
//     xhr.getResponseHeader('Content-type', 'application/json');
//     //what to do on progress
//     xhr.onprogress = function(){
//         console.log("on progress");
//     }

//     //can also use ready state in place of onload 
//     xhr.onload = function(){
//         //200 os https code
//         if(this.status === 200){
//             console.log(this.responseText);

//         }
//         else{
//             console.error("some error");
//         }
//     }

//     // send the request
//     params = `{"name":"test", "salary":"17723", "age":"23"}`;
//     xhr.send(params);
// }


// --------------------------------------------------------------------------


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log("you have clicked the popHandler");
        //instansiate an xhr object
        const xhr = new XMLHttpRequest();
    
        //open the object
        xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
        xhr.getResponseHeader('Content-type', 'application/json');
        
        xhr.onload = function(){
            //200 os https code
            if(this.status === 200){
                let obj = JSON.parse(this.responseText);
                console.log(obj)
                str = "";
                for(key in obj)
                {
                    str += `<li>${obj[key].employee_age}</li>`;
                }
                list.innerHTML = str;
            }
            else{
                console.error("some error");
            }
        }
        xhr.send();

}
