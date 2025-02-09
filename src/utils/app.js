import axios from "axios";

const showAlert = (message, status) => {
    const alert = document.getElementById('alert');
    const alertMessage = document.getElementById('alertMessage');
    
    alertMessage.textContent = message;

    if (status === 'success') {
        alert.classList.remove('bg-red-100', 'border-red-500', 'text-red-500');
        alert.classList.add('bg-green-100', 'border-green-500', 'text-green-800');
    } else if (status === 'error') {
        alert.classList.remove('bg-green-100', 'border-green-500', 'text-green-800');
        alert.classList.add('bg-red-100', 'border-red-500', 'text-red-800');
    }

    alert.removeAttribute('hidden');
    
    setTimeout(() => {
        alert.setAttribute('hidden', 'true');
        location.reload()
    }, 5000);
}


export async function responseHandle(e) {
    e.preventDefault();
    const method = e.target.dataset.method;
    console.log(method)
    let url = e.target.action;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const id = formData.get('id');

    if (id) {
        formData.delete('id');
        url += `/${id}`;
    }

    await axios({
        method: method,
        url: url,
        data: data
    })
    .then(function (response) {
        console.log(response.data)
        showAlert('Proceso exitoso', 'success');
    })
    .catch(function (error) {
        console.log(error)
        showAlert('Proceso errado', 'error');
    });
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