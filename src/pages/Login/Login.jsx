import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { t } from 'react-switch-lang'
import Button from 'react-bootstrap/Button'
import styles from './Login.module.css'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Logo from '../../assets/img/amplitudo.svg'
const Login = () => {
    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const validationSchema = Yup.object().shape({
        email: Yup.string().required(`${t('login.emailRequired')}`).email(`${t('login.emailInvalid')}`),
        password: Yup.string().required(`${t('login.passwordRequired')}`).min(6, `${t('login.passwordMin')}`).max(16, `${t('login.passwordMax')}`)

    })
    const [errorMessage, setErrorMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
        // login(loginData)
        //     .then(function (response) {
        //         console.log(response);
        //         console.log(response?.data["id_token"]);
        //         localStorage.setItem("jwt-token", response?.data["id_token"]);
        //         history.push("/movies");
        //     })
        //     .catch(function (error) {
        //         console.log(error?.reponse?.data);
        //         if (error?.response?.data?.detail === "Bad credentials") {
        //             setErrorMessage("Bad credentials");
        //         } else {
        //             setErrorMessage("Error");
        //         }
        //     });
    };
    return (
        <div>
            <img className={styles['login-logo']} src={Logo} />
            <Form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{t('login.email')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('login.enterEmail')}
                        // value={loginData?.email}
                        {...register('email')}
                    // onChange={(e) => {
                    //     setLoginData((prevState) => {
                    //         return {
                    //             ...prevState,
                    //             email: e.target.value,
                    //         };
                    //     });
                    // }}
                    />
                    {errors.email && <p className={styles['error-message']}>{errors.email.message}</p>}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{t('login.password')}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder={t('login.enterPassword')}
                        // value={loginData?.password}
                        {...register('password')}
                    // onChange={(e) => {
                    //     setLoginData((prevState) => {
                    //         return {
                    //             ...prevState,
                    //             password: e.target.value,
                    //         };
                    //     });
                    // }}
                    />
                    {errors.password && <p className={styles['error-message']}>{errors.password.message}</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    {t("login.submit")}
                </Button>
            </Form>

        </div >
    )
}
export default Login