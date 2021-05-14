import { useState } from "react";

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
    urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i

export default function useFormValidate(initialForm, validate) {
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})

    function inputChange(e) {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }

    function check() {
        let errorObj = {}
        let { rule, message } = validate
        if(!message){
            message = {}
        }

        for (let i in rule) {
            let r = rule[i]
            let m = message[i] || {}

            if (r.required && !form[i]?.trim()) {

                errorObj[i] =  m?.required ||  'Trường này không được để trống';
                continue;
            }

            if (r.pattern && form[i]) {
                let { pattern } = r
                if(pattern === 'email') pattern = emailPattern
                if(pattern === 'phone') pattern = phonePattern
                if(pattern === 'url') pattern = urlPattern

                if(!pattern?.test(form[i])){
                    errorObj[i] = m.pattern || 'Trường này không đúng định dạng'
                }
            }


            if(r.min){
                if(form[i].length < r.min){
                    errorObj[i] =  m?.min ||  `Trường này không được ít hơn ${r.min} ký tự`;
                }
            }

            if(r.min){
                if(form[i].length > r.max){
                    errorObj[i] =  m?.max ||  `Trường này không được nhiều hơn ${r.max} ký tự`;
                }
            }
        }

        // if(!form.name.trim()){
        //     errorObj.name = 'Name la bat buoc'
        // }

        // if(!form.phone.trim()){
        //     errorObj.phone = 'Phone la bat buoc'

        // }else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
        //     errorObj.phone ='Phone khong dung dinh dang'
        // }

        // if(!form.email.trim()){
        //     errorObj.email ='Email la bat buoc'

        // }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)){
        //     errorObj.email ='Email khong dung dinh dang'
        // }

        // if(form.website.trim() && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(form.website.trim())){
        //     errorObj.website ='Website khong dung dinh dang'
        // }

        // if(!form.title.trim()){
        //     errorObj.title ='Title la bat buoc'

        // }

        // if(!form.content.trim()){
        //     errorObj.content ='Content la bat buoc'
        // }




        setError(errorObj)

        return errorObj
    }

    return {
        form,
        error,
        inputChange,
        check
    }
}