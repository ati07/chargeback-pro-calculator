import React from 'react'
import { Box, Slider } from '@mui/material'


function valuetext(value: number) {
    return `${value}°C`;
  }
const ValueLabel = (value:any)=>{
    console.log("value",value);
    return <>{value}</>
}
function SliderComponent({value,title,handleChange,start,end,min,max,strt,sign}:any) {
    return (
        <Box>
            <div>{title}</div>
            <Box style={{display:'flex',justifyContent: 'space-between',alignItems: 'center',}}>
                <Box className='count'>{start}</Box>
                <Box className='count'>{end}</Box>
            </Box>
            <Slider
                size="small"
                aria-label="Always visible"
                defaultValue={10}
                value={value}
                getAriaValueText={valuetext}
                valueLabelFormat={value => <div>{strt ? sign + value :  value + sign}</div>}
                // step={10}
                // marks={marks}
                sx={{
                    '& .MuiSlider-valueLabel':{
                        backgroundColor: "#422afb !important"
                    },
                    '& .MuiSlider-thumb': {
                        color:"#422afb !important"
                    },
                }}
                min={min}
                max={max}
                valueLabelDisplay="on"
                onChange={handleChange}
            />
        </Box>
    )
}

export default SliderComponent