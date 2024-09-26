import React, {useState} from "react";

const Create=()=>{
    const [values, setValues] = useState({
            name : '',
            super: '',
            office:'',
            cell: '',
            busuper: '',
            bucell: '',
    })
    return (
        <div className="container vh-100 vw-100 bg-primary">
            <div className="row">
                <h3>Add Location</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name" onChange={(e)=>setValues({...values, name: e.target.values})}></label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="super">super</label>
                        <input type="text" name="super"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="office">number</label>
                        <input type="text" name="office"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cell">cell</label>
                        <input type="text" name="cell"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="busuper">busuper</label>
                        <input type="text" name="busuper" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bucell">bucell</label>
                        <input type="text" name="bucell" />
                    </div>
                </form>
            </div>            
        </div>
    )
}

export default Create;