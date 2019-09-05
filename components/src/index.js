import React from "react"
import ReactDOM from "react-dom"
import Comment from "./comment"
import faker from "faker"
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment
                    author="aloha"
                    timeAgo="10 min"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="ming"
                    timeAgo="4 min"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="share"
                    timeAgo="1 min"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="wuka"
                    timeAgo="28 min"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="Dehor"
                    timeAgo="16 min"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));