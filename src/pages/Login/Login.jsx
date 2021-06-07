import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { t } from 'react-switch-lang'
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Table from '../../components/Table/Table'
const Login = () => {
    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const validationSchema = Yup.object().shape({
        email: Yup.string().required(`${t('login.emailRequired')}`).email(`${t('login.emailInvalid')}`),
        password: Yup.string().required(`${t('login.passwordRequired')}`).min(`${t('login.passwordMin')}`, 4).max(`${t('login.passwordMax')}`, 16)

    })
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
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
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>{t('login.email')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('login.enterEmail')}
                        value={loginData?.username}
                        onChange={(e) => {
                            setLoginData((prevState) => {
                                return {
                                    ...prevState,
                                    username: e.target.value,
                                };
                            });
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>{t('login.password')}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder={t('login.enterPassword')}
                        value={loginData?.password}
                        onChange={(e) => {
                            setLoginData((prevState) => {
                                return {
                                    ...prevState,
                                    password: e.target.value,
                                };
                            });
                        }}
                    />
                </Form.Group>
                <Button onClick={(e) => onSubmit(e)} variant="primary" type="submit">
                    {t("login.submit")}
                </Button>
            </Form>

        </div>
    )
}
export default Login