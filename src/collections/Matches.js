import {Collection} from 'backbone';
import Match from '../models/Match';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const Matches = Collection.extend({
    id: '',
    model: Match,
    url: function () {
        return 'http://api.football-data.org/v1/teams/' + this.id + '/fixtures';
    }
});

export default Matches;
