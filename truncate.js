/*global module:true*/
/*jslint nomen:true*/
/**
 * @module Utility
 */
(function (context, undefined) {
    'use strict';

    var DEFAULT_TRUNCATE_SYMBOL = '…',
        // Limit emails to no more than about 600 chars, well over the max of ~300.
        // cf. RFC: https://www.rfc-editor.org/errata_search.php?eid=1690
        URL_REGEX = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]{1,300}@(.{1,300}\.)[a-zA-Z]{2,3})/g;

    function __appendEllipsis(string, options, content) {
        if (content.length === string.length || !options.ellipsis) {
            return content;
        }
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
     * @param {Boolean|String} [options.ellipsis] omission symbol for truncated string, '...' by default
     * @return {String} truncated string
     */
    function truncate(string, maxLength, options) {
        var content = '', // truncated text storage
            matches = true,
            remainingLength = maxLength,
            result,
            index;

        options = options || {};
        options.ellipsis = (typeof options.ellipsis === "undefined") ? DEFAULT_TRUNCATE_SYMBOL : options.ellipsis;

        if (!string || string.length === 0) {
            return '';
        }

        matches = true;
        while (matches) {
            URL_REGEX.lastIndex = content.length;
            matches = URL_REGEX.exec(string);
            // Don't try to retain URLs longer than 3k chars, well over the 99th percentile of ~347
            if (!matches || (matches.index - content.length) >= remainingLength || URL_REGEX.lastIndex >= (maxLength + 3000)) {
                content += string.substring(content.length, maxLength);
                return __appendEllipsis(string, options, content, maxLength);
            }

            result = matches[0];
            index = matches.index;
            content += string.substring(content.length, index + result.length);
            remainingLength -= index + result.length;

            if (remainingLength <= 0) {
                break;
            }
        }

        return __appendEllipsis(string, options, content, maxLength);
    }

    if ('undefined' !== typeof module && module.exports) {
        module.exports = truncate;
    } else {
        context.truncate = truncate;
    }
}(String));
