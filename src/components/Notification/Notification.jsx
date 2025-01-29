import css from "./Notification.module.css";

export const Notification = ({massage}) => {

    return  <div className={css["massage-div"]}>
                <p>{massage}</p>
            </div>

}