var setMap = function (availability) {
    var map = new Datamap({
        element: document.getElementById('map'),
        fills: {
            'EXCLUDED': '#306596',
            'SOLDEXCLUSIVE': '#0fa0fa',
            'SOLDNONEXCLUSIVE': '#bada55',
            defaultFill: '#dddddd'
        },
        'data': availability,
    });
    map.legend();
}