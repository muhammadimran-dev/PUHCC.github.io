import React from 'react'
import Axios from 'axios';

var filesArr=[];
var phoneNo = '';

class ReportUpload extends React.Component {

    state = { files:[], phNo: '' };

    onFormSubmit= async event =>
    {
        event.preventDefault();
        if(filesArr.length===0 || phoneNo.length!==11)
        {
            return;
        }else
        {   
            const data = new FormData();
            for(var i=0;i<filesArr.length;i++)
            {
                data.append('file',filesArr[i]);
                await this.setState({ files: [...this.state.files, filesArr[i]] });
            }
            await this.setState({ phNo:phoneNo });
            console.log(this.state.files);
            console.log(this.state.phNo);
            
            Axios.post("http://localhost:8000/upload");

            this.props.history.push("/successful");
        }
    };

    render()
    {
        if(this.props.status===0)
    {
        return (
        <h2>
            Please Log In First
        </h2>
        );
    }else
    {
        return (
            <div className="ui container">
                <br/>
                <hr/>
	            <div className="ui inverted segment">
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <form onSubmit={this.onFormSubmit}>
                                <label>Enter Phone Number</label>
                                <input type="number" placeholder="03xxxxxxxxx" className="form-control" onChange={e=>phoneNo=e.target.value} />
                                <div className="form-group files">
                                    <label>Upload Your File </label>
                                    <input type="file" className="form-control" multiple onChange={e=>filesArr=e.target.files}/>
                                </div>
                                <button type="submit" className="btn btn-success btn-block" >Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
    }
};

export default ReportUpload;