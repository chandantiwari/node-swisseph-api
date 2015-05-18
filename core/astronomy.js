/**
 * Created by chandan on 09/05/15.
 */
var swisseph = require('node-swisseph');
var async = require('async');

var flag = swisseph.FLG_SPEED;
swisseph.set_ephe_path(__dirname + '/../ephe');

function getCorrectedUTCTime(data)
{
    var utcDate,
        whole,
        fraction,
        correctedMin,
        correctedHour;

    if(data.timezone >= 0)
    {
        whole = Math.floor(data.timezone);
        fraction = data.timezone - whole;
    }
    else
    {
        whole  = Math.ceil(data.timezone);
        fraction = data.timezone - whole;
    }
    correctedHour = data.hour - whole;
    correctedMin = data.minute - (fraction * 60);
    utcDate = new Date(data.year, data.month - 1, data.date, correctedHour, correctedMin);

    return utcDate;
}

function getJulianDay(data, callback)
{
    var utcDate = getCorrectedUTCTime(data);
    swisseph.julday(utcDate.getFullYear(), utcDate.getMonth()+1, utcDate.getDate(), utcDate.getHours() + (utcDate.getMinutes()/60), swisseph.GREG_CAL, function (julday_ut) {
        callback(null, julday_ut);
    });
}


// calculate everything starting from planet positions, speeds, jd, ayanamsha, ascendant.
function calcAstronomicalData(data, callback)
{
    getJulianDay(data, function(error, jd){

        if(error)
        {
            return callback(error);
        }

        async.parallel({

            sun : function(callback){
                swisseph.calc_ut(jd, swisseph.SUN, flag, function (body)
                {
                    callback(null, body);
                });
            },
            moon : function(callback){
                swisseph.calc_ut(jd, swisseph.MOON, flag, function (body)
                {
                    callback(null, body);
                });
            },
            mars : function(callback){
                swisseph.calc_ut(jd, swisseph.MARS, flag, function (body)
                {
                    callback(null, body);
                });
            },
            mercury : function(callback){
                swisseph.calc_ut(jd, swisseph.MERCURY, flag, function (body)
                {
                    callback(null, body);
                });
            },
            jupiter : function(callback){
                swisseph.calc_ut(jd, swisseph.JUPITER, flag, function (body)
                {
                    callback(null, body);
                });
            },
            venus : function(callback){
                swisseph.calc_ut(jd, swisseph.VENUS, flag, function (body)
                {
                    callback(null,body);
                });
            },
            saturn : function(callback){
                swisseph.calc_ut(jd, swisseph.SATURN, flag, function (body)
                {
                    callback(null, body);
                });
            },
            uranus : function(callback){
                swisseph.calc_ut(jd, swisseph.URANUS, flag, function (body)
                {
                    callback(null, body);
                });
            },
            neptune : function(callback){
                swisseph.calc_ut(jd, swisseph.NEPTUNE, flag, function (body)
                {
                    callback(null, body);
                });
            },
            pluto : function(callback){
                swisseph.calc_ut(jd, swisseph.PLUTO, flag, function (body)
                {
                    callback(null, body);
                });
            }

        }, function(error, results){

            if(!error)
            {
                return callback(null, results);
            }
        });

    });

}

var api = {

    getJulianDay : function(data, callback){
        getJulianDay(data, callback);
    },

    getSolarSystemBodies : function(data, callback){
        calcAstronomicalData(data, callback);
    },

    getLunarPosition : function(data, callback){

    },

    getSolarPosition : function(data, callback){

    },

    getBodyPositionById : function(data, callback){

    }
};

module.exports = api;