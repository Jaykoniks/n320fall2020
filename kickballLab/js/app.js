// Jacob Shirley
// 12.4.20

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var camera, scene, ball, goal, timeID, partSys;

scene = createScene();
engine.runRenderLoop(function() {scene.render();})
scene.registerAfterRender(function() {
    if(ball.intersectsMesh(goal, false)) {
        // console.log("AHHHHHHHH");

        goal.position.x= (Math.random() * 8) - 4;

        partSys.manualEmitCount=30;
        partSys.start();

        partSys.minEmitBox=ball.position;
        partSys.maxEmitBox=ball.position;
        
        resetBall();
    }
})

function createScene() {
    var scene = new BABYLON.Scene(engine);
    camera = new BABYLON.UniversalCamera("uCam", new BABYLON.Vector3(0,0,-15), scene);
    var light = new BABYLON.DirectionalLight("beam", new BABYLON.Vector3(0, -.5, 1), scene);

    var gravector = BABYLON.Vector3(0, -9.81, 0);
    var physicsPlug = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravector, physicsPlug);

    ball = BABYLON.MeshBuilder.CreateSphere("joke", {diameter: 1}, scene)
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(ball, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution:.2}, scene)
    ball.tag = "ball";

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 20, width:20, subdivisions:4}, scene);
    ground.position.y = -3;
    ground.position.x = 0;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor,{mass:0,restitution:.9}, scene)

    goal = new BABYLON.MeshBuilder.CreateBox("goal", {height:5, width:5}, scene);
    goal.position.z=10;
    goal.position.x= (Math.random() * 8) - 4;

    partSys = new BABYLON.ParticleSystem("particles", 2000, scene);
    partSys.emitter = new BABYLON.Vector3(0,0,0);
    partSys.minEmitPower = 1;
    partSys.maxEmitPower = 3
    partSys.addVelocityGradient(0,2);
    // partSys.start();

    partSys.particleTexture = new BABYLON.Texture("images/particle.png", scene);

    return scene;
}

function resetBall() {
    ball.position = new BABYLON.Vector3()
    ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
    ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

    clearTimeout(timeID);
}

window.addEventListener("click", function() {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    if(selectedObject) {
        if(selectedObject.tag == "ball") {
            var surfNorm = pickResult.getNormal(true);
            var forceDir = surfNorm.scale(-1000);

            selectedObject.physicsImpostor.applyForce(
                forceDir,
                selectedObject.getAbsolutePosition()
            )

            timeID = setTimeout(resetBall, 3000);
        }
    }
})