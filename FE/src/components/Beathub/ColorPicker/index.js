import { useState, useReducer } from 'react'
import { reducer, initState } from "lib/api/beathub/chageVisual"

function ColorPicker() {

  let [activeColorIndex, setActiveColorIndex] = useState(0)
  let [activeColorList, setActiveColorList] = useState([true])
  let [state, dispatch] = useReducer(reducer, initState)
  
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

  return (
    <>
    </>
  );
}

export default ColorPicker;