import React, {Component} from 'react';
import User from './User';

class Users extends Component{

    state = {
        users: [
            {name:"John",age:20},
            {name:"Jill",age:30},
            {name:"Peter",age:40},
            {name:"John1",age:20},
            {name:"Jill1",age:30},
            {name:"Peter1",age:40},
            {name:"John2",age:20},
            {name:"Jill2",age:30},
            {name:"Peter2",age:40},
            {name:"John3",age:20},
            {name:"Jill3",age:30},
            {name:"Peter3",age:40},
            {name:"John4",age:20},
            {name:"Jill4",age:30},
            {name:"Peter4",age:40},
            {name:"John5",age:20},
            {name:"Jill5",age:30},
            {name:"Peter5",age:40}
        ],
        title:"Users List 1"
    };


    makeMeYounger = () => {

        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });

        this.setState({
            // users: [
            //     {name:"John",age:10},
            //     {name:"Kabir",age:20},
            //     {name:"Peter",age:30}
            // ]

            newState
        });
        console.log("In func");
        this.state.users[0].age -= 10;
    }

    render(){
        return(
            <div>
                <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
                <br/>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user)=>{
                        return <User age={user.age}>{user.name}</User>
                    })
                }
            </div>
            
        )        
    }
}

export default Users;