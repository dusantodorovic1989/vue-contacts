//import axios from 'axios'

import http from './http-service';

class ContactsService {
    // constructor(){
    //     axios.defaults.baseURL = 'http://localhost:8000/api/'
    //     axios.defaults.headers.common['Accept']= 'application/json'// ocekujemo taj tiop da nam vratiiii
    // }
    getContacts(page = 1){
        return http.get('contacts',{params:{page}})
            .then(({data}) => data)
    }
}

const contactsService = new ContactsService()

export default contactsService;