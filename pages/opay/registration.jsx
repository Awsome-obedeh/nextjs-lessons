import {useRouter} from 'next/router'

export  default function Registeration(){
    const router=useRouter();


    function submitHandler(e){
        e.preventDefault()
        router.push('/opay/')
    }
    return(
        <>
            <form action="" onSubmit={submitHandler}>
                <input type="text" />
                <input type="password" name="" id="" />

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}