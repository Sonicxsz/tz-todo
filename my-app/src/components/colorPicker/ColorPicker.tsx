import './colorPicker.css'
import {
    MuiColorInput,
    MuiColorInputFormat
  } from 'mui-color-input'
  

interface IColorPicker {
    color: string,
    handleChange: (newValue: string) => void,
    name: string
    
} 
export const ColorPicker = ({color, handleChange, name}:IColorPicker) => {
    const format: MuiColorInputFormat = 'hex'
    return (<>
        <span className='color__span'>{name}</span>
        <MuiColorInput 
                
                className="color-picker"  
                size="small" 
                variant="outlined" 
                value={color} 
                onChange={handleChange} 
                format={format} 
                name="color"/>

        </>
    )
}