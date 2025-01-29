import css from "./Statistics.module.css";

export const Statistics = ( {good, neutral, bed, total, positivePercentage}) => {

    return  <div className={css.statistics}>
                <p>Good   : <span  className={css["statistics-data"]}>{good}</span></p>
                <p>Neutral: <span  className={css["statistics-data"]}>{neutral}</span></p>
                <p>Bed    : <span  className={css["statistics-data"]}>{bed}</span></p>

                <div  className={css["statistics-total"]}>
                    <p>Total : <span  className={css["statistics-data"]}>{total}</span></p>
                    <p>Positive percentage: <span className={css["statistics-data"]}>{positivePercentage}%</span></p>
                </div>
            </div>
}