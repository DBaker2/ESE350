/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['56px', '33px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 360px 203px -58px)',
                            text: "printer on the go (POGO)",
                            font: ['Lucida Console, Monaco, monospace', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['26px', '21px', '63', '47', 'auto', 'auto'],
                            autoOrient: true,
                            c: [
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['0px', '0px', '63px', '47px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(4,8,88,0.99)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '32px', '47px', 'auto', 'auto'],
                                fill: ["rgba(4,8,89,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "clip",
                            0,
                            1750,
                            "linear",
                            "${Text}",
                            [0,-6,203,-58],
                            [0,360,203,-58],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${Group}",
                            [[57.34, 44.71, 0, 0, 0, 0,0],[456.05, 44.71, 112.64, 5.2, 222.82, 10.29,398.73],[502.93, 63.51, -1.29, 82.4, -1.37, 87.6,460.72],[464.6, 85.96, -153.62, 12.92, -88.26, 7.42,514.59],[78.65, 84.41, 0, 0, 0, 0,900.58]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pogo_edgeActions.js");
})("EDGE-26647676");
