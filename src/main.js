import _ from 'underscore';
import {Events} from 'backbone';
import Matches from './collections/Matches';
import Players from './collections/Players';
import TeamLinks from './views/TeamLinks';
import TeamPlayerLinks from './views/TeamPlayerLinks';
import TeamMatches from './views/TeamMatches';
import TeamPlayers from './views/TeamPlayers';


(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };
    
    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();

        let matchesCollection = new Matches();
        new TeamLinks({el: "#team-links"});
        new TeamMatches({el: "#team-matches", collection: matchesCollection});
        let playersCollection = new Players();
        new TeamPlayerLinks({el: "#team-players"});
        new TeamPlayers({el: "#team-playerslist", collection: playersCollection});


        Backbone.history.start({pushState: true, root: '/FED01/voetbal_jeroen/'});
    };

    window.addEventListener('load', init);
})();
