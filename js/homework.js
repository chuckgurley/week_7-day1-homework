//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names) {

    let foundMatch = false;

    
    for (let i = 0; i < names.length; i++) {

        let name = names[i];


        if (string.toLowerCase().includes(name.toLowerCase())) {

        console.log("Matched " + name);

        foundMatch = true;

        }

    }
    
    if (foundMatch) {

        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);

//Call method here with parameters





//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {

    for (let i = 0; i < arr.length; i += 2) {

      arr.splice(i, 1, "even index");
    }
    return arr;
  }

  console.log(arr); 
  
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// (4! + 6!)

// def sum_factorial(alist):
//     output_sum = 0
//     for i in alist:
//         factorial = 1
//         for num in range(1, i+1):
//             factorial *= num
//         output_sum += factorial
//     return output_sum

// out put should be 744
// 7kyu

function sum_factorial(alist) { 

    let output_sum = 0;

    for (let i of alist) {

      let factorial = 1;

      for (let num = 1; num <= i; num++) {

        factorial *= num;
      }
      output_sum += factorial;
    }
    return output_sum;
  }
  
  console.log(sum_factorial([4, 6])); 


//   def initials(name):
//   name_list = name.split()
//   full_name = ""
//   for word in name_list:
//       if word != name_list[-1]:
//           full_name += word[0].title() + '.'
//       else:
//           full_name += word.title()
//   return full_name

//   initials('Barack Hussain obama') => returns B.H.Obama 

function initials(name) {

    const nameList = name.split(' ');

    let fullName = '';

    for (let i = 0; i < nameList.length; i++) {

      const word = nameList[i];

      if (word !== nameList[nameList.length - 1]) {

        fullName += word[0].toUpperCase() + '.';

      } else {
        
        fullName += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }
    return fullName;
  }
  console.log(initials('Barack Hussain obama'))


//   initials('Barack Hussain obama') => returns B.H.Obama 
// 7kyu
        