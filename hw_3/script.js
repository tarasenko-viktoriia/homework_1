// //String: greeting 
// {
//     const userName = prompt ("Enter your name :)");
//     alert(`Hello, ${userName}!`);
// }

// //String: gopni4ek
//  {
//     const str = prompt ("Введіть будь-яке речення.");
//     alert(str.split(","));
//  }

 //String: capitalize 
//  {
//     let str = "cANBerRa"
//     let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     console.log(result);
//  }

//  //String: word count 
//  {
//     const str = prompt ("Введіть будь-яке речення.");
//     const words = str.split(" ");
//     const result = words.length;
//     alert(`Ваше речення складається з ${result} слів.`)
//  }

//String: credentials
// {
//     const lastName = prompt ("Enter your last name.");
//     const firstName = prompt ("Enter your first name.");
//     const patronymic = prompt ("Enter your patronymic.");
//     const fullName = 
// }

//String: beer 
// {
//     let str = "Було жарко. Василь пив пиво вприкуску з креветками";
//     let result = str.split(" ").map(word => word === "пиво" ? "чай" : word).join(" ");
//     console.log(result);
// }

// або

// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let words = str.split(" ");
// for (let word of words) {
//     if (word === "пиво") {
//         let index = words.indexOf(word);
//         words[index] = "чай";
//     }
// }
// let result = words.join(" ");
// console.log(result); 

//String: no tag 
// {
//     let str = "Якийсь текст, в якому є один тег <br/> і всяке інше.";
//     let startIndex = str.indexOf('<');
//     let endIndex = str.indexOf('>') + 1;
//     let result = str.slice(0, startIndex) + str.slice(endIndex);
    
//     console.log(result);
// }

//String: big tag
// {
//     let str = "якийсь текст у якому є один тег <br /> і всяке інше";
//     let tagStartIndex = str.indexOf('<');
//     let tagEndIndex = str.indexOf('>') + 1;
//     let tag = str.slice(tagStartIndex, tagEndIndex);
//     let result = str.slice(0, tagStartIndex) + tag.toUpperCase() + str.slice(tagEndIndex);
    
//     console.log(result);
// }

//String: new line
// {
//     let userInput = prompt("Введіть рядок з \\n як маркером нового рядка:");
//     let str = userInput.split('\\n').join('\n');
//     alert(str);
// }


//String: youtube
// {
//     const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//     const userInput = prompt("Введіть посиланням на будь-яке YouTube-відео");
//     const match = userInput.match(youtubeRegex);
//     const videoId = match ? match[1] : null;
//     const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
//     document.write(embedCode);
// }

