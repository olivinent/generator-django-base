/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('Django base generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('django-base', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates top level files', function (done) {
    var expected = [
      // Top level files
      '.gitignore',
      'package.json',
      'bower.json',
      'README.md',
      'requirements.txt',

      // Requirements files
      'requirements/base.txt',
      'requirements/test.txt',
      'requirements/local.txt',
      'requirements/production.txt'
    ];

    helpers.mockPrompt(this.app, {
      'database': 'sqlite3',
      'projectName': 'test_project',
    });

    this.app.options['skip-install'] = true;
    this.app.on('end', function() {
      assert.file(expected);
      done();
    }).run({}, function(){});
    done();
  });
});
