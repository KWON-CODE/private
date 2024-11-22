import { useForm } from "react-hook-form";
import styled from "styled-components";
import Title from "../Components/common/Title";
import Button from "../Components/common/Button";
import InputText from "../Components/common/InputText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login, signup } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { useAuthStore } from "../store/authStore";

export interface SignupProps {
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();
    const showAlert = useAlert();

    const {isloggedIn, storeLogin, storeLogout} = 
    useAuthStore()
   
    const { 
        register,
         handleSubmit,
          formState: { errors } 
        } = useForm<SignupProps>();


    const onSubmit = (data: SignupProps) => {
        login(data).then((res) => {

            //상태 변화
            storeLogin(res.token);
            
            
            console.log(res.token);
            showAlert("로그인이 완료되었습니다.");
            navigate('/');
        });
    };


    console.log(isloggedIn);

    return (
        <>
        <Title size="large">로그인</Title>
        <SignupStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <InputText placeholder="이메일"
                inputType="email"{...register("email",
             { required: true })} />
             {errors.email &&  <p 
             className="error-text">이메일을 입력해주세요. </p>}
            </fieldset>
            <fieldset>
                <InputText placeholder="비밀번호" 
                inputType= "password" {...register("password",
                 { required: true })}/>
                 {errors.password &&  <p 
                    className="error-text">비밀번호 입력해주세요. </p>}
            </fieldset>
            <fieldset>
                <Button type="submit" size="medium" 
                 scheme="primary">
                    로그인
                </Button>
            </fieldset>
            <div className="info">
                <Link to="/reset">비밀번호 초기화</Link>
            </div>
            </form>
        </SignupStyle>
        </>
    );
}



export default Login;