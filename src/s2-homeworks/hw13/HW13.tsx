import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import {Loader} from "../hw10/Loader";

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

type ResponseDataType = {
    errorText:string
    info:string
}

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')

        axios
            .post<ResponseDataType>(url, {success: x})
            .then((res) => {
                debugger
                setCode('Код 200!')
                setImage(success200)
                setText(res.data.errorText)
                setInfo(res.data.info)
                // дописать

            })
            .catch((error) => {
                debugger
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    switch ((error ??={}).response.status){
                        case '400':setImage(error400); break;
                        case '500':setImage(error500); break;
                        default: setImage(errorUnknown)
                    }
                    if ((error ??={}).response.status ===0){
                        setCode('Error!')
                        setText(error.message)
                        setInfo('AxiosError')
                    } else {
                        setCode(`Ошибка ${(error ??={}).response.status}!`)
                        setText((error ??={}).response.data?.errorText)
                        setInfo((error ??={}).response.data?.info)
                    }
                    return error.message;
                } else {
                    console.log('unexpected error: ', error);
                    return 'An unexpected error occurred';
                }
                // дописать

            })
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}><p>Homework #13</p></div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        // дописать
                        disabled={info ==='...loading'}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={info ==='...loading'}
                        // дописать

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={info ==='...loading'}
                        // дописать

                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        disabled={info ==='...loading'}
                        // дописать

                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info === '...loading' ? <Loader/>:info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
