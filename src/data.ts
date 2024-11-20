const akali = 1;
const ambessa = 2;
const amumu = 3;
const blitzcrank = 4;
const caitlyn = 5;
const camille = 6;
const cassiopeia = 7;
const corki = 8;
const darius = 9;
const draven = 10;
const drMundo = 11;
const ekko = 12;
const elise = 13;
const ezreal = 14;
const gangplank = 15;
const garen = 16;
const heimerdinger = 17;
const illaoi = 18;
const irelia = 19;
const jayce = 20;
const jinx = 21;
const kogMaw = 22;
const leblanc = 23;
const leona = 24;
const loris = 25;
const lux = 26;
const maddie = 27;
const malzahar = 28;
const mordekaiser = 29;
const morgana = 30;
const nami = 31;
const nocturne = 32;
const nunu = 33;
const powder = 34;
const rell = 35;
const renata = 36;
const renni = 37;
const rumble = 38;
const scar = 39;
const sett = 40;
const sevika = 41;
const silco = 42;
const singed = 43;
const smeech = 44;
const steb = 45;
const swain = 46;
const tristana = 47;
const trundle = 48;
const twistedFate = 49;
const twitch = 50;
const urgot = 51;
const vander = 52;
const vex = 53;
const vi = 54;
const violet = 55;
const vladimir = 56;
const zeri = 57;
const ziggs = 58;
const zoe = 59;
const zyra = 60;

export const Trait = {
  // origins
  academy: [ezreal, heimerdinger, jayce, leona, lux],
  automata: [amumu, blitzcrank, kogMaw, malzahar, nocturne],
  blackRose: [cassiopeia, elise, leblanc, morgana, vladimir],
  chemBaron: [renata, renni, sevika, silco, singed, smeech],
  conqueror: [ambessa, darius, draven, mordekaiser, rell, swain],
  emissary: [ambessa, garen, nami, tristana],
  enforcer: [caitlyn, camille, loris, maddie, steb, twistedFate, vi],
  experiment: [drMundo, nunu, twitch, urgot, zyra],
  family: [powder, vander, violet],
  firelight: [ekko, scar, zeri],
  highRoller: [sevika],
  junkerKing: [rumble],
  rebel: [akali, ezreal, illaoi, irelia, jinx, sett, vex, zoe],
  scrap: [corki, ekko, gangplank, powder, rumble, trundle, ziggs],

  // classes
  ambusher: [camille, ekko, jinx, powder, smeech],
  artillerist: [corki, ezreal, tristana, urgot],
  bruiser: [elise, nunu, renni, sett, steb, trundle],
  dominator: [blitzcrank, cassiopeia, drMundo, mordekaiser, silco, ziggs],
  formSwapper: [elise, gangplank, jayce, swain],
  pitFighter: [draven, gangplank, sevika, urgot, vi, violet],
  quickstriker: [akali, ambessa, nocturne, twistedFate],
  sentinel: [illaoi, irelia, leona, loris, rell, rumble, singed],
  sniper: [caitlyn, kogMaw, maddie, twitch, zeri],
  sorcerer: [leblanc, lux, nami, swain, vladimir, zoe, zyra],
  visionary: [heimerdinger, malzahar, morgana, nunu, rell, renata, vex],
  watcher: [amumu, darius, garen, scar, vander, vladimir],

  // team-up
  // geniuses: [ekko, heimerdinger],
  // martialLaw: [ambessa, caitlyn],
  // menaces: [powder, silco],
  // reunion: [ekko, vi],
  // sisters: [vi, jinx],
  // unlikelyDuo: [jinx, sevika],
  // whatCloudHaveBeen: [vander, silco],
};

export type Champion = {
  // id: string;
  k: number;
  c: number;
  t: number[][];
  img: string;
};

export const champions: { [key: string]: Champion } = {
  akali: {
    k: akali,
    c: 2,
    t: [Trait.rebel, Trait.quickstriker],
    img: 'Akali.png',
  },
  ambessa: {
    k: ambessa,
    c: 4,
    t: [Trait.conqueror, Trait.emissary, Trait.quickstriker],
    img: 'Ambessa.png',
  },
  amumu: {
    k: amumu,
    c: 1,
    t: [Trait.automata, Trait.watcher],
    img: 'Amumu.png',
  },
  blitzcrank: {
    k: blitzcrank,
    c: 3,
    t: [Trait.automata, Trait.dominator],
    img: 'Blitzcrank.png',
  },
  caitlyn: {
    k: caitlyn,
    c: 5,
    t: [Trait.enforcer, Trait.sniper],
    img: 'Caitlyn.png',
  },
  camille: {
    k: camille,
    c: 3,
    t: [Trait.enforcer, Trait.ambusher],
    img: 'Camille.png',
  },
  cassiopeia: {
    k: cassiopeia,
    c: 3,
    t: [Trait.blackRose, Trait.dominator],
    img: 'Cassiopeia.png',
  },
  corki: {
    k: corki,
    c: 4,
    t: [Trait.scrap, Trait.artillerist],
    img: 'Corki.png',
  },
  darius: {
    k: darius,
    c: 1,
    t: [Trait.conqueror, Trait.watcher],
    img: 'Darius.png',
  },
  drMundo: {
    k: drMundo,
    c: 4,
    t: [Trait.experiment, Trait.dominator],
    img: 'DrMundo.png',
  },
  draven: {
    k: draven,
    c: 1,
    t: [Trait.conqueror, Trait.pitFighter],
    img: 'Draven.png',
  },
  ekko: {
    k: ekko,
    c: 4,
    t: [Trait.firelight, Trait.ambusher, Trait.scrap],
    img: 'Ekko.png',
  },
  elise: {
    k: elise,
    c: 4,
    t: [Trait.blackRose, Trait.bruiser, Trait.formSwapper],
    img: 'Elise.png',
  },
  ezreal: {
    k: ezreal,
    c: 3,
    t: [Trait.academy, Trait.artillerist, Trait.rebel],
    img: 'Ezreal.png',
  },
  gangplank: {
    k: gangplank,
    c: 3,
    t: [Trait.scrap, Trait.formSwapper, Trait.pitFighter],
    img: 'Gangplank.png',
  },
  garen: {
    k: garen,
    c: 4,
    t: [Trait.emissary, Trait.watcher],
    img: 'Garen.png',
  },
  heimerdinger: {
    k: heimerdinger,
    c: 4,
    t: [Trait.academy, Trait.visionary],
    img: 'Heimerdinger.png',
  },
  illaoi: {
    k: illaoi,
    c: 4,

    t: [Trait.rebel, Trait.sentinel],
    img: 'Illaoi.png',
  },
  irelia: {
    k: irelia,
    c: 1,
    t: [Trait.rebel, Trait.sentinel],
    img: 'Irelia.png',
  },
  jayce: {
    k: jayce,
    c: 5,
    t: [Trait.academy, Trait.formSwapper],
    img: 'Jayce.png',
  },
  jinx: {
    k: jinx,
    c: 5,
    t: [Trait.rebel, Trait.ambusher],
    img: 'Jinx.png',
  },
  kogMaw: {
    k: kogMaw,
    c: 3,
    t: [Trait.automata, Trait.sniper],
    img: 'KogMaw.png',
  },
  leblanc: {
    k: leblanc,
    c: 5,
    t: [Trait.blackRose, Trait.sorcerer],
    img: 'Leblanc.png',
  },
  leona: {
    k: leona,
    c: 2,
    t: [Trait.academy, Trait.sentinel],
    img: 'Leona.png',
  },
  loris: {
    k: loris,
    c: 3,
    t: [Trait.enforcer, Trait.sentinel],
    img: 'Loris.jpg',
  },
  lux: {
    k: lux,
    c: 1,
    t: [Trait.academy, Trait.sorcerer],
    img: 'Lux.png',
  },
  maddie: {
    k: maddie,
    c: 1,
    t: [Trait.enforcer, Trait.sniper],
    img: 'Maddie.jpg',
  },
  malzahar: {
    k: malzahar,
    c: 5,
    t: [Trait.automata, Trait.visionary],
    img: 'Malzahar.png',
  },
  mordekaiser: {
    k: mordekaiser,
    c: 5,
    t: [Trait.conqueror, Trait.dominator],
    img: 'Mordekaiser.png',
  },
  morgana: {
    k: morgana,
    c: 1,
    t: [Trait.blackRose, Trait.visionary],
    img: 'Morgana.png',
  },
  nami: {
    k: nami,
    c: 3,
    t: [Trait.emissary, Trait.sorcerer],
    img: 'Nami.png',
  },
  nocturne: {
    k: nocturne,
    c: 2,
    t: [Trait.automata, Trait.quickstriker],
    img: 'Nocturne.jpg',
  },
  nunu: {
    k: nunu,
    c: 3,
    t: [Trait.experiment, Trait.bruiser, Trait.visionary],
    img: 'Nunu.png',
  },
  powder: {
    k: powder,
    c: 1,
    t: [Trait.family, Trait.ambusher, Trait.scrap],
    img: 'Powder.jpg',
  },
  rell: {
    k: rell,
    c: 2,
    t: [Trait.conqueror, Trait.sentinel, Trait.visionary],
    img: 'Rell.png',
  },
  renata: {
    k: renata,
    c: 2,
    t: [Trait.chemBaron, Trait.visionary],
    img: 'Renata.png',
  },

  renni: {
    k: renni,
    c: 3,
    t: [Trait.chemBaron, Trait.bruiser],
    img: 'Renni.png',
  },
  rumble: {
    k: rumble,
    c: 5,
    t: [Trait.junkerKing, Trait.scrap, Trait.sentinel],
    img: 'Rumble.png',
  },
  scar: {
    k: scar,
    c: 3,
    t: [Trait.firelight, Trait.watcher],
    img: 'Scar.jpg',
  },
  sett: {
    k: sett,
    c: 2,
    t: [Trait.rebel, Trait.bruiser],
    img: 'Sett.png',
  },
  sevika: {
    k: sevika,
    c: 5,
    t: [Trait.chemBaron, Trait.highRoller, Trait.pitFighter],
    img: 'Sevika.jpg',
  },
  silco: {
    k: silco,
    c: 4,
    t: [Trait.chemBaron, Trait.dominator],
    img: 'Silco.jpg',
  },
  singed: {
    k: singed,
    c: 1,
    t: [Trait.chemBaron, Trait.sentinel],
    img: 'Singed.png',
  },
  smeech: {
    k: smeech,
    c: 3,
    t: [Trait.chemBaron, Trait.ambusher],
    img: 'Smeech.jpg',
  },
  steb: {
    k: steb,
    c: 1,
    t: [Trait.enforcer, Trait.bruiser],
    img: 'Steb.jpg',
  },
  swain: {
    k: swain,
    c: 3,
    t: [Trait.conqueror, Trait.formSwapper, Trait.sorcerer],
    img: 'Swain.png',
  },
  tristana: {
    k: tristana,
    c: 2,
    t: [Trait.emissary, Trait.artillerist],
    img: 'Tristana.png',
  },
  trundle: {
    k: trundle,
    c: 2,
    t: [Trait.scrap, Trait.bruiser],
    img: 'Trundle.png',
  },
  twistedFate: {
    k: twistedFate,
    c: 3,
    t: [Trait.enforcer, Trait.quickstriker],
    img: 'TwistedFate.png',
  },
  twitch: {
    k: twitch,
    c: 4,
    t: [Trait.experiment, Trait.sniper],
    img: 'Twitch.png',
  },
  urgot: {
    k: urgot,
    c: 2,
    t: [Trait.experiment, Trait.artillerist, Trait.pitFighter],
    img: 'Urgot.png',
  },
  vander: {
    k: vander,
    c: 2,
    t: [Trait.family, Trait.watcher],
    img: 'Vander.jpg',
  },
  vex: {
    k: vex,
    c: 1,
    t: [Trait.rebel, Trait.visionary],
    img: 'Vex.png',
  },
  vi: {
    k: vi,
    c: 4,
    t: [Trait.enforcer, Trait.pitFighter],
    img: 'Vi.png',
  },
  violet: {
    k: violet,
    c: 1,
    t: [Trait.family, Trait.pitFighter],
    img: 'Violet.jpg',
  },
  vladimir: {
    k: vladimir,
    c: 2,
    t: [Trait.blackRose, Trait.sorcerer, Trait.watcher],
    img: 'Vladimir.png',
  },
  zeri: {
    k: zeri,
    c: 2,
    t: [Trait.firelight, Trait.sniper],
    img: 'Zeri.png',
  },
  ziggs: {
    k: ziggs,
    c: 2,
    t: [Trait.scrap, Trait.dominator],
    img: 'Ziggs.png',
  },
  zoe: {
    k: zoe,
    c: 4,
    t: [Trait.rebel, Trait.sorcerer],
    img: 'Zoe.png',
  },
  zyra: {
    k: zyra,
    c: 1,
    t: [Trait.experiment, Trait.sorcerer],
    img: 'Zyra.png',
  },
};
