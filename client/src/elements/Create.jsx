import React from "react";

function Create(){
    return (
        <div className="container vh-100 vw-100 bg-primary">
            <div className="row">
                <h3>Add Location</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">number</label>
                        <input type="text" name="number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="super">super</label>
                        <input type="text" name="super"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="busuper">super</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bunumber">bunumber</label>
                    </div>
                </form>
            </div>            
        </div>
    )
}

export default Create;