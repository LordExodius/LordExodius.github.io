let oscar = new Zdog.Illustration({
    element: "#me-svg",
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



var head = new Zdog.Anchor({
    addTo: oscar,
})

var hair = new Zdog.Group({
    addTo: head,
})

// HAIR
let rightPart = new Zdog.Hemisphere({
    addTo: hair,
    diameter: 45,
    rotate: {x: Math.PI/4 * 3} // 120 degrees back, 30 degrees right, 
})



// EYES
let eye = new Zdog.Shape({
    addTo: head,
    translate: {x: -9, z: 20},
    stroke: 4,
})

eye.copy({
    translate: {x: 9, z: 20},
})

// GLASSES
var glasses = new Zdog.Group({
    addTo: head,
    translate: {z: 20},
})

let lowerFrame = new Zdog.Ellipse({
    addTo: glasses,
    translate: {x: -9},
    rotate: {z: Math.PI/4},
    diameter: 12,
    quarters: 3,
    stroke: 2,
})

lowerFrame.copy({
    translate: {x: 9},
})

new Zdog.Shape({
    addTo: glasses,
    translate: {y: -2},
    path: [
        {x: -2},
        {x: 2}
    ],
    stroke: 2,
})


// HEAD
new Zdog.Hemisphere({
    addTo: oscar,
    diameter: 40,
    color: "#FFDDBB",
    rotate: {x: -(Math.PI/4)},
})

