import {endpoint} from './config'


const CourseApi = {
    list() {
        return fetch(`${endpoint}/elearning/v4/courses`, {
            method: 'GET',
        }).then(res => res.json()) 
    }
}

export default CourseApi