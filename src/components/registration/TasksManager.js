import React from 'react'
import { Field, reduxForm } from 'redux-form'


const TasksManager = (props) => {
  const { handleSubmit, previousPage, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className='header '>
          <h1 className='text'>select relevant tasks</h1>
          <div className='underline'></div>
          <div className='underline'></div>
      </div>

      <div>
        <h2>kitchen</h2>
        <div className="content">
          <label><Field name="kitchen.mopFloor" component="input" type="checkbox" value="mop the floor"/> mop the floor</label>
          <label><Field name="kitchen.cookingStation" component="input" type="checkbox" value="clean the cooking station"/> clean the cooking station</label>
          <label><Field name="kitchen.broomFloor" component="input" type="checkbox" value="vacuum the floor"/>broom/vacuum the floor</label>
          <label><Field name="kitchen.ovenAndPlates" component="input" type="checkbox" value="clean the baking plates and oven"/> clean the baking plates and oven</label>
          <label><Field name="kitchen.cleanFridge" component="input" type="checkbox" value="clean the fridge inside/outside"/> clean the fridge inside/outside</label>
          <label><Field name="kitchen.cleanBins" component="input" type="checkbox" value="empty and clean the trash bins"/>empty and clean the trash bins</label>
          <label><Field name="kitchen.cleanSink" component="input" type="checkbox" value="clean the sink"/> clean the sink</label>
          <label><Field name="kitchen.cleanWindows" component="input" type="checkbox" value="clean the windows"/>clean the windows</label>
          <label><Field name="kitchen.cleanKnobs" component="input" type="checkbox" value="vacuum the floor"/>clean the door knobs</label>
          <label><Field name="kitchen.removeSpiders" component="input" type="checkbox" value="vacuum the floor"/>remove spiderwebs from the ceiling</label>
        </div>
      </div>

      <div>
        <h2>bathroom</h2>
        <div className="content">
          <label><Field name="bathroom.mopFloor" component="input" type="checkbox" value="mop the floor"/> mop the floor</label>
          <label><Field name="bathroom.cleanMirror" component="input" type="checkbox" value="clean the mirror"/> clean the mirror</label>
          <label><Field name="bathroom.broomFloor" component="input" type="checkbox" value="vacuum the floor"/>broom/vacuum the floor</label>
          <label><Field name="bathroom.cleanShower" component="input" type="checkbox" value="clean the shower/tub"/>clean the shower/tub</label>
          <label><Field name="bathroom.cleanToilet" component="input" type="checkbox" value="clean the toilet"/> clean the toilet</label>
          <label><Field name="bathroom.cleanBins" component="input" type="checkbox" value="empty and clean the trash bins"/>empty and clean the trash bins</label>
          <label><Field name="bathroom.cleanSink" component="input" type="checkbox" value="clean the sink"/> clean the sink</label>
          <label><Field name="bathroom.cleanWindows" component="input" type="checkbox" value="clean the windows"/>clean the windows</label>
          <label><Field name="bathroom.cleanKnobs" component="input" type="checkbox" value="vacuum the floor"/>clean the door knobs</label>
          <label><Field name="bathroom.changeCarpet" component="input" type="checkbox" value="change the carpet"/>change the carpet</label>
          <label><Field name="bathroom.removeSpiders" component="input" type="checkbox" value="vacuum the floor"/>remove spiderwebs from the ceiling</label>
        </div>
      </div>

      <div>
        <h2>living-room</h2>
        <div className="content">
          <label><Field name="livingRoom.mopFloor" component="input" type="checkbox" value="mop the floor"/> mop the floor</label>
          <label><Field name="livingRoom.cleanWindows" component="input" type="checkbox" value="clean the windows"/> clean the windows</label>
          <label><Field name="livingRoom.broomFloor" component="input" type="checkbox" value="vacuum the floor"/>broom/vacuum the floor</label>
          <label><Field name="livingRoom.cleanKnobs" component="input" type="checkbox" value="clean the door knobs"/>clean the door knobs</label>
          <label><Field name="livingRoom.removeSpiders" component="input" type="checkbox" value="remove spiderwebs from the ceiling"/> remove spiderwebs from the ceiling</label>
          <label><Field name="livingRoom.dustSurface" component="input" type="checkbox" value="dust all the surfaces"/>dust all the surfaces</label>
          <label><Field name="livingRoom.cleanCouch" component="input" type="checkbox" value="vacuum the couch / under the couch"/> vacuum the couch / under the couch</label>
        </div>
      </div>

      <div>
        <h2>main entrance/corridor</h2>
        <div className="content">
          <label><Field name="entrance.mopFloor" component="input" type="checkbox" value="mop the floor"/> mop the floor</label>
          <label><Field name="entrance.changeCarpet" component="input" type="checkbox" value="clean the windows"/>change the carpet</label>
          <label><Field name="entrance.broomFloor" component="input" type="checkbox" value="vacuum the floor"/>broom/vacuum the floor</label>
          <label><Field name="entrance.cleanKnobs" component="input" type="checkbox" value="clean the door knobs"/>clean the door knobs</label>
          <label><Field name="entrance.removeSpiders" component="input" type="checkbox" value="remove spiderwebs from the ceiling"/> remove spiderwebs from the ceiling</label>
        </div>
      </div>

      <div>
      <button type="button" className="previous" onClick={previousPage}>Previous</button>
      <button type="submit" onSubmit={pristine || submitting}>Submit</button>        
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'tasksManager',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(TasksManager)



