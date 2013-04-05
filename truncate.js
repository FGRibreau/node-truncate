/*global module:true*/
/*jslint nomen:true*/
/**
 * @module Utility
 */
(function (context, undefined) {
    'use strict';

    var DEFAULT_TRUNCATE_SYMBOL = '...',
        URL_REGEX               = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g; // Simple regexp

    function __appendEllipsis(string, maxLength, options, content){
        if(string.length <= maxLength || !options.ellipsis){return content;}
        content += options.ellipsis;
        return content;
    }
    /**
     * Truncate HTML string and keep tag safe.
     *
     * @method truncate
     * @param {String} string string needs to be truncated
     * @param {Number} maxLength length of truncated string
     * @param {Object} options (optional)
     * @param {Boolean} [options.keepImageTag] flag to specify if keep image tag, false by default
     * @param {Boolean|String} [options.ellipsis] omission symbol for truncated string, '...' by default
     * @return {String} truncated string
     */
    function truncate(string, maxLength, options) {
        var total   = 0,          // record how many characters we traced so far
            content = '',         // truncated text storage
            matches = true,
            result,
            index;

        options          = options || {};
        options.ellipsis = (typeof options.ellipsis === "undefined") ? DEFAULT_TRUNCATE_SYMBOL : options.ellipsis;

        if (total >= maxLength) {
            return __appendEllipsis(string, maxLength, options, content);
        }

        URL_REGEX.lastIndex = 0;
        matches = URL_REGEX.exec(string);

        if(!matches || matches.index >= maxLength){
            content += string.substring(0, maxLength - total);
            return __appendEllipsis(string, maxLength, options, content);
        }

        while(matches){
            result  = matches[0];
            index   = matches.index;
            content += string.substring(0, (index + result.length) - total);
            string  = string.substring(index + result.length);
            matches = URL_REGEX.exec(string);
        }

        return __appendEllipsis(string, maxLength, options, content);
    }

    if ('undefined' !== typeof module && module.exports) {
        module.exports = truncate;
    } else {
        context.truncate = truncate;
    }
}(String));
