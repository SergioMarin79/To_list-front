import axios from "axios";

export async function responseHandle(e){
    e.preventDefault();
    const method = e.action.method;
    const url = e.action.url;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries);
    
    const id = formData.get('id')

    if(id){
        formData.delete('id');
        url += id
    }

    await axios({
        method: method,
        url: url,
        data: data
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

export async function getData(url){
     const dataFound = await axios.get(url)
     .then((response) => response.data)
     .catch((error) => console.log(error))

     if(dataFound){
        return dataFound.data
     }else{
        return 0;
     }
}