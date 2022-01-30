/* My favorite movie start */

let title = "Star Wars: Revenge of the Sith";
let length = 140;
let isKidFriendly = true;

let protagonist = {
    "actorName" : "Ewan McGregor",
    "characterName" : "Obi-Wan Kenobi"
} 
let antagonist = {
    "actorName" : "Hayden Christensen",
    "characterName" : "Darth Vader"
} 

let myFavoriteMovie = {
    "title" : title,
    "length" : length,
    "forKids" : isKidFriendly,
    "protagonistName" : protagonist.characterName,
    "protagonistActor" : protagonist.actorName,
    "antagonistName" : antagonist.characterName,
    "antagonistActor" : antagonist.actorName,
    "releaseDate" : 2005,
    "awardsNominee" : ["Best Music", "Best Achievement in Makeup"],
    "awardsWon" : "Best Music",
}

/* My favorite movie end */

/* My facebook profile start */

let myProfile = new Object();

myProfile.username = "buikrisz";
myProfile.friends = [
    friend1 = {
        "username" : "friend1",
        "onFacebookSince" : 2012,
        "talkedTo" : false
    },
    friend2 = {
        "username" : "friend2",
        "onFacebookSince" : 2015,
        "talkedTo" : true
    }
];
myProfile.likes = [
    likesOnPic1 = {
        "picName" : "Travelling in USA",
        "likeNum" : 56
    },
    likesOnPic2 = {
        "picName" : "Travelling in Asia",
        "likeNum" : 136
    }
];
myProfile.profilePics = [
    profilePic1 = {
        "uploaded" : 2017,
        "ageOnPic" : 22
    },
    profilePic2 = {
        "uploaded" : 2019,
        "ageOnPic" : 24
    },
    profilePic3 = {
        "uploaded" : 2022,
        "ageOnPic" : 27
    }
];
myProfile.posts = [
    post1 = {
        "postAbout" : "Travelling",
        "firstComment" : "Cool",
        "likesOnPost" : 66
    },
    post2 = {
        "postAbout" : "School",
        "firstComment" : "That's not cool :(",
        "likesOnPost" : 15
    }
];
myProfile.following = [
    famousPerson1 = {
        "name" : "Johnny Depp",
        "numOfFollowers" : 11155516
    },
    famousPerson2 = {
        "name" : "Barack Obama",
        "numOfFollowers" : 55894948
    }
];
//2 more



/* My facebook profile end */