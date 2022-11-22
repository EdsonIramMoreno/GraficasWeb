class newGame {
    constructor(playersNames,game,gameMode,dificulty,stage,music,soundEffects) {
        this.playersNames = playersNames;
        this.game = game;
        this.gameMode = gameMode;
        this.dificulty = dificulty;
        this.stage = stage;
        this.music = music;
        this.soundEffects = soundEffects;
    }
}

var _playersNames = []
var _game = null;
var _gameMode = "Clasico";
var _dificulty = "principiante";
var _stage = "lvl1";
var _music = "ON";
var _soundEffects = "ON";

$(document).ready(function () {

    $("#btn_Individual").click(function () {
        $("#modal_individual").fadeToggle("slow");
    });

    $("#btn_Multijugador").click(function () {
        $("#modal_multijugador").fadeToggle("slow");
    });

    $("#btn_Records").click(function () {
        $("#modal_records").fadeToggle("slow");
    });

    $("#btn_Ajustes").click(function () {
        $("#modal_ajustes").fadeToggle("slow");
    });

    $(".close_modal").click(function () {
        $(this).closest('.modal').fadeToggle("slow");
    });
    
    $("#btn_jugarIndiv").click(function () {
        var j1 = document.getElementById("Jugador1").value;
        if(j1 != ""){
        _game = "Individual";
            _playersNames.push(j1);
            var settings = new newGame(_playersNames,_game, _gameMode,_dificulty,_stage,_music,_soundEffects);
            newGameFun(settings);
            location.replace("./level1.html");
        }
        else{
            window.alert("Favor de llenar todos los campos");
        }
    });

    $("#btn_jugarMulti").click(function () {
        var j1 = document.getElementById("Jugador1_s").value;
        var j2 = document.getElementById("Jugador2_s").value;
        if(j1 != "" && j2 != ""){
            _game = "Multijugador";
                _playersNames.push(j1);
                _playersNames.push(j2);
                var settings = new newGame(_playersNames,_game,_gameMode,_dificulty,_stage,_music,_soundEffects);
                newGameFun(settings);
                location.replace("./level1.html");
        }
        else{
            window.alert("Favor de llenar todos los campos");
        }
    });

    $("#btn_mute_m").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_sound_m").css("opacity", 1);
        _music = "OFF";
    })

    $("#btn_sound_m").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_mute_m").css("opacity", 1);
        _music = "ON";
    })

    $("#btn_mute_e").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_sound_e").css("opacity", 1);
        _soundEffects = "OFF";
    })

    $("#btn_sound_e").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_mute_e").css("opacity", 1);
        _soundEffects = "ON";
    })

    $("#btn_principiante").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_avanzado").css("opacity", 1);
        _dificulty = "principiante";
    })

    $("#btn_avanzado").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_principiante").css("opacity", 1);
        _dificulty = "avanzado";
    })

    $("#btn_principiante_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_avanzado_s").css("opacity", 1);
        _dificulty = "principiante";
    })

    $("#btn_avanzado_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_principiante_s").css("opacity", 1);
        _dificulty = "avanzado";
    })

    $("#btn_lvl1").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_lvl2").css("opacity", 1);
        $("#btn_lvl3").css("opacity", 1);
        _stage = "lvl1";
    })

    $("#btn_lvl2").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_lvl1").css("opacity", 1);
        $("#btn_lvl3").css("opacity", 1);
        _stage = "lvl2";
    })

    $("#btn_lvl3").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_lvl1").css("opacity", 1);
        $("#btn_lvl2").css("opacity", 1);
        _stage = "lvl3";
    })

    $("#btn_lvl1_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_lvl2_s").css("opacity", 1);
        $("#btn_lvl3_s").css("opacity", 1);
        _stage = "lvl1";
    })

    $("#btn_lvl2_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_lvl1_s").css("opacity", 1);
        $("#btn_lvl3_s").css("opacity", 1);
        _stage = "lvl2";
    })

    $("#btn_lvl3_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_lvl1_s").css("opacity", 1);
        $("#btn_lvl2_s").css("opacity", 1);
        _stage = "lvl3";
    })

    $("#btn_Supervivencia").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_Clasico").css("opacity", 1);
        _gameMode = "Supervivencia";
    })

    $("#btn_Clasico").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_Supervivencia").css("opacity", 1);
        _gameMode = "Clasico";
    })

    $("#btn_Clasico_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_Supervivencia_s").css("opacity", 1);
        _gameMode = "Clasico";
    })

    $("#btn_Supervivencia_s").click(function () {
        $(this).css("opacity", 0.5);
        $("#btn_Clasico_s").css("opacity", 1);
        _gameMode = "Supervivencia";
    })

    $("#id_record_Clasico").click(function () {
        $(this).css("opacity", 0.5);
        $("#id_record_Supervivencia").css("opacity", 1);
    })

    $("#id_record_Supervivencia").click(function () {
        $(this).css("opacity", 0.5);
        $("#id_record_Clasico").css("opacity", 1);
    })

});

function newGameFun(game_) {
    var settins_list = [];
    settins_list.push(game_);
    localStorage.setItem("settings", JSON.stringify(settins_list));
};

