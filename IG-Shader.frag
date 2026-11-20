precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
void main(){
vec2 u=(gl_FragCoord.xy*2.-u_resolution)/u_resolution.y;
float t=u_time,a=atan(u.y,u.x)+t*.2,r=length(u);
vec3 c=.5+.5*cos(t+6.28*(vec3(0,.33,.67)+a/6.28+.3/r+t*.1));
float s=.5+.5*sin(12.*a+5./r-t*3.);
c*=smoothstep(0.,.5,r)*s;
c+=.02/r*vec3(1,.5,1);
gl_FragColor=vec4(c,1);
}
