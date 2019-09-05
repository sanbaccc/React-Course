import React from "react"


const ApprovalCard = function (props) {
    return (
        <div className="ui card">
            <div className="content" >
                {props.children}
            </div>
            <div className="other content" >
                <div className="two buttons" >
                    <div className="ui basic green button" > Approve </div>
                    <div className="ui basic red button" > Reject </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;