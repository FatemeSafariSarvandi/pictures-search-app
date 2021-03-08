import axios from 'axios';
import React , {Component}from 'react';
import ImageList from './component/ImageList';
import SearchBar from './component/SearchBar';

class App extends Component{

    state={images : []};

    //event handeler
    OnSearchSubmit= async(term)=>{

        /*  axios  */
       
        // axios.get('https://api.unsplash.com/search/photos',{
        //     params:{query:term},
        //     headers:{Authorization: "Client-ID",},
        // }).then((data)=>{
        //     console.log(data);
        // })

        /* Async await */
        const data = await axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{Authorization: "Client-ID m9510dAlJt0ePxIxc9sGmVZ8vyRkV-4eSD6WeclGjos"},
        });
        this.setState({images : data.data.results});

    };



    render(){
        return(
            <div>
                <SearchBar onsub={this.OnSearchSubmit}/>
                <div id="number-of-image">Found {this.state.images.length} images</div>
                <ImageList  images={this.state.images}/>
            </div>
        )
    }
}

export default App;
