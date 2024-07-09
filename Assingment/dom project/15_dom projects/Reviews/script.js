

const profiles=[
    {name:'Kim Namjoon',  description: 'I am a RM', img:'./img/rm.jpg',   review:'Namjoon and his family are poor. His father is bedridden with sickness, his mother the only one working, and a younger sibling. Namjoon has to take care of his sibling, while also part-timing at a gas station.'},
    {name:"Park Jimin",   description: 'I am  Jmin', img:'./img/jmin.jpg', review:'Jimin was a big fan of animation cartoons in his childhood. Jimin attended Busans Hodong Elementary School and Yonsan Middle School. In 2014 he graduated from Korean Arts High School. Then he enrolled in Global Cyber University for further studies'},
    {name:'Kim Taehyung.',description: 'I am a V', img:'./img/v.jpg',    review:'Kim Tae-hyung (김태형), better known by his stage name V (뷔), is a South Korean singer-songwriter, record producer and actor under Big Hit Music. He is a member in the boy group BTS, and has the positions of vocalist, dancer and visual.'},
    {name:'Jeon Jungkook',description: 'I am a JK', img:'./img/jk.jpg',   review:'Adored by fans for his relatable, down-to-earth persona and generosity, Jungkooks prodigious talent spills beyond the music scene into visual arts, filmmaking, cooking and athletics, consistently impressing fans with his multifaceted abilities. BTS member Jungkook turns 26.'},
    {name:'Min Yoongi',   description: 'I am a Suga', img:'./img/duja.jpg', review:'He has expressed his admiration for various artists and musicians throughout his career. One of his well-known musical idols is the rapper Eminem. Suga has mentioned in interviews and social media posts that he was inspired by Eminems music and his journey as an artist.'},
    {name:'Jung hoseok',  description: 'I am a Hobe',img:'./img/jhope.jpg',review:'The Korean language does not have a “P” sound (i.e the last name of PARK is pronounced like BAK). Thus, the English “Hope” would be pronounced like “Hobe” in Korean. As to the “E” sound at the end of the name, I believe it an honorific. Thus Hope becomes Hobi.'},
    {name:'Kim Seokjin',  description: 'I am a Jin',img:'./img/jin.jpeg',review:'Jin is the sub-vocalist of BTS (he is good at high notes in their songs) and he writes some of the groups lyrics. Although Jins main skills arent dancing he has won praise as a choreographer from both his fans and his bandmates'}

]
let currentProfileIndex = 0;

// Function to update the profile information
function updateProfile(index) {
    const profile = profiles[index];
    document.getElementById('name').textContent = profile.name;
    document.querySelector('#img-div p').textContent = profile.description;
    document.getElementById('pic').src = profile.img;
    document.getElementById('reviews').textContent = profile.review;
}

// Event listeners for the buttons
document.getElementById('left').addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex - 1 + profiles.length) % profiles.length;
    updateProfile(currentProfileIndex);
});

document.getElementById('right').addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    updateProfile(currentProfileIndex);
});

// Initial profile load
updateProfile(currentProfileIndex);
