var scene = new THREE.Scene()//场景
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)//透明相机
var renderer = new THREE.WebGLRenderer()//渲染器
renderer.setSize(window.innerHeight,window.innerWidth);//设置渲染器的大小为为浏览器的内宽,即内容区大小
document.body.appendChild(renderer.domElement);//将渲染器的画布domElement挂接在body下面,

var geometry = new THREE.CubeGeometry(1,1,1);//矩形
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var cube = new THREE.Mesh(geometry,material);
scene.add(cube);

camera.position.z = 5;
// renderer.render(scene,camera);

function render(){
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
	renderer.render(scene,camera);
	requestAnimationFrame(render);
}
render();
