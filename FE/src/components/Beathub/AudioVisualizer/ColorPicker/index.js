import { useState, useReducer } from 'react'
import { reducer, initState } from "lib/api/beathub/chageVisual"

import { TwitterPicker } from 'react-color';

// styles
import Wrapper from './styles';
import Button from '@mui/material/Button';

function ColorPicker(state, dispatch) {
  let [activeColorIndex, setActiveColorIndex] = useState(0)
  let [activeColorList, setActiveColorList] = useState(['#7B42F6', '#B01EFF', '#FF6780', '#56CCF2', '#14F1D9', '#ffffff'])
  // let [state, dispatch] = useReducer(reducer, initState)
  
  function handleChange(color) {
      dispatch({
          type: "UPDATE_PREVIEW_COLOR",
          payload: {
              wave: state.activePreviewWave,
              index: activeColorIndex,
              color: color.hex
          }
      })
  }

  function handleColorIndex(index) {
    setActiveColorIndex(index)

    let list = []
    list[index] = true
    setActiveColorList(list)
} 

  const handleWaveChange = (wave) => {
    dispatch({ type: 'UPDATE_ACTIVE_WAVE', payload: wave})
  }

  return (
    <Wrapper>
      <div className="color-picker">
        <TwitterPicker triangle="hide" onChangeComplete={handleChange} colors={activeColorList} />
      </div>
    </Wrapper>
  );
}

export default ColorPicker;