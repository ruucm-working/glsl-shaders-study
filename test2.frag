

// #ifdef GL_ES
// precision mediump float;
// #endif

// varying float vDistort;

uniform float uTime;
uniform float uIntensity;

uniform vec2 u_resolution;

float circleshape(vec2 position, float radius) {
  return step(radius, length(position - vec2(0.5)));
}

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {

  // vec3 color = vec3(0.3, 0.5, 0.3);
  // gl_FragColor = vec4(color, 1.0);

  // vec2 coord = gl_FragCoord.xy / u_resolution;
  // vec3 color = vec3(0.0);

  // vec2 translate = vec2(0.0, 0.0);
  // coord += translate;

  // color += vec3(circleshape(coord, 0.3));

  float distort = 0.1 * uIntensity;
  // These values are my fav combination,
  // they remind me of Zach Lieberman's work.
  // You can find more combos in the examples from IQ:
  // https://iquilezles.org/www/articles/palettes/palettes.htm
  // Experiment with these!
  vec3 brightness = vec3(0.5, 0.5, 0.5);
  vec3 contrast = vec3(0.5, 0.5, 0.5);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.0, 0.1, 0.2);

  // Pass the distortion as input of cospalette
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, 1.0);
}