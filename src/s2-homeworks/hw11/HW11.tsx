import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SliderThumb} from "@mui/material";

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0)) //(number) => void
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const minDistance = 0;
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            setValue1(newValue)
            return;
        }
        if (activeThumb === 0) {
            setValue1(Math.min(newValue[0], value2 - minDistance))
        } else {
            setValue2(Math.max(newValue[1], value1 + minDistance))
        }
    };

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}><p>Homework #11</p></div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            // onChangeRange={utilsRange}
                            onChange={handleChange}
                            value={value1}
                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // onChangeRange={ utilsRange}
                            value={[value1,value2]}
                            // onChangeRange={utilsRange}
                            onChange={handleChange}
                            // сделать так чтоб value1/2 изменялось // пишет студент

                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
