import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Speaker from './../layout/Speaker';


const TasksManager = (props) => {
  const { previousPage } = props

  // props.nameData.values.houseName

  return (
    <div className="border">

      <div className="header">
        <div className="header-register-user">
          <h1 className="text">TASKS</h1>
          <h1 className="text">SELECTION</h1>
        </div>
        <div>
          <div className="underline"></div>
          <div className="underline"></div>
        </div>
      </div>

        <form onSubmit={props.handleSubmit}>

        <section className="tasks-scroll-container">
          <div className="individual-task-container">
            <h2>KITCHEN</h2>
            <div>
              <label>
                <Field className="label-push" name="kitchen.mopFloor" component="input" type="checkbox" value="mop the floor"/>
                <p>mop the floor</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.cookingStation" component="input" type="checkbox" value="clean the cooking station"/>
                <p>clean the cooking station</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.broomFloor" component="input" type="checkbox" value="vacuum the floor"/>
                <p> broom/vacuum the floor</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.ovenAndPlates" component="input" type="checkbox" value="clean the baking plates and oven"/>
                <p>clean the baking plates and oven</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.cleanFridge" component="input" type="checkbox" value="clean the fridge inside/outside"/>
                <p>clean the fridge inside/outside</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.cleanBins" component="input" type="checkbox" value="empty and clean the trash bins"/>
                <p>empty and clean the trash bins</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.cleanSink" component="input" type="checkbox" value="clean the sink"/>
                <p>clean the sink</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.cleanWindows" component="input" type="checkbox" value="clean the windows"/>
                <p>clean the windows</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.cleanKnobs" component="input" type="checkbox" value="vacuum the floor"/>
                <p> clean the door knobs</p>
              </label>
              <label>
                <Field className="label-push" name="kitchen.removeSpiders" component="input" type="checkbox" value="vacuum the floor"/>
                <p>remove spiderwebs from the ceiling</p>
              </label>
            </div>
          </div>

          <div>
            <h2>bathroom</h2>
            <div>
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
            <div>
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
            <div>
              <label><Field name="entrance.mopFloor" component="input" type="checkbox" value="mop the floor"/> mop the floor</label>
              <label><Field name="entrance.changeCarpet" component="input" type="checkbox" value="clean the windows"/>change the carpet</label>
              <label><Field name="entrance.broomFloor" component="input" type="checkbox" value="vacuum the floor"/>broom/vacuum the floor</label>
              <label><Field name="entrance.cleanKnobs" component="input" type="checkbox" value="clean the door knobs"/>clean the door knobs</label>
              <label><Field name="entrance.removeSpiders" component="input" type="checkbox" value="remove spiderwebs from the ceiling"/> remove spiderwebs from the ceiling</label>
            </div>
          </div>
        </section>

        <div className="tasks-form-button">
        <button type="submit" className="input input-green">SUBMIT</button>        
        <button type="button" className="input input-green" onClick={previousPage}>BACK</button>
        </div>
      </form>

      <div className='footer'>
                <Speaker />
      </div>

    </div>
  )
}

export default reduxForm({
  form: 'createWG',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(TasksManager)



