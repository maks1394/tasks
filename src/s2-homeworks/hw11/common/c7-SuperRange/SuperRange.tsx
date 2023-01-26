import React from 'react'
import { Slider, SliderProps, SliderThumb} from '@mui/material'
import {styled} from '@mui/material/styles';


type PropsType = SliderProps & {
    // onChangeRange: (event: Event,range: number | number []) => void
}


const SuperRange: React.FC<PropsType> = (props) => {
    return (
        // <ThemeProvider theme={theme}>
        <CustomizedSlider
            // sx={}

            {...props}
            // className={props.classes?.colorPrimary}// отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

const CustomizedSlider = styled(Slider)`
  color: #00CC22;
  width: 300px;
  margin-left: 5px;

  & .MuiSlider-rail {
    color: #8B8B8B;
  }

  & .MuiSlider-thumb {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid #00CC22;
    background-color: #FFFFFF;
  }

  & .MuiSlider-thumb:before {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background-color: #00CC22;
  }
  .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover {
    box-shadow:none !important;
  }
  .MuiSlider-thumb:before{
    box-shadow:none !important;
  }

` as typeof Slider;

export default SuperRange
