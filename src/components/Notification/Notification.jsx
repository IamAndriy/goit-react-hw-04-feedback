import css from "./Notification.module.css";
import PropTypes from "prop-types";

export const Notification = ({message}) => {

    return  <div className={css["message-div"]}>
                <p className={css.message}>{message}</p>
            </div>

}

Notification.propTypes = {
    message: PropTypes.string,
}