
//alert("危険なサイトです");//

$("btn").on("click", function () {
    //alert(1);
    //$("h1").text("押された〜")
    const random = Math.floor( Math.random() * 5);
    console.log(random , "駅までの距離感");

    if (random === 0) {
        console.log("大吉");
        $("h1").text("大吉")
        $("h1").css("color","red");
    }
    else if(random === 1) {
        console.log("吉");
        $("h1").text("吉")
        $("h1").css("color","black")
    }
    else if(random === 2) {
        console.log("中吉");
        $("h1").text("中吉")
        $("h1").css("color","black")
    }
    else if(random === 3) {
        console.log("小吉");
        $("h1").text("小吉")
        $("h1").css("color","black")
    }
    else if(random === 4) {
        console.log("末");
        $("h1").text("末")
        $("h1").css("color","black")
    }

  });