/* Union type can allow to be one of several SVGUnitTypes. '|'
Intersection type combine multiple types into one using '&'
Mapped types for tracking
Conditional types for applying condition on same statement
Utility types to make a type where all fields are optional and can be used a/q to user*/

/* 
1.Create a type called InstructorOrAdmin that can be either an Instructor or an Admin */
type Instructor={
    id: number;
    name: string;
    email: string;

};
type Admin={
    id: number;
    name: string;
    email: string;
};
type InstructorOrAdmin =Instructor|Admin ;
const person1: InstructorOrAdmin={
    id:1,
    name:"Ayushi",
    email:"ayushikkkkk"
};

const person2: InstructorOrAdmin={
    id:2,
    name:"Aryan",
    email:"aryankkkkk"
};

console.log(person1);
console.log(person2);
