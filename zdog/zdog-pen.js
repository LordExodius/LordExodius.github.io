let pen = new Zdog.Illustration({
    element: "#pen-svg",
    dragRotate: true,
    rotate: {x: 0., z: 0.4},
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

var penBody = new Zdog.Group({
    addTo: pen,
    color: "#663366" // test pen colour
    //color: "#FFFAF6" default pen colour
})

// body 1
new Zdog.Shape({
    addTo: penBody,
    path: [
        {x: 0, y: -15}, // start
        {arc: [
            {x: 3, y: 0}, // corner
            {x: 1, y: 15}, // end
        ]},
    ],
    closed: false,
    stroke: 2,
    
})

// body 2
new Zdog.Shape({
    addTo: penBody,
    path: [
        {x: 0, y: -15}, // start
        {arc: [
            {x: -3, y: 0}, // corner
            {x: -1, y: 15}, // end
        ]},
    ],
    closed: false,
    stroke: 2,
})

// body 3
new Zdog.Shape({
    addTo: penBody,
    path: [
        {x: 0, y: -15}, // start
        {arc: [
            {x: 0, y: 0, z: 3}, // corner
            {x: 0, y: 15, z: 1}, // end
        ]},
    ],
    closed: false,
    stroke: 2,
})

// body 4
new Zdog.Shape({
    addTo: penBody,
    path: [
        {x: 0, y: -15}, // start
        {arc: [
            {x: 0, y: 0, z: -3}, // corner
            {x: 0, y: 15, z: -1}, // end
        ]},
    ],
    closed: false,
    stroke: 2,
})

// body middle
new Zdog.Shape({
    addTo: penBody,
    path: [
        {x: 0, y: -15},
        {x: 0, y: 15}
    ]
})

// body bottom ring
new Zdog.Ellipse({
    addTo: penBody,
    translate: {y: 15},
    rotate: {x: Math.PI/2},
    diameter: 2,
    stroke: 2,
})

var capGroup =  new Zdog.Group({
    addTo: penBody,
})

// cap bottom ring
new Zdog.Ellipse({
    addTo: capGroup,
    translate: {y: -2},
    rotate: {x: Math.PI/2},
    diameter: 4,
    stroke: 1,
    color: "#F9C141",
})

// cap top ring
new Zdog.Ellipse({
    addTo: capGroup,
    translate: {y: -12},
    rotate: {x: Math.PI/2},
    diameter: 2.5,
    stroke: 1,
    color: "#F9C141",
})

// pen clip
new Zdog.Shape({
    addTo: capGroup,
    rotate: {y: 1.5},
    path: [
        {x: 0, y: -12, z: 1.5}, // start
        {arc: [
            {x: 0, y: 0, z: 4}, // corner
            {x: 0, y: -5, z: 2}, // end
        ]},
    ],
    closed: false,
    stroke: 1,
    color: "#F9C141",
})

// nib group
var nib = new Zdog.Group({
    addTo: pen,
    color: "#F9C141",
    translate: {y: 18}
})

// top cone
new Zdog.Cone({
    addTo: nib,
    diameter: 2.2,
    length: 2,
    rotate: {x: Math.PI/2},
    color: "#F9C141",
})

//bottom cone
new Zdog.Cone({
    addTo: nib,
    diameter: 2.2,
    length: 2.5,
    rotate: {x: -Math.PI/2},
    color: "#F9C141",
})

// inner line
new Zdog.Shape({
    addTo: nib,
    stroke: 0.5,
    path: [
        {x: 0, y: 1},
        {x: 0, y: 3}
    ],
    color: "#C59933",
})