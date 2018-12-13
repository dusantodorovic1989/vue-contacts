import http from './http-service';

class AuthService{
    login(email,password){
        return http.post('/auth/login',{
            email,
            password
        });
    }
}

const authService = new AuthService();
export default authService;

