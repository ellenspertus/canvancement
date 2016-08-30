// ==UserScript==
// @name        QuizWiz : Partial Credit
// @namespace   https://github.com/jamesjonesmath/canvancement
// @description Regrading and speed enhancements for Canvas quizzes
// @include     https://*.instructure.com/courses/*/quizzes/*/history?*
// @version     1
// @grant       none
// ==/UserScript==
requirejs([ 'https://cdn.rawgit.com/jamesjonesmath/canvancement/master/quizzes/quizwiz/src/quizwiz-engine.js' ], function(QuizWiz) {
  'use strict';

  var config = {
    // Regrading methods may be 'disabled', 'enabled', or 'autorun'
    'methods' : {
      'unanswered' : 'enabled',
      'full_points' : 'disabled',
      'ma_allnone' : 'disabled',
      'ma_correct' : 'enabled',
      'ma_difference' : 'disabled',
      'fill_in_blanks' : 'disabled',
      'dropdowns' : 'disabled'
    },
    // Speed enhancements may be true or false
    'autoExpandComments' : true,
    'duplicateQuestionHeader' : true,
    'showButtonCounts' : true
  };

  QuizWiz(config);
});