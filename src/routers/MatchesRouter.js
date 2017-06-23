import {Router} from 'backbone';

/**
 * Router for the matches URL's
 *
 * @constructor
 */
const MatchesRouter = Router.extend({
    routes: {
        'team/:id': 'clubAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param league
     * @param club
     */
    clubAction: function (id)
    {
        App.events.trigger('newClub', {
            id: id
        });
    }
});

export default MatchesRouter;
