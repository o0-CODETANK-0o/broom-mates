import React from 'react';
import { Formik, Form, Field } from 'formik';



const TasksManager = () => {

    let tasks = {
        kitchen: {
          broomFloor: false,
          mopFloor: false,
          cookingStation: false,
          ovenAndPlates: false,
          cleanFridge: false,
          cleanBins: false,
          cleanSink: false,
          cleanWindows: false,
          cleanKnobs: false,
          removeSpiders:false
        },
        bathroom: {
          broomFloor: false,
          mopFloor: false,
          cleanBins: false,
          cleanSink: false,
          cleanWindows: false,
          cleanMirror: false,
          cleanShower: false,
          cleanToilet: false,
          cleanKnobs: false,
          changeCarpet: false,
          removeSpiders:false
        },
        livingRoom: {
          broomFloor: false,
          mopFloor: false,
          cleanWindows: false,
          cleanCouch: false,
          dustSurface: false,
          cleanKnobs: false,
          removeSpiders:false
        },
        entrance: {
          broomFloor: false,
          mopFloor: false,
          cleanKnobs: false,
          removeSpiders:false,
          changeCarpet: false
        }
    }
        
      const onSubmit = (values) => {
        console.log(values)
      };
      
    
      return (
        <div className="">
          <Formik initialValues={tasks} onSubmit={onSubmit} >
            <Form>
              <div className='header '>
                <h1 className='text'>select relevant tasks</h1>
                <div className='underline'></div>
                <div className='underline'></div>
              </div>
        
                <div className='tasks-list'>
                  <h2>kitchen</h2>
    
                    <div className="form-input">
                    <Field id="broomFloor" name="kitchen.broomFloor" type="checkbox" />
                    <label>broom/vacuum the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="mopFloor" name="kitchen.mopFloor" type="checkbox" />
                    <label>mop the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cookingStation" name="kitchen.cookingStation" type="checkbox" />
                    <label>clean the cooking station</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="ovenAndPlates" name="kitchen.ovenAndPlates" type="checkbox" />
                    <label>clean the baking plates and oven</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanFridge" name="kitchen.cleanFridge" type="checkbox" />
                    <label>clean the fridge inside/outside</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanBins" name="kitchen.cleanBins" type="checkbox" />
                    <label>empty and clean the trash bins</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanSink" name="kitchen.cleanSink" type="checkbox" />
                    <label>clean the sink</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanWindows" name="kitchen.cleanWindows" type="checkbox" />
                    <label>clean the windows</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanKnobs" name="kitchen.cleanKnobs" type="checkbox" />
                    <label>clean the door knobs</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="removeSpiders" name="kitchen.removeSpiders" type="checkbox" />
                    <label>remove spiderwebs from the ceiling</label>
                    </div> 
    
    
    
    
    
    
    
                  <h2>bathroom</h2>
    
                    <div className="form-input">
                    <Field id="broomFloor" name="bathroom.broomFloor" type="checkbox" />
                    <label>broom/vacuum the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="mopFloor" name="bathroom.mopFloor" type="checkbox" />
                    <label>mop the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanMirror" name="bathroom.cleanMirror" type="checkbox" />
                    <label>clean the mirror</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanShower" name="bathroom.cleanShower" type="checkbox" />
                    <label>clean the shower/tub</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanToilet" name="bathroom.cleanToilet" type="checkbox" />
                    <label>clean the toilet</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanBins" name="bathroom.cleanBins" type="checkbox" />
                    <label>empty and clean the trash bins</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanSink" name="bathroom.cleanSink" type="checkbox" />
                    <label>clean the sink</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanWindows" name="bathroom.cleanWindows" type="checkbox" />
                    <label>clean the windows</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanKnobs" name="bathroom.cleanKnobs" type="checkbox" />
                    <label>clean the door knobs</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="changeCarpet" name="bathroom.changeCarpet" type="checkbox" />
                    <label>change the carpet</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="removeSpiders" name="bathroom.removeSpiders" type="checkbox" />
                    <label>remove spiderwebs from the ceiling</label>
                    </div> 
    
    
    
    
                    <h2>living-room</h2>
    
                    <div className="form-input">
                    <Field id="broomFloor" name="livingRoom.broomFloor" type="checkbox" />
                    <label>broom/vacuum the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="mopFloor" name="livingRoom.mopFloor" type="checkbox" />
                    <label>mop the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanWindows" name="livingRoom.cleanWindows" type="checkbox" />
                    <label>clean the windows</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanKnobs" name="livingRoom.cleanKnobs" type="checkbox" />
                    <label>clean the door knobs</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="removeSpiders" name="livingRoom.removeSpiders" type="checkbox" />
                    <label>remove spiderwebs from the ceiling</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="dustSurface" name="livingRoom.dustSurface" type="checkbox" />
                    <label>dust all the surfaces</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanCouch" name="livingRoom.cleanCouch" type="checkbox" />
                    <label>vacuum the couch / under the couch</label>
                    </div> 
    
    
    
    
                    <h2>main entrance/corridor</h2>
    
                    <div className="form-input">
                    <Field id="broomFloor" name="entrance.broomFloor" type="checkbox" />
                    <label>broom/vacuum the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="mopFloor" name="entrance.mopFloor" type="checkbox" />
                    <label>mop the floor</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="removeSpiders" name="entrance.removeSpiders" type="checkbox" />
                    <label>remove spiderwebs from the ceiling</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="cleanKnobs" name="entrance.cleanKnobs" type="checkbox" />
                    <label>clean the door knobs</label>
                    </div> 
    
                    <div className="form-input">
                    <Field id="changeCarpet" name="entrance.changeCarpet" type="checkbox" />
                    <label>change the carpet</label>
                    </div> 
    
    
                  <button className='btn-yellow-bg' type="submit">Submit</button>
                </div>
              </Form>
            </Formik>
        </div>
      );    
};

export default TasksManager