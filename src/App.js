import React, {Component} from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {
  state={
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JavaScript'},
      {name: 'TypeScript'}
    ],
    current: ''
  }
  updateCourses=(e)=>{
    this.setState({
      current: e.target.value
    }
    )
  }
  addCourse=(e)=>{
    e.preventDefault()
    let current=this.state.current
    let courses=this.state.courses
    courses.push({name:current})
    this.setState({
      courses,
      current:''
    })

  }
  deleteCourse=(index)=>{
    let courses=this.state.courses
    courses.splice(index,1)
    this.setState({
      courses
    })
  }
  editCourses=(index,val)=>{
    let courses=this.state.courses
    let course=courses[index]
    course['name']=val
    this.setState({
      courses
    })
  }

 render(){
  const {courses}=this.state
  const courseList=courses.map((course,index) => {
    return <CourseList details={course}  index={index} deleteCourse={this.deleteCourse} editCourses={this.editCourses}/>
  })
  return (
    <section className="App">
     <h2>Add Course</h2>
     <CourseForm current={this.state.current} updateCourses={this.updateCourses} addCourse={this.addCourse} />
     <ul>{courseList}</ul>
    </section>
  );
 }
}

export default App;
