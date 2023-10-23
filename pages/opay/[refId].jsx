import {useRouter}from 'next/router'
// we need to import useRouter from the next dependency 
// we need useRouter to be able to read our params passed in the url

export default function RefId(){
    const router=useRouter();
    const params=router.query;
    console.log(params);


    return<>
        This is the referal page 
    </>
}