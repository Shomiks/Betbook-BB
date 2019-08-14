class MatchInfo {
    id = null;
     homeTeam = null;
     guestTeam = null;
     date = null;
     homeTeamWin = null;
     draw = null;
     guestTeamWin = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class HeaderButtons {
    id = null;
    btnLeft = null;
    btnRight = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class UserData {
    id = null;
    userName = null;
    secondaryText = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class StatusPost {
    id = null;
    textPost = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class StatusIcons {
    id = null;
    comments = null;
    likes = null;
    bookmarks = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class UserPost {
    userData = null;
    statusPost = null;
    statusIcons = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class TicketMatchData {
    id = null;
    winner = null;
    teams = null;
    coefficient = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class TicketPostData {
    personData = null;
    statusPost = null;
    matches = null;
    statusIcons = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class HeaderTextData {
    id = null;
    textLeft = null;
    title = null;
    textRight = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class LeaderboardsData {
    headerIcons = null;
    leaderboardsBtns = null;
    leaderboards = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class HeaderIconsData {
    id = null;
    title = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class LeaderboardsBtns {
    id = null;
    btnLeft = null;
    btnRight = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Leaderboards {
    id = null;
    userName = null;
    place = null;
    secondaryText = null;
    percent = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Comments {
    headerIcons = null;
    postData = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class CommentData {
    userData = null;
    comment = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Posts {
    posts = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Following {
    people = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class OfferLevel1 {
    sports = null;
    headerIcons = null;
    id = null; 

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Sport {
    id = null;
    sportName = null;
    icon = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class OfferLevel2 {
    countries = null;
    headerIcons = null;
    id = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Country {
    id = null;
    countryName = null;
    icon = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class OfferLevel3 {
    leagues = null;
    headerIcons = null;
    id = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class League {
    id = null;
    leagueName = null;
    icon = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class MatchDetails {
    headerIcons = null;
    matchDate = null;
    homeTeam = null;
    guestTeam = null;
    id = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class MatchDate {
    id = null;
    date = null;
    stadium = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Team {
    id = null;
    teamName = null;
    place = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class Tips {
    fullTimeTips = null;
    goalsTips = null;
    alternativeGoalsTips = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class FullTimeTips {
    id = null;
    homeTeamWinTip = null;
    homeTeamWinTipCoef = null;
    drawTip = null;
    drawTipCoef = null;
    guestTeamWinTip = null;
    guestTeamWinTipCoef = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class GoalsTips {
    id = null;
    overTip = null;
    overTipCoef = null;
    underTip = null;
    underTipCoef = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class AlternativeGoalsTips {
    id = null;
    tipOne = null;
    tipOneOverCoef = null;
    tipOneUnderCoef = null;
    tipTwo = null;
    tipTwoOverCoef = null;
    tipTwoUnderCoef = null;
    tipThree = null;
    tipThreeOverCoef = null;
    tipThreeUnderCoef = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class OnlineTicket {
    onlineMatches = null;
    userBalance = null;
    ticketInfo = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class OnlineMatch {
    id = null;
    winnerTeam = null;
    fullTimeResult = null;
    match = null;
    coefficient = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class UserBalance {
    id = null;
    balance = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

class TicketInfo {
    id = null;
    folds = null;
    coefficientSum = null;

    constructor(config) {
        const keys = Object.keys(config);
        keys.forEach(key => {
            this[key] = config[key]
        });
    }
}

export {
    MatchInfo,
    HeaderButtons,
    UserData,
    StatusIcons,
    StatusPost,
    UserPost,
    TicketMatchData,
    TicketPostData,
    HeaderTextData,
    LeaderboardsData,
    HeaderIconsData,
    LeaderboardsBtns,
    Leaderboards,
    Comments,
    CommentData,
    Posts,
    Following,
    OfferLevel1,
    Sport,
    OfferLevel2,
    Country,
    OfferLevel3,
    League,
    MatchDetails,
    MatchDate,
    Team,
    Tips,
    FullTimeTips,
    GoalsTips,
    AlternativeGoalsTips,
    OnlineTicket,
    OnlineMatch,
    UserBalance,
    TicketInfo
};