var apiKey = 'd9c2b94b63634dbf8ce94420608ca5af';


function drawChart(element, theData) {
    $(element).highcharts({
        title: {
            text: "Stats over time"
        },
        chart: {
            zoomType: 'x',
            spacingRight: 20
        },
        xAxis: {
            type: 'datetime',
            maxZoom: 14 * 24 * 3600000, // fourteen days
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                lineWidth: 1,
                marker: {
                    enabled: false
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [
            {
                type: 'area',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2009, 11, 13),
                data: theData
            }
        ]
    });
}


function urlFor(who,what,where,variant) {
    return 'http://api.semetric.com/artist/' + who + '/' + what + '/' + where + '?variant=' + variant + '&token=' + apiKey;
}


function redraw() {
    var who = $('#who').val();
    var what = $('#what').val();
    var where = $('#where').val();
    var variant = $('#variant').val();

    var targetElement = $('#container');

    $.get(urlFor(who,what,where,variant), function (json) {
        if (json.success) {
            drawChart(targetElement, json.response.data);
        } else {
            targetElement.text("No data found");
        }
    });
}


var QueryBar = Backbone.View.extend({
    refresh: redraw,

    initialize: redraw,

    events: {
        "change #variant": redraw,
        "change #who": redraw,
        "change #what": redraw,
        "change #where": redraw
    }
});


new QueryBar({el: $('#queryBar')});
