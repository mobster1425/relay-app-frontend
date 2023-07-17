import {useState} from 'react';

const CreateRelayPage=()=>{

const [formData,setFormData]=useState({
    relaygoal:"",
    type:"health",
    frequency:0,
    startDate:"01/02/2022",
    endDate:"03/02/2022",

})

const onSubmit=(e: any)=>{
    console.log("submitted data")
    console.log(formData)
}

const onChange=(e: { target: { name: any; value: any; }; })=>{
setFormData((oldData)=>{
    return{
        ...oldData,
        [e.target.name]:e.target.value,
    };
})
}

const list:string[]=['health', 'personal', 'finance'];



    return(
<div className="create-relay-container">
    <h1 className="title">CREATE A RELAY</h1>
    <div className="create-relay-items">
<form onSubmit={onSubmit} >
<div className="create-relay-input">
    <label htmlFor="Relay Goal">Relay Goal</label>
    <input
    type="text"
    name="relayGoal"
    value={formData.relaygoal}
    onChange={onChange}
    required
    />
    </div>
    <div className="create-relay-input">
    <label htmlFor="Relay Goal">Type</label>
   <select
   name="relayType"
   value={formData.type}
   onChange={onChange}
   className="form-select"
   >
    {list.map((val,index) =>{
        return(
            <option key={index}
 value={val}>
    {val}</option>
            );
    })}
    </select>
    </div>

    <div className="create-relay-input">
    <label htmlFor="Relay Frequency">Frequency</label>
    <input
    className="create-relay-frequency"
    type="number"
    name="relayfrequency"
    value={formData.frequency}
    onChange={onChange}
    required
    /><p>days a week</p>
    </div>

    <div className="date-select">
    <h3>START DATE</h3>
    <input
    type="date"
    name="relayStartDate"
    value={formData.startDate}
    onChange={onChange}
    required
    />
</div>
<div className="date-select">
    <h3>END DATE</h3>
    <input
    type="date"
    name="relayEndDate"
    value={formData.endDate}
    onChange={onChange}
    required
    />
    </div>
<button className="create-relay-btn" type="submit" >
CREATE RELAY
</button>
</form>
        </div>
</div>
    )
}

export default CreateRelayPage;
