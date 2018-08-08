import React, { Component } from 'react';

import { WriterWrapper, WriterItem } from '../style'

class Writer extends Component {
    render(){
        return (
            <WriterWrapper>
                <p className="writerTitle">推荐作者</p>
                <WriterItem>
                    <div className="left"></div>
                    <div className="right"></div>
                </WriterItem>
            </WriterWrapper>
        )
    }
}

export default (Writer);