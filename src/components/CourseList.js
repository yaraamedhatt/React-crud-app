import React, {Component , Fragment} from 'react';



class CourseList extends Component {
    state={
        isEdited:false
    }
    renderCourse=()=>{
        return(
            <li>
            <span>{this.props.details.name}</span>
            <button onClick={()=>{this.toggleState()}}>Edit</button>
            <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete</button>
            </li>

        );
    }
    toggleState=()=>{
        let {isEdited}=this.state
        this.setState({
            isEdited: !isEdited
        })
    }
    renderUpdateCourse=()=>{
       return(
        <form onSubmit={this.updateCourseItem}>
            <input type='text' ref={(val)=>{this.input=val}} defaultValue={this.props.details.name}></input>
            <button>Update Course</button>
        </form>
       )
    }
    updateCourseItem=(e)=>{
        e.preventDefault()
        this.props.editCourses(this.props.index,this.input.value)
        this.toggleState()
    }



render(){
    let {isEdited} = this.state;
    return (
       
        <Fragment>
           { isEdited ? this.renderUpdateCourse(): this.renderCourse() }
        </Fragment>
      );
}
}

export default CourseList;
