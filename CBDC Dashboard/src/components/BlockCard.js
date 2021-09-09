import React, {userState} from "react";
import "./BlockCard.css";
import CountUp from 'react-countup';

const Card = ({unit}) =>{
    return (
        <div>
            <div class="row">
                <div class="col-sm-4">From</div>
                <div class="col-sm-8">0xdfasgx22r1</div>
            </div>
            <div class="row">
                <div class="col-sm-4">To</div>
                <div class="col-sm-8">0xdfasgx22r1</div>
            </div>
            <div class="row">
                <div class="col-sm-4">Amount</div>
                <div class="col-sm-8">10 {unit}</div>
            </div>
            <hr class="hr-space"></hr>
        </div>
    )
}

const BlockCard = ({name}) =>{

    return(
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">{name}</h2>
                <CountUp start={0} end={100} delay={0} duration={100} prefix={"current block num : "} />
            </div>

            <div class="card-container">
                <Card unit={name}></Card>
                <Card unit={name}></Card>

            </div>
            <div class="scroller">
                <div class="mCSB_draggerContainer">
                    <div >
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BlockCard;
