import React ,{useEffect}from 'react';
const Logout = ({setToken}) => {
    useEffect(() => { 
        localStorage.removeItem('PAccountsToken');
        localStorage.clear();
        setToken(false);
    }, [setToken]);
    return ( <div> you have been Logged out!</div>);
}
export default Logout;
