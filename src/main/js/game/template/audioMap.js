define({
    // IMPLEMENT: Map SFX to channels

    /* 
     * If audio assets are named nicely you can do:
     * {
     *  fileName: channelNumber
     * }
     * 
     * Otherwise use a nice name for the keys and include the filename and channel as an array:
     * {
     *  soundName: ['Ugly_sound_file_V2-final', channelNumber]
     * }
     */

    music: ['MusicLoop', 0],
    winTerminator: ['MusicTermWin', 1],
    loseTerminator: ['MusicTermLose', 1],
    click: ['Click', 4],
    costDown: ['BetDown', 1],
    costUp: ['BetUp', 2],    
    costMax: ['BetMax', 3],

    /*
     * Audio groups
     * A game can include multiple variations of each of these sounds. Ensure each variation starts
     * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
     * item in the group will be used.
     */

    playerNumber: ['YourNumberSelect', 2],
    playerNumber_1: ['YourNumberSelect2', 3],
    playerNumber_2: ['YourNumberSelect3', 4],
    match: ['Match', 5],
    match_1: ['Match', 6],
    match_2: ['Match', 7],
    instantWin: ['BonusWin', 1],

    /*
     * Optional audio
     * The following audio is optional and will be ignored if not included
     */

    //  buy: ['BuyButton', 4],
    //  revealAll: ['RevealAllButton', 4],
});
