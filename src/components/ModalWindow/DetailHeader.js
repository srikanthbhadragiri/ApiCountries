import React from 'react';

const detailHeader = (props) => {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.nativeName}</p>
    </div>
  )
};
export default detailHeader;
