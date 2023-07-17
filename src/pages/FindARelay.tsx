import {useState} from 'react';
import JoinRelay from '../components/joinRelay';

const FindARelayPage=()=>{

    const list:string[]=['health', 'personal', 'finance'];

const onSubmit=(): void=>{
    console.log("submitted");
}

    return(
<div className='find-relay-container'>
<div className='relay-search-details'>
    
{list.map((val,index) =>{
        return(
            
<li className='relay-click' key={index}>{val}</li>
        
            );
    })}
    
</div>
<>
<JoinRelay onSubmit={onSubmit}/>



</>
</div>
    );
}

export default FindARelayPage;