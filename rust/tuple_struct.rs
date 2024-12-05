struct Color(u8, u8, u8);

fn main() {
  let white = Color(255, 255, 255);

  //pull out by index
  let red = white.0;
  let green = white.1;
  let blue = white.2;

  println!("Red value: {}", red);
  println!("Green value: {}", green);
  println!("Blue value: {}\n", blue);

  let orange = Color(255, 255, 0);
  // can also destructure fields directly
  let Color(r, g, b) = orange;
  println!("R: {}, G:{}, B:{} (orange)", r, g, b);

  //can aso ignore fields while destructuring
  // let Color(r, _, b) = orange;
}
