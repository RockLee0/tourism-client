import React from 'react';

const Growth = () => {
    return (
        <div>
            <div className="my-3">
               <h4>Our popularity growth rate:</h4>
           <div className="progress w-75 mx-auto">
  <div className="progress-bar w-75 bg-primary" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
</div>
           </div>
        </div>
    );
};

export default Growth;