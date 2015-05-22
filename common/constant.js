/**
 * Created by chandan on 22/05/15.
 */

var constant = {};

constant.SUN = 0;

// Base planets
constant.MOON = 1;
constant.MERCURY = 2;
constant.VENUS = 3;
constant.EARTH = 14;
constant.MARS = 4;
constant.JUPITER = 5;
constant.SATURN = 6;
constant.URANUS = 7;
constant.NEPTUNE = 8;
constant.PLUTO = 9;

// Moon nodes
constant.MEAN_NODE = 10;
constant.TRUE_NODE = 11;
constant.MEAN_APOG = 12;
constant.OSCU_APOG = 13;
constant.INTP_APOG = 21;
constant.INTP_PERG = 22;

// Base asteroids
constant.CHIRON = 15;
constant.PHOLUS = 16;
constant.CERES = 17;
constant.PALLAS = 18;
constant.JUNO = 19;
constant.VESTA = 20;

// Hamburger or Uranian "planets"
constant.CUPIDO = 40;
constant.HADES = 41;
constant.ZEUS = 42;
constant.KRONOS = 43;
constant.APOLLON = 44;
constant.ADMETOS = 45;
constant.VULKANUS = 46;
constant.POSEIDON = 47;

// Other fictitious bodies
constant.ISIS = 48;
constant.NIBIRU = 49;
constant.HARRINGTON = 50;
constant.NEPTUNE_LEVERRIER = 51;
constant.NEPTUNE_ADAMS = 52;
constant.PLUTO_LOWELL = 53;
constant.PLUTO_PICKERING = 54;
constant.VULCAN = 55;
constant.WHITE_MOON = 56;
constant.PROSERPINA = 57;
constant.WALDEMATH = 58;

module.exports = constant;