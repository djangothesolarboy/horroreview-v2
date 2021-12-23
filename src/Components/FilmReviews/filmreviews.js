export const filmreviews = [
    { 
        name: 'Malignant', 
        src: '/filmreviews/malignant', 
        number: 0,
        alt: 'malignant review',
        text: `I went into this knowing literally 0. All I knew was that it is a James Wan film and that there was some hype around it. I didn't see a trailer at all, nor did I even know a basic film description going into it. \n \n
        
        And despite all of that, I didn't really care for this film. I know that some people have called it campy for its somewhat laughable moments. But honestly, it isn't campy in my opinion, although it is laughable. The beginning scene alone had me just asking myself what the hell is going on, and just finding the lines/acting to be so subpar. \n \n 
        
        I felt like the first half of the film felt fairly interesting/cool, but when the reveal happened I saw it coming. I wasn't exactly surprised and really just saw it as laughable. I wanted to like the film since the first half felt pretty solid for the most part. And I mean the cinematography was gorgeous at points. \n \n
        
        But overall this film just felt far too silly to be enjoyable for me. It was silly and predictable. And even if someone tries to say it pays homage to 70s/80s horror and all that, like I love those decades of horror, but I didn't really see how it was related. Or even how someone could compare it to them. \n \n 
        
        This film just felt so lackluster in the end and I was just genuinely disappointed with it. I was hoping I was going to get a film that would blow my mind away. But it honestly just fell flat on its face. \n `
    },
    { 
        name: 'Halloween Kills', 
        src: '/filmreviews/halloween-kills', 
        number: 1,
        alt: 'halloween kills review',
        text: `Halloween Kills is most likely going to be another film that divides the horror community, some will love it with all of its quirks, while others will hate it's addition onto the Halloweens franchise. For me personally, I can see either side of the arguments. There were definitely some points in the film I didn't like or really enjoy, but there were also some things that I did really enjoy and thought were super cool to include. \n \n
        
        One thing I thoroughly enjoyed, was that they very consciously included the three ICONIC masks from Halloween 3: Season Of The Witch. Which again some people, like myself, will thoroughly enjoy that, while others will hate the slightest mention of that film. \n \n

        As a whole, I would say that Kills is not a terrible film, or even the worst in the long running franchise (now out of 12 films), but I would definitely say that it doesn't slay the other films either. The premise around this film sounds alright, I mean we get our favorite Final Girl back, well sort of, considering she actually isn't in it all that much. And I would imagine any hardcore fan would probably be fairly upset about that move, since most people were probably hoping to see Laurie in some more action. The only idea I have is that maybe they saved her screen time, so when we get our final film in this new sort of trilogy, we get Laurie in full glory. I mean we can hope that is the case, but in any case, Laurie's absence is most certainly missed. \n \n

        I think I can safely say that I was sad Laurie wasn't as active in this film. She is definitely one of my favorite Final Girls and just a favorite actress as well. I just can't see why they thought having her not know Michael wasn't dead for a good portion of the film was a good idea. The other thing I don't quite understand, is the fact the entire film we here the whole, "Evil dies tonight" thing, where we are supposed to return to feeling like Michael is resilient but still killable. When in reality, I was left feeling the opposite. I mean there is an entire scene where the Haddonfield residents are beating on Michael, and yet he still doesn't really go down for the count. He still comes back, as he always has. And now I understand that we still have a final film to watch/happen. But what was the point in trying to make us feel like this was a possible scenario, only to have that rug ripped from under us. \n \n

        I suppose we will have to wait for Halloween Ends, and hope that all our questions are answered then. \n`
    },
    { 
        name: 'Escape Room: Tournament Of Champions', 
        src: '/filmreviews/escape-room_tournament-of-champions', 
        number: 2,
        alt: 'escape room 2 review',
        text: ` The sequel to a film I thought I would enjoy, but in the end I was fairly disappointed in how the entire film plays out. The film isn't terrible, but it felt like it fell short on many things it could have exceeded in. \n \n

        Maybe the reason it fell flat was because, more than likely, this was just a way for them to make more money while banking in on the craze of escape rooms. Now don't get me wrong, I too enjoy escape rooms, and the thought of that one may be of nefarious intent, is scary. But in the end they could've just left this film out entirely. \n \n

        Or even, they could have brought this backstory they so graciously gave us in the second film, in the first instead. Because honestly, I did think the backstory was interesting. But I also know the backstory was merely a way for them to milk the cow some more for a third film. \n`
    },
    // { 
    //     name: '', 
    //     src: '', 
    //     alt: ' review' 
    // },
    // { 
    //     name: '', 
    //     src: '', 
    //     alt: ' review' 
    // },
    // { 
    //     name: '', 
    //     src: '', 
    //     alt: ' review' 
    // }
];

export function getFilmReviews() {
    return filmreviews;
}

export function getFilmReview(number) {
    return filmreviews.find(
        filmReview => filmReview.number === number
    );
}