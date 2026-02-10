/* Define a type Profile with username (string), bio(string or null), and optional avatarUrl(string) */
type Profile={
    username:string;
    bio:string|null;
    avatarUrl?:string;
}
/* creating variabel one with null bio and no avatar and one with both fields set */
const Profile1:Profile={
    username:"ayushi jain",
    bio:null
};

const Profile2:Profile={
    username:" ayushi ", 
    bio : "mern-stack-developer",
    avatarUrl:"girl avatar.png"
};

console.log(Profile1);
console.log(Profile2);