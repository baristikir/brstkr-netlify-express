let isSpinning = true;

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    onDragStart: function () {
        isSpinning = false;
    },
});

let box = new Zdog.Box({
    addTo: illo,
    width: 180,
    height: 80,
    depth: 80,
    stroke: false,
    color: '#C25', // default face color
    leftFace: '#EA0',
    rightFace: '#E62',
    topFace: '#ED0',
    bottomFace: '#636',
});

function animate() {
    illo.rotate.y += isSpinning ? 0.03 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}

animate();