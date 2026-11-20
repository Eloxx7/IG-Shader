precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
void main(){
vec2 u=(gl_FragCoord.xy*2.-u_resolution)/u_resolution.y;
float p=u_time*1.0472,a=atan(u.y,u.x)+p,r=length(u);
vec3 c=.5+.5*cos(p+a+6.28*(vec3(0,.33,.67)+.3/r));
float s=.5+.5*sin(12.*a+5./r-p*3.);
c*=smoothstep(0.,.5,r)*s;
c+=.02/r*vec3(1,.5,1);
gl_FragColor=vec4(c,1);
}
