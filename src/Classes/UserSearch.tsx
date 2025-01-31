import {Component} from 'react';

interface User {
    name: string,
    age: number
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string,
    user: User | undefined;
}




class UserSearch extends Component<UserSearchProps>{
   state: UserSearchState = {
    name: '',
    user: undefined
   }
  constructor(props: UserSearchProps){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  

   handleClick(e:React.MouseEvent<HTMLButtonElement>){
    console.log(this.props)
     const foundUser = this.props.users.find(user => user.name == this.state.name)
     this.setState({user: foundUser})
     console.log(foundUser,'found')
   }

   render(){
   
    return <div>
    User Search
    <h1>Hlo</h1>
    <input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} />
    <button onClick={this.handleClick} >Find User</button>
    <ul>
        <li>{this.state.user && this.state.user.name}</li>
        <li>{this.state.user?.age}</li>
    </ul>
   </div>
   }
}

export default UserSearch;