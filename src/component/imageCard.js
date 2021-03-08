import React from 'react';
import './imageList.css';
class ImageCard extends React.Component{

    state={spans :0};
    imageRef = React.createRef();
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan)
        this.setSpan();
    }
    setSpan=()=>{
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height/5 + 1);
        this.setState({spans});
    }
   render(){ 
       const { urls , alt_description} = this.props.image;
       return(
            <div style={{ gridRowEnd:`span ${this.state.spans}`}}>
            <img 
                ref = {this.imageRef}
                alt ={alt_description} 
                src={urls.regular}
                >
            </img>
            </div>
        )
    }
}
export default ImageCard;