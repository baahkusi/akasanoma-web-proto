function auth() {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const user_type = localStorage.getItem('user_type');
    if ( email && token ){
        // return a promise object and check server for correctness
        if(['staff', 'admin'].includes(user_type)){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
}

export default auth;