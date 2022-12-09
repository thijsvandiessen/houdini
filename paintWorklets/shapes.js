class Shapes {
  static get inputProperties() {
    return ["--shapes-color"];
  }
  paint(ctx, geom, properties) {
    // Change the fill color.
    const color = properties.get("--shapes-color").toString();
    ctx.fillStyle = color;

    // Draw shapes
    for (let i = 0; i <= 10; i++) {

      for (let j = 0; j <= 10; j++) {
        ctx.beginPath();
        let x = 25 + j * 50; // x coordinate
        let y = 25 + i * 50; // y coordinate
        let radius = 20; // Arc radius
        let startAngle = 0; // Starting point on circle
        let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        let counterclockwise = i % 2 === 1; // Draw counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      
        if (i > 0) {

          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}

registerPaint("shapes", Shapes);
