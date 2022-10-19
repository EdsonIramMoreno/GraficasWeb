class newGame {
    constructor(gameMode) {
        this.gameMode = gameMode;
    }
}

var _gameMode = null;

$(document).ready(function () {

    $("#btn_Individual").click(function () {
        _gameMode = "Individual";
        var settings = new newGame(_gameMode);
        newGameFun(settings);
        location.replace("./level1.html");
    });

    $("#btn_Multijugador").click(function () {
        _gameMode = "Multijugador";
        var settings = new newGame(_gameMode);
        newGameFun(settings);
        location.replace("./level1.html");
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
});

function newGameFun(game_) {
    var settins_list = [];
    settins_list.push(game_);
    localStorage.setItem("settings", JSON.stringify(settins_list));
};