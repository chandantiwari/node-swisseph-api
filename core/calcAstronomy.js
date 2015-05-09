/**
 * Created by chandan on 09/05/15.
 */

var async = require('node-swisseph');
var swisseph = require('node-swisseph');

var flag = swisseph.FLG_SPEED;

// set ephemeris data path
swisseph.set_ephe_path (__dirname + '/../ephe');