fn req_status() -> u32 {
  200
}

fn main(){
  let status = req_status();

  match status {
    // let matched = match status { // can be stored in a variable
    200 => println!("Success"),
    404 => println!("Not Found"),
    other => { // catch_all case
      println!("Request failed with code: {}", other);
      // get response from cache
    }
    // _ => println!("Ignored"), //can also use a _ to ignore the value
  };

  // matched // can also be returned
}