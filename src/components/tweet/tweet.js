import React from 'react';
import './styles.css';
import Icon from '../icon/icon';
import {
    ChatSolid,
    ShareSolid,
    CheckCircleSolid,
    DotsHorizontalOutline
} from "@graywolfai/react-heroicons";
import ContextMenu from '../context-menu';


class Tweet extends React.Component{
    render(){
        return (
            <div className="tweet-container">
            <div>
                <div className="tweet-options" onClick={() => this.props.contextFn.toggleContextMenuFn(this.props.index)}>
                    <DotsHorizontalOutline />
                </div>
                {
                this.props.showContextM ? (<ContextMenu removeFn={this.props.contextFn.removetweetFn} index={this.props.index} />) :  null
            }
            </div>
                    <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                         
                <div className="score">
                <div className="icono"> <Icon source={< ChatSolid />}/> 000 </div> <div>  {this.props.interactionCommnets }    </div>
                <div className="icono" onClick={() => this.props.selectedRetweetsFn(this.props.index)}> <Icon source={< ShareSolid />}/> 000 </div> <div> {this.props.interactionRetweets} </div>
                <div className="icono" onClick={() => this.props.selectedLikesFn(this.props.index)}> <Icon source={<  CheckCircleSolid/>}/> 000 </div> <div> {this.props.interactionLikes} </div>
                </div>          

            </div>
        )
    }
}

export default Tweet;