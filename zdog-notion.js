let notion = new Zdog.Illustration({
    element: "#notion-svg",
    rotate: {x: -0.3, y: -0.5},
    dragRotate: true,
    onDragStart() 
    {
        isSpinning = false
    },
    onDragEnd() 
    {
        isSpinning = true
    },
    zoom: 5
})

new Zdog.Box({
    addTo: notion,
    width: 19,
    height: 19,
    depth: 19,
    stroke: 2,
    color: "#000000",
    frontFace: "#eeeeee",
    topFace: "#eeeeee",
    rightFace: "#eeeeee",
})

// front face outline
new Zdog.RoundedRect({
    addTo: notion,
    translate: {z: 10},
    width: 20,
    height: 20,
    stroke: 2,
    color: "#000"

})

// back face outline
new Zdog.RoundedRect({
    addTo: notion,
    translate: {z: -10},
    width: 20,
    height: 20,
    stroke: 2,
    color: "#000"

})

// top face outline
new Zdog.RoundedRect({
    addTo: notion,
    translate: {y: -10},
    width: 20,
    height: 20,
    stroke: 2,
    color: "#000",
    rotate: {x: Math.PI/2},
})

// left face outline
new Zdog.RoundedRect({
    addTo: notion,
    translate: {x: -10},
    width: 20,
    height: 20,
    stroke: 2,
    color: "#000",
    rotate: {y: Math.PI/2},
})

// right face outline
new Zdog.RoundedRect({
    addTo: notion,
    translate: {x: 10},
    width: 20,
    height: 20,
    stroke: 2,
    color: "#000",
    rotate: {y: Math.PI/2},
})

var nGroup = new Zdog.Group({
    addTo: notion,
    translate: {z: 11},
})

// N line 1
new Zdog.Shape({
    addTo: nGroup,
    path: [
        {x: -5, y: -5}, // start
        {x: -5, y: 5},
    ],
    stroke: 2,
    color: "#000",
})

// N line 2
new Zdog.Shape({
    addTo: nGroup,
    path: [
        {x: -5, y: -5}, // start
        {x: 5, y: 5},
    ],
    stroke: 2,
    color: "#000",
})

// N line 3
new Zdog.Shape({
    addTo: nGroup,
    path: [
        {x: 5, y: -5}, // start
        {x: 5, y: 5}, // end 
    ],
    stroke: 2,
    color: "#000",
})

// N lower serif

// N upper serif 1

// N upper serif 2