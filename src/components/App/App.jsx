import { useState } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification"
import css from "./App.module.css";

const options = ["good", "neutral", "bed"];


export const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bed, setBed] = useState(0);

    const onLeaveFeedbackHandle = ({target}) =>{

        switch  (target.name){
            case "good"   : setGood(prev => prev + 1)   ; break;
            case "neutral": setNeutral(prev => prev + 1); break;
            case "bed"    : setBed(prev => prev + 1)    ; break;
            default : break;
        }
    }

    const countTotalFeedback = () => {

        return good + neutral + bed;
    };
    
    const countPositiveFeedbackPercentage = () => {
        
        return (good + neutral + bed)  
                    ? Math.round(100 * (good/(good + neutral + bed))) 
                    : 0 ;
    }

    const total = countTotalFeedback();


    return  <div className={css.container}>

                <h1 className={css["title-h1"]}>Please leave feedback</h1>

                <Section>
                    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedbackHandle} />
                </Section>

                <Section>
                    <h2 className={css["title-h2"]}>Statistics</h2>
                    {!total
                        ?   <Notification message="There is no feedback yet"/> 
                        :   <Statistics good={good} 
                                        neutral={neutral} 
                                        bed={bed} 
                                        total={total} 
                                        positivePercentage={countPositiveFeedbackPercentage()}
                            />
                    }
                </Section>
            </div>
}

