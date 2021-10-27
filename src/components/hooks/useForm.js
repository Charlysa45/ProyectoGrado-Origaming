import { useState } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import useUser from './useUser';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [activeForm, setActiveForm] = useState(true)
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    


    const {login} = useUser();

    let url = "https://sheltered-depths-45281.herokuapp.com/api/users";

    const handleChange = (e) =>{
        const {name, value}= e.target;
        setForm({
            ...form,
            [name]:value
        })
    };

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (async(e) =>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            
            
             
            setLoading(true);
            helpHttp()
            .post(url,{
                body:form,
                headers:{
                    "content-type":"application/json"
                }
            })
            .then((res)=>{
                setLoading(false);
                setResponse(true);
                setActiveForm(false);
                setForm(initialForm);
                // window.sessionStorage.setItem('auth', auth);
                setTimeout(() => 
                     login()
                 , 5000);
                
            });
        }else{
            return;
        }
    });

    return{
        form,
        errors,
        loading,
        response,
        activeForm,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}

