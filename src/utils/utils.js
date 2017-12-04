
// compare function to pass to Array.sort(), comparison
// based on the corresponding fields of given rows

export function sortByCategory(category) {
  return function(item1, item2) {
    if ( item1[category] < item2[category] ) return -1;
    else if ( item1[category] > item2[category] ) return 1;
    else return 0;
  }
}


// function to validate form
// certain criteria for email, name and phone input must be met, otherwise return false
// email should contain '@'
// name should contain only letters
// phone should contain only number, and has maximum length of 15 digits

export function isValidated(data) {
  console.log(data)

  // conditions are defined here
  if ( !data.email.includes('@') ) {
    return false;
  }
  if ( !/^[a-zA-Z]+$/.test( data.name.replace(/ /g,'') ) ) {
    return false;
  }
  if ( !/^[0-9]+$/.test(data.phone) ){
    return false;
  }
  return true;
}
