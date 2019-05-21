import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "./Comment.scss";
import TagList from "../components/TagList";
import CommentList from "../components/CommentList";
import ScoreDistribute from '../components/ScoreDistribute';
import request from "../../../helper/request";
class Comment extends Component{
  state = {
    tags:[],
    list:[],
    current:''
  };

  getData = async () =>{
    const data  = await request('/comment');
    const{ tags , list } = data;
    this.setState({
      tags,
      list,
      current:tags[0] ? tags[0].text : ''
    });
  };

  changeTag = value =>{
    this.setState({
      current:  value
    });
  };

  toggleZan = id =>{
    this.setState((prevState)=>({
      list: prevState.list.map(comment => {
        if(comment.id === id){
          return{
            ...comment,
            isZan: !comment.isZan,
            zan: comment.isZan? --comment.zan : ++comment.zan
          }
        }
        return {...comment};
      })
    }));
  };

  componentDidMount(){
    this.getData();
  }

  render(){
    const{ tags , list , current } = this.state;
    const filterComments = list.filter(comment => comment.tag === current);
    return (
      <div className="mComment">
        <ScoreDistribute/>
        <TagList tags={tags} current={current} onClick={this.changeTag}/>
        <CommentList list={filterComments} onClickZan={this.toggleZan}/>
      </div>
    )
  }
}

export default Comment;
