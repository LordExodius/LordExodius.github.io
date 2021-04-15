// create instance of zdog illustration
let spotify = new Zdog.Illustration({
    element: "#spotify-svg",
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

// add circle
new Zdog.Cylinder({
    addTo: spotify,
    diameter: 24,
    length: 5,
    color: "#2FE971",
    backface: "#1ED860"
})

// ARCS ON FRONT
//--------------------------------------------------------------------

var frontArcs = new Zdog.Group({
    addTo: spotify,
    translate: {z: 5},
})

// spotify top arc front
new Zdog.Shape({
    addTo: frontArcs,
    path: [
        {x: -8, y: -4}, // start
        {arc: [
            {x: 0, y: -9}, // corner
            {x: 8, y: -5}, // end
        ]},
    ],
    closed: false,
    stroke: 2
})

// spotify middle arc front
new Zdog.Shape({
    addTo: frontArcs,
    path: [
        {x: -7, y: 0}, // start
        {arc: [
            {x: 0, y: -5}, // corner
            {x: 7, y: -1}, // end
        ]},
    ],
    closed: false,
    stroke: 2
})

// spotify bottom arc front
new Zdog.Shape({
    addTo: frontArcs,
    path: [
        {x: -6, y: 4}, // start
        {arc: [
            {x: 0, y: -1}, // corner
            {x: 6, y: 3}, // end
        ]},
    ],
    closed: false,
    stroke: 2
})

// ARCS ON BACK
//--------------------------------------------------------------------

var backArcs = new Zdog.Group({
    addTo: spotify,
    translate: {z: -5},
})

// spotify top arc back
new Zdog.Shape({
    addTo: backArcs,
    path: [
        {x: -8, y: -4}, // start
        {arc: [
            {x: 0, y: -9}, // corner
            {x: 8, y: -5}, // end
        ]},
    ],
    closed: false,
    stroke: 2
})

// spotify middle arc back
new Zdog.Shape({
    addTo: backArcs,
    path: [
        {x: -7, y: 0}, // start
        {arc: [
            {x: 0, y: -5}, // corner
            {x: 7, y: -1}, // end
        ]},
    ],
    closed: false,
    stroke: 2
})

// spotify bottom arc front
new Zdog.Shape({
    addTo: backArcs,
    path: [
        {x: -6, y: 4}, // start
        {arc: [
            {x: 0, y: -1}, // corner
            {x: 6, y: 3}, // end
        ]},
    ],
    closed: false,
    stroke: 2
})

//--------------------------------------------------------------------