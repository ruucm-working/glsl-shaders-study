

#ifdef GL_ES
precision mediump float;
#endif

void main() {

  vec3 color = vec3(0.3, 0.5, 0.3);
  gl_FragColor = vec4(color, 1.0);
}

// void main(out vec4 fragColor, in vec2 fragCoord) {

//   vec2 xy = fragCoord.xy / iResolution.xy; // Condensing this into one line
//   vec4 texColor = texture(iChannel0, xy);  // Get the pixel at xy from
//   iChannel0

//   if (int(fragCoord.x) % 2 == 0) {
//     if (int(fragCoord.y) % 2 == 0) {
//       fragColor = vec4(0, 0, 0, 1.0);
//     } else {
//       fragColor = vec4(1.0, 1.0, 1.0, 1.0);
//     }
//   } else {
//     if (int(fragCoord.y) % 2 == 0) {
//       fragColor = vec4(0, 0, 0, 1.0);
//     } else {
//       fragColor = vec4(1.0, 1.0, 1.0, 1.0);
//     }
//   }
// }

// layout(location = 0) in vec3 aPos; // the position variable has attribute
// position 0

// out vec4 vertexColor; // specify a color output to the fragment shader

// void main() {
//   gl_Position =
//       vec4(aPos, 1.0); // see how we directly give a vec3 to vec4's
//       constructor
//   vertexColor =
//       vec4(0.5, 0.0, 0.0, 1.0); // set the output variable to a dark-red
//       color
// }

// #version 330 core
// out vec4 FragColor;

// in vec4 vertexColor; // the input variable from the vertex shader (same name
// and
//                      // same type)

// void main() { FragColor = vertexColor; }