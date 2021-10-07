// let colorPalette = ["#FFF07C", "#80FF72", "#7EE8FA", "#EEC0C6", "#E58C8A"]
let colorPalette = ['#B01EFF', '#56CCF2', '#FF6780', '#14F1D9', '#7B42F6', '#ffffff', 'rgba(255, 255, 255, 0)']
let colorPalette2 = ['#ffffff', 'rgba(255, 255, 255, 0)', '#7B42F6']
let colorPalette3 = ['#ffffff', '#7B42F6']
let colorPalette4 = ['#B01EFF', '#56CCF2', 'rgba(255, 255, 255, 0)']
//"big bars",
export let initState = {
    waves: ["bars", "bars blocks", "cubes", "dualbars", "dualbars blocks", "fireworks",
        "flower", "flower blocks", "orbs", "ring", "rings", "round wave", "shine", "shine rings", "shockwave",
        "star", "static", "stitches", "web", "wave"],
    activePreviewWave: "web",
    previewWaveColorMap: {
        "bars": [...colorPalette].slice(0, 5),
        "bars blocks": [...colorPalette].slice(5, 7),
        "big bars": [...colorPalette],
        "cubes": [...colorPalette],
        "dualbars": [...colorPalette].slice(0, 6),
        "dualbars blocks": [...colorPalette].slice(5, 7),
        "fireworks": [...colorPalette].slice(5, 6),
        "flower": [...colorPalette],
        "flower blocks": [...colorPalette].slice(4, 6),
        "orbs": [...colorPalette].slice(0, 2),
        "ring": [...colorPalette].slice(5, 7),
        "rings": [...colorPalette].slice(0, 6),
        "round wave": [...colorPalette].slice(5, 7),
        "shine": [...colorPalette].slice(0, 2),
        "shine rings": [...colorPalette],
        "shockwave": [...colorPalette].slice(0, 3),
        "star": [...colorPalette2].slice(0, 3),
        "static": [...colorPalette].slice(3, 4),
        "stitches": [...colorPalette].slice(5, 6),
        "wave": [...colorPalette3].slice(0, 2),
        "web": [...colorPalette4].slice(0, 3)
    }
}

export function reducer(state = initState, action) {
    switch (action.type) {
        case "UPDATE_PREVIEW_COLOR":
            let previewWaveColorMapCopy = { ...state.previewWaveColorMap }
            previewWaveColorMapCopy[action.payload.wave][action.payload.index] = action.payload.color
            return {
                ...state,
                previewWaveColorMap: previewWaveColorMapCopy
            }

        case "UPDATE_ACTIVE_WAVE":
            return {
                ...state,
                activePreviewWave: action.payload
            }
    }
}

