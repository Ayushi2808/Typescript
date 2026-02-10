/* defining enum role for staff roles */
enum Role{
    Doctor ="DOCTOR",
    Nurse ="NURSE",
    Admin ="ADMIN"
}
/* defining interface for staff member */
interface Staffmember{
    id: number;
    name: string;
    role: Role;
}
/* CREATING AN OBJECT */
/* let staff1: Staffmember ={
    id:101,
    name: "Ayushi",
    role:Role.Doctor

};
console.log(staff1); */

/* Also write a function that prints a summary of all staff , showing their name and role */
let staff: Staffmember[] = [
        {id:101, name:"Ayushi", role:Role.Doctor},
        {id:102, name:"Anokhi", role:Role.Nurse},
        {id:103, name:"Aryan" , role:Role.Admin}
];

function printStaffSummary(staffList : Staffmember[]):void{
    for(let Staffmember of staffList){
        console.log("Name :",Staffmember.name, "|Role :", Staffmember.role,"| Id:" ,Staffmember.id );
    }
}

printStaffSummary(staff);


