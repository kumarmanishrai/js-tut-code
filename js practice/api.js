console.log('hello js');

let  fetchBtn = document.getElementById('fetchBtn');
let  fetchContent = document.getElementById('fetchContent');

// function getData(){

//     console.log('Started getData');
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
        
//     })

// }


// function getData(){

//     console.log('Started getData');
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
        
//     })

// }

function postData(){

    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"manish", "salary":"1234", "age":"21"}';
    params = {
        method:'post',
        headers: {
            'content-type': 'application/json'
        },
        body:data
    }
    fetch(url, params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        
    })

}


postData();

