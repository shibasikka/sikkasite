var w = 0;
$(function() {
 "use strict";


    /*----- Top scrolling -----*/
    $(".scrollTo").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1000);
    });
    /*----- Top scrolling End -----*/

    /* -------- Images Parallax ------- */
    if ($(".parallax").length > 0) {
        (function($) {
            var parallax = -0.5;

            var $bg_images = $(".parallax");
            var offset_tops = [];
            $bg_images.each(function(i, el) {
                offset_tops.push($(el).offset().top);
            });

            $(window).scroll(function() {
                var dy = $(this).scrollTop();
                $bg_images.each(function(i, el) {
                    var ot = offset_tops[i];
                    $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
                });
            });
        })(jQuery);
    }
    if ($(".parallax-2").length > 0) {
        (function($) {
            var parallax = 0.3;

            var $bg_images = $(".parallax-2");
            var offset_tops = [];
            $bg_images.each(function(i, el) {
                offset_tops.push($(el).offset().top);
            });

            $(window).scroll(function() {
                var dy = $(this).scrollTop();
                $bg_images.each(function(i, el) {
                    var ot = offset_tops[i];
                    $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
                });
            });
        })(jQuery);
    }
    /* -------- Images Parallax ------- */

    /*index : Roadmap slider*/
    if ($(".roadmap-slider").length > 0) {
        $(".roadmap-slider").owlCarousel({
            loop: true,
            autoplay: false,
            dots: true,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false
                },
                420: {
                    items: 2,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                767: {
                    items: 3,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                1200: {
                    items: 4,
                    loop: true,
                    nav: false,
                    margin: 0
                },
            }
        });
    }
    /*end Roadmap slider*/

    /*Blog slider*/
    if ($(".blog-slider").length > 0) {
        $(".blog-slider").owlCarousel({
            loop: true,
            dots: true,
            autoplay:true,
            autoplayTimeout:5000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                420: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },
            }
        });
    }
    /*end Blog slider*/

    /* Team slider*/
    if ($(".team-slider").length > 0) {
        $(".team-slider").owlCarousel({
            items: 4,
            loop:true,
            margin:0,
            nav:false,
            responsive: {
                0: {
                    dots: true,
                    nav:false,
                    items: 1
                },
                420: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
            }
        });
    }

    /* Tokan Graph */
    if ($("#tokensale-part").length > 0) {
    function tokan_graph () {
        var scrollDistance = $(window).scrollTop();
        var scrollDistance1 = $('#tokensale-part').offset().top - 100;

        if ( scrollDistance >= (scrollDistance1 - 100) && scrollDistance <= (scrollDistance1 + 100)) {
            $('.donut').listtopie({
              startAngle:270,
              strokeWidth:5,
                hoverEvent:true,
                hoverBorderColor:'#6239d7',
                hoverAnimate:false,
                drawType:'round',
                speedDraw:150,
                hoverColor:'#ffffff',
                textColor:'#3d1f94',
                strokeColor:'#3d1f94',
                textSize:'18',
                hoverAnimate:true,
                marginCenter:85,
            });
        }
    }

    $(window).scroll(function(){
        tokan_graph();
    })



  $(".token-graph").addClass("token-graph-right");
  }
  /* Tokan Graph End */

    function responsive_dropdown () {
        /* Responsive Menu */
        $(".menu-toggle").on("click", function(){
            $(".menu-toggle").toggleClass("active");
            $(".menu").slideToggle("slow");
        });
        $(".mega-menu > .opener").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".menu ul ul")
                    .slideUp(200);
            } else {
                $(".mega-menu > .opener").removeClass("active");
                $(this).addClass("active");
                $(".menu ul ul").slideUp(200);
                $(this)
                    .siblings(".menu ul ul")
                    .slideDown(200);
            }
        });
        /* Responsive Menu End */

    };
    $(document).ready(function() {
        responsive_dropdown ();
    });

    function accordion_faq () {
        /* Accordion FAQ */
        if ($(".accordion-faq-box").length > 0) {
            $(".accordion-faq-title").on("click", function() {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this)
                        .siblings(".accordion-faq-content")
                        .slideUp(200);
                } else {
                    $(this)
                    $(".accordion-faq-title").removeClass("active");
                    $(this).addClass("active");
                    $(".accordion-faq-content").slideUp(200);
                    $(this)
                        .siblings(".accordion-faq-content")
                        .slideDown(200);
                }
            });
        };
        /* Accordion FAQ End */
    };
    $(document).ready(function() {
        accordion_faq ();
    });


    /* -------- Countdown Timer ------- */
    if ($(".coins-counter-loop").length > 0) {
        var your_date = '2021-09-28 00:00:00';
        var second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        var countDown = new Date(your_date.replace(/-/g, "/")).getTime();
        
        setInterval(function() {    
            var now = new Date().getTime(),
                distance = countDown - now;
                document.getElementById('days').innerText = Math.floor(distance / (day));
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }, second);
    }
    /* -------- Countdown Timer End ------- */

    /* -------- Coins Progress --------*/
    if ($(".coins-progress").length > 0) {
        setTimeout(coins_progress, 3000);
        function coins_progress() {
            $(".coins-progress span").each(function () {
                $(this).animate({
                    width: $(this).attr("data-progress") + "%",
                },1000
                );
                $(this).text($(this).attr("data-progress") + "%");
            });
        };
    }
    /* -------- Coins Progress End --------*/

});
    


           
 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
          
          const holders = [ ['0x000000000000000000000000000000000000dead', 330750000000000.003],['0xb3e3111a4e5d20e27f0049f72d7a69240acb96c6 (PancakeSwap V2: SHIBASIKKA 5)', 252915979982534.588321423],['0x2e7448b3ab38ccb26d6a148faa18cd3f3d496cb2', 22187527109344.854074241],['0x417f03451af8be269475c2639d9c820cdc79b48e', 20154803092248.791146295],['0x2d045410f002a95efcee67759a92518fa3fce677', 19499999999999.997],['0xd292370fe15077506c2425350792c93a71161500', 15572828091159.856931206],['0x9e1134af848563772f1d3dab38c87dd713e3f535', 13458053320163.44274453],['0xfe93e8711c4004ddc5f342ad48dc902ac570705a', 12568938047812.054182574],['0x6316f677deff3ecbbd3dda6405fd24631858ec29', 11292881432426.248285958],['0x468bf1eb03f6ccc97021a0ceeed92f2fa3a397ec', 11096609267721.862780584],['0x410f1ec3e3b69d675a6a6d69ef674225831b0d84', 10955399098361.79412019],['0x24d97b176c5b299e0f3e0b214a50f4a2bfd729bf', 10500000000000],['0x76779dcd6db2751637bad8e71fc372b72df384e3', 6310103732786.801607281],['0x548e03c19a175a66912685f71e157706fee6a04d', 5000377162288.831458132],['0x1d49d3633e8696548f061c043003ba1b53bfa33a', 5000000000000],['0x4e6a309c5872047fc269cc43b64354399ff9af54', 4690118870803.789600878],['0xe12c2fede115eeccf6ae1e1453fcbda10820a029', 4265711781902.7440081],['0x60dc6b8d89655c71e74ad34e032cb99041e9d593', 3878842171492.534466617],['0x955095584d5850bca94fb9f67a5e7a85238e3ea9', 3756960915581.940607453],['0x8d0c4e9acb76e4b26b9b4bb89f0a43ac143d15e5', 3261601761969.952810889],['0x0b2784ba99660fd42b85baedd36b949f6a36c3dc', 3261075975247.592914446],['0x1219474e350899e8ff788efd513ff5bb895e30e3', 3221343177009.120411398],['0xe624689022d62b3a818aa39c1299cb78ed315df8', 3203999346923.22181414],['0x409f6ee1aebc135b74e1486146eb6f975c747f8d', 3097760804743.675192849],['0xf9fc557dab57a4e20c9a3766389363cd13486103', 2903464600170.84787786],['0x0165dfa0c24594ee8e4b75b1de5d411d6feae33d', 2266485018755.785671349],['0x9edf67c41df6d39fd60661b641be8d69b5b4a0db', 2238614998243.522595713],['0xe1312eea3cde4bfbfa55a7786a3984a674c12137', 2077774978214.241933113],['0x598f4d50bdc0c7359f237ac00bfd31cfea602aef', 2031526170818.87565181],['0x8a876c5bc968dd8b4671a99bd5e6c1d54e1e7f19', 1959699461393.380047916],['0x0d537a869f731d752cfbc9f7b997db6c03130228', 1911032129397.188108729],['0x7509f4070bd35f15ae9ed3e1f786dd577838d358', 1821201498205.085216551],['0x9ea38a631eb112c68c26b7ec09ab7be537d856dc', 1771618367594.614762733],['0x5e782ea280791edad2388e86ea65bf18d5ef6c6f', 1750922851286.979146429],['0x5de142194208f2214dca8b7e66acc43c006de65a', 1611440802313.72418873],['0x0ec5efde04e88a1226a31cc942051056af78afeb', 1566390617208.980208501],['0xa4bf16d32cc47b6a4c82b638a4eb32aeaa2400cb', 1445757829027.738083903],['0x11edcd51f3fdbc0675294990f056542306cc774e', 1378896452615.403534951],['0xd5dda67ff1b5886a55881d61994886981e27194f', 1369505382237.018963642],['0xea181dbd88495a3653b3e21aa13248b0b3647940', 1366033472607.108662978],['0x3618bed9179caca6a5fea1482baa7d2aa28c16b9', 1299684874741.759774311],['0xdbb1c739373f4da6d6113ce448163a97beef4462', 1262876628465.057402296],['0x98d7fe0f244cea7d1be7d59687ec996c564cf7be', 1244153925331.090531786],['0x98ce1d881bcfa5efa03a1b3a8c113ecf7d5e0124', 1220692920377.374971901],['0x509a942ae1dcb07b0440001f4d5520ba895954a3', 1192703080522.885123436],['0x2d06634c40b9bd208ba17fa5b245ef5467f1f0de', 1175054046526.0193884],['0xc2eee84d48f6a5e4e89d798dff4e83e483fd0d62', 1122929446973.539060267],['0xfeec3457828ae57e74eb90574e77f5895ba0f0ae', 1074602495752.456640967],['0x69545cbf62503fa643bfce0115883eda01613a23', 1062963893813.222168184],['0xd6bc3690f140d05f77dc32eda39f32492ae56149', 956862758214.062850125],['0x490b4a925bc35638dee4cdc7703b399974e409fb', 931325310763.818035302],['0x4db2fa0af723ec7ad3ef98ea9085d98fe41a2bfb', 928847241674.989012698],['0x941438c70a852b80c0bdefeca6d798b82ddf7d8b', 892536134165.622205852],['0xb736912620529999198e281dbf7d15b6c3cccc93', 867223900144.757524739],['0xdfdd3948345a6919c23afa29a1eaac17d7e380a3', 841613440223.528919946],['0xfb0e278684b5f473eff974fba53b7f5fbf9782c8', 822400262729.216638265],['0x4190e7bd6ce58aa54648126947d69e687c5f2423', 819165561274.188731574],['0xaa1be12673a56f4b6a92c7b7e60d2d3166007568', 809310837964.748974207],['0x9c2c2c9f1f029e2685895b11322ffd45e1a1fbdb', 806577209796.003533153],['0x34f347e0b6a3ef8c3871b75b49013bdb006b8e73', 773520634778.439038813],['0x87496edb21477514d245fd13478400e286c04888', 730288244710.721953791],['0x752118763785223c8845f12dde74e16c55ad58a6', 728306727366.724790038],['0x1429104080d2758ca6288fa32fc04b1b55c9f2bc', 722624109592.187202373],['0x4d5715de863c0cf36c30df9dedfacd06b5f3d0ca', 706264928747.688381524],['0xf023564fa850dd2b36d866a9340e5faad2112cb9', 667217728005.476453076],['0xe1ed0a81b21fb8852d5e7de985eda7222634c8a1', 663326934336.166324926],['0x9bc2490c574b7a57bda7763e2494a05ff048962e', 656696979731.110865521],['0xf9822ea6c84a359dff5acb09ebe0e57a659410d3', 654630756587.486417889],['0x46a703cfa0d7a94db5c2ac49cc29711682f40f1a', 639937801096.680058139],['0xd10676d2056238cc3ad015fe4827d490e4d0ab76', 637333838197.468877631],['0x10c78f365d80527a9cd327ebeff14a03fc7c0594', 619698959751.693908451],['0xab6f72e1a7e399a1ae6019460a29fac99fdbf3e5', 580510472693.589272615],['0x3249ed789279906fbbf0014cdc2eacd413955799', 578947645857.677523877],['0xa79c1a146ec69af11af474cb96b76c9d7816153b', 564878706990.173648817],['0x1383f384f20a97e3a2859fba1aafb4c98674cc49', 548595975595.950836447],['0x978841170f41af7e0ec6aafb6573a9902f32b63a', 541029251781.274449948],['0x73d036d5ec0a6da3606907aa8cee02e68302f567', 534873921873.175834222],['0xaf83b5407fbbcf2179274d9d2baf4d682ebf71d7', 528834549820.323437024],['0x16534ba53d1aac2af954e6920e07ce6ae75e46e0', 524686588858.430351617],['0xbeb26afe641a88da9ddf1b152d240ca5917839bc', 522491806755.393555048],['0xd693c52b85f1556020f6752845f596ae4923b00d', 513773309748.715140816],['0x5f148bf92b15747feecfce5c72b01fd9b01d8b37', 500006322347.057450618],['0xf344292cb7bf62f217c1dee5bf577de466c300eb', 486457092646.081177702],['0x64e83712885daeccad35b630a3708cbdb93ada62', 480396419573.54077622],['0x935e6fb1638dc0599147b38b92f2715de7a58528', 477793925827.684497024],['0x0ef2b9032e2005c00118956b54b21ab8431bd523', 475640798162.366318461],['0xf8a1e121be8871d1f3d1ad0c327eb5905c5c3e87', 474480174567.764841227],['0xb879a505f66bc8d90038468cf751e7d9dd95144a', 473909013942.132989756],['0xab035cf1b150a01403676820dead93c95c34380c', 468485625876.364575653],['0x5ddcd61c1b79274bea2cf5107c5f54a62912f133', 464631860902.927447793],['0x4e1830fa1866c3831cd4e80dac324f6b69358c71', 455992383658.91813124],['0x50054cfce7b506d7c4ca50e676abf9000dd639c8', 455006825102.376535648],['0x2f482516293092a599dccf6194162bb92dba0c39', 447829344832.620150989],['0xd140684bb37c63505790244d8205a54834675f1f', 441530638514.403500678],['0x8af0b2b4e061a0c6d0367cda52c90ba6c50ba88d', 439454764407.095488887],['0x58d004440ebb5bf08e5b2a731e99b5dbb386be20', 436164902528.00818372],['0x8e5554991b2a0a13ae85e0c09bb3907919913f3d', 429998725804.2619313],['0x8a22c152dc0a01eda7050057f08dc4dfc9ae3cc4', 424924327227.209330594],['0xa49a848932c02a3d9390ef8352a1b2f3c0d41a06', 418929309857.017964832],['0x9b65f8c5d72035b116214016018ea54007d64a7c', 414241296929.769840995],
['OTHER ACCOUNTS', 148992852632348], 
];
          
        var data = google.visualization.arrayToDataTable(holders);

        var options = {
          title: 'Top 100',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('token_chart'));
        chart.draw(data, options);
      }