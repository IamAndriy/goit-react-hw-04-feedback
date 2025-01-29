import { Component } from "react";
import css from "./Notification.module.css";

export class Notification extends Component {

    render(){
        const {massage} = this.props;
        return  <div className={css["massage-div"]}>
                    <p>{massage}</p>
                </div>
    }
}