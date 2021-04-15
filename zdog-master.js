spotify.updateRenderGraph()
notion.updateRenderGraph()

//animation functionaily
function animate()
{
    //rotate circle every fram
    spotify.rotate.y += 0.005;
    //notion.rotate.y += 0.005;
    spotify.updateRenderGraph();
    notion.updateRenderGraph();


    //animate next frame
    requestAnimationFrame(animate)
}

animate()