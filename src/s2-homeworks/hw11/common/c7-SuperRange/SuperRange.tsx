import React, {Dispatch, SetStateAction} from 'react'
import {Slider, SliderProps, styled} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import styled from "@emotion/styled";


type PropsType = SliderProps & {
    // onChangeRange: (event: Event,range: number | number []) => void
}

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#00CC22',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});


const SuperRange: React.FC<PropsType> = (props) => {
    return (
        // <ThemeProvider theme={theme}>
        <CustomizedSlider
            sx={{ // стили для слайдера // пишет студент

            }}
            {...props}
            // className={props.classes?.colorPrimary}// отдаём слайдеру пропсы если они есть (value например там внутри)
        />
        // </ThemeProvider>
    )
}

const CustomizedSlider = styled(Slider)`
  color: #00CC22;
  width:300px;
  margin-left: 5px;
  & .MuiSlider-rail{
    color: #8B8B8B;
  }
  & .MuiSlider-thumb{
    border-radius: 50%;
    width:20px;
    height: 20px;
    border: 1px solid #00CC22;
    background-color: #FFFFFF;
    box-shadow: none;
  }
  & .MuiSlider-thumb:before{
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background-color: #00CC22;
    box-shadow: none;
  }
  /*.MuiSlider-thumb:hover{
    border: 1px solid black;
  }*/
  
` as typeof Slider;

export default SuperRange
