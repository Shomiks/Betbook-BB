import {
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
    AlternativeGoalsTips
} from "./entities"
import uuid from 'uuid';

class DataProvider {

    constructor() {
    }

    static getMatches1(){
        const table = [];
        _.times(9, () => {
            table.push( new MatchInfo({
                 id: uuid.v4(),
                 homeTeam : "Burnley",
                 guestTeam : "Bournemouth",
                 date : "13.05.2018 20:45",
                 homeTeamWin : "2.39",
                 draw : "3.50",
                 guestTeamWin : "3.10",
            }));
        })

        return table;
    }

    static getHeaderButtonsTimeline(){
        const headerButtons = [];
        headerButtons.push(
            new HeaderButtons({
                id: uuid.v4(),
                btnLeft: "Me",
                btnRight: "Global"
            })
        );
        
        return headerButtons;
    }

    static getHeaderButtonsTickets() {
        const headerButtons = [];
        headerButtons.push(
            new HeaderButtons({
                id: uuid.v4(),
                btnLeft: "Active",
                btnRight: "History"
            })
        );

        return headerButtons;
    }

    static getUserTextPost(){
        const userInfo = [];
        userInfo.push(
            new Posts({
                posts: [
                    new UserPost({
                        personData: new UserData({
                            id: uuid.v4(),
                            userName: 'Aleksandar Aleksovski',
                        }),
                        statusPost: new StatusPost({
                            id: uuid.v4(),
                            textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla lorem, laoreet cursus dapibus quis, porttitor at ante. Vivamus lectus diam, egestas quis porttitor vel.',
                            postSecondaryText: '20 min ago',
                        }),
                        statusIcons: new StatusIcons({
                            id: uuid.v4(),
                            comments: 2,
                            likes: 2,
                            bookmarks: 2
                        })
                    })
                ]
            })
            
        );

        return userInfo;
    }

    static getTicketPostData(){
        const ticketData = [];
        ticketData.push(
            new TicketPostData ({
                personData: new UserData({
                    id: uuid.v4(),
                    userName: 'Marko Markovski'
                }),
                statusPost: new StatusPost ({
                    id: uuid.v4(),
                    secondaryText: '20 min ago'
                }),
                matches: [
                     new TicketMatchData({
                        id: uuid.v4(),
                        winner: 'Liverpool',
                        teams: 'Liverpool - Huddersfield',
                        coefficient: 1.30
                    }),
                     new TicketMatchData({
                        id: uuid.v4(),
                        winner: 'Chelsea',
                        teams: 'Chelsea - Manchester United',
                        coefficient: 1.90
                    }),
                     new TicketMatchData({
                        id: uuid.v4(),
                        winner: 'Under 2.5',
                        teams: 'Everton - Crystal Palace',
                        coefficient: 1.60
                    })
                ],
                statusIcons: new StatusIcons({
                    id: uuid.v4(),
                    comments: 2,
                    likes: 2,
                    bookmarks: 2
                })
            })
        )

        return ticketData;
    }

    static selectTicketHeaderData(){
        const headerText = [];
        headerText.push(
            new HeaderTextData({
                id: uuid.v4(),
                textLeft: 'CANCEL',
                title: 'Select Ticket',
                textRight: 'DONE'
            })
        );

        return headerText;
    }
    
    static socialNewPostHeaderData(){
        const headerText = [];
        headerText.push(
            new HeaderTextData({
                id: uuid.v4(),
                textLeft: 'CANCEl',
                title: 'New Post',
                textRight: 'SHARE'
            })
        );

        return headerText;
    }

    static socialNewPostUserData(){
        const userInfo = [];
        userInfo.push(
            new UserData({
                id: uuid.v4(),
                userName: 'Me, myself and I'
            })
        );

        return userInfo;
    }

    static socialLeaderboardsData(){
        const data = [];
        data.push(
            new LeaderboardsData({
                headerIcons: new HeaderIconsData({
                    id: uuid.v4(),
                    title: 'Leaderboards'
                    // icons:
                }),
                leaderboardsBtns: new LeaderboardsBtns({
                    id: uuid.v4(),
                    btnLeft: 'Tickets',
                    btnRight: 'Singles'
                }),
                leaderboards: [
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 1,
                        secondaryText: 'points / successRate / koef???',
                        percent: 89
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 2,
                        secondaryText: 'points / successRate / koef???',
                        percent: 87
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 3,
                        secondaryText: 'points / successRate / koef???',
                        percent: 83
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 4,
                        secondaryText: 'points / successRate / koef???',
                        percent: 79
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 5,
                        secondaryText: 'points / successRate / koef???',
                        percent: 77
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 6,
                        secondaryText: 'points / successRate / koef???',
                        percent: 72
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 7,
                        secondaryText: 'points / successRate / koef???',
                        percent: 70
                    }),
                    new Leaderboards({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        place: 8,
                        secondaryText: 'points / successRate / koef???',
                        percent: 65
                    })
                ]
            })
        );

        return data;
    }

    static commentsOnPostData(){
        const comments = [];
        comments.push(
            new Comments({
                headerIcons: new HeaderIconsData({
                    id: uuid.v4(),
                    title: 'Comments'
                    // icons:
                }),
                postData: [
                    new CommentData({
                        userData :new UserData({
                            id: uuid.v4(),
                            userName: 'Aleksandar Aleksovski',
                        }),
                        comment: new StatusPost({
                            id: uuid.v4(),
                            secondaryText: '20 min ago',
                            textPost: 'Lorem Ipsum 1'
                        }),
                    }),
                    new CommentData({
                        userData: new UserData({
                            id: uuid.v4(),
                            userName: 'Pero Perovski',
                        }),
                        comment: new StatusPost({
                            id: uuid.v4(),
                            secondaryText: '19 min ago',
                            textPost: 'Lorem Ipsum 2'
                        }),
                    }),
                    new CommentData({
                        userData: new UserData({
                            id: uuid.v4(),
                            userName: 'Mite Mitev',
                        }),
                        comment: new StatusPost({
                            id: uuid.v4(),
                            secondaryText: '15 min ago',
                            textPost: 'Lorem Ipsum 3'
                        }),
                    }),   
                ]
            })
        );

        return comments;
    };

    static getUserProfile(){
        const userInfo = [];
        userInfo.push(
            new UserData({
                id: uuid.v4(),
                userName: 'Me, myself and I',
                secondaryText: 'Member since November 2018'
            })
        );

        return userInfo;
    }

    static getUserProfilePosts(){
        const userInfo = [];
        userInfo.push(
            new Posts({
                posts: [
                    new UserPost({
                        personData: new UserData({
                            id: uuid.v4(),
                            userName: 'Me, myself and I',
                        }),
                        statusPost: new StatusPost({
                            id: uuid.v4(),
                            textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla lorem, laoreet cursus dapibus quis, porttitor at ante. Vivamus lectus diam, egestas quis porttitor vel.',
                            postSecondaryText: '20 min ago',
                        }),
                        statusIcons: new StatusIcons({
                            id: uuid.v4(),
                            comments: 2,
                            likes: 6,
                            bookmarks: 0
                        })
                    }),
                    new UserPost({
                        personData: new UserData({
                            id: uuid.v4(),
                            userName: 'Me, myself and I',
                        }),
                        statusPost: new StatusPost({
                            id: uuid.v4(),
                            textPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla lorem, laoreet cursus dapibus quis, porttitor at ante. Vivamus lectus diam, egestas quis porttitor vel.',
                            postSecondaryText: '22.10.2018',
                        }),
                        statusIcons: new StatusIcons({
                            id: uuid.v4(),
                            comments: 2,
                            likes: 2,
                            bookmarks: 2
                        })
                    })
                ]
            })
        )

        return userInfo;
    }

    static getPeopleFollowing(){
        const people = [];
        people.push(
            new Following({
                people: [
                    new UserData({
                        id: uuid.v4(),
                        userName: 'Marko Markovski',
                        secondaryText: 'member since November 2018'
                    }),
                    new UserData({
                        id: uuid.v4(),
                        userName: 'Alek Aleksov ',
                        secondaryText: 'member since November 2018'
                    }),
                    new UserData({
                        id: uuid.v4(),
                        userName: 'Stefan Stefkov',
                        secondaryText: 'member since November 2018'
                    }),
                    new UserData({
                        id: uuid.v4(),
                        userName: 'Nikola Nikolovski',
                        secondaryText: 'member since November 2018'
                    }),
                    new UserData({
                        id: uuid.v4(),
                        userName: 'Petar Petrovski',
                        secondaryText: 'member since November 2018'
                    }),
                ]
            })
        );

        return people;
    }

    static getSports(){
        const sports = [];
        sports.push(
            new OfferLevel1({
                headerIcons: new HeaderIconsData({
                    id: uuid.v4(),
                    title: 'Bet Offer'
                }),
                sports: [
                    new Sport({
                        id: uuid.v4(),
                        sportName: 'My Sports'
                    }),
                    new Sport({
                        id: uuid.v4(),
                        sportName: 'Football'
                    }),
                    new Sport({
                        id: uuid.v4(),
                        sportName: 'Basketball'
                    }),
                    new Sport({
                        id: uuid.v4(),
                        sportName: 'Tennis'
                    })
                ]
            })
        )

        return sports;
    }

    static getCountries(){
        const countries = [];
        countries.push(
            new OfferLevel2({
                headerIcons: new HeaderIconsData({
                    id: uuid.v4(),
                    title: 'Football'
                }),
                countries: [
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Champions League'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'England'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Spain'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Italy'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Germany'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'France'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Portugal'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Austria'
                    }),
                    new Country({
                        id: uuid.v4(),
                        icon: '',
                        countryName: 'Poland'
                    }),
                ]
            })
        )

        return countries;
    }

    static getCountryLeagues(){
        const countryLeagues = [];
        countryLeagues.push(
            new OfferLevel3({
                headerIcons: new HeaderIconsData({
                    id: uuid.v4(),
                    title: 'England'
                }),
                leagues: [
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'Premier League'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'Championship'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'Leageue 1'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'League 2'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'League North'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'League South'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'Amateur League North'
                    }),
                    new League({
                        id: uuid.v4(),
                        icon: '',
                        leagueName: 'Amateur League South'
                    })
                ]
            })
        );

        return countryLeagues;
    }

    static getMatch(){
        const matches = [];
        matches.push(
            new MatchDetails({
                headerIcons: new HeaderIconsData({
                    id: uuid.v4(),
                    iconLeft: '',
                    title: 'Burnley vs. Bournemouth'
                }),
                matchDate: new MatchDate({
                    id: uuid.v4(),
                    date: '13.05.2018',
                    stadium: 'Selhurst Park'
                }),
                homeTeam: new Team({
                    id: uuid.v4(),
                    teamName: 'Burnley',
                    place: 13
                }),
                guestTeam: new Team({
                    id: uuid.v4(),
                    teamName: 'Bournemouth',
                    place: 18
                })
            })
        )

        return matches;
    }

    static getMatchTips(){
        const matchTips = [];
        matchTips.push(
            new Tips({
                fullTimeTips: new FullTimeTips({
                    id: uuid.v4(),
                    homeTeamWinTip: 1,
                    homeTeamWinTipCoef: 3.50,
                    drawTip: 'X',
                    drawTipCoef: 3.50,
                    guestTeamWinTip: 2,
                    guestTeamWinTipCoef: 3.10
                }),
                goalsTips: new GoalsTips({
                    id: uuid.v4(),
                    overTip: 2.5,
                    overTipCoef: 1.66,
                    underTip: 2.5,
                    underTipCoef: 2.10
                }),
                alternativeGoalsTips: new AlternativeGoalsTips({
                    id: uuid.v4(),
                    tipOne: 0.5,
                    tipOneOverCoef: 3.50,
                    tipOneUnderCoef: 3.10,
                    tipTwo: 1.5,
                    tipTwoOverCoef: 3.50,
                    tipTwoUnderCoef: 3.10,
                    tipThree: 3.5,
                    tipThreeOverCoef: 3.50,
                    tipThreeUnderCoef: 3.10,
                })
            })
        )

        return matchTips;
    }
    
}

export {
    DataProvider
};