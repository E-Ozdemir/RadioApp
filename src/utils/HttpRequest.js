import axios from 'axios'

export const getRequest = (setRadio) =>{
    axios.get('https://jobapi.teclead-ventures.de/recruiting/radios')
    .then(resp => setRadio(resp.data.radios))
    .catch(error => {
        console.error('There was an error!', error);
    });
}