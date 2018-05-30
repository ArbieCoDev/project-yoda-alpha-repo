import React, { Component } from 'react'
import { Card, CardTitle, CardText, Slider,TextField,Button  } from 'react-md';
import axios, { post } from 'axios';
import {API_ROOT} from '../Services/ApiService';


export default class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = `${API_ROOT}/files/upload`;
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }

  render() {
    return (
        <Card className="login-card md-block-centered md-cell--3">
            <CardTitle className="login-card-title" title="Upload file test" />
            <CardText>
            <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file"  onChange={this.onChange}/>
            <button type="submit">Upload</button>
            </form>
            </CardText>
        </Card>
    )
  }
}
