'use strict';

global.mocha = require('mocha');
global.chai = mocha.chai;
global.expect = require("chai").expect;
global.sinon = require("sinon");
process.env.NODE_ENV = "test";