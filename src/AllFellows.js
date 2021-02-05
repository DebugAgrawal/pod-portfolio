import React from 'react'
import Fellow from './Fellow'
import data from './assets/json/pod-data.json'
import './assets/css/allfellows.css'

console.log(data);
class AllFellows extends React.Component {
    state = {
        fellow: data,
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1 className="header">Meet the Pod Members ⛄</h1>
                <div className="allfellows">
                    {
                        this.state.fellow.map(data => {
                            return (<Fellow dataprop={data} key={data.id} />);
                        })
                    }
                </div>
            </div>
        );

    }
}
export default AllFellows