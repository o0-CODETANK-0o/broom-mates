import React from 'react';

const ClosedTasks = ( props ) => {
    
    const { data } = props;

    const taskList = data.length ? (
        data.map(item => {
            if (item.status)
            return (
                <div key={item._id}>
                    <div className="text-line-through opacity">{item.text}</div>
                </div>
            )
        })
    ) : (
        <p>You have no todos left</p>
    )

    return (
        <>
        {taskList}
        </>
    )
};

export default ClosedTasks;