fn main(){
  let result = if 1 == 2 {
    "Wait, what ?" // no semicolon when returning a value!
  } else {
    "Rust makes sense"
  };

  println!("You know what ? {}.", result);
}