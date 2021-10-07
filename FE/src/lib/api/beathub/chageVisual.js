let colorPalette = ["#FFF07C", "#80FF72", "#7EE8FA", "#EEC0C6", "#E58C8A"]
//"big bars",
export let initState = {
    waves: ["bars", "bars blocks", "cubes", "dualbars", "dualbars blocks", "fireworks",
        "flower", "flower blocks", "orbs", "ring", "rings", "round wave", "shine", "shine rings", "shockwave",
        "star", "static", "stitches", "web", "wave"],
    activePreviewWave: "shockwave",
    previewWaveColorMap: {
        "bars": [...colorPalette],
        "bars blocks": [...colorPalette].slice(0, 2),
        "big bars": [...colorPalette],
        "cubes": [...colorPalette],
        "dualbars": [...colorPalette],
        "dualbars blocks": [...colorPalette].slice(0, 2),
        "fireworks": [...colorPalette].slice(0, 1),
        "flower": [...colorPalette],
        "flower blocks": [...colorPalette].slice(0, 2),
        "orbs": [...colorPalette].slice(0, 2),
        "ring": [...colorPalette].slice(0, 2),
        "rings": [...colorPalette],
        "round wave": [...colorPalette].slice(0, 2),
        "shine": [...colorPalette].slice(0, 2),
        "shine rings": [...colorPalette],
        "shockwave": [...colorPalette].slice(0, 3),
        "star": [...colorPalette].slice(0, 3),
        "static": [...colorPalette].slice(0, 1),
        "stitches": [...colorPalette].slice(0, 1),
        "wave": [...colorPalette].slice(0, 2),
        "web": [...colorPalette].slice(0, 3)
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

