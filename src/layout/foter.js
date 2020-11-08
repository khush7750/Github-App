import React from "react";
import{Container} from "reactstrap"

const Footer = ()=>{
    return(
        <Container
        fluid
        tag = "footer"
        className= "text-center bg-info text-white text-uppercase fixed-bottom p-3">
            github search footer
        </Container>
    );
};

export default Footer