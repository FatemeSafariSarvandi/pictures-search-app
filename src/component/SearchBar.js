import React , {Component}from 'react';
import '../App.css';

class SearchBar extends Component{
    state = {searchTerm:''};
   
    onFormSubmit = (e)=>{  
        e.preventDefault();
        this.props.onsub(this.state.searchTerm)
        this.setState({searchTerm:''});
    };
    
    render(){
        return(
            <div className="searchbar-container">
                <form 
                    className="search-form"
                    onSubmit={this.onFormSubmit}
                >
                    <label htmlFor="inpt"></label>
                    <input type="text" 
                        name="inpt"
                        value={this.state.searchTerm}
                        onChange={(e)=>
                            this.setState({searchTerm:e.target.value})
                        }
                        placeholder="Search here"
                    />
                    <button type='submit'>click</button>
                </form>
            </div>
        )
    }
}
export default SearchBar;