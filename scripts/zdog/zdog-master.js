spotify.updateRenderGraph()
notion.updateRenderGraph()
pen.updateRenderGraph()
camera.updateRenderGraph()
playground.updateRenderGraph()

var rotationCycle = 0;

//animation functionaily
function animate() {
    //rotate circle every frame
    if (rotationCycle < 100) {
        spotify.rotate.y += 0.005;
        notion.rotate.y += 0.002;
        camera.rotate.y += 0.002;
        rotationCycle++;
    }
    else if (rotationCycle < 300) {
        spotify.rotate.y -= 0.005;
        notion.rotate.y -= 0.002;
        camera.rotate.y -= 0.002;
        rotationCycle++;
    }
    else if (rotationCycle < 400) {
        spotify.rotate.y += 0.005;
        notion.rotate.y += 0.002;
        camera.rotate.y += 0.002;
        rotationCycle++;
    }
    else {
        rotationCycle = 0;
    }

    pen.rotate.y += 0.005;

    spotify.updateRenderGraph();
    notion.updateRenderGraph();
    pen.updateRenderGraph();
    camera.updateRenderGraph()
    playground.updateRenderGraph();

    //animate next frame
    requestAnimationFrame(animate)
}

animate()