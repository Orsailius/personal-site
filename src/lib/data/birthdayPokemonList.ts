import moves from "./pokemonMoves";
import { MOVE_ACCELEROCK, MOVE_ACID, MOVE_ACID_SPRAY, MOVE_ACROBATICS, MOVE_AERIAL_ACE, MOVE_AGILITY, MOVE_AIR_CUTTER, MOVE_ALLURING_VOICE, MOVE_AMNESIA, MOVE_ANCHOR_SHOT, MOVE_AQUA_RING, MOVE_ARM_THRUST, MOVE_AROMATHERAPY, MOVE_ASSURANCE, MOVE_ATTRACT, MOVE_AURA_SPHERE, MOVE_AURORA_BEAM, MOVE_AURORA_VEIL, MOVE_AUTOTOMIZE, MOVE_AVALANCHE, MOVE_BARB_BARRAGE, MOVE_BATON_PASS, MOVE_BITE, MOVE_BITTER_MALICE, MOVE_BLAZING_TORQUE, MOVE_BLIZZARD, MOVE_BODY_SLAM, MOVE_BOLT_STRIKE, MOVE_BOOMBURST, MOVE_BOUNCE, MOVE_BREAKING_SWIPE, MOVE_BRICK_BREAK, MOVE_BRUTAL_SWING, MOVE_BUBBLE, MOVE_BULK_UP, MOVE_BULLDOZE, MOVE_BULLET_PUNCH, MOVE_BULLET_SEED, MOVE_CALM_MIND, MOVE_CHARGE, MOVE_CHARGE_BEAM, MOVE_CHARM, MOVE_CHATTER, MOVE_CIRCLE_THROW, MOVE_CLAMP, MOVE_CLANGOROUS_SOUL, MOVE_CLOSE_COMBAT, MOVE_COLLISION_COURSE, MOVE_COMET_PUNCH, MOVE_CONFUSE_RAY, MOVE_CONFUSION, MOVE_CORROSIVE_GAS, MOVE_COUNTER, MOVE_CRAFTY_SHIELD, MOVE_CRUNCH, MOVE_CURSE, MOVE_CUT, MOVE_DARKEST_LARIAT, MOVE_DARK_PULSE, MOVE_DIG, MOVE_DISARMING_VOICE, MOVE_DISCHARGE, MOVE_DIVE, MOVE_DOUBLE_EDGE, MOVE_DOUBLE_IRON_BASH, MOVE_DOUBLE_KICK, MOVE_DOUBLE_SLAP, MOVE_DOUBLE_TEAM, MOVE_DRAGON_CLAW, MOVE_DRAGON_DANCE, MOVE_DRAGON_HAMMER, MOVE_DRAGON_PULSE, MOVE_DRAGON_TAIL, MOVE_DRAINING_KISS, MOVE_DYNAMIC_PUNCH, MOVE_EARTHQUAKE, MOVE_EARTH_POWER, MOVE_EERIE_IMPULSE, MOVE_ELECTRIFY, MOVE_ELECTROWEB, MOVE_ELECTRO_BALL, MOVE_ELECTRO_DRIFT, MOVE_EMBER, MOVE_ENDURE, MOVE_EXPLOSION, MOVE_EXTRASENSORY, MOVE_EXTREMESPEED, MOVE_EXTREME_SPEED, MOVE_FACADE, MOVE_FAIRY_WIND, MOVE_FAKE_OUT, MOVE_FEINT_ATTACK, MOVE_FIERY_WRATH, MOVE_FIRE_BLAST, MOVE_FIRE_PUNCH, MOVE_FIRE_SPIN, MOVE_FISHIOUS_REND, MOVE_FLAMETHROWER, MOVE_FLAME_BURST, MOVE_FLAME_CHARGE, MOVE_FLARE_BLITZ, MOVE_FLASH, MOVE_FLASH_CANNON, MOVE_FLIP_TURN, MOVE_FLOATY_FALL, MOVE_FLY, MOVE_FLYING_PRESS, MOVE_FOCUS_PUNCH, MOVE_FORCE_PALM, MOVE_FRUSTRATION, MOVE_FURY_CUTTER, MOVE_FUTURE_SIGHT, MOVE_GEOMANCY, MOVE_GIGA_DRAIN, MOVE_GLACIAL_LANCE, MOVE_GLACIATE, MOVE_GLAIVE_RUSH, MOVE_GRASSY_GLIDE, MOVE_GRASSY_TERRAIN, MOVE_GRAV_APPLE, MOVE_GROWTH, MOVE_GUNK_SHOT, MOVE_GUST, MOVE_HAIL, MOVE_HEADLONG_RUSH, MOVE_HEAD_SMASH, MOVE_HEAL_BELL, MOVE_HEAL_ORDER, MOVE_HEAT_WAVE, MOVE_HIDDEN_POWER, MOVE_HIGH_JUMP_KICK, MOVE_HYDRO_PUMP, MOVE_HYPERSPACE_HOLE, MOVE_HYPER_BEAM, MOVE_HYPNOSIS, MOVE_ICE_BALL, MOVE_ICE_BEAM, MOVE_ICE_FANG, MOVE_ICE_PUNCH, MOVE_ICICLE_CRASH, MOVE_ICICLE_SPEAR, MOVE_ICY_WIND, MOVE_INCINERATE, MOVE_INFERNO, MOVE_INFESTATION, MOVE_IRON_DEFENSE, MOVE_IRON_HEAD, MOVE_IRON_TAIL, MOVE_JAW_LOCK, MOVE_KNOCK_OFF, MOVE_LANDS_WRATH, MOVE_LAST_RESORT, MOVE_LAST_RESPECTS, MOVE_LEAFAGE, MOVE_LEAF_BLADE, MOVE_LIFE_DEW, MOVE_LIGHT_SCREEN, MOVE_LUNGE, MOVE_MACH_PUNCH, MOVE_MAGMA_STORM, MOVE_MAGNET_BOMB, MOVE_MAGNET_RISE, MOVE_MEAN_LOOK, MOVE_METAL_CLAW, MOVE_METAL_SOUND, MOVE_METEOR_ASSAULT, MOVE_METEOR_MASH, MOVE_MIGHTY_CLEAVE, MOVE_MIRROR_COAT, MOVE_MOUNTAIN_GALE, MOVE_MUDDY_WATER, MOVE_MUD_SHOT, MOVE_MUD_SLAP, MOVE_NASTY_PLOT, MOVE_NEEDLE_ARM, MOVE_NIGHT_DAZE, MOVE_NIGHT_SLASH, MOVE_NO_RETREAT, MOVE_NUZZLE, MOVE_OBLIVION_WING, MOVE_OMINOUS_WIND, MOVE_OUTRAGE, MOVE_OVERDRIVE, MOVE_OVERHEAT, MOVE_PARTING_SHOT, MOVE_PAYBACK, MOVE_PECK, MOVE_PERISH_SONG, MOVE_PHANTOM_FORCE, MOVE_POUND, MOVE_POWDER_SNOW, MOVE_POWER_SHIFT, MOVE_POWER_TRIP, MOVE_POWER_UP_PUNCH, MOVE_PROTECT, MOVE_PSYBEAM, MOVE_PSYBLADE, MOVE_PSYCHIC, MOVE_PSYCHIC_NOISE, MOVE_PSYSHOCK, MOVE_PSYSTRIKE, MOVE_PSYWAVE, MOVE_PURSUIT, MOVE_QUICK_ATTACK, MOVE_RAGING_FURY, MOVE_RAIN_DANCE, MOVE_RAPID_SPIN, MOVE_RAZOR_LEAF, MOVE_RECOVER, MOVE_REFLECT, MOVE_REFRESH, MOVE_REST, MOVE_RETURN, MOVE_REVENGE, MOVE_REVIVAL_BLESSING, MOVE_ROAR, MOVE_ROCK_BLAST, MOVE_ROCK_SLIDE, MOVE_ROCK_SMASH, MOVE_ROCK_TOMB, MOVE_ROCK_WRECKER, MOVE_ROLLOUT, MOVE_ROOST, MOVE_ROTOTILLER, MOVE_RUINATION, MOVE_SACRED_FIRE, MOVE_SACRED_SWORD, MOVE_SAFEGUARD, MOVE_SALT_CURE, MOVE_SANDSEAR_STORM, MOVE_SANDSTORM, MOVE_SAND_TOMB, MOVE_SCALD, MOVE_SCALE_SHOT, MOVE_SCREECH, MOVE_SEARING_SHOT, MOVE_SECRET_POWER, MOVE_SECRET_SWORD, MOVE_SHADOW_BALL, MOVE_SHADOW_BONE, MOVE_SHADOW_SNEAK, MOVE_SHELTER, MOVE_SHIFT_GEAR, MOVE_SHOCK_WAVE, MOVE_SHORE_UP, MOVE_SIGNAL_BEAM, MOVE_SILVER_WIND, MOVE_SKILL_SWAP, MOVE_SKY_ATTACK, MOVE_SKY_DROP, MOVE_SKY_UPPERCUT, MOVE_SLASH, MOVE_SLEEP_TALK, MOVE_SLUDGE, MOVE_SLUDGE_BOMB, MOVE_SLUDGE_WAVE, MOVE_SMACK_DOWN, MOVE_SMART_STRIKE, MOVE_SMELLING_SALTS, MOVE_SMOG, MOVE_SMOKESCREEN, MOVE_SNATCH, MOVE_SOLAR_BEAM, MOVE_SONIC_BOOM, MOVE_SPARK, MOVE_SPARKLING_ARIA, MOVE_SPARKLY_SWIRL, MOVE_SPIN_OUT, MOVE_SPITE, MOVE_STEALTH_ROCK, MOVE_STEAMROLLER, MOVE_STEAM_ERUPTION, MOVE_STEEL_WING, MOVE_STOMP, MOVE_STORM_THROW, MOVE_STRENGTH, MOVE_STRENGTH_SAP, MOVE_STRUGGLE_BUG, MOVE_SUBSTITUTE, MOVE_SUCKER_PUNCH, MOVE_SUNNY_DAY, MOVE_SUPERPOWER, MOVE_SURF, MOVE_SURGING_STRIKES, MOVE_SWAGGER, MOVE_SWIFT, MOVE_SYNCHRONOISE, MOVE_SYNTHESIS, MOVE_TACKLE, MOVE_TAILWIND, MOVE_TAIL_GLOW, MOVE_TAR_SHOT, MOVE_TAUNT, MOVE_TEARFUL_LOOK, MOVE_TEETER_DANCE, MOVE_THIEF, MOVE_THRASH, MOVE_THROAT_CHOP, MOVE_THUNDER, MOVE_THUNDERBOLT, MOVE_THUNDER_PUNCH, MOVE_THUNDER_SHOCK, MOVE_THUNDER_WAVE, MOVE_TORMENT, MOVE_TOXIC, MOVE_TRIPLE_DIVE, MOVE_TRI_ATTACK, MOVE_TWISTER, MOVE_UPPER_HAND, MOVE_U_TURN, MOVE_VENOM_DRENCH, MOVE_VENOSHOCK, MOVE_VICTORY_DANCE, MOVE_VITAL_THROW, MOVE_VOLT_SWITCH, MOVE_VOLT_TACKLE, MOVE_WAKE_UP_SLAP, MOVE_WATERFALL, MOVE_WATER_PULSE, MOVE_WATER_SPOUT, MOVE_WAVE_CRASH, MOVE_WILD_CHARGE, MOVE_WILL_O_WISP, MOVE_WISH, MOVE_YAWN, MOVE_ZEN_HEADBUTT, MOVE_ZIPPY_ZAP, type PokemonMove } from "./pokemonMoves";

export interface BirthdayPokemon
{
    Desc:string,
    Name:string,
    Type1:string,
    Type2:string,
    Ability:string,
    HP:string,
    Attack:string,
    Def:string,
    SAtt:string,
    SDef:string,
    Speed:string,
    StatTotal:string,
    SMove1:string,
    SMove2:string,
    OtheMovesEg: string | string[]
    Image?:string
    CachedMoveset?:PokemonMove[]   
}

export function getMoveset(pkmn:BirthdayPokemon)
{
    if(pkmn.CachedMoveset == null)
    {
        pkmn.CachedMoveset = moves.filter(
            x => x != null && 
            x.Name != null && 
            pkmn.OtheMovesEg.includes(x.Name));
    }
    return pkmn.CachedMoveset;
}

export function getRandomAllowedMove(pkmn:BirthdayPokemon)
{
    let moveset = getMoveset(pkmn);
    return moveset[~~(Math.random() * moveset.length)];
}

function LEVEL_UP_MOVE(dummy:number, move:any)
{
    return move;
}

export var pokemonList =
[
    {
      Desc: "Palm Tree Pokemon",
      Name: "Palmu",
      Type1: "Ground",
      Type2: "-",
      Ability: "Coconut Drop",
      HP: "59",
      Attack: "59",
      Def: "53",
      SAtt: "41",
      SDef: "47",
      Speed: "53",
      StatTotal: "312",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [ MOVE_ATTRACT,
        MOVE_DIG,
        MOVE_EARTHQUAKE,
        MOVE_FACADE,
        MOVE_GIGA_DRAIN,
        MOVE_REST,
        MOVE_ROCK_SMASH,
        MOVE_ROCK_TOMB,
        MOVE_SANDSTORM,
        MOVE_STRENGTH,
        MOVE_SUNNY_DAY,
        MOVE_BODY_SLAM,
        MOVE_DOUBLE_EDGE,
        MOVE_ENDURE,
        MOVE_FURY_CUTTER,
        MOVE_MUD_SLAP,
        MOVE_ROCK_SLIDE,LEVEL_UP_MOVE( 1, MOVE_MUD_SLAP),
        LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
        LEVEL_UP_MOVE( 10, MOVE_SAND_TOMB),
        LEVEL_UP_MOVE(14, MOVE_RAZOR_LEAF),
        LEVEL_UP_MOVE(18, MOVE_BULLDOZE),
        LEVEL_UP_MOVE(21, MOVE_SYNTHESIS),
        LEVEL_UP_MOVE(25, MOVE_SHORE_UP),
        LEVEL_UP_MOVE(29, MOVE_SYNTHESIS),
        LEVEL_UP_MOVE(33, MOVE_LANDS_WRATH),
        LEVEL_UP_MOVE(37, MOVE_LEAF_BLADE),
        LEVEL_UP_MOVE(44, MOVE_GRASSY_TERRAIN),
        LEVEL_UP_MOVE(51, MOVE_ROTOTILLER),],
      Image:"/images/pkmn/Palmu.png"
    },
    {
      Desc: "|",
      Name: "Palmula",
      Type1: "Ground",
      Type2: "Grass",
      Ability: "Coconut Drop",
      HP: "76",
      Attack: "76",
      Def: "68",
      SAtt: "53",
      SDef: "61",
      Speed: "68",
      StatTotal: "402",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ATTRACT,
        MOVE_DIG,
        MOVE_EARTHQUAKE,
        MOVE_FACADE,
        MOVE_GIGA_DRAIN,
        MOVE_REST,
        MOVE_ROCK_SMASH,
        MOVE_ROCK_TOMB,
        MOVE_SANDSTORM,
        MOVE_STRENGTH,
        MOVE_SUNNY_DAY,
        MOVE_BODY_SLAM,
        MOVE_DOUBLE_EDGE,
        MOVE_ENDURE,
        MOVE_FURY_CUTTER,
        MOVE_MUD_SLAP,
        MOVE_ROCK_SLIDE,LEVEL_UP_MOVE( 1, MOVE_MUD_SLAP),
        LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
        LEVEL_UP_MOVE( 10, MOVE_SAND_TOMB),
        LEVEL_UP_MOVE(14, MOVE_RAZOR_LEAF),
        LEVEL_UP_MOVE(18, MOVE_BULLDOZE),
        LEVEL_UP_MOVE(21, MOVE_SYNTHESIS),
        LEVEL_UP_MOVE(25, MOVE_SHORE_UP),
        LEVEL_UP_MOVE(29, MOVE_SYNTHESIS),
        LEVEL_UP_MOVE(33, MOVE_LANDS_WRATH),
        LEVEL_UP_MOVE(37, MOVE_LEAF_BLADE),
        LEVEL_UP_MOVE(44, MOVE_GRASSY_TERRAIN),
        LEVEL_UP_MOVE(51, MOVE_ROTOTILLER),],
      Image:"/images/pkmn/Palmula.png"
    },
    {
      Desc: "|",
      Name: "Palmuree",
      Type1: "Ground",
      Type2: "Grass",
      Ability: "Coconut Drop",
      HP: "100",
      Attack: "100",
      Def: "90",
      SAtt: "70",
      SDef: "80",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ATTRACT,
        MOVE_DIG,
        MOVE_EARTHQUAKE,
        MOVE_FACADE,
        MOVE_GIGA_DRAIN,
        MOVE_REST,
        MOVE_ROCK_SMASH,
        MOVE_ROCK_TOMB,
        MOVE_SANDSTORM,
        MOVE_STRENGTH,
        MOVE_SUNNY_DAY,
        MOVE_BODY_SLAM,
        MOVE_DOUBLE_EDGE,
        MOVE_ENDURE,
        MOVE_FURY_CUTTER,
        MOVE_MUD_SLAP,
        MOVE_ROCK_SLIDE,LEVEL_UP_MOVE( 1, MOVE_MUD_SLAP),
        LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
        LEVEL_UP_MOVE( 10, MOVE_SAND_TOMB),
        LEVEL_UP_MOVE(14, MOVE_RAZOR_LEAF),
        LEVEL_UP_MOVE(18, MOVE_BULLDOZE),
        LEVEL_UP_MOVE(21, MOVE_SYNTHESIS),
        LEVEL_UP_MOVE(25, MOVE_SHORE_UP),
        LEVEL_UP_MOVE(29, MOVE_SYNTHESIS),
        LEVEL_UP_MOVE(33, MOVE_LANDS_WRATH),
        LEVEL_UP_MOVE(37, MOVE_LEAF_BLADE),
        LEVEL_UP_MOVE(44, MOVE_GRASSY_TERRAIN),
        LEVEL_UP_MOVE(51, MOVE_ROTOTILLER),]
    },
    {
      Desc: "Coast Pig Pokemon",
      Name: "Baypig",
      Type1: "Ground",
      Type2: "-",
      Ability: "Simple",
      HP: "59",
      Attack: "41",
      Def: "47",
      SAtt: "59",
      SDef: "53",
      Speed: "53",
      StatTotal: "312",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
       MOVE_PROTECT       ,                               //
      MOVE_RAIN_DANCE     ,                              //
       MOVE_SAFEGUARD    ,                                //
      MOVE_IRON_TAIL     ,                               //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_DOUBLE_TEAM   ,                               //
       MOVE_REFLECT      ,                                //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  ,LEVEL_UP_MOVE( 1, MOVE_MUD_SLAP),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_SAND_TOMB),
      LEVEL_UP_MOVE(14, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(18, MOVE_MUD_SHOT),
      LEVEL_UP_MOVE(21, MOVE_AQUA_RING),
      LEVEL_UP_MOVE(25, MOVE_SHORE_UP),
      LEVEL_UP_MOVE(29, MOVE_MUDDY_WATER),
      LEVEL_UP_MOVE(33, MOVE_EARTH_POWER),
      LEVEL_UP_MOVE(37, MOVE_SURF),
      LEVEL_UP_MOVE(44, MOVE_SUBSTITUTE),
      LEVEL_UP_MOVE(51, MOVE_HYDRO_PUMP),        ],
      Image:"/images/pkmn/Baypig3.jfif"
    },
    {
      Desc: "|",
      Name: "Watersow",
      Type1: "Ground",
      Type2: "Water",
      Ability: "Simple",
      HP: "76",
      Attack: "53",
      Def: "61",
      SAtt: "76",
      SDef: "68",
      Speed: "68",
      StatTotal: "402",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
       MOVE_PROTECT       ,                               //
      MOVE_RAIN_DANCE     ,                              //
       MOVE_SAFEGUARD    ,                                //
      MOVE_IRON_TAIL     ,                               //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_DOUBLE_TEAM   ,                               //
       MOVE_REFLECT      ,                                //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  ,LEVEL_UP_MOVE( 1, MOVE_MUD_SLAP),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_SAND_TOMB),
      LEVEL_UP_MOVE(14, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(18, MOVE_MUD_SHOT),
      LEVEL_UP_MOVE(21, MOVE_AQUA_RING),
      LEVEL_UP_MOVE(25, MOVE_SHORE_UP),
      LEVEL_UP_MOVE(29, MOVE_MUDDY_WATER),
      LEVEL_UP_MOVE(33, MOVE_EARTH_POWER),
      LEVEL_UP_MOVE(37, MOVE_SURF),
      LEVEL_UP_MOVE(44, MOVE_SUBSTITUTE),
      LEVEL_UP_MOVE(51, MOVE_HYDRO_PUMP),],
      Image:"/images/pkmn/Watersow2.jfif"
    },
    {
      Desc: "|",
      Name: "Tidehog",
      Type1: "Ground",
      Type2: "Water",
      Ability: "Simple",
      HP: "100",
      Attack: "70",
      Def: "80",
      SAtt: "100",
      SDef: "90",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
       MOVE_PROTECT       ,                               //
      MOVE_RAIN_DANCE     ,                              //
       MOVE_SAFEGUARD    ,                                //
      MOVE_IRON_TAIL     ,                               //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_DOUBLE_TEAM   ,                               //
       MOVE_REFLECT      ,                                //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  ,LEVEL_UP_MOVE( 1, MOVE_MUD_SLAP),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_SAND_TOMB),
      LEVEL_UP_MOVE(14, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(18, MOVE_MUD_SHOT),
      LEVEL_UP_MOVE(21, MOVE_AQUA_RING),
      LEVEL_UP_MOVE(25, MOVE_SHORE_UP),
      LEVEL_UP_MOVE(29, MOVE_MUDDY_WATER),
      LEVEL_UP_MOVE(33, MOVE_EARTH_POWER),
      LEVEL_UP_MOVE(37, MOVE_SURF),
      LEVEL_UP_MOVE(44, MOVE_SUBSTITUTE),
      LEVEL_UP_MOVE(51, MOVE_HYDRO_PUMP),],
      Image:"/images/pkmn/Tidehog1.jfif"
    },
    {
      Desc: "Gassy pokemon",
      Name: "Flatula",
      Type1: "Flying",
      Type2: "-",
      Ability: "",
      HP: "50",
      Attack: "86",
      Def: "72",
      SAtt: "43",
      SDef: "43",
      Speed: "86",
      StatTotal: "380",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TOXIC,                                        //
      MOVE_HIDDEN_POWER ,                                //
      MOVE_SUNNY_DAY     ,                               //
     MOVE_TAUNT           ,                             //
     MOVE_RAIN_DANCE     ,                              //
     MOVE_FRUSTRATION    ,                              //
      MOVE_SOLAR_BEAM    ,                               //
     MOVE_RETURN      ,                                 //
      MOVE_REFLECT      ,                                //
     MOVE_SLUDGE_BOMB   ,                               //
     MOVE_SANDSTORM     ,                               //
     MOVE_AERIAL_ACE   ,                                //
      MOVE_TORMENT       ,                               //
     MOVE_FACADE        ,                               //
     MOVE_SECRET_POWER  ,                               //
     MOVE_SNATCH      ,                                 //
     MOVE_OVERHEAT    ,                                 //
     MOVE_CUT       ,                                   //
     MOVE_FLY        ,   LEVEL_UP_MOVE( 1, MOVE_PECK),
     LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
     LEVEL_UP_MOVE( 10, MOVE_TOXIC),
     LEVEL_UP_MOVE(14, MOVE_AERIAL_ACE),
     LEVEL_UP_MOVE(18, MOVE_SKY_DROP),
     LEVEL_UP_MOVE(21, MOVE_FLY),
     LEVEL_UP_MOVE(25, MOVE_TAILWIND),
     LEVEL_UP_MOVE(29, MOVE_FLOATY_FALL),
     LEVEL_UP_MOVE(33, MOVE_CORROSIVE_GAS),              ]
    },
    {
      Desc: "|",
      Name: "Windgas",
      Type1: "Flying",
      Type2: "-",
      Ability: "",
      HP: "70",
      Attack: "120",
      Def: "100",
      SAtt: "60",
      SDef: "60",
      Speed: "120",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TOXIC,                                        //
      MOVE_HIDDEN_POWER ,                                //
      MOVE_SUNNY_DAY     ,                               //
     MOVE_TAUNT           ,                             //
     MOVE_RAIN_DANCE     ,                              //
     MOVE_FRUSTRATION    ,                              //
      MOVE_SOLAR_BEAM    ,                               //
     MOVE_RETURN      ,                                 //
      MOVE_REFLECT      ,                                //
     MOVE_SLUDGE_BOMB   ,                               //
     MOVE_SANDSTORM     ,                               //
     MOVE_AERIAL_ACE   ,                                //
      MOVE_TORMENT       ,                               //
     MOVE_FACADE        ,                               //
     MOVE_SECRET_POWER  ,                               //
     MOVE_SNATCH      ,                                 //
     MOVE_OVERHEAT    ,                                 //
     MOVE_CUT       ,                                   //
     MOVE_FLY        ,   LEVEL_UP_MOVE( 1, MOVE_PECK),
     LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
     LEVEL_UP_MOVE( 10, MOVE_TOXIC),
     LEVEL_UP_MOVE(14, MOVE_AERIAL_ACE),
     LEVEL_UP_MOVE(18, MOVE_SKY_DROP),
     LEVEL_UP_MOVE(21, MOVE_FLY),
     LEVEL_UP_MOVE(25, MOVE_TAILWIND),
     LEVEL_UP_MOVE(29, MOVE_FLOATY_FALL),
     LEVEL_UP_MOVE(33, MOVE_CORROSIVE_GAS),],
      Image:"/images/pkmn/Windgas1.jfif"
    },
    {
      Desc: "Glitch Pokemon",
      Name: "Gleetcher",
      Type1: "Bug",
      Type2: "-",
      Ability: "",
      HP: "58",
      Attack: "58",
      Def: "43",
      SAtt: "94",
      SDef: "50",
      Speed: "79",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_REFLECT      ,                                //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLASH        , LEVEL_UP_MOVE( 1, MOVE_INFESTATION),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_WAVE),
      LEVEL_UP_MOVE( 10, MOVE_STRUGGLE_BUG),
      LEVEL_UP_MOVE(14, MOVE_FAKE_OUT),
      LEVEL_UP_MOVE(18, MOVE_SILVER_WIND),
      LEVEL_UP_MOVE(21, MOVE_TAIL_GLOW),
      LEVEL_UP_MOVE(25, MOVE_SIGNAL_BEAM),
      LEVEL_UP_MOVE(29, MOVE_ELECTROWEB),
      LEVEL_UP_MOVE(33, MOVE_U_TURN),    ],
      Image:"/images/pkmn/Gleetcher2.jfif"
    },
    {
      Desc: "|",
      Name: "Krasher",
      Type1: "Bug",
      Type2: "-",
      Ability: "",
      HP: "80",
      Attack: "80",
      Def: "60",
      SAtt: "130",
      SDef: "70",
      Speed: "110",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_REFLECT      ,                                //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLASH        , LEVEL_UP_MOVE( 1, MOVE_INFESTATION),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_WAVE),
      LEVEL_UP_MOVE( 10, MOVE_STRUGGLE_BUG),
      LEVEL_UP_MOVE(14, MOVE_FAKE_OUT),
      LEVEL_UP_MOVE(18, MOVE_SILVER_WIND),
      LEVEL_UP_MOVE(21, MOVE_TAIL_GLOW),
      LEVEL_UP_MOVE(25, MOVE_SIGNAL_BEAM),
      LEVEL_UP_MOVE(29, MOVE_ELECTROWEB),
      LEVEL_UP_MOVE(33, MOVE_U_TURN),   ],
      Image:"/images/pkmn/Krasher3.jfif"
    },
    {
      Desc: "Murderous Lime Pokemon",
      Name: "Limurder",
      Type1: "Grass",
      Type2: "Electric",
      Ability: "",
      HP: "70",
      Attack: "140",
      Def: "90",
      SAtt: "50",
      SDef: "90",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,    LEVEL_UP_MOVE( 1, MOVE_BULLET_SEED),
      LEVEL_UP_MOVE( 6, MOVE_ZIPPY_ZAP),
      LEVEL_UP_MOVE( 10, MOVE_RAZOR_LEAF),
      LEVEL_UP_MOVE(14, MOVE_SUCKER_PUNCH),
      LEVEL_UP_MOVE(18, MOVE_NEEDLE_ARM),
      LEVEL_UP_MOVE(21, MOVE_SPARK),
      LEVEL_UP_MOVE(25, MOVE_GRAV_APPLE),
      LEVEL_UP_MOVE(29, MOVE_WILD_CHARGE),
      LEVEL_UP_MOVE(33, MOVE_STRENGTH_SAP),            ]
    },
    {
      Desc: "",
      Name: "Timach",
      Type1: "Fighting",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "100",
      Def: "100",
      SAtt: "65",
      SDef: "100",
      Speed: "100",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_ARM_THRUST),
      LEVEL_UP_MOVE( 6, MOVE_FAKE_OUT),
      LEVEL_UP_MOVE( 10, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_COUNTER),
      LEVEL_UP_MOVE(18, MOVE_WAKE_UP_SLAP),
      LEVEL_UP_MOVE(21, MOVE_SHIFT_GEAR),
      LEVEL_UP_MOVE(25, MOVE_DYNAMIC_PUNCH),
      LEVEL_UP_MOVE(29, MOVE_EXTREMESPEED),
      LEVEL_UP_MOVE(33, MOVE_NO_RETREAT),  ],
      Image:"/images/pkmn/Timach2.jfif"
    },
    {
      Desc: "",
      Name: "Kylead",
      Type1: "Rock",
      Type2: "",
      Ability: "",
      HP: "100",
      Attack: "100",
      Def: "65",
      SAtt: "100",
      SDef: "100",
      Speed: "65",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_FRUSTRATION    ,                              //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_ROCK_BLAST),
      LEVEL_UP_MOVE( 6, MOVE_SMOKESCREEN),
      LEVEL_UP_MOVE( 10, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(14, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(18, MOVE_ROCK_SLIDE),
      LEVEL_UP_MOVE(21, MOVE_SWAGGER),
      LEVEL_UP_MOVE(25, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(29, MOVE_LAST_RESORT),
      LEVEL_UP_MOVE(33, MOVE_STEALTH_ROCK),],
      Image:"/images/pkmn/Kylead.jfif"
    },
    {
      Desc: "",
      Name: "Neoone",
      Type1: "Fighting",
      Type2: "Psychic",
      Ability: "",
      HP: "70",
      Attack: "120",
      Def: "70",
      SAtt: "50",
      SDef: "70",
      Speed: "150",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_HAIL,                                         //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_BLIZZARD       ,                              //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_RAIN_DANCE     ,                              //
       MOVE_SAFEGUARD    ,                                //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_THUNDER      ,                                //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_DOUBLE_TEAM   ,                               //
       MOVE_REFLECT      ,                                //
      MOVE_SANDSTORM     ,                               //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_DOUBLE_KICK),
      LEVEL_UP_MOVE( 6, MOVE_MIRROR_COAT),
      LEVEL_UP_MOVE( 10, MOVE_STORM_THROW),
      LEVEL_UP_MOVE(14, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(18, MOVE_ZEN_HEADBUTT),
      LEVEL_UP_MOVE(21, MOVE_HYPERSPACE_HOLE),
      LEVEL_UP_MOVE(25, MOVE_FLYING_PRESS),
      LEVEL_UP_MOVE(29, MOVE_FUTURE_SIGHT),
      LEVEL_UP_MOVE(33, MOVE_METEOR_ASSAULT),                          ],
      Image:"/images/pkmn/Neonone.jfif"
    },
    {
      Desc: "",
      Name: "Cookin",
      Type1: "Rock",
      Type2: "Fighting",
      Ability: "",
      HP: "90",
      Attack: "120",
      Def: "90",
      SAtt: "50",
      SDef: "90",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_FRUSTRATION    ,                              //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_DOUBLE_TEAM   ,                               //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_ATTRACT      ,                               //
      MOVE_OVERHEAT    ,                                 //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,   LEVEL_UP_MOVE( 1, MOVE_SALT_CURE),
      LEVEL_UP_MOVE( 6, MOVE_ROCK_SMASH),
      LEVEL_UP_MOVE( 10, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(14, MOVE_CIRCLE_THROW),
      LEVEL_UP_MOVE(18, MOVE_ROCK_SLIDE),
      LEVEL_UP_MOVE(21, MOVE_SMELLING_SALTS),
      LEVEL_UP_MOVE(25, MOVE_HEAD_SMASH),
      LEVEL_UP_MOVE(29, MOVE_SUPERPOWER),
      LEVEL_UP_MOVE(33, MOVE_AROMATHERAPY),              ],
      Image:"/images/pkmn/Cookin.jfif"
    },
    {
      Desc: "Jamming Tunes Pokemon",
      Name: "Bonja",
      Type1: "Psychic",
      Type2: "",
      Ability: "",
      HP: "56",
      Attack: "50",
      Def: "59",
      SAtt: "79",
      SDef: "63",
      Speed: "75",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                  //
      MOVE_HIDDEN_POWER ,                      //
     MOVE_TAUNT           ,                               //
     MOVE_THUNDERBOLT    ,                              //
     MOVE_THUNDER      ,                               //
     MOVE_RETURN      ,                                 //
      MOVE_PSYCHIC    ,                              //
      MOVE_REFLECT      ,                                //
      MOVE_SHOCK_WAVE   ,                                //
     MOVE_SECRET_POWER  ,                               //
     MOVE_REST        ,                                 //
     MOVE_ATTRACT      ,                              //
     MOVE_OVERHEAT    ,                                 //
     MOVE_CUT       ,                                   //
     MOVE_FLY        ,                              //
     MOVE_FLASH        , LEVEL_UP_MOVE( 1, MOVE_THUNDER_SHOCK),
     LEVEL_UP_MOVE( 6, MOVE_METAL_SOUND),
     LEVEL_UP_MOVE( 10, MOVE_EERIE_IMPULSE),
     LEVEL_UP_MOVE(14, MOVE_CONFUSION),
     LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
     LEVEL_UP_MOVE(21, MOVE_PSYCHIC_NOISE),
     LEVEL_UP_MOVE(25, MOVE_OVERDRIVE),
     LEVEL_UP_MOVE(29, MOVE_SYNCHRONOISE),
     LEVEL_UP_MOVE(33, MOVE_PERISH_SONG), ],
      Image:"/images/pkmn/Bonja1.jfif"
    },
    {
      Desc: "|",
      Name: "Gaitur",
      Type1: "Psychic",
      Type2: "Electric",
      Ability: "",
      HP: "78",
      Attack: "69",
      Def: "82",
      SAtt: "110",
      SDef: "87",
      Speed: "104",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                  //
      MOVE_HIDDEN_POWER ,                      //
     MOVE_TAUNT           ,                               //
     MOVE_THUNDERBOLT    ,                              //
     MOVE_THUNDER      ,                               //
     MOVE_RETURN      ,                                 //
      MOVE_PSYCHIC    ,                              //
      MOVE_REFLECT      ,                                //
      MOVE_SHOCK_WAVE   ,                                //
     MOVE_SECRET_POWER  ,                               //
     MOVE_REST        ,                                 //
     MOVE_ATTRACT      ,                              //
     MOVE_OVERHEAT    ,                                 //
     MOVE_CUT       ,                                   //
     MOVE_FLY        ,                              //
     MOVE_FLASH        , LEVEL_UP_MOVE( 1, MOVE_THUNDER_SHOCK),
     LEVEL_UP_MOVE( 6, MOVE_METAL_SOUND),
     LEVEL_UP_MOVE( 10, MOVE_EERIE_IMPULSE),
     LEVEL_UP_MOVE(14, MOVE_CONFUSION),
     LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
     LEVEL_UP_MOVE(21, MOVE_PSYCHIC_NOISE),
     LEVEL_UP_MOVE(25, MOVE_OVERDRIVE),
     LEVEL_UP_MOVE(29, MOVE_SYNCHRONOISE),
     LEVEL_UP_MOVE(33, MOVE_PERISH_SONG), ],
      Image:"/images/pkmn/Gaitur.jfif"
    },
    {
      Desc: "Thinking Pokemon",
      Name: "Pinkee",
      Type1: "Fairy",
      Type2: "",
      Ability: "",
      HP: "63",
      Attack: "63",
      Def: "62",
      SAtt: "65",
      SDef: "65",
      Speed: "64",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLASH        ,   LEVEL_UP_MOVE( 1, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE( 6, MOVE_HYPNOSIS),
      LEVEL_UP_MOVE( 10, MOVE_CRAFTY_SHIELD),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),
      LEVEL_UP_MOVE(18, MOVE_ALLURING_VOICE),
      LEVEL_UP_MOVE(21, MOVE_CALM_MIND),
      LEVEL_UP_MOVE(25, MOVE_CHARM),
      LEVEL_UP_MOVE(29, MOVE_NASTY_PLOT),
      LEVEL_UP_MOVE(33, MOVE_FUTURE_SIGHT),                       ],
      Image:"/images/pkmn/Pinkee.jfif"
    },
    {
      Desc: "|",
      Name: "Braino",
      Type1: "Psychic",
      Type2: "Fairy",
      Ability: "",
      HP: "88",
      Attack: "87",
      Def: "86",
      SAtt: "90",
      SDef: "90",
      Speed: "89",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLASH        ,   LEVEL_UP_MOVE( 1, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE( 6, MOVE_HYPNOSIS),
      LEVEL_UP_MOVE( 10, MOVE_CRAFTY_SHIELD),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),
      LEVEL_UP_MOVE(18, MOVE_ALLURING_VOICE),
      LEVEL_UP_MOVE(21, MOVE_CALM_MIND),
      LEVEL_UP_MOVE(25, MOVE_CHARM),
      LEVEL_UP_MOVE(29, MOVE_NASTY_PLOT),
      LEVEL_UP_MOVE(33, MOVE_FUTURE_SIGHT), ],
      Image:"/images/pkmn/Braino.jfif"
    },
    {
      Desc: "",
      Name: "Sockemp",
      Type1: "Steel",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "40",
      Def: "43",
      SAtt: "101",
      SDef: "43",
      Speed: "90",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [ MOVE_HIDDEN_POWER ,                                //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_REFLECT      ,                                //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_FLASH        , LEVEL_UP_MOVE( 1, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 6, MOVE_AUTOTOMIZE),
      LEVEL_UP_MOVE( 10, MOVE_ELECTRIFY),
      LEVEL_UP_MOVE(14, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(18, MOVE_CHARGE_BEAM),
      LEVEL_UP_MOVE(21, MOVE_FLASH_CANNON),
      LEVEL_UP_MOVE(25, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(29, MOVE_SHELTER),
      LEVEL_UP_MOVE(33, MOVE_CHARGE),  ],
      Image:"/images/pkmn/Socketemp.jfif"
    },
    {
      Desc: "",
      Name: "Lowerpine",
      Type1: "Steel",
      Type2: "Electric",
      Ability: "",
      HP: "90",
      Attack: "55",
      Def: "60",
      SAtt: "140",
      SDef: "60",
      Speed: "125",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [ MOVE_HIDDEN_POWER ,                                //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_REFLECT      ,                                //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_FLASH        , LEVEL_UP_MOVE( 1, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 6, MOVE_AUTOTOMIZE),
      LEVEL_UP_MOVE( 10, MOVE_ELECTRIFY),
      LEVEL_UP_MOVE(14, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(18, MOVE_CHARGE_BEAM),
      LEVEL_UP_MOVE(21, MOVE_FLASH_CANNON),
      LEVEL_UP_MOVE(25, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(29, MOVE_SHELTER),
      LEVEL_UP_MOVE(33, MOVE_CHARGE),  ],
      Image:"/images/pkmn/Lowerpine.jfif"
    },
    {
      Desc: "",
      Name: "Paladin Guy",
      Type1: "Normal",
      Type2: "Electric",
      Ability: "",
      HP: "120",
      Attack: "100",
      Def: "120",
      SAtt: "35",
      SDef: "120",
      Speed: "35",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SAFEGUARD    ,                                //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_REFLECT      ,                                //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,                                //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,LEVEL_UP_MOVE( 1, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 6, MOVE_PROTECT),
      LEVEL_UP_MOVE( 9, MOVE_QUICK_ATTACK),
      LEVEL_UP_MOVE(12, MOVE_SPARK),
      LEVEL_UP_MOVE(16, MOVE_HEAL_ORDER),
      LEVEL_UP_MOVE(19, MOVE_SUBSTITUTE),
      LEVEL_UP_MOVE(22, MOVE_THUNDER_PUNCH),
      LEVEL_UP_MOVE(25, MOVE_SACRED_FIRE),
      LEVEL_UP_MOVE(29, MOVE_BOLT_STRIKE),
      LEVEL_UP_MOVE(33, MOVE_LAST_RESORT),
      LEVEL_UP_MOVE(38, MOVE_SACRED_SWORD),        ],
      Image:"/images/pkmn/Palaguy3.jfif"
    },
    {
      Desc: "",
      Name: "Hartus",
      Type1: "Ice",
      Type2: "Dark",
      Ability: "",
      HP: "110",
      Attack: "110",
      Def: "110",
      SAtt: "50",
      SDef: "80",
      Speed: "70",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TOXIC,                                        //
      MOVE_HAIL,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
       MOVE_PROTECT       ,                               //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SAFEGUARD    ,                                //
      MOVE_FRUSTRATION    ,                              //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_REFLECT      ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_ICICLE_SPEAR),
      LEVEL_UP_MOVE( 6, MOVE_PURSUIT),
      LEVEL_UP_MOVE( 10, MOVE_PSYWAVE),
      LEVEL_UP_MOVE(14, MOVE_AVALANCHE),
      LEVEL_UP_MOVE(18, MOVE_BRUTAL_SWING),
      LEVEL_UP_MOVE(21, MOVE_PSYBLADE),
      LEVEL_UP_MOVE(25, MOVE_GLACIAL_LANCE),
      LEVEL_UP_MOVE(29, MOVE_NIGHT_SLASH),
      LEVEL_UP_MOVE(33, MOVE_AURORA_VEIL),
      LEVEL_UP_MOVE(36, MOVE_RUINATION),                        ],
      Image:"/images/pkmn/Hartus1.jfif"
    },
    {
      Desc: "",
      Name: "Saurus",
      Type1: "Fire",
      Type2: "Ghost",
      Ability: "",
      HP: "170",
      Attack: "0",
      Def: "180",
      SAtt: "0",
      SDef: "180",
      Speed: "0",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_EARTHQUAKE   ,                                //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_REFLECT      ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
       MOVE_THIEF        ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_FLASH        , LEVEL_UP_MOVE( 1,MOVE_FIRE_SPIN),
      LEVEL_UP_MOVE( 6, MOVE_SPITE),
      LEVEL_UP_MOVE( 10, MOVE_WILL_O_WISP),
      LEVEL_UP_MOVE(14, MOVE_BITTER_MALICE),
      LEVEL_UP_MOVE(18, MOVE_CURSE),
      LEVEL_UP_MOVE(21, MOVE_CONFUSE_RAY),
      LEVEL_UP_MOVE(25, MOVE_INFERNO),
      LEVEL_UP_MOVE(29, MOVE_PARTING_SHOT),
      LEVEL_UP_MOVE(33, MOVE_TORMENT),
      LEVEL_UP_MOVE(36, MOVE_RUINATION),  ]
    },
    {
      Desc: "",
      Name: "Dethel",
      Type1: "Dark",
      Type2: "",
      Ability: "",
      HP: "68",
      Attack: "86",
      Def: "86",
      SAtt: "43",
      SDef: "43",
      Speed: "54",
      StatTotal: "380",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_IRON_TAIL     ,                               //
      MOVE_THUNDERBOLT    ,                              //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_POWER_TRIP),
      LEVEL_UP_MOVE( 6, MOVE_METAL_CLAW),
      LEVEL_UP_MOVE( 10, MOVE_PAYBACK),
      LEVEL_UP_MOVE(14, MOVE_SONIC_BOOM),
      LEVEL_UP_MOVE(18, MOVE_SMART_STRIKE),
      LEVEL_UP_MOVE(21, MOVE_FEINT_ATTACK),
      LEVEL_UP_MOVE(25, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(29, MOVE_DARKEST_LARIAT),
      LEVEL_UP_MOVE(33, MOVE_BOOMBURST),  ]
    },
    {
      Desc: "",
      Name: "Metah",
      Type1: "Dark",
      Type2: "Steel",
      Ability: "",
      HP: "95",
      Attack: "120",
      Def: "120",
      SAtt: "60",
      SDef: "60",
      Speed: "75",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_IRON_TAIL     ,                               //
      MOVE_THUNDERBOLT    ,                              //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_POWER_TRIP),
      LEVEL_UP_MOVE( 6, MOVE_METAL_CLAW),
      LEVEL_UP_MOVE( 10, MOVE_PAYBACK),
      LEVEL_UP_MOVE(14, MOVE_SONIC_BOOM),
      LEVEL_UP_MOVE(18, MOVE_SMART_STRIKE),
      LEVEL_UP_MOVE(21, MOVE_FEINT_ATTACK),
      LEVEL_UP_MOVE(25, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(29, MOVE_DARKEST_LARIAT),
      LEVEL_UP_MOVE(33, MOVE_BOOMBURST),  ]
    },
    {
      Desc: "",
      Name: "Qhygone",
      Type1: "Ghost",
      Type2: "",
      Ability: "",
      HP: "54",
      Attack: "65",
      Def: "79",
      SAtt: "72",
      SDef: "40",
      Speed: "72",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_REFLECT      ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  , LEVEL_UP_MOVE( 1,MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE( 6, MOVE_AMNESIA),
      LEVEL_UP_MOVE( 10, MOVE_SWIFT),
      LEVEL_UP_MOVE(14, MOVE_AGILITY),
      LEVEL_UP_MOVE(18, MOVE_LAST_RESPECTS),
      LEVEL_UP_MOVE(21, MOVE_PHANTOM_FORCE),
      LEVEL_UP_MOVE(25, MOVE_SACRED_SWORD),
      LEVEL_UP_MOVE(29, MOVE_EXTREME_SPEED),
      LEVEL_UP_MOVE(33, MOVE_BATON_PASS),       ],
      Image:"/images/pkmn/Quigone.webp"
    },
    {
      Desc: "",
      Name: "Olbeeone",
      Type1: "Ghost",
      Type2: "Normal",
      Ability: "",
      HP: "75",
      Attack: "90",
      Def: "110",
      SAtt: "100",
      SDef: "55",
      Speed: "100",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_REFLECT      ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  , LEVEL_UP_MOVE( 1,MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE( 6, MOVE_AMNESIA),
      LEVEL_UP_MOVE( 10, MOVE_SWIFT),
      LEVEL_UP_MOVE(14, MOVE_AGILITY),
      LEVEL_UP_MOVE(18, MOVE_LAST_RESPECTS),
      LEVEL_UP_MOVE(21, MOVE_PHANTOM_FORCE),
      LEVEL_UP_MOVE(25, MOVE_SACRED_SWORD),
      LEVEL_UP_MOVE(29, MOVE_EXTREME_SPEED),
      LEVEL_UP_MOVE(33, MOVE_BATON_PASS),  ]
    },
    {
      Desc: "",
      Name: "Pwner",
      Type1: "Water",
      Type2: "Fighting",
      Ability: "",
      HP: "60",
      Attack: "120",
      Def: "65",
      SAtt: "100",
      SDef: "65",
      Speed: "120",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_WATER_PULSE,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_ATTRACT      ,                               //
      MOVE_SNATCH      ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,  LEVEL_UP_MOVE( 1,MOVE_ROCK_SMASH),
      LEVEL_UP_MOVE( 6, MOVE_SURGING_STRIKES),
      LEVEL_UP_MOVE( 10, MOVE_RAPID_SPIN),
      LEVEL_UP_MOVE(14, MOVE_REVENGE),
      LEVEL_UP_MOVE(18, MOVE_FLIP_TURN),
      LEVEL_UP_MOVE(21, MOVE_COLLISION_COURSE),
      LEVEL_UP_MOVE(25, MOVE_SURF),
      LEVEL_UP_MOVE(29, MOVE_CLOSE_COMBAT),
      LEVEL_UP_MOVE(33, MOVE_WAVE_CRASH),      ]
    },
    {
      Desc: "",
      Name: "Coffish",
      Type1: "Water",
      Type2: "Fire",
      Ability: "",
      HP: "80",
      Attack: "70",
      Def: "80",
      SAtt: "120",
      SDef: "80",
      Speed: "100",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
      MOVE_RETURN      ,                                 //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_OVERHEAT    ,                                 //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,  LEVEL_UP_MOVE( 1,MOVE_EMBER),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_REFRESH),
      LEVEL_UP_MOVE(14, MOVE_LIFE_DEW),
      LEVEL_UP_MOVE(18, MOVE_SCALD),
      LEVEL_UP_MOVE(21, MOVE_HEAT_WAVE),
      LEVEL_UP_MOVE(25, MOVE_SURF),
      LEVEL_UP_MOVE(29, MOVE_OVERHEAT),
      LEVEL_UP_MOVE(33, MOVE_STEAM_ERUPTION),  ],
      Image:"/images/pkmn/Coffee2.jfif"
    },
    {
      Desc: "",
      Name: "Wisper",
      Type1: "Fairy",
      Type2: "",
      Ability: "",
      HP: "53",
      Attack: "47",
      Def: "35",
      SAtt: "59",
      SDef: "65",
      Speed: "53",
      StatTotal: "312",
      SMove1: "",
      SMove2: "",
      OtheMovesEg:[MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,  LEVEL_UP_MOVE( 1,MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE( 6, MOVE_FAIRY_WIND),
      LEVEL_UP_MOVE( 10, MOVE_ICY_WIND),
      LEVEL_UP_MOVE(14, MOVE_GEOMANCY),
      LEVEL_UP_MOVE(18, MOVE_AURORA_VEIL),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(25, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(29, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(33, MOVE_ICE_BEAM),   ]
    },
    {
      Desc: "",
      Name: "Tinnice",
      Type1: "Fairy",
      Type2: "Ice",
      Ability: "",
      HP: "68",
      Attack: "61",
      Def: "46",
      SAtt: "76",
      SDef: "84",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,  LEVEL_UP_MOVE( 1,MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE( 6, MOVE_FAIRY_WIND),
      LEVEL_UP_MOVE( 10, MOVE_ICY_WIND),
      LEVEL_UP_MOVE(14, MOVE_GEOMANCY),
      LEVEL_UP_MOVE(18, MOVE_AURORA_VEIL),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(25, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(29, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(33, MOVE_ICE_BEAM),   ]
    },
    {
      Desc: "",
      Name: "Silice",
      Type1: "Fairy",
      Type2: "Ice",
      Ability: "",
      HP: "90",
      Attack: "80",
      Def: "60",
      SAtt: "100",
      SDef: "110",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,  LEVEL_UP_MOVE( 1,MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE( 6, MOVE_FAIRY_WIND),
      LEVEL_UP_MOVE( 10, MOVE_ICY_WIND),
      LEVEL_UP_MOVE(14, MOVE_GEOMANCY),
      LEVEL_UP_MOVE(18, MOVE_AURORA_VEIL),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(25, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(29, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(33, MOVE_ICE_BEAM),   ]
    },
    {
      Desc: "",
      Name: "Firetot",
      Type1: "Fire",
      Type2: "",
      Ability: "",
      HP: "53",
      Attack: "53",
      Def: "65",
      SAtt: "59",
      SDef: "35",
      Speed: "47",
      StatTotal: "312",
      SMove1: "",
      SMove2: "",
      OtheMovesEg:[MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,   LEVEL_UP_MOVE( 1,MOVE_EMBER),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_INCINERATE),
      LEVEL_UP_MOVE(14, MOVE_BITE),
      LEVEL_UP_MOVE(18, MOVE_SUNNY_DAY),
      LEVEL_UP_MOVE(21, MOVE_DRAGON_PULSE),
      LEVEL_UP_MOVE(25, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(29, MOVE_CLANGOROUS_SOUL),
      LEVEL_UP_MOVE(33, MOVE_FIRE_BLAST),   ]
    },
    {
      Desc: "",
      Name: "Flamegon",
      Type1: "Fire",
      Type2: "Dragon",
      Ability: "",
      HP: "68",
      Attack: "68",
      Def: "84",
      SAtt: "76",
      SDef: "46",
      Speed: "61",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,   LEVEL_UP_MOVE( 1,MOVE_EMBER),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_INCINERATE),
      LEVEL_UP_MOVE(14, MOVE_BITE),
      LEVEL_UP_MOVE(18, MOVE_SUNNY_DAY),
      LEVEL_UP_MOVE(21, MOVE_DRAGON_PULSE),
      LEVEL_UP_MOVE(25, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(29, MOVE_CLANGOROUS_SOUL),
      LEVEL_UP_MOVE(33, MOVE_FIRE_BLAST),  ]
    },
    {
      Desc: "",
      Name: "Feroroar",
      Type1: "Fire",
      Type2: "Dragon",
      Ability: "",
      HP: "90",
      Attack: "90",
      Def: "110",
      SAtt: "100",
      SDef: "60",
      Speed: "80",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,   LEVEL_UP_MOVE( 1,MOVE_EMBER),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_INCINERATE),
      LEVEL_UP_MOVE(14, MOVE_BITE),
      LEVEL_UP_MOVE(18, MOVE_SUNNY_DAY),
      LEVEL_UP_MOVE(21, MOVE_DRAGON_PULSE),
      LEVEL_UP_MOVE(25, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(29, MOVE_CLANGOROUS_SOUL),
      LEVEL_UP_MOVE(33, MOVE_FIRE_BLAST),  ]
    },
    {
      Desc: "",
      Name: "Glacerror",
      Type1: "Ice",
      Type2: "Electric",
      Ability: "",
      HP: "130",
      Attack: "120",
      Def: "120",
      SAtt: "30",
      SDef: "120",
      Speed: "10",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_HAIL,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_PROTECT       ,                               //
      MOVE_RAIN_DANCE     ,                              //
       MOVE_SAFEGUARD    ,                                //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1,MOVE_ICE_BALL),
      LEVEL_UP_MOVE( 6, MOVE_NUZZLE),
      LEVEL_UP_MOVE( 10, MOVE_AVALANCHE),
      LEVEL_UP_MOVE(14, MOVE_SPARK),
      LEVEL_UP_MOVE(18, MOVE_MAGNET_RISE),
      LEVEL_UP_MOVE(21, MOVE_ICICLE_CRASH),
      LEVEL_UP_MOVE(25, MOVE_VOLT_TACKLE),
      LEVEL_UP_MOVE(29, MOVE_MOUNTAIN_GALE),
      LEVEL_UP_MOVE(33, MOVE_LANDS_WRATH),     ],
      Image:"/images/pkmn/Glacerror3.jfif"
    },
    {
      Desc: "",
      Name: "Diablous",
      Type1: "Fire",
      Type2: "Dark",
      Ability: "",
      HP: "110",
      Attack: "99",
      Def: "71",
      SAtt: "99",
      SDef: "71",
      Speed: "80",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_IRON_TAIL     ,                               //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_EARTHQUAKE   ,                                //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_FIRE_SPIN),
      LEVEL_UP_MOVE( 6, MOVE_PURSUIT),
      LEVEL_UP_MOVE( 10, MOVE_FLAME_CHARGE),
      LEVEL_UP_MOVE(14, MOVE_SPARK),
      LEVEL_UP_MOVE(18, MOVE_BRUTAL_SWING),
      LEVEL_UP_MOVE(21, MOVE_MAGMA_STORM),
      LEVEL_UP_MOVE(23, MOVE_ICE_PUNCH),
      LEVEL_UP_MOVE(27, MOVE_SHADOW_BONE),
      LEVEL_UP_MOVE(31, MOVE_RAGING_FURY),
      LEVEL_UP_MOVE(35, MOVE_FIERY_WRATH),       ],
      Image:"/images/pkmn/Diablous1.jfif"
    },
    {
      Desc: "",
      Name: "Kevlair",
      Type1: "Steel",
      Type2: "Rock",
      Ability: "",
      HP: "86",
      Attack: "36",
      Def: "130",
      SAtt: "36",
      SDef: "58",
      Speed: "36",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
      MOVE_TAUNT           ,                             //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_FRUSTRATION    ,                              //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_REFLECT      ,                                //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_REST        ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,   LEVEL_UP_MOVE( 1,MOVE_METAL_CLAW),
      LEVEL_UP_MOVE( 6, MOVE_ACCELEROCK),
      LEVEL_UP_MOVE( 10, MOVE_AUTOTOMIZE),
      LEVEL_UP_MOVE(14, MOVE_STEALTH_ROCK),
      LEVEL_UP_MOVE(16, MOVE_WISH),
      LEVEL_UP_MOVE(18, MOVE_IRON_HEAD),
      LEVEL_UP_MOVE(21, MOVE_SANDSTORM),
      LEVEL_UP_MOVE(25, MOVE_ROCK_SLIDE),
      LEVEL_UP_MOVE(29, MOVE_DOUBLE_IRON_BASH),
      LEVEL_UP_MOVE(33, MOVE_POWER_SHIFT),  ]
    },
    {
      Desc: "",
      Name: "Bulletin",
      Type1: "Steel",
      Type2: "Rock",
      Ability: "",
      HP: "120",
      Attack: "50",
      Def: "180",
      SAtt: "50",
      SDef: "80",
      Speed: "50",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
      MOVE_TAUNT           ,                             //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_FRUSTRATION    ,                              //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_REFLECT      ,                                //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_REST        ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,   LEVEL_UP_MOVE( 1,MOVE_METAL_CLAW),
      LEVEL_UP_MOVE( 6, MOVE_ACCELEROCK),
      LEVEL_UP_MOVE( 10, MOVE_AUTOTOMIZE),
      LEVEL_UP_MOVE(14, MOVE_STEALTH_ROCK),
      LEVEL_UP_MOVE(16, MOVE_WISH),
      LEVEL_UP_MOVE(18, MOVE_IRON_HEAD),
      LEVEL_UP_MOVE(21, MOVE_SANDSTORM),
      LEVEL_UP_MOVE(25, MOVE_ROCK_SLIDE),
      LEVEL_UP_MOVE(29, MOVE_DOUBLE_IRON_BASH),
      LEVEL_UP_MOVE(33, MOVE_POWER_SHIFT),  ]
    },
    {
      Desc: "",
      Name: "Drudrip",
      Type1: "Poison",
      Type2: "Flying",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "61",
      SAtt: "72",
      SDef: "61",
      Speed: "58",
      StatTotal: "382",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TOXIC,                                        //
      MOVE_RETURN      ,                                 //
      MOVE_SLUDGE_BOMB   ,                               //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_FLY        , LEVEL_UP_MOVE( 1,MOVE_GUST),
      LEVEL_UP_MOVE( 6, MOVE_ACID),
      LEVEL_UP_MOVE( 10, MOVE_TOXIC),
      LEVEL_UP_MOVE(14, MOVE_FLY),
      LEVEL_UP_MOVE(18, MOVE_SLUDGE),
      LEVEL_UP_MOVE(21, MOVE_AIR_CUTTER),
      LEVEL_UP_MOVE(25, MOVE_VENOM_DRENCH),
      LEVEL_UP_MOVE(29, MOVE_OBLIVION_WING),
      LEVEL_UP_MOVE(33, MOVE_SLUDGE_BOMB),  ],
      Image:"/images/pkmn/Drudrip.jfif"
    },
    {
      Desc: "",
      Name: "Sludrop",
      Type1: "Poison",
      Type2: "Flying",
      Ability: "",
      HP: "90",
      Attack: "90",
      Def: "85",
      SAtt: "100",
      SDef: "85",
      Speed: "80",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TOXIC,                                        //
      MOVE_RETURN      ,                                 //
      MOVE_SLUDGE_BOMB   ,                               //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
       MOVE_STEEL_WING   ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_FLY        , LEVEL_UP_MOVE( 1,MOVE_GUST),
      LEVEL_UP_MOVE( 6, MOVE_ACID),
      LEVEL_UP_MOVE( 10, MOVE_TOXIC),
      LEVEL_UP_MOVE(14, MOVE_FLY),
      LEVEL_UP_MOVE(18, MOVE_SLUDGE),
      LEVEL_UP_MOVE(21, MOVE_AIR_CUTTER),
      LEVEL_UP_MOVE(25, MOVE_VENOM_DRENCH),
      LEVEL_UP_MOVE(29, MOVE_OBLIVION_WING),
      LEVEL_UP_MOVE(33, MOVE_SLUDGE_BOMB),],
      Image:"/images/pkmn/Sludrop.jfif"
    },
    {
      Desc: "",
      Name: "Smogun",
      Type1: "Poison",
      Type2: "Steel",
      Ability: "",
      HP: "90",
      Attack: "140",
      Def: "90",
      SAtt: "70",
      SDef: "70",
      Speed: "70",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
       MOVE_REFLECT      ,                                //
      MOVE_SLUDGE_BOMB   ,                               //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE( 6, MOVE_ACID_SPRAY),
      LEVEL_UP_MOVE( 10, MOVE_TAR_SHOT),
      LEVEL_UP_MOVE(14, MOVE_BARB_BARRAGE),
      LEVEL_UP_MOVE(18, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(21, MOVE_MUD_SHOT),
      LEVEL_UP_MOVE(25, MOVE_GUNK_SHOT),
      LEVEL_UP_MOVE(29, MOVE_FLASH_CANNON),
      LEVEL_UP_MOVE(33, MOVE_SEARING_SHOT),           ]
    },
    {
      Desc: "Special Encouter 560s",
      Name: "Miths",
      Type1: "Dark",
      Type2: "Fighting",
      Ability: "",
      HP: "70",
      Attack: "120",
      Def: "70",
      SAtt: "90",
      SDef: "70",
      Speed: "140",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_EARTHQUAKE   ,                                //
       MOVE_DIG       ,                                   //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_DOUBLE_TEAM   ,                               //
      MOVE_SANDSTORM     ,                               //
      MOVE_ROCK_TOMB    ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
       MOVE_THIEF        ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_POWER_TRIP),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PAYBACK),
      LEVEL_UP_MOVE(14, MOVE_REVENGE),
      LEVEL_UP_MOVE(18, MOVE_SWIFT),
      LEVEL_UP_MOVE(21, MOVE_ASSURANCE),
      LEVEL_UP_MOVE(25, MOVE_VITAL_THROW),
      LEVEL_UP_MOVE(29, MOVE_CLOSE_COMBAT),
      LEVEL_UP_MOVE(33, MOVE_THROAT_CHOP),    ]
    },
    {
      Desc: "",
      Name: "Sawnick",
      Type1: "Flying",
      Type2: "Ground",
      Ability: "",
      HP: "60",
      Attack: "150",
      Def: "55",
      SAtt: "40",
      SDef: "55",
      Speed: "200",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [ MOVE_HIDDEN_POWER ,                                //
      MOVE_SUNNY_DAY     ,                               //
     MOVE_TAUNT           ,                             //
     MOVE_HYPER_BEAM       ,                            //
      MOVE_SOLAR_BEAM    ,                               //
     MOVE_THUNDER      ,                                //
     MOVE_EARTHQUAKE   ,                                //
     MOVE_RETURN      ,                                 //
      MOVE_DIG       ,                                   //
      MOVE_SHADOW_BALL   ,                               //
     MOVE_BRICK_BREAK    ,                              //
      MOVE_SHOCK_WAVE   ,                                //
     MOVE_AERIAL_ACE   ,                                //
     MOVE_SECRET_POWER  ,                               //
     MOVE_REST        ,                                 //
     MOVE_ATTRACT      ,                               //
     MOVE_FLY        ,                                  //
     MOVE_SURF      ,                                   //
     MOVE_FLASH        ,                                //
      MOVE_WATERFALL   ,                                 //
     MOVE_DIVE  , LEVEL_UP_MOVE( 1,MOVE_ACROBATICS),
     LEVEL_UP_MOVE( 6, MOVE_RAPID_SPIN),
     LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
     LEVEL_UP_MOVE(14, MOVE_BULLDOZE),
     LEVEL_UP_MOVE(18, MOVE_SWIFT),
     LEVEL_UP_MOVE(21, MOVE_BOUNCE),
     LEVEL_UP_MOVE(25, MOVE_DIG),
     LEVEL_UP_MOVE(29, MOVE_SPIN_OUT),
     LEVEL_UP_MOVE(33, MOVE_ELECTRO_BALL),
     LEVEL_UP_MOVE(36, MOVE_HEADLONG_RUSH),       ]
    },
    {
      Desc: "",
      Name: "Manbat",
      Type1: "Dark",
      Type2: "Flying",
      Ability: "",
      HP: "100",
      Attack: "100",
      Def: "100",
      SAtt: "90",
      SDef: "90",
      Speed: "80",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_FRUSTRATION    ,                              //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
       MOVE_THIEF        ,                                //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_PURSUIT),
      LEVEL_UP_MOVE( 6, MOVE_COMET_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_ACROBATICS),
      LEVEL_UP_MOVE(14, MOVE_UPPER_HAND),
      LEVEL_UP_MOVE(18, MOVE_NIGHT_SLASH),
      LEVEL_UP_MOVE(21, MOVE_SKY_DROP),
      LEVEL_UP_MOVE(25, MOVE_STEEL_WING),
      LEVEL_UP_MOVE(29, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(33, MOVE_FLYING_PRESS),   ],
      Image:"/images/pkmn/Manbat1.jfif"
    },
    {
      Desc: "",
      Name: "Admiral Eagle",
      Type1: "Fire",
      Type2: "Fighting",
      Ability: "",
      HP: "80",
      Attack: "190",
      Def: "80",
      SAtt: "80",
      SDef: "80",
      Speed: "50",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_ATTRACT      ,                               //
      MOVE_OVERHEAT    ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,LEVEL_UP_MOVE( 1,MOVE_FLAME_CHARGE),
      LEVEL_UP_MOVE( 6, MOVE_POWER_UP_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_ACROBATICS),
      LEVEL_UP_MOVE(14, MOVE_VICTORY_DANCE),
      LEVEL_UP_MOVE(18, MOVE_FIRE_PUNCH),
      LEVEL_UP_MOVE(21, MOVE_TAUNT),
      LEVEL_UP_MOVE(25, MOVE_HIGH_JUMP_KICK),
      LEVEL_UP_MOVE(29, MOVE_FOCUS_PUNCH),
      LEVEL_UP_MOVE(33, MOVE_FLARE_BLITZ),  ]
    },
    {
      Desc: "",
      Name: "Mephis",
      Type1: "Electric",
      Type2: "Dark",
      Ability: "",
      HP: "110",
      Attack: "25",
      Def: "110",
      SAtt: "160",
      SDef: "115",
      Speed: "40",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
      MOVE_HAIL,                                         //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_BLIZZARD       ,                              //
      MOVE_FRUSTRATION    ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_CUT       ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1,MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 6, MOVE_NASTY_PLOT),
      LEVEL_UP_MOVE( 10, MOVE_TOXIC),
      LEVEL_UP_MOVE(14, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(18, MOVE_GLACIATE),
      LEVEL_UP_MOVE(21, MOVE_DARK_PULSE),
      LEVEL_UP_MOVE(25, MOVE_THUNDERBOLT),
      LEVEL_UP_MOVE(29, MOVE_BLIZZARD),
      LEVEL_UP_MOVE(33, MOVE_RUINATION), ],
      Image:"/images/pkmn/Mephis1.jfif"
    },
    {
      Desc: "",
      Name: "Careagain",
      Type1: "Poison",
      Type2: "Psychic",
      Ability: "",
      HP: "60",
      Attack: "70",
      Def: "50",
      SAtt: "110",
      SDef: "180",
      Speed: "90",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_DRAGON_CLAW,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
       MOVE_PSYCHIC    ,                                  //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_SLUDGE_BOMB   ,                               //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , LEVEL_UP_MOVE( 1,MOVE_ACID_SPRAY),
      LEVEL_UP_MOVE( 6, MOVE_INFESTATION),
      LEVEL_UP_MOVE( 10, MOVE_CONFUSION),
      LEVEL_UP_MOVE(14, MOVE_TOXIC),
      LEVEL_UP_MOVE(18, MOVE_PSYSHOCK),
      LEVEL_UP_MOVE(21, MOVE_VENOSHOCK),
      LEVEL_UP_MOVE(25, MOVE_U_TURN),
      LEVEL_UP_MOVE(29, MOVE_PSYSTRIKE),
      LEVEL_UP_MOVE(33, MOVE_MEAN_LOOK), ]
    },
    {
      Desc: "",
      Name: "Merci",
      Type1: "Flying",
      Type2: "",
      Ability: "",
      HP: "130",
      Attack: "30",
      Def: "120",
      SAtt: "30",
      SDef: "120",
      Speed: "130",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_RAIN_DANCE     ,                              //
       MOVE_SAFEGUARD    ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
      MOVE_FLY        ,                                  //
      MOVE_FLASH        , LEVEL_UP_MOVE( 1,MOVE_GUST),
      LEVEL_UP_MOVE( 6, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE( 10, MOVE_TAILWIND),
      LEVEL_UP_MOVE(14, MOVE_WISH),
      LEVEL_UP_MOVE(18, MOVE_CHATTER),
      LEVEL_UP_MOVE(21, MOVE_HEAL_BELL),
      LEVEL_UP_MOVE(25, MOVE_ROOST),
      LEVEL_UP_MOVE(29, MOVE_OBLIVION_WING),
      LEVEL_UP_MOVE(33, MOVE_REVIVAL_BLESSING),  ],
      Image:"/images/pkmn/Merci2.jfif"
    },
    {
      Desc: "",
      Name: "Trapclap",
      Type1: "Normal",
      Type2: "Steel",
      Ability: "",
      HP: "95",
      Attack: "93",
      Def: "95",
      SAtt: "93",
      SDef: "94",
      Speed: "90",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TAUNT           ,                             //
      MOVE_LIGHT_SCREEN    ,                             //
     MOVE_RETURN      ,                                 //
     MOVE_REST        ,                                 //
     MOVE_ATTRACT      ,                               //
      MOVE_THIEF        ,                                //
     MOVE_SNATCH      ,                                 //
     MOVE_CUT       ,                                   //
     MOVE_FLASH        ,                                //
     MOVE_ROCK_SMASH   , LEVEL_UP_MOVE( 1,MOVE_DOUBLE_SLAP),
     LEVEL_UP_MOVE( 6, MOVE_RAPID_SPIN),
     LEVEL_UP_MOVE( 10, MOVE_METAL_CLAW),
     LEVEL_UP_MOVE(14, MOVE_YAWN),
     LEVEL_UP_MOVE(18, MOVE_SHELTER),
     LEVEL_UP_MOVE(21, MOVE_TEETER_DANCE),
     LEVEL_UP_MOVE(25, MOVE_METAL_SOUND),
     LEVEL_UP_MOVE(29, MOVE_THRASH),
     LEVEL_UP_MOVE(33, MOVE_BATON_PASS),   ]
    },
    {
      Desc: "Water Temple Guardians 580s",
      Name: "Hydractic",
      Type1: "Water",
      Type2: "Dragon",
      Ability: "",
      HP: "130",
      Attack: "130",
      Def: "80",
      SAtt: "80",
      SDef: "80",
      Speed: "80",
      StatTotal: "580",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_DRAGON_CLAW,                                  //
      MOVE_WATER_PULSE,                                  //
      MOVE_ROAR,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_FRUSTRATION    ,                              //
       MOVE_TORMENT       ,                               //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  , LEVEL_UP_MOVE( 1,MOVE_SURGING_STRIKES),
      LEVEL_UP_MOVE( 6, MOVE_SCALE_SHOT),
      LEVEL_UP_MOVE( 10, MOVE_TRIPLE_DIVE),
      LEVEL_UP_MOVE(14, MOVE_BITE),
      LEVEL_UP_MOVE(18, MOVE_DRAGON_DANCE),
      LEVEL_UP_MOVE(21, MOVE_WATERFALL),
      LEVEL_UP_MOVE(25, MOVE_OUTRAGE),
      LEVEL_UP_MOVE(29, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_WAVE_CRASH),       ],
      Image:"/images/pkmn/Hydractic2.jfif"
    },
    {
      Desc: "",
      Name: "Wreepur",
      Type1: "Water",
      Type2: "Dark",
      Ability: "",
      HP: "80",
      Attack: "130",
      Def: "80",
      SAtt: "80",
      SDef: "80",
      Speed: "130",
      StatTotal: "580",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_ROAR,                                         //
      MOVE_TAUNT           ,                             //
      MOVE_FRUSTRATION    ,                              //
       MOVE_TORMENT       ,                               //
       MOVE_THIEF        ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,LEVEL_UP_MOVE( 1,MOVE_SURGING_STRIKES),
      LEVEL_UP_MOVE( 6, MOVE_BITE),
      LEVEL_UP_MOVE( 10, MOVE_CLAMP),
      LEVEL_UP_MOVE(14, MOVE_FLIP_TURN),
      LEVEL_UP_MOVE(18, MOVE_ICE_FANG),
      LEVEL_UP_MOVE(21, MOVE_CRUNCH),
      LEVEL_UP_MOVE(25, MOVE_DRAGON_TAIL),
      LEVEL_UP_MOVE(29, MOVE_JAW_LOCK),
      LEVEL_UP_MOVE(33, MOVE_FISHIOUS_REND),]
    },
    {
      Desc: "",
      Name: "Klankir",
      Type1: "Water",
      Type2: "Steel",
      Ability: "",
      HP: "130",
      Attack: "80",
      Def: "130",
      SAtt: "80",
      SDef: "80",
      Speed: "80",
      StatTotal: "580",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_HAIL,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
       MOVE_SAFEGUARD    ,                                //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  , LEVEL_UP_MOVE( 1,MOVE_SURGING_STRIKES),
      LEVEL_UP_MOVE( 6, MOVE_YAWN),
      LEVEL_UP_MOVE( 10, MOVE_CLAMP),
      LEVEL_UP_MOVE(14, MOVE_AQUA_RING),
      LEVEL_UP_MOVE(18, MOVE_IRON_DEFENSE),
      LEVEL_UP_MOVE(21, MOVE_ANCHOR_SHOT),
      LEVEL_UP_MOVE(25, MOVE_TEARFUL_LOOK),
      LEVEL_UP_MOVE(29, MOVE_SUBSTITUTE),
      LEVEL_UP_MOVE(33, MOVE_WATER_SPOUT),      ],
      Image:"/images/pkmn/Klanker3.jfif"
    },
    {
      Desc: "",
      Name: "Mario",
      Type1: "Normal",
      Type2: "Fire",
      Ability: "",
      HP: "97",
      Attack: "97",
      Def: "96",
      SAtt: "97",
      SDef: "96",
      Speed: "97",
      StatTotal: "580",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_ATTRACT      ,                               //
       MOVE_THIEF        ,                                //
       MOVE_SKILL_SWAP   ,                                //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,                                //
      MOVE_DIVE  ,      LEVEL_UP_MOVE( 1,MOVE_FIRE_SPIN),
      LEVEL_UP_MOVE( 6, MOVE_POUND),
      LEVEL_UP_MOVE( 10, MOVE_GROWTH),
      LEVEL_UP_MOVE(14, MOVE_ICE_BALL),
      LEVEL_UP_MOVE(18, MOVE_SKY_UPPERCUT),
      LEVEL_UP_MOVE(21, MOVE_STOMP),
      LEVEL_UP_MOVE(25, MOVE_DIVE),
      LEVEL_UP_MOVE(29, MOVE_FIRE_PUNCH),
      LEVEL_UP_MOVE(33, MOVE_FLY),      ]
    },
    {
      Desc: "After Leet 4 Shipwreck 560s",
      Name: "Nukem",
      Type1: "Fire",
      Type2: "Poison",
      Ability: "",
      HP: "90",
      Attack: "70",
      Def: "110",
      SAtt: "140",
      SDef: "80",
      Speed: "70",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [ MOVE_SHOCK_WAVE   ,                                //
      MOVE_SLUDGE_BOMB   ,                               //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_FLASH        ,  LEVEL_UP_MOVE( 1,MOVE_INCINERATE),
      LEVEL_UP_MOVE( 6, MOVE_SMOG),
      LEVEL_UP_MOVE( 10, MOVE_FLAME_BURST),
      LEVEL_UP_MOVE(14, MOVE_EXPLOSION),
      LEVEL_UP_MOVE(18, MOVE_SLUDGE_BOMB),
      LEVEL_UP_MOVE(21, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(25, MOVE_INFERNO),
      LEVEL_UP_MOVE(29, MOVE_SANDSEAR_STORM),
      LEVEL_UP_MOVE(33, MOVE_SLUDGE_WAVE),    ]
    },
    {
      Desc: "",
      Name: "Khantractor",
      Type1: "Rock",
      Type2: "Electric",
      Ability: "",
      HP: "100",
      Attack: "160",
      Def: "110",
      SAtt: "50",
      SDef: "110",
      Speed: "30",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_TOXIC,                                        //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_FRUSTRATION    ,                              //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_BRICK_BREAK    ,                              //
       MOVE_SHOCK_WAVE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_FACADE        ,                               //
      MOVE_SECRET_POWER  ,                               //
       MOVE_THIEF        ,                                //
      MOVE_SNATCH      ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1,MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 6, MOVE_SALT_CURE),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_SPARK),
      LEVEL_UP_MOVE(18, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(21, MOVE_VOLT_SWITCH),
      LEVEL_UP_MOVE(25, MOVE_ROCK_WRECKER),
      LEVEL_UP_MOVE(29, MOVE_LAST_RESORT),
      LEVEL_UP_MOVE(33, MOVE_WILD_CHARGE), ],
      Image:"/images/pkmn/Khantractor2.jfif"
    },
    {
      Desc: "",
      Name: "Le Ridy",
      Type1: "Steel",
      Type2: "Dragon",
      Ability: "",
      HP: "100",
      Attack: "140",
      Def: "80",
      SAtt: "50",
      SDef: "50",
      Speed: "140",
      StatTotal: "560",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_TOXIC,                                        //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_ICE_BEAM          ,                          //
      MOVE_HYPER_BEAM       ,                            //
       MOVE_LIGHT_SCREEN    ,                             //
       MOVE_PROTECT       ,                               //
      MOVE_FRUSTRATION    ,                              //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_THUNDERBOLT    ,                              //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_AERIAL_ACE   ,                                //
       MOVE_TORMENT       ,                               //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , LEVEL_UP_MOVE( 1,MOVE_FLAME_CHARGE),
      LEVEL_UP_MOVE( 6, MOVE_METAL_CLAW),
      LEVEL_UP_MOVE( 10, MOVE_SCREECH),
      LEVEL_UP_MOVE(14, MOVE_DRAGON_TAIL),
      LEVEL_UP_MOVE(18, MOVE_SLASH),
      LEVEL_UP_MOVE(21, MOVE_BLAZING_TORQUE),
      LEVEL_UP_MOVE(25, MOVE_DRAGON_CLAW),
      LEVEL_UP_MOVE(29, MOVE_IRON_TAIL),
      LEVEL_UP_MOVE(33, MOVE_GLAIVE_RUSH),               ]
    },
    {
      Desc: "Final",
      Name: "Daybur",
      Type1: "Electric",
      Type2: "",
      Ability: "Levitate",
      HP: "255",
      Attack: "255",
      Def: "255",
      SAtt: "255",
      SDef: "255",
      Speed: "255",
      StatTotal: "1530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
       MOVE_HIDDEN_POWER ,                                //
       MOVE_SUNNY_DAY     ,                               //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_SECRET_POWER  ,                               //
      MOVE_REST        ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   ,                                //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,  LEVEL_UP_MOVE( 1,MOVE_BOUNCE),
      LEVEL_UP_MOVE( 15, MOVE_AURA_SPHERE),
      LEVEL_UP_MOVE( 30, MOVE_ELECTRO_DRIFT),
      LEVEL_UP_MOVE(45, MOVE_EARTH_POWER),       ],
      Image:"/images/pkmn/Daybur2.jfif"

    },
    {
      Desc: "Starters",
      Name: "Little Ken",
      Type1: "Normal",
      Type2: "",
      Ability: "",
      HP: "60",
      Attack: "66",
      Def: "66",
      SAtt: "60",
      SDef: "60",
      Speed: "60",
      StatTotal: "372",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]                                //]
    },
    {
      Desc: "",
      Name: "Mini Alex",
      Type1: "Normal",
      Type2: "",
      Ability: "",
      HP: "60",
      Attack: "66",
      Def: "60",
      SAtt: "63",
      SDef: "60",
      Speed: "63",
      StatTotal: "372",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Tot Henry",
      Type1: "Normal",
      Type2: "",
      Ability: "",
      HP: "60",
      Attack: "60",
      Def: "60",
      SAtt: "66",
      SDef: "66",
      Speed: "60",
      StatTotal: "372",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),     ]
    },
    {
      Desc: "",
      Name: "Wee Huy",
      Type1: "Normal",
      Type2: "",
      Ability: "",
      HP: "60",
      Attack: "60",
      Def: "60",
      SAtt: "66",
      SDef: "60",
      Speed: "66",
      StatTotal: "372",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),     ]
    },
    {
      Desc: "",
      Name: "Juvi Justin",
      Type1: "Normal",
      Type2: "",
      Ability: "",
      HP: "63",
      Attack: "60",
      Def: "60",
      SAtt: "66",
      SDef: "60",
      Speed: "63",
      StatTotal: "372",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "Kenbee",
      Type1: "Bug",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "72",
      Def: "72",
      SAtt: "65",
      SDef: "65",
      Speed: "65",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "Kenock",
      Type1: "Rock",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "72",
      Def: "72",
      SAtt: "65",
      SDef: "65",
      Speed: "65",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "Kenclaw",
      Type1: "Dragon",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "72",
      Def: "72",
      SAtt: "65",
      SDef: "65",
      Speed: "65",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "Kenbreak",
      Type1: "Rock",
      Type2: "Dragon",
      Ability: "",
      HP: "85",
      Attack: "95",
      Def: "95",
      SAtt: "85",
      SDef: "85",
      Speed: "85",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "Kenbeast",
      Type1: "Bug",
      Type2: "Dragon",
      Ability: "",
      HP: "85",
      Attack: "95",
      Def: "95",
      SAtt: "85",
      SDef: "85",
      Speed: "85",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "RagenKengage",
      Type1: "Rock",
      Type2: "Bug",
      Ability: "",
      HP: "85",
      Attack: "95",
      Def: "95",
      SAtt: "85",
      SDef: "85",
      Speed: "85",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_GIGA_DRAIN     ,                             //
      MOVE_EARTHQUAKE   ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_DIG       ,                                   //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
      MOVE_SANDSTORM     ,                               //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_ROCK_TOMB    ,                                //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH, LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_TWISTER),
      LEVEL_UP_MOVE( 10, MOVE_ROLLOUT),
      LEVEL_UP_MOVE(14, MOVE_FURY_CUTTER),
      LEVEL_UP_MOVE(17, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_BREAKING_SWIPE),
      LEVEL_UP_MOVE(21, MOVE_SMACK_DOWN),
      LEVEL_UP_MOVE(24, MOVE_STEAMROLLER),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DRAGON_HAMMER),
      LEVEL_UP_MOVE(36, MOVE_MIGHTY_CLEAVE),
      LEVEL_UP_MOVE(39, MOVE_LUNGE),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED), ]
    },
    {
      Desc: "",
      Name: "Hairex",
      Type1: "Grass",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "72",
      Def: "65",
      SAtt: "68",
      SDef: "65",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Aerialex",
      Type1: "Flying",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "72",
      Def: "65",
      SAtt: "68",
      SDef: "65",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Metalex",
      Type1: "Steel",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "72",
      Def: "65",
      SAtt: "68",
      SDef: "65",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Yogalex",
      Type1: "Grass",
      Type2: "Flying",
      Ability: "",
      HP: "85",
      Attack: "95",
      Def: "85",
      SAtt: "90",
      SDef: "85",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Rocketair",
      Type1: "Steel",
      Type2: "Flying",
      Ability: "",
      HP: "85",
      Attack: "95",
      Def: "85",
      SAtt: "90",
      SDef: "85",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Hairmetalex",
      Type1: "Grass",
      Type2: "Steel",
      Ability: "",
      HP: "85",
      Attack: "95",
      Def: "85",
      SAtt: "90",
      SDef: "85",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_ROAR,                                         //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
       MOVE_SUNNY_DAY     ,                               //
      MOVE_TAUNT           ,                             //
      MOVE_HYPER_BEAM       ,                            //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_GIGA_DRAIN     ,                             //
       MOVE_SOLAR_BEAM    ,                               //
      MOVE_IRON_TAIL     ,                               //
      MOVE_RETURN      ,                                 //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_AERIAL_ACE   ,                                //
      MOVE_REST        ,                                 //
       MOVE_STEEL_WING   ,                                //
      MOVE_CUT       ,                                   //
      MOVE_FLY        ,                                  //
      MOVE_STRENGTH   ,                                  //
      MOVE_ROCK_SMASH   ,  LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_LEAFAGE),
      LEVEL_UP_MOVE( 10, MOVE_BULLET_PUNCH),
      LEVEL_UP_MOVE(14, MOVE_PECK),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_GRASSY_GLIDE),
      LEVEL_UP_MOVE(21, MOVE_MAGNET_BOMB),
      LEVEL_UP_MOVE(24, MOVE_AERIAL_ACE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_LEAF_BLADE),
      LEVEL_UP_MOVE(36, MOVE_METEOR_MASH),
      LEVEL_UP_MOVE(39, MOVE_SKY_ATTACK),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Pwnerfree",
      Type1: "Water",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "72",
      Speed: "65",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),    ]
    },
    {
      Desc: "",
      Name: "Musicry",
      Type1: "Psychic",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "72",
      Speed: "65",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),    ]
    },
    {
      Desc: "",
      Name: "Henrest",
      Type1: "Fairy",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "72",
      Speed: "65",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),    ]
    },
    {
      Desc: "",
      Name: "Cleanery",
      Type1: "Water",
      Type2: "Psychic",
      Ability: "",
      HP: "85",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "95",
      Speed: "85",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),    ]
    },
    {
      Desc: "",
      Name: "Henrem",
      Type1: "Psychic",
      Type2: "Fairy",
      Ability: "",
      HP: "85",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "95",
      Speed: "85",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),    ]
    },
    {
      Desc: "",
      Name: "Bepwner",
      Type1: "Water",
      Type2: "Fairy",
      Ability: "",
      HP: "85",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "95",
      Speed: "85",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_WATER_PULSE,                                  //
      MOVE_CALM_MIND,                                   //
      MOVE_BULK_UP,                                      //
      MOVE_ICE_BEAM          ,                          //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_RETURN      ,                                 //
       MOVE_PSYCHIC    ,                                  //
       MOVE_REFLECT      ,                                //
      MOVE_REST        ,                                 //
      MOVE_FLY        ,                                  //
      MOVE_SURF      ,                                   //
       MOVE_WATERFALL   ,                                 //
      MOVE_DIVE  ,    LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_BUBBLE),
      LEVEL_UP_MOVE( 10, MOVE_DISARMING_VOICE),
      LEVEL_UP_MOVE(12, MOVE_REST),
      LEVEL_UP_MOVE(13, MOVE_SLEEP_TALK),
      LEVEL_UP_MOVE(14, MOVE_CONFUSION),    
      LEVEL_UP_MOVE(16, MOVE_SWIFT),   
      LEVEL_UP_MOVE(18, MOVE_WATER_PULSE),
      LEVEL_UP_MOVE(21, MOVE_DRAINING_KISS),
      LEVEL_UP_MOVE(24, MOVE_PSYBEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SPARKLING_ARIA),
      LEVEL_UP_MOVE(36, MOVE_SPARKLY_SWIRL),
      LEVEL_UP_MOVE(39, MOVE_EXTRASENSORY),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),    ]
    },
    {
      Desc: "",
      Name: "Photour",
      Type1: "Fire",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "65",
      Speed: "72",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]
    },
    {
      Desc: "",
      Name: "Warhuy",
      Type1: "Fighting",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "65",
      Speed: "72",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]
    },
    {
      Desc: "",
      Name: "Wiispy",
      Type1: "Dark",
      Type2: "",
      Ability: "",
      HP: "65",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "65",
      Speed: "72",
      StatTotal: "404",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]
    },
    {
      Desc: "",
      Name: "Nukuy",
      Type1: "Fire",
      Type2: "Fighting",
      Ability: "",
      HP: "85",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "85",
      Speed: "95",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]
    },
    {
      Desc: "",
      Name: "Agentus",
      Type1: "Dark",
      Type2: "Fire",
      Ability: "",
      HP: "85",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "85",
      Speed: "95",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]
    },
    {
      Desc: "",
      Name: "Sniperoui",
      Type1: "Dark",
      Type2: "Fighting",
      Ability: "",
      HP: "85",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "85",
      Speed: "95",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg:[MOVE_FOCUS_PUNCH,                                  //
      MOVE_DRAGON_CLAW,                                  //
      MOVE_BULK_UP,                                      //
      MOVE_BULLET_SEED  ,                                //
      MOVE_TAUNT           ,                             //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
      MOVE_BRICK_BREAK    ,                              //
      MOVE_FLAMETHROWER   ,                              //
       MOVE_FIRE_BLAST  ,                                 //
      MOVE_REST        ,                                 //
      MOVE_OVERHEAT    ,                                 //
      MOVE_CUT       ,                                   //
      MOVE_STRENGTH   ,                                  //
      MOVE_FLASH        ,                                //
      MOVE_ROCK_SMASH   , 
      LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_MACH_PUNCH),
      LEVEL_UP_MOVE( 10, MOVE_PURSUIT),
      LEVEL_UP_MOVE(14, MOVE_EMBER),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_FORCE_PALM),
      LEVEL_UP_MOVE(21, MOVE_KNOCK_OFF),
      LEVEL_UP_MOVE(24, MOVE_INCINERATE),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_SECRET_SWORD),
      LEVEL_UP_MOVE(36, MOVE_NIGHT_DAZE),
      LEVEL_UP_MOVE(39, MOVE_FLAMETHROWER),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),  ]
    },
    {
      Desc: "",
      Name: "Codin",
      Type1: "Electric",
      Type2: "",
      Ability: "",
      HP: "68",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "65",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Justice",
      Type1: "Ice",
      Type2: "",
      Ability: "",
      HP: "68",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "65",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Lurkmoore",
      Type1: "Ghost",
      Type2: "",
      Ability: "",
      HP: "68",
      Attack: "65",
      Def: "65",
      SAtt: "72",
      SDef: "65",
      Speed: "68",
      StatTotal: "403",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Conditin",
      Type1: "Electric",
      Type2: "Ice",
      Ability: "",
      HP: "90",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "85",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Ghosterg",
      Type1: "Ice",
      Type2: "Ghost",
      Ability: "",
      HP: "90",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "85",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    {
      Desc: "",
      Name: "Justerr",
      Type1: "Electric",
      Type2: "Ghost",
      Ability: "",
      HP: "90",
      Attack: "85",
      Def: "85",
      SAtt: "95",
      SDef: "85",
      Speed: "90",
      StatTotal: "530",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: [MOVE_CALM_MIND,                                   //
      MOVE_HAIL,                                         //
      MOVE_ICE_BEAM          ,                          //
      MOVE_BLIZZARD       ,                              //
      MOVE_RAIN_DANCE     ,                              //
      MOVE_THUNDERBOLT    ,                              //
      MOVE_THUNDER      ,                                //
      MOVE_RETURN      ,                                 //
       MOVE_SHADOW_BALL   ,                               //
       MOVE_SHOCK_WAVE   ,                                //
      MOVE_REST        ,                                 //
      MOVE_SURF      ,                                   //
      MOVE_FLASH        ,LEVEL_UP_MOVE( 1, MOVE_TACKLE),
      LEVEL_UP_MOVE( 6, MOVE_THUNDER_SHOCK),
      LEVEL_UP_MOVE( 10, MOVE_SHADOW_SNEAK),
      LEVEL_UP_MOVE(14, MOVE_POWDER_SNOW),
      LEVEL_UP_MOVE(16, MOVE_SWIFT),
      LEVEL_UP_MOVE(18, MOVE_SHOCK_WAVE),
      LEVEL_UP_MOVE(21, MOVE_OMINOUS_WIND),
      LEVEL_UP_MOVE(24, MOVE_AURORA_BEAM),
      LEVEL_UP_MOVE(28, MOVE_TRI_ATTACK),
      LEVEL_UP_MOVE(33, MOVE_DISCHARGE),
      LEVEL_UP_MOVE(36, MOVE_SHADOW_BALL),
      LEVEL_UP_MOVE(39, MOVE_ICE_BEAM),
      LEVEL_UP_MOVE(42, MOVE_RECOVER),
      LEVEL_UP_MOVE(45, MOVE_EXTREME_SPEED),]
    },
    //other region pokemon
    {
      Desc: "",
      Name: "Cubone",
      Type1: "Ground",
      Type2: "",
      Ability: "",
      HP: "50",
      Attack: "50",
      Def: "95",
      SAtt: "40",
      SDef: "50",
      Speed: "35",
      StatTotal: "320",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/cubone.avif"
    },
    {
      Desc: "",
      Name: "Marowak",
      Type1: "Ground",
      Type2: "",
      Ability: "",
      HP: "60",
      Attack: "80",
      Def: "110",
      SAtt: "50",
      SDef: "80",
      Speed: "45",
      StatTotal: "425",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/marowak.avif"
    },
    {
      Desc: "",
      Name: "Spinarak",
      Type1: "Bug",
      Type2: "Poison",
      Ability: "",
      HP: "40",
      Attack: "60",
      Def: "40",
      SAtt: "40",
      SDef: "40",
      Speed: "40",
      StatTotal: "250",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/spinarak.avif"
    },
    {
      Desc: "",
      Name: "Ariados",
      Type1: "Bug",
      Type2: "Poison",
      Ability: "",
      HP: "70",
      Attack: "90",
      Def: "70",
      SAtt: "60",
      SDef: "70",
      Speed: "40",
      StatTotal: "400",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/ariados.avif"
    },
    {
      Desc: "",
      Name: "Wingull",
      Type1: "Water",
      Type2: "Flying",
      Ability: "",
      HP: "40",
      Attack: "30",
      Def: "30",
      SAtt: "55",
      SDef: "30",
      Speed: "85",
      StatTotal: "270",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/wingull.avif"
    },
    {
      Desc: "",
      Name: "Pelipper",
      Type1: "Water",
      Type2: "Flying",
      Ability: "",
      HP: "60",
      Attack: "50",
      Def: "100",
      SAtt: "95",
      SDef: "70",
      Speed: "65",
      StatTotal: "440",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/pelipper.avif"
    },
    {
      Desc: "",
      Name: "Budew",
      Type1: "Grass",
      Type2: "Poison",
      Ability: "",
      HP: "40",
      Attack: "30",
      Def: "35",
      SAtt: "50",
      SDef: "70",
      Speed: "55",
      StatTotal: "280",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/budew.avif"
    },
    {
      Desc: "",
      Name: "Roselia",
      Type1: "Grass",
      Type2: "Poison",
      Ability: "",
      HP: "50",
      Attack: "60",
      Def: "45",
      SAtt: "100",
      SDef: "80",
      Speed: "65",
      StatTotal: "400",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/roselia.avif"
    },
    {
      Desc: "",
      Name: "Archen",
      Type1: "Rock",
      Type2: "Flying",
      Ability: "",
      HP: "55",
      Attack: "112",
      Def: "45",
      SAtt: "74",
      SDef: "45",
      Speed: "70",
      StatTotal: "401",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/archen.avif"
    },
    {
      Desc: "",
      Name: "Archeops",
      Type1: "Rock",
      Type2: "Flying",
      Ability: "",
      HP: "75",
      Attack: "140",
      Def: "65",
      SAtt: "112",
      SDef: "65",
      Speed: "110",
      StatTotal: "567",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/archeops.avif"
    },
    {
      Desc: "",
      Name: "Hawlucha",
      Type1: "Fighting",
      Type2: "Flying",
      Ability: "",
      HP: "78",
      Attack: "92",
      Def: "75",
      SAtt: "74",
      SDef: "63",
      Speed: "118",
      StatTotal: "500",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/hawlucha.avif"
    },
    {
      Desc: "",
      Name: "Impidimp",
      Type1: "Dark",
      Type2: "Fairy",
      Ability: "",
      HP: "45",
      Attack: "45",
      Def: "30",
      SAtt: "55",
      SDef: "40",
      Speed: "50",
      StatTotal: "265",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/impidimp.avif"
    },
    {
      Desc: "",
      Name: "Morgrem",
      Type1: "Dark",
      Type2: "Fairy",
      Ability: "",
      HP: "65",
      Attack: "60",
      Def: "45",
      SAtt: "75",
      SDef: "55",
      Speed: "70",
      StatTotal: "370",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/morgrem.avif"
    },
    {
      Desc: "",
      Name: "Grimmsnarl",
      Type1: "Dark",
      Type2: "Fairy",
      Ability: "",
      HP: "95",
      Attack: "120",
      Def: "65",
      SAtt: "95",
      SDef: "75",
      Speed: "60",
      StatTotal: "510",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/grimmsnarl.avif"
    },
    {
      Desc: "",
      Name: "Sizzlipede",
      Type1: "Fire",
      Type2: "Bug",
      Ability: "",
      HP: "50",
      Attack: "65",
      Def: "45",
      SAtt: "50",
      SDef: "50",
      Speed: "45",
      StatTotal: "305",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/sizzlipede.avif"
    },
    {
      Desc: "",
      Name: "Centiskorch",
      Type1: "Fire",
      Type2: "Bug",
      Ability: "",
      HP: "100",
      Attack: "115",
      Def: "65",
      SAtt: "90",
      SDef: "90",
      Speed: "65",
      StatTotal: "525",
      SMove1: "",
      SMove2: "",
      OtheMovesEg: "",
      Image:"/images/pkmn/centiskorch.avif"
    }
  ]

export function findByName(name:string)
{
  return pokemonList.find(x=>x.Name == name);
}

export function getRandomPokemon() : BirthdayPokemon
{
  return pokemonList[~~(Math.random()*pokemonList.length)];
}

export var unlockedList=
[
  findByName("Palmu"),
  findByName("Palmula"),
  findByName("Palmuree"),
  findByName("Cookin"),
  findByName("Sludrop"), 
  findByName("Drudrip"),
  findByName("Diablous"),
  findByName("Timach"),
  findByName("Klankir"),
  findByName("Glacerror"),
  findByName("Merci"),
  findByName("Kylead"),
  findByName("Manbat"),
  findByName("Gleetcher"),
  findByName("Krasher"),
  findByName("Hydractic"),
  findByName("Khantractor"),
  findByName("Baypig"),
  findByName("Watersow"),
  findByName("Tidehog"),
  findByName("Daybur"),
  findByName("Coffish"),
  findByName("Paladin Guy"),
  findByName("Careagain"),
  findByName("Saurus"),
  findByName("Little Ken"),
  findByName("Mini Alex"),
  findByName("Tot Henry"),
  findByName("Wee Huy"),
  findByName("Juvi Justin"),
]
