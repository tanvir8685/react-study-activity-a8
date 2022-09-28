import React from 'react';

const Information = ({information}) => {
    return (
        <div>
            <h2>This is for information{information.length}</h2>
                {
                    console.log(information)
                }
            
        </div>
    );
};

export default Information;