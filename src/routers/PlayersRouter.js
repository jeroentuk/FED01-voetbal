import {Router} from 'backbone';

/**
 * Router for the matches URL's
 *
 * @constructor
 */
const PlayersRouter = Router.extend({
    routes: {
        'team/:id': 'playerAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param league
     * @param club
     */
    playerAction: function (id)
    {
        App.events.trigger('newPlayers', {
            id: id
        });
    }
});

export default PlayersRouter;
