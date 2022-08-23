var y=Object.defineProperty;var E=(s,t,e)=>t in s?y(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>(E(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class w{constructor(t){n(this,"canvas");n(this,"context");n(this,"scoreDisplay");n(this,"start");n(this,"info");this.canvas=document.querySelector(t),this.context=this.canvas.getContext("2d"),this.scoreDisplay=document.querySelector("#score"),this.start=document.querySelector("#start"),this.info=document.querySelector("#info")}clear(){var t;(t=this.context)==null||t.clearRect(0,0,this.canvas.width,this.canvas.height)}initStartButton(t){var e;(e=this.start)==null||e.addEventListener("click",()=>t(this))}drawScore(t){this.scoreDisplay&&(this.scoreDisplay.innerHTML=t.toString())}drawInfo(t){this.info&&(this.info.innerHTML=t)}drawSprite(t){var e;!t||(e=this.context)==null||e.drawImage(t.image,t.pos.x,t.pos.y,t.width,t.height)}drawBricks(t){t.forEach(e=>this.drawSprite(e))}}class B{constructor(t,e,o,i){n(this,"speed");n(this,"ballImage",new Image);this.ballSize=t,this.position=e,this.ballSize=t,this.position=e,this.speed={x:o,y:-o},this.ballImage.src=i}get width(){return this.ballSize}get height(){return this.ballSize}get pos(){return this.position}get image(){return this.ballImage}changeYDir(){this.speed.y=-this.speed.y}changeXDir(){this.speed.x=-this.speed.x}moveBall(){this.pos.x+=this.speed.x,this.pos.y+=this.speed.y}}class I{constructor(t,e,o,i,r){n(this,"paddleImage",new Image);n(this,"moveLeft");n(this,"moveRight");n(this,"handleKeyUp",t=>{(t.code==="ArrowLeft"||t.key==="ArrowLeft")&&(this.moveLeft=!1),(t.code==="ArrowRight"||t.key==="ArrowRight")&&(this.moveRight=!1)});n(this,"handleKeyDown",t=>{(t.code==="ArrowLeft"||t.key==="ArrowLeft")&&(this.moveLeft=!0),(t.code==="ArrowRight"||t.key==="ArrowRight")&&(this.moveRight=!0)});this.speed=t,this.paddleWidth=e,this.paddleHeight=o,this.position=i,this.speed=t,this.paddleWidth=e,this.paddleHeight=o,this.position=i,this.moveLeft=!1,this.moveRight=!1,this.paddleImage.src=r,document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}get width(){return this.paddleWidth}get height(){return this.paddleHeight}get pos(){return this.position}get image(){return this.paddleImage}get isMovingLeft(){return this.moveLeft}get isMovingRight(){return this.moveRight}movePaddle(){this.moveLeft&&(this.pos.x-=this.speed),this.moveRight&&(this.pos.x+=this.speed)}}class L{isCollidingBrick(t,e){return t.pos.x<e.pos.x+e.width&&t.pos.x+t.width>t.pos.x&&t.pos.y<e.pos.y+e.height&&t.pos.y+t.height>e.pos.y}isCollidingBricks(t,e){let o=!1;return e.forEach((i,r)=>{this.isCollidingBrick(t,i)&&(t.changeYDir(),i.energy===1?e.splice(r,1):i.energy-=1,o=!0)}),o}checkBallCollision(t,e,o){t.pos.x+t.width>e.pos.x&&t.pos.x<e.pos.x+e.width&&t.pos.y+t.height===e.pos.y&&t.changeYDir(),(t.pos.x>o.canvas.width-t.width||t.pos.x<0)&&t.changeXDir(),t.pos.y<0&&t.changeYDir()}}const R="/breakout-typescript/assets/paddle.3c3cefec.png",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHcSURBVEhLpZU7igJBEEC9wR7BI+yR9ggeYY+w4CcwEBHEwMBJzCcwE2ESEwUd8IOgwgj+wt5+zVQz486nd1coevpTr6qryupKJefXbDarjUbjQ4+eFv9FvHivmqf/Y73dbr+1Wq2uBkV6VEUSn+miU2igXq+/a09CgY3HY+X7vppOp2o+nxvhm7XhcGiNooNuJhyrAvU8T4VhqI7HY6FgqN/vGwPoZnquNwMO4E0Z8HU/4X2Q8lrH6hMoB1ygURSp6/Vq5HQ6qd1uZz2HZeC4L4lyuf7lclHP59MKcJxZLpcmJLBMSPSkxgKJcvH28XikwBgRPRhx4msV6pNJEARO4Pv9ngIzFzCM2GsfsKlXV/D5fFa3283AGZlngCNCYawsFgu13W6dvM4K2WazMQzhpcBskMD9fu9sgIpYrVYGmgJLKCh22WRcr9fmBofD4YcR1thLAtGBIZVhkzeZTFLgpBHXbxg2eVJuo9Ho32AYyXKrMtFFba7i6t3rudlsZhNHyzX/Ptok8MFg8CcwDnU6HQF3bb9Idjb6xW88x9Ner5ff4einUiEcdIEDJYRSCYU9Wdonh0kGylnxTCQKcFD6isTdzit7lmRf3/KrFJps0lwr7+0jZABt9jPepG+WJjn3jBU8FwAAAABJRU5ErkJggg==",v="/breakout-typescript/assets/brick-red.1aa56f27.png",S="/breakout-typescript/assets/brick-blue.6cb18b4e.png",x="/breakout-typescript/assets/brick-green.99eb9f61.png",C="/breakout-typescript/assets/brick-yellow.35fae3a4.png",k="/breakout-typescript/assets/brick-purple.70f6d8c8.png",h=document.querySelector("#playField"),a=10,G=20,p=10,g=5,u=h?Math.floor((h.width-a*2)/p)-g:100,A=h?Math.floor((h.height-a*2)/G)-g:30,M=150,l=25,_=450,H=10,K=5,P=20,Y=500,U=400,T={1:v,2:x,3:C,4:S,5:k},F={1:1,2:1,3:2,4:2,5:3},W=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,2,2,2,2,2,2,2,2,0,0,3,3,3,3,3,3,3,3,0,0,0,4,4,4,4,4,4,0,0,0,0,5,5,0,0,5,5,0,0];class q{constructor(t,e,o,i,r){n(this,"brickImage",new Image);this.brickWidth=t,this.brickHeight=e,this.position=o,this.brickEnergy=i,this.brickWidth=t,this.brickHeight=e,this.position=o,this.brickEnergy=i,this.brickImage.src=r}get width(){return this.brickWidth}get height(){return this.brickHeight}get pos(){return this.position}get image(){return this.brickImage}get energy(){return this.brickEnergy}set energy(t){this.brickEnergy=t}}function N(){return W.reduce((s,t,e)=>{const o=Math.floor((e+1)/p),i=e%p,r=a+i*(u+g),c=a+o*(A+g);return t===0?s:[...s,new q(u,A,{x:r,y:c},F[t],T[t])]},[])}let d=!1,f=0;function J(s){s.drawInfo("Game Over!"),d=!1}function O(s){s.drawInfo("Game Won!"),d=!1}function m(s,t,e,o,i){if(s.clear(),s.drawBricks(t),s.drawSprite(o),o.moveBall(),s.drawSprite(e),(e.isMovingLeft&&e.pos.x>0||e.isMovingRight&&e.pos.x<s.canvas.width-e.width)&&e.movePaddle(),i.checkBallCollision(o,e,s),i.isCollidingBricks(o,t)&&(f+=1,s.drawScore(f)),o.pos.y>s.canvas.height&&(d=!0),t.length===0)return O(s);if(d)return J(s);requestAnimationFrame(()=>m(s,t,e,o,i))}function X(s){f=0,s.drawInfo(""),s.drawScore(0);const t=N(),e=new B(P,{x:Y,y:U},K,D),o=new I(H,M,l,{x:_,y:s.canvas.height-l-5},R),i=new L;m(s,t,o,e,i)}const z=new w("#playField");z.initStartButton(X);
