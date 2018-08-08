import React, { Component } from 'react';

import { RecommendItem } from '../style'
import reco_01 from '../../../assets/imgs/reco_01.png'
import reco_02 from '../../../assets/imgs/reco_02.png'
import reco_03 from '../../../assets/imgs/reco_03.png'
import reco_04 from '../../../assets/imgs/reco_04.png'
import reco_05 from '../../../assets/imgs/reco_05.png'

class Recommend extends Component {
    render(){
        return (
            <div>
                <RecommendItem className="aweek"><img src={reco_01}/></RecommendItem>
                <RecommendItem className="month"><img src={reco_02}/></RecommendItem>
                <RecommendItem className="great"><img src={reco_03}/></RecommendItem>
                <RecommendItem className="right"><img src={reco_04}/></RecommendItem>
                <RecommendItem className="study"><img src={reco_05}/></RecommendItem>
            </div>
        )
    }
}

export default Recommend;