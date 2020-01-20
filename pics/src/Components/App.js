import React from 'react';
import unsplash from "../API/unsplash";
import SearchBar from './SearchBar';
import ImageList from "./ImageList";


class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get("search/photos",
            {
                params: { query: term },
                headers: { Authorization: "Client-ID 37be54008f931818111122248b30fa38f95632521d690c7305655d5307476b64" }
            }
        );
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                {console.log(this.state.images)}
            </div>
        );
    }
};

export default App;