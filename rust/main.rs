use std::env;

fn main() {
  let name = env::args().skip(1).next();
 println!("Hi there ! {:?}", name);
  match name {
    Some(n)=> println!("Hi there ! {}", n),
    None => panic!("Didn't receive any name ?")
  }
}