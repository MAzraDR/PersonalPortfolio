import hectorIdle from "../assets/characters/bearded-idle.gif";
import leylahIdle from "../assets/characters/woman-idle.gif"
import louisIdle from "../assets/characters/oldman-idle.gif"

export const bookTitle = "The Introduction to the Lord of the Books".split("");

export const menuText = {
    main: { id: "main", href: "#main", title: "Unfold the First Scroll", subTitle: "Begin your adventure" },
    about: { id: "about", href: "#", title: "The Master's Chronicle", subTitle: "About Me" },
    projects: { id: "projects", href: "#", title: "Completed Quests", subTitle: "My Past Projects" },
    contact: { id: "contacts", href: "#", title: "The Oath and Seal", subTitle: "Contact Info" },
}

export const npcData = [
    { id: 1, name: "Hector", xRatio: 0.25, sprite: hectorIdle },
    { id: 2, name: "Leylah", xRatio: 0.5, sprite: leylahIdle },
    { id: 3, name: "Louis", xRatio: 0.75, sprite: louisIdle },
];

export const npcDialogues = {
    "Hector": {       
        dialogue: [
            {
                speaker: "Hector",
                text: "Ahh... a wanderer crosses the threshold once more. The scent of the outer world still clings to you. Tell me, traveler... what is it you seek beneath these ashen skies?",
            },
            {
                speaker: "Main Character",
                text: "They say you once knew the Lord. I came to learn of him.",
            },
            {
                speaker: "Hector",
                text: "The Lord... he who once ruled the silence. Few dare speak his name now. Take this relic — all that remains of his tale, etched in fading ink.",
                givesItem: "Chronicle of the Lord",
            },
            {
                speaker: "Hector",
                text: "There are others who remember — fragments scattered like dust in the wind. Seek them, if you wish to weave the full truth from the ruins of memory.",
            },
        ],
    },

    "Leylah": {      
        dialogue: [
            {
                speaker: "Leylah",
                text: "Ah, a traveler from the hollow roads. Your eyes bear the mark of inquiry. I am Leylah — keeper of murmurs long forgotten. What knowledge do you crave?",
            },
            {
                speaker: "Main Character",
                text: "Hector sent me. He said others might hold pieces of the Lord’s tale.",
            },
            {
                speaker: "Leylah",
                text: "Then you tread a cursed path, child. The Lord’s shadow stains every parchment I’ve ever written. Still... the story deserves to be told.",
                givesItem: "Records of Old Deeds (Past Projects)",
            },
            {
                speaker: "Leylah",
                text: "Take it, and tread softly. The past has a way of waking when spoken aloud.",
            },
        ],
    },

    "Louis": {    
        dialogue: [
            {
                speaker: "Louis",
                text: "So... another pilgrim dares the silence. What is it you would take from me?",
            },
            {
                speaker: "Main Character",
                text: "I seek what remains of the Lord’s truth.",
            },
            {
                speaker: "Louis",
                text: "The truth? Hah... that word has long since lost its meaning. The Lord’s memory is a wound I no longer wish to touch. But if it must be done...",
                givesItem: "The Seal of Communion (Contact Data)",
            },
            {
                speaker: "Louis",
                text: "Take it, and leave this place to its decay. The Lord’s name belongs to the dead — yet you, fool traveler, may awaken him once more.",
            },
            {
                speaker: "Main Character",
                text: "Thank you, Louis. Even ashes remember the flame that birthed them.",
            },
        ],
    },
};

export const itemDescriptions = {
    "Hector" : "A weathered tome given by Hector, containing fragmented tales of the Lord. Its pages whisper of forgotten deeds and lost glories.",
    "Leylah" : "An ancient scroll bestowed by Leylah, chronicling past projects and endeavors. The ink has faded, but the stories within still resonate with purpose.",
    "Louis" : "A sealed document handed down by Louis, bearing contact information. The seal symbolizes a bond of trust and the promise of future communication.",
}