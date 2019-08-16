import * as React from 'react';


const homeContext = {

    // stockState:{
    //     symbol: '',
    //     data: {}
    // },
    symbol: '',
    step  : 1,
    dispatch: (action) => action
    
};

export default React.createContext(homeContext);