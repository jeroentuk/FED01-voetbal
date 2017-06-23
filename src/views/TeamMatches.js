import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
const TeamMatches = View.extend({
    templateMatches: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateMatches = _.template(this.$('#template-matches').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new club
        App.events.on('newClub', this.loadMatches, this);
    },

    /**
     * Wrapper function to load the matches through the collection
     *
     * @param data
     */
    loadMatches: function (data)
    {
        this.collection.id = data.id;
        this.collection.fetch({
            success: (collection) => this.loadMatchesSuccessHandler(collection),
            error: (collection, response) => this.loadMatchesErrorHandler(collection, response),
            headers: {
                'X-Auth-Token': '49adf94410b74d339f96cf0bfe371001'
            }
        });
    },

    /**
     * Success Handler will add HTML of matches to this $el
     *
     * @param collection
     */
    loadMatchesSuccessHandler: function (collection)
    {
        this.$el.html(this.templateMatches({matches: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadMatchesErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default TeamMatches;
