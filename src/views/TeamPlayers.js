import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the TeamPlayers element
 *
 * @constructor
 */
const TeamPlayers = View.extend({
    templatePlayers: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templatePlayers = _.template(this.$('#template-players').html());
        this.templateError = _.template(this.$('#template-error-two').html());

        //Listen to global events for change of new club
        App.events.on('newPlayers', this.loadPlayers, this);
    },

    /**
     * Wrapper function to load the matches through the collection
     *
     * @param data
     */
    loadPlayers: function (data)
    {
        this.collection.id = data.id;
        this.collection.fetch({
            success: (collection) => this.loadPlayersSuccessHandler(collection),
            error: (collection, response) => this.loadPlayersErrorHandler(collection, response),
            headers: {
                'X-Auth-Token': '49adf94410b74d339f96cf0bfe371001'
            }
        });
    },

    /**
     * Success Handler will add HTML of players to this $el
     *
     * @param collection
     */
    loadPlayersSuccessHandler: function (collection)
    {
        this.$el.html(this.templatePlayers({players: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadPlayersErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default TeamPlayers;
