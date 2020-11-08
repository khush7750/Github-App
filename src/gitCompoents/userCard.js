import React from "react";
import {Card, CardBody} from "reactstrap"

const UserCard = ({user}) =>{

    return(
        <Card className= "text-center mt-3 mb-4">
            <img src={user.avatar_url}  className="img-thumbnail"/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-primary">Email: {user.email}</div>
                <div className="text-info">Available for Hair: {user.hireable ? "Yes" : "Noop"}</div>
                <div className="text-info">Followers: {user.followers}</div>
                <div className="text-info">Following: {user.following}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard