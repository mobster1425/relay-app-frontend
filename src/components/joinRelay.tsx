


type JoinRelayProps = {
    onSubmit: () => void;
  };

const JoinRelay=({onSubmit}: JoinRelayProps)=>{



    return(
<div className='find-relay-details'>
<div className='first-row'>
    <h5>Run a mile everyday</h5>
    <button className="join-relay-btn" type="button" onClick={onSubmit} >
JOIN
</button>
</div>
<div className='second-row'>
<p><b>Health</b></p>
<p><b>7x/week</b></p>
<p><b>1/1/2020</b></p>
<p><b>2/1/2020</b></p>
</div>
</div>
    )
}

export default JoinRelay;