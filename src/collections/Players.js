import {Collection} from 'backbone';
import Player from '../models/Player';

/**
 * Collection for the players endpoint
 *
 * @constructor
 */
const Players = Collection.extend({
    id: '',
    model: Player,
    url: function () {
        return 'http://api.football-data.org/v1/teams/' + this.id + '/players';
    }
});

export default Players;
