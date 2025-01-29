import { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import {Notification} from "components/Notification/Notification"
import css from "./App.module.css";

export class App extends Component {

    state={
        good:0,
        neutral:0,
        bed:0,
    }
    
    onLeaveFeedbackHandle = ({target}) =>{
        const {name} = target;
        this.setState(prevState =>{
            return {[name] : prevState[name] + 1,}
        })
    }

    countTotalFeedback=()=>{
        const {good, neutral, bed} = this.state;
        return good + neutral + bed;
    } 
    
    countPositiveFeedbackPercentage=()=>{
        const {good} = this.state;
        const total = this.countTotalFeedback();
        return total  ? Math.round(100 * (good/total)) : 0 ;
    }

    render (){
        
        const {good, neutral, bed} = this.state;
        const total = this.countTotalFeedback();

        return  <div className={css.container}>

                    <h1 classname={css["title-h1"]}>Please leave feedback</h1>

                    <Section>
                        <FeedbackOptions options={Object.keys(this.state)} 
                                         onLeaveFeedback={this.onLeaveFeedbackHandle}
                        />
                    </Section>

                    <Section>
                        <h2 classname={css["title-h2"]}>Statistics</h2>
                        {!total
                            ? <Notification massage="There is no feedback"/> 
                            : <Statistics good={good} 
                                          neutral={neutral} 
                                          bed={bed} 
                                          total={this.countTotalFeedback()} 
                                          positivePercentage={this.countPositiveFeedbackPercentage()}/>
                        }
                    </Section>
                </div>
    }
}

