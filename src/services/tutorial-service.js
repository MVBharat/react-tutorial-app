import http from '../http-common';

class TutorialDataService{
    getAll(){
        return http.get("/tutorials")
    }
    get(id){
        return http.get(`/tutorials/${id}`)
    }
    create(id){
        return http.post('/tutorials', data)
    }
    update(id, data){
        return http.put(`/tutorial/${id}`, data)
    }
    delete(id){
        return http.delete(`/tutorials/${id}`)
    }
    deleteAll(){
        return http.delete('/tutorials')
    }

    findByTitle(){
        return http.get(`/tutorials?title=${title}`)
    }
}

export default new TutorialDataService();