
import React from 'react';

//statefull component
export class Home extends React.Component {

    constructor(props) {
        super(props);
        
        console.log(props);

        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        }

        setTimeout(()=>{
            this.setState({
                status: 1
            })
        }, 3000)

        console.log("Constructor");
        
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState);    
        // if(nextState.status === 1){
        //     return false;
        // }
        return true;  
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate", nextProps, nextState);   
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate", prevProps, prevState);  
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        
    }

    onClickMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
        
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
        //this.props.changeLink(this.state.homeLink)
    }

    render () {
        
        return (
            <div>
                <p>In a new Component!</p>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <h2>User Object </h2>
                <div>
                    <h4>Name: {this.props.user.name}</h4>
                    <h4>Hobbies:</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, index) => <li key={index}> {hobby} </li>)}
                    </ul>

                    <hr/>
                    {this.props.children}
                </div>
                <hr/>
                <div>
                
                    <button className="btn btn-primary" onClick={this.onClickMakeOlder.bind(this)} >Make me older!</button>
                    <hr/>
                    <button className="btn btn-success" onClick={this.props.greetFunc}>Greet</button>
                    <hr/>
                    <input type="text" value={this.props.homeLink} onChange={this.onHandleChange.bind(this)}/>
                    <button className="btn btn-danger" onClick={this.onChangeLink.bind(this)}>Change Link!</button>

                </div>

            </div>
        )

    }
}

// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// }