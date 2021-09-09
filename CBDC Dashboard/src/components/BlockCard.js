import React from "react";
import "./BlockCard.css";
import CountUp from 'react-countup';
import ReactLoading from 'react-loading';

const Card = (props) =>{
    return (
        <div>
            <hr class="hr-space"></hr>
            <div class="row">
                <div class="col-sm-4">Blocknum :</div>
                <div class="col-sm-8">{props.blocknum}</div>
            </div>
            <div class="row">
                <div class="col-sm-4">From :</div>
                <div class="col-sm-8">{props.from}</div>
            </div>
            <div class="row">
                <div class="col-sm-4">To :</div>
                <div class="col-sm-8">{props.to}</div>
            </div>
            <div class="row">
                <div class="col-sm-4">Amount :</div>
                <div class="col-sm-8">{props.amount} {props.unit}</div>
            </div>
            
        </div>
    )
}

const BlockCard = ({name}) =>{

    const SampleTX=[
        {
            blocknum : 100,
            from:"0xccbb51966fa305811fd",
            to:"0x0ff4df77f15e7eaaaad13",
            amount: 100
        },
        {
            blocknum : 162,
            from:"0xccbb51966fa305811fd",
            to:"0x0ff4df77f15e7eaaaad13",
            amount: 100
        },
        {
            blocknum : 886,
            from:"0xccbb51966fa305811fd",
            to:"0x0ff4df77f15e7eaaaad13",
            amount: 100
        }

        
    ]
    return(
        <div class="card">
            
            <div class="card-header">
                <img src={"/images/"+name+".png"} style={{height : 20, width : 20}} alt="img"/>
                <h2 class="card-header-title">{name}</h2>
                <div>
                    <div class="center">
                        <ReactLoading type={"cubes"} color={"#e7eaf3"}/>
                    </div>

                    <CountUp start={0} end={100000} delay={0} duration={100000} prefix={"current block num : "} />
                </div>
                
            </div>

            <div class="card-container">
                {
                    SampleTX.map((el,i)=>(
                        <Card unit={name} from={el.from} to={el.to} amount={el.amount} blocknum={el.blocknum}></Card> 
                    ))
                }
            </div>            
        </div>
    )
}

export default BlockCard;
