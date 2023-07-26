let camera = new Zdog.Illustration({
    element: "#camera-svg",
    dragRotate: true,
    rotate: { x: -0.2, y: -0.4 },
    onDragStart() { isSpinning = false },
    onDragEnd() { isSpinning = true },
    zoom: 7
})

// Camera body box
new Zdog.Box({
    addTo: camera,
    translate: { y: 0 },
    width: 20,
    height: 10,
    depth: 6,
    color: "#333333",
    frontFace: "#242526",
    stroke: false,
    fill: true,
})

// Camera Top Box 1
new Zdog.Box({
    addTo: camera,
    translate: { x: 0, y: -6.1 },
    width: 20,
    height: 2,
    stroke: 1,
    depth: 6,
    color: "#CCCCCC",
    frontFace: "#AAAAAA",
    stroke: false,
    fill: true,
})

let grip = new Zdog.Group({
    addTo: camera,
})

// Camera Grip 1
new Zdog.Cylinder({
    addTo: grip,
    translate: { x: -7.5, y: 0, z: 3 },
    rotate: { x: Math.PI / 2 },
    diameter: 5,
    length: 10,
    stroke: false,
})

// Top grip cap
new Zdog.Cylinder({
    addTo: camera,
    translate: { x: -7.5, y: -5.7, z: 3 },
    rotate: { x: Math.PI / 2 - .2 },
    diameter: 5,
    length: 1.5,
    color: "#CCCCCC",
    stroke: false,
})

// PASM
new Zdog.Cylinder({
    addTo: camera,
    translate: { x: -3, y: -7.5, z: 0 },
    rotate: { x: Math.PI / 2 },
    diameter: 4,
    length: 1,
    color: "#B2B2B2",
    stroke: false,
})

// Shutter
new Zdog.Cylinder({
    addTo: camera,
    translate: { x: -7.5, y: -6.5, z: 4 },
    rotate: { x: Math.PI / 2 - .2},
    diameter: 2,
    length: .5,
    color: "#B2B2B2",
    stroke: false,
})

let lens = new Zdog.Group({
    translate: { x: 1.5, y: -1},
    addTo: camera,
})
// Camera Lens Mount
let mountBase = new Zdog.Cylinder({
    addTo: lens,
    translate: {z: 3.5 },
    diameter: 10,
    length: 1,
    stroke: false,
})

let orangeRing = new Zdog.Ellipse({
    addTo: lens,
    translate: {z: 4 },
    diameter: 9,
    stroke: .5,
    color: "#FF6600",
})

// Camera Lens 1
let lens1 = new Zdog.Cylinder({
    addTo: lens,
    translate: {z: 9 },
    diameter: 9,
    length: 10,
    stroke: false,
    frontFace: "#DDDDDD",
})
// Camera Lens 2
let lens2 = new Zdog.Cylinder({
    addTo: lens,
    translate: {z: 10 },
    diameter: 9.5,
    length: 8,
})
// Camera Lens 3
let lens3 = new Zdog.Cylinder({
    addTo: camera,
    translate: {x: 1.5, y: -1, z: 14 },
    diameter: 8,
    length: .1,
    stroke: false,
    color: "#DDDDDD",
})

let back = new Zdog.Group({
    addTo: camera,
})

// Screen
new Zdog.Box({
    addTo: back,
    translate: { x: 3, y: 0, z: -3.5 },
    width: 11,
    height: 7,
    depth: .5,
    stroke: false,
    color: "#000000",
})

// Viewfinder
new Zdog.Box({
    addTo: back,
    translate: { x: 7, y: -5.5, z: -3.5 },
    width: 3,
    height: 2,
    depth: .5,
    stroke: false,
    color: "#111111",
})

// Back dial
new Zdog.Cylinder({
    addTo: back,
    translate: { x: -6, y: 1, z: -3.5 },
    diameter: 4,
    length: .5,
    stroke: false,
    color: "#111111",
})
