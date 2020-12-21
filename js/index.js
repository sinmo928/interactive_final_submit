$(document).ready(function () {


    var time = 0
    var turn = 0
    var up = 150


    setInterval(function () {
        time = time + 0.001
        turn = turn + 0.01

        $(".gear3").css("transform", 'rotateZ(' + turn + 'deg)')
        $(".gear4").css("transform", 'rotateZ(' + -turn * 2.5 + 2 + 'deg)')

        $(".gear1").css("transform", 'rotateZ(' + turn + 'deg)' + 'translateZ(' + 100 + 'px)')
        $(".gear2").css("transform", 'rotateZ(' + -turn * 2.5 + 'deg)' + 'translateZ(' + 100 + 'px)')

        $(".gear5").css("transform", 'rotateZ(' + (13 + -turn * 1.43) + 'deg)' + 'translateZ(' + 100 + 'px)')
        $(".gear6").css("transform", 'rotateZ(' + (5 + turn * 1.83) + 'deg)' + 'translateZ(' + 100 + 'px)')
        $(".gear7").css("transform", 'rotateZ(' + (-5 - turn * 2.5) + 'deg)' + 'translateZ(' + 100 + 'px)')

        $(".gear8").css("transform", 'rotateZ(' + (-5 + turn * 2.5) + 'deg)' + 'translateZ(' + 50 + 'px)')
        $(".gear9").css("transform", 'rotateZ(' + (-5 + turn * 2.5) + 'deg)' + 'translateZ(' + 65 + 'px)')
        $(".gear10").css("transform", 'rotateZ(' + (-5 - turn * 2.5) + 'deg)' + 'translateZ(' + 50 + 'px)')

        $(".gear11").css("transform", 'rotateZ(' + (-5 - turn * 2.5) + 'deg)' + 'translateZ(' + 90 + 'px)')
        $(".gear12").css("transform", 'rotateZ(' + (-5 + turn * 2.5) + 'deg)' + 'translateZ(' + 50 + 'px)')
        $(".gear13").css("transform", 'rotateZ(' + (-5 - turn * 2.5) + 'deg)' + 'translateZ(' + 75 + 'px)')
        $(".gear14").css("transform", 'rotateZ(' + (-5 - turn * 2.5) + 'deg)' + 'translateZ(' + 60 + 'px)')
        $(".gear15").css("transform", 'rotateZ(' + (-5 + turn * 2.5) + 'deg)' + 'translateZ(' + 50 + 'px)')
        $(".gear16").css("transform", 'rotateZ(' + (-5 + turn * 2.5) + 'deg)' + 'translateZ(' + 80 + 'px)')
        $(".gear17").css("transform", 'rotateZ(' + (-5 + turn * 2.5) + 'deg)' + 'translateZ(' + 50 + 'px)')


        if (time > 2.5) {
            $(".title").animate({ opacity: "100%" }, 2000)
        }

        if (time > 2) {
            $(".sub_title").animate({ opacity: "100%" }, 2000)
        }



        if (time > 1.5) {
            $(".gear-box").animate({ bottom: "0%" }, 6000 / 2)
            $(".text-box").animate({ top: "50%" }, 5500 / 2)
        }

        if (time > 0.3) {
            $(".gear-box").css("perspective", up + 'px')
            up = up + 0.2
            if (up > 1000) {
                up = 1000
            }
            console.log(up)

        }

    }, 1)



});