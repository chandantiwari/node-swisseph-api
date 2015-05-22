/**
 * Created by chandan on 09/05/15.
 */

'use strict';


var should = require('should'),
    assert = require('assert');

describe(' Unit Tests ', function(){

    var astronomy = require('../core/astronomy');

    it('should return the julian day for 20th May 2015 as 2457163', function(done){

        var data = {

            date : 20,
            month : 5,
            year: 2015,
            hour : 21,
            minute : 23,
            timezone : 5.5
        };

        astronomy.getJulianDay(data, function(error, response){

            (error === null).should.be.equal(true);

            response.should.not.be.equal(undefined);
            response.should.be.a.Number;
            response.should.be.equal(2457163.1618055557);
            done();
        });
    });

    it('should return the julian day for 2nd March 1905 as 2457163', function(done){

        var data = {

            date : 2,
            month : 3,
            year: 1905,
            hour : 8,
            minute : 20,
            timezone : 0
        };

        astronomy.getJulianDay(data, function(error, response){

            (error === null).should.be.equal(true);

            response.should.not.be.equal(undefined);
            response.should.be.a.Number;
            response.should.be.equal(2416906.847222222);
            done();
        });
    });


    it('should return the julian day for 10th April 2020 as 2457163', function (done) {

        var data = {

            date: 10,
            month: 4,
            year: 2020,
            hour: 8,
            minute: 20,
            timezone: 0
        };

        astronomy.getJulianDay(data, function (error, response) {

            (error === null).should.be.equal(true);

            response.should.not.be.equal(undefined);
            response.should.be.a.Number;
            response.should.be.equal(2458949.847222222);
            done();
        });
    });

    it('should return the planetary positions of 10 solar bodies including Moon ', function(done){

        var data = {

            date: 10,
            month: 4,
            year: 2020,
            hour: 8,
            minute: 20,
            timezone: 0
        };

        astronomy.getSolarSystemBodies(data, function(error, response){

            (error === null).should.be.equal(true);
            response.should.be.a.Object;
            done();
        });

    });

    it('should return the sun astronomical position', function (done) {
        var data = {

            date: 10,
            month: 4,
            year: 2015,
            hour: 6,
            minute: 38,
            timezone: 0
        };

        astronomy.getLunarPosition(data, function (error, response) {

            (error === null).should.be.equal(true);
            response.should.be.a.Object;
            done();
        });
    });

});