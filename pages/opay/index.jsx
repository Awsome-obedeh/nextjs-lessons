// using the link component ti navigate, first we 
// need to import the link Component

import Link from 'next/link'

export default function Dashboard(){
    return<>
        <h1>This is the dashboard page</h1>  

        <Link href='/opay/savings'>go to savings page</Link>   
        <Link href='/opay/124'>go to referal page</Link>   

        {/* we dont use regular anchor tag to navigate to a new page becasue
        the page will be refreshed and our state values will be lost */}
    </>
}