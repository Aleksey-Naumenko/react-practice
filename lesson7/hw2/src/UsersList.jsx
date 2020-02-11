import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0,
        }
    }

    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
        })
    }

    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1,
        })
    }

    render() {

        const currentPage = this.state.currentPage;
        const nextPage = currentPage * 3;
        const showedUsers = this.props.users.slice(currentPage * 3, nextPage + 3);
        
        return (
            <>
            <Pagination
                goPrev={this.goPrev}
                goNext={this.goNext}
                currentPage={this.state.currentPage}
                totalItems={this.props.users.length}
                itemsPerPage={this.state.showedUsers}
            />
            <ul className="users">
                {showedUsers.map(user => <User key={user.id} {...user} />)}
            </ul>
            </>
        )
    }
};

export default UsersList;




// import React, { Component } from 'react';
// import User from './User';
// import Pagination from './Pagination';

// class UsersList extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentPage: 0,
//             showedUsers: 0,
//         }
//     }

//     goPrev = () => {
//         this.setState({
//             currentPage: this.state.currentPage - 1,
//             showedUsers: this.state.showedUsers - 3,
//         })
//     }

//     goNext = () => {
//         this.setState({
//             currentPage: this.state.currentPage + 1,
//             showedUsers: this.state.showedUsers + 3,
//         })
//     }

//     render() {
//         const usersToShow = this.state.showedUsers;
//         const showedUsers = this.props.users.slice(usersToShow, usersToShow + 3);

//         return (
//             <>
//             <Pagination
//                 goPrev={this.goPrev}
//                 goNext={this.goNext}
//                 currentPage={this.state.currentPage}
//                 totalItems={this.props.users.length}
//                 itemsPerPage={this.props.users}
//             />
//             <ul className="users">
//                 {showedUsers.map(user => <User key={user.id} {...user} />)}
//             </ul>
//             </>
//         )
//     }
// };

// export default UsersList;