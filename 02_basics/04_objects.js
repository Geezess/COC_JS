// const tinderUser = new Object()
// ye ek singleton object hai isse ese bnate hai

const tinderUser = {};
// ye non singleton object hai jo hum usually use krte hai

tinderUser.id = "123abc";
tinderUser.name = "Geezes";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

const regularUser = {
  email: "abc@google.com",
  fullName: {
    userFullName: {
      firstName: "Gaurav",
      lastName: "Swami",
      //   yha triple nesting hai mtlab 3 objects bne hai.
    },
  },
};

console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
    3: "x",
    4: "y",
  };
  const obj3 = {
    5: "p",
    6: "q",
  };
//   const obj4 = Object.assign(obj1,obj2,obj3) this way also you can merge objects.
  const obj4 = {...obj1,...obj2,...obj3}

  console.log(obj4)



  const course = {
    courseName: "javascript",
    price: 999,
    courseFaculty: "Gaurav"
  }

//   syntactical sugar
const{courseFaculty} = course
console.log(courseFaculty)