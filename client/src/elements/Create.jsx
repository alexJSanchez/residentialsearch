import React, {useState} from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
const Create=()=>{

    const [values, setValues] = useState({
            name : '',
            super: '',
            office:'',
            cell: '',
            busuper: '',
            bucell: '',
    })
    const navigate = useNavigate()

    function handeSubmit(e){
        e.preventDefault()
        axios.post('/locations', values)
        .then((res)=> {
            navigate('/')  
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div className="container vh-100 vw-100 bg-primary">
            <div className="row">
                <h3>Add Location</h3>
                <div className="d-flex justify-content end">
                    <Link to='/' className="btn btn-success">Home</Link>
                </div>
                <form onSubmit={handeSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" >Location Name</label>
                        <input type="text" name="name" onChange={(e)=>setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="super">super</label>
                        <input type="text" name="super" onChange={(e)=>setValues({...values, super: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="office">number</label>
                        <input type="text" name="office" onChange={(e)=>setValues({...values, office: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cell">cell</label>
                        <input type="text" name="cell" onChange={(e)=>setValues({...values, cell: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="busuper">busuper</label>
                        <input type="text" name="busuper" onChange={(e)=>setValues({...values, busuper: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bucell">bucell</label>
                        <input type="text" name="bucell" onChange={(e)=>setValues({...values, bucell: e.target.value})} />
                    </div>
                    <div className="form-group my-3">
                        <button type="submit" className="btn btn-success">save</button>
                    </div>
                </form>
            </div>            
        </div>
    )
}

export default Create;