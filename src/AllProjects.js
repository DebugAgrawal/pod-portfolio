import React from 'react'
import Project from './Project'
import data from './assets/json/projects.json'
import './assets/css/allprojects.css'

console.log(data);
class Allprojects extends React.Component {
    state = {
        project: data,
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="allprojects">
                <h1 className="header">Projects made by our Pod Members 👨‍💻 ➡ </h1>
                    {
                        this.state.project.map(data => {
                            return (<Project dataprop={data} key={data.id} />);
                        })
                    }
                </div>
            </div>
        );

    }
}
export default Allprojects