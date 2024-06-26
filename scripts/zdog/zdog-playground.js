let playground = new Zdog.Illustration({
    element: "#playground-svg",
    dragRotate: true,
    zoom: 1
});

let prime = new Zdog.Shape({
    addTo:playground,
    rotate: {
    x: Zdog.TAU/4, 
    z: -3*Zdog.TAU/8
},
})

let playGroup = new Zdog.Group({
    addTo: prime
})
let plat1 = new Zdog.Group({
    addTo: prime
})
let roof = new Zdog.Group({
    addTo: prime,
})
let slideGroup = new Zdog.Group({
    addTo: prime,
})

// slide platform
let sPlatform = new Zdog.Rect({
    addTo: plat1,
    width: 30,
    height: 30,
    stroke: 5,
    fill: true,
    
    color: "#F9C141",
});

// sPlatform legs
let leg1 = new Zdog.Cylinder({
    addTo: sPlatform,
    diameter: 5,
    length: 70,
    stroke: false,
    translate: {y: 15, x: -15, z: -5}
})
leg1.copy({
    translate: {y: -15, x: 15, z: -5}
})
leg1.copy({
    translate: {y: 15, x: 15, z: -5}
})
leg1.copy({
    translate: {y: -15, x: -15, z: -5}
})

// Roof
let roof1 = new Zdog.Shape({
    addTo: roof,
    path: [
        { x:   0, y: -10 ,},
        { x:  20, y:  20 },
        { x: -20, y:  20 },
      ],
    stroke: 1,
    fill: true,
    color: "#77FF22",
    rotate: {x: -Zdog.TAU/8},
    translate: {y: 7, z: 40}
})
roof1.copy({
    rotate: {y: Zdog.TAU/8, z: Zdog.TAU/4},
    translate: {x: -7, z: 40}
})
roof1.copy({
    rotate: {y: 3*Zdog.TAU/8, z: Zdog.TAU/4},
    translate: {x: 7, z: 40}
})
roof1.copy({
    rotate: {x: -3*Zdog.TAU/8},
    translate: {y: -7, z: 40}
})

// ramp
let ramp = new Zdog.Rect({
    addTo: prime,
    width: 20,
    height: 40,
    stroke: 2,
    color: "#964B00",
    fill: true,
    rotate: {z: Zdog.TAU/4, y: Zdog.TAU/5},
    translate: {x: -20, z: -20}
})

let step = new Zdog.Box({
    addTo: ramp,
    width: 18,
    height: 2,
    depth: 2,
    stroke: false,
    translate: {y: -15, z: 2},
    color: "#663606"
})
step.copy({
    translate: {y: -5, z: 2},
})
step.copy({
    translate: {y: 5, z: 2},
})
step.copy({
    translate: {y: 15, z: 2},
})


// slide

// side 1
let sBottom1 = new Zdog.Rect({
    addTo:slideGroup,
    width: 20,
    height: 15,
    stroke: 1,
    fill: true,
    color: "#FF5555",
    translate: {y: -20, z: 0},
    rotate: {x: Zdog.TAU/24}
})
sBottom1.copy({ // panel 2
    translate: {y: -32, z: -8},
    rotate: {x: Zdog.TAU/7}
})
sBottom1.copy({ // panel 3
    translate: {y: -40, z: -20},
    rotate: {x: Zdog.TAU/6}
})
sBottom1.copy({ // panel 4
    translate: {y: -50, z: -30},
    rotate: {x: Zdog.TAU/12}
})
sBottom1.copy({ // panel 4
    translate: {y: -62, z: -34},
    rotate: {x: Zdog.TAU/32}
})

let rail1 = new Zdog.Shape({
    addTo: slideGroup,
    path: [
        {x:10, y:-15, z:3}, // start
        {arc: [
            {x:10, y:-35, z:1}, // corner
            {x:10, y:-40, z:-20}, // end
        ]},
        {arc: [
            {x:10, y:-45, z: -34},
            {x:10, y:-70, z: -35}
        ]}
    ],
    closed: false,
    stroke: 3,
    color: "#FF0000"
})
rail1.copy({
    translate: {x: -20}
})
let rail2 = new Zdog.Shape({
    addTo: slideGroup,
    path: [
        {x:10, y:-15, z:3}, // start
        {arc: [
            {x:10, y:-35, z:1}, // corner
            {x:10, y:-42, z:-19}, // end
        ]},
        {arc: [
            {x:10, y:-45, z: -34},
            {x:10, y:-70, z: -35}
        ]}
    ],
    closed: false,
    stroke: 3,
    color: "#FF0000",
    translate: {y: -.5,z: 1}
})
rail2.copy({
    translate: {x: -20}
})

playground.updateRenderGraph();