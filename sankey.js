    google.charts.load("current", {packages:["sankey"]});

    $( "#palmares" ).click(function() {
        google.charts.setOnLoadCallback(drawChartPalmares);
    });

    $( "#recife" ).click(function() {
        google.charts.setOnLoadCallback(drawChart);
    });

    $( "#abreu" ).click(function() {
        google.charts.setOnLoadCallback(drawChartAbreu);
    });

    $( "#afogados" ).click(function() {
        google.charts.setOnLoadCallback(drawChartAfogados);
    });

    $( "#barreiros" ).click(function() {
        google.charts.setOnLoadCallback(drawChartBarreiros);
    });

    $( "#belojardim" ).click(function() {
        google.charts.setOnLoadCallback(drawChartBeloJardim);
    });

    $( "#cabo" ).click(function() {
        google.charts.setOnLoadCallback(drawChartCabo);
    });

    $( "#caruaru" ).click(function() {
        google.charts.setOnLoadCallback(drawChartCaruaru);
    });

    $( "#ead" ).click(function() {
        google.charts.setOnLoadCallback(drawChartEAD);
    });

    $( "#garanhus" ).click(function() {
        google.charts.setOnLoadCallback(drawChartGaranhus);
    });

    $( "#igarassu" ).click(function() {
        google.charts.setOnLoadCallback(drawChartIgarassu);
    });

    $( "#ipojuca" ).click(function() {
        google.charts.setOnLoadCallback(drawChartIpojuca);
    });

    $( "#jaboatao" ).click(function() {
        google.charts.setOnLoadCallback(drawChartJaboatao);
    });

    $( "#olinda" ).click(function() {
        google.charts.setOnLoadCallback(drawChartOlinda);
    });

    $( "#paulista" ).click(function() {
        google.charts.setOnLoadCallback(drawChartPaulista);
    });

    $( "#pesqueira" ).click(function() {
        google.charts.setOnLoadCallback(drawChartPesqueira);
    });

    $( "#vitoria" ).click(function() {
        google.charts.setOnLoadCallback(drawChartVitoria);
    });

    google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    
    data.addRows([

        [ 'CAMPUS RECIFE', 'PRIVADA', 9035 ],
        [ 'CAMPUS RECIFE', 'PÚBLICA ESTADUAL', 42409 ],
        [ 'CAMPUS RECIFE', 'PÚBLICA FEDERAL', 1451 ],
        [ 'CAMPUS RECIFE', 'PÚBLICA MUNICIPAL', 1705 ],

        
        [ 'PRIVADA', 'ABANDONO/EVASÃO', 3897 ],
        [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 16905 ],
        [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 534 ],
        [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 699 ],
 


        [ 'PRIVADA', 'CONCLUÍDO', 1996 ],
        [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 11183 ],
        [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 410 ],
        [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 182 ],


        [ 'PRIVADA', 'MATRICULADO', 1241 ],
        [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 7538 ],
        [ 'PÚBLICA FEDERAL', 'MATRICULADO', 186 ],
        [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 359 ],



      /* [ 'CAMPUS RECIFE', 'ATÉ 1 SALÁRIO', 1347 ],
       [ 'CAMPUS RECIFE', '1 A 2 SALÁRIOS', 26405 ],
       [ 'CAMPUS RECIFE', '2 A 3 SALÁRIOS', 1498 ],
       [ 'CAMPUS RECIFE', '3 A 5 SALÁRIOS', 1622 ],
       [ 'CAMPUS RECIFE', '5 A 10 SALÁRIOS', 507 ],
       [ 'CAMPUS RECIFE', '10 A 20 SALÁRIOS', 129 ],  
       [ 'CAMPUS RECIFE', 'MAIS DE 20', 24],
       
       [ 'ATÉ 1 SALÁRIO', 'PRIVADA', 382],
       [ 'ATÉ 1 SALÁRIO', 'PÚBLICA ESTADUAL', 1240],
       [ 'ATÉ 1 SALÁRIO', 'PÚBLICA FEDERAL', 138],
       [ 'ATÉ 1 SALÁRIO', 'PÚBLICA MUNICIPAL', 220],

       [ '1 A 2 SALÁRIOS', 'PRIVADA', 1494],
       [ '1 A 2 SALÁRIOS', 'PÚBLICA ESTADUAL', 30732],
       [ '1 A 2 SALÁRIOS', 'PÚBLICA FEDERAL', 336],
       [ '1 A 2 SALÁRIOS', 'PÚBLICA MUNICIPAL', 240],

       [ '2 A 3 SALÁRIOS', 'PRIVADA', 875],
       [ '2 A 3 SALÁRIOS', 'PÚBLICA ESTADUAL', 690],
       [ '2 A 3 SALÁRIOS', 'PÚBLICA FEDERAL', 142],
       [ '2 A 3 SALÁRIOS', 'PÚBLICA MUNICIPAL', 91],

       [ '3 A 5 SALÁRIOS', 'PRIVADA', 1220],
       [ '3 A 5 SALÁRIOS', 'PÚBLICA ESTADUAL', 540],
       [ '3 A 5 SALÁRIOS', 'PÚBLICA FEDERAL', 168],
       [ '3 A 5 SALÁRIOS', 'PÚBLICA MUNICIPAL', 66],

       [ '5 A 10 SALÁRIOS', 'PRIVADA', 531],
       [ '5 A 10 SALÁRIOS', 'PÚBLICA ESTADUAL', 118],
       [ '5 A 10 SALÁRIOS', 'PÚBLICA FEDERAL', 64],
       [ '5 A 10 SALÁRIOS', 'PÚBLICA MUNICIPAL', 8],

       [ '10 A 20 SALÁRIOS', 'PRIVADA', 155],
       [ '10 A 20 SALÁRIOS', 'PÚBLICA ESTADUAL', 26],
       [ '10 A 20 SALÁRIOS', 'PÚBLICA FEDERAL', 9],
       [ '10 A 20 SALÁRIOS', 'PÚBLICA MUNICIPAL', 5],

       [ 'MAIS DE 20', 'PRIVADA', 29],
       [ 'MAIS DE 20', 'PÚBLICA ESTADUAL', 4],
       [ 'MAIS DE 20', 'PÚBLICA FEDERAL', 3],
       [ 'MAIS DE 20', 'PÚBLICA MUNICIPAL', 0],

       [ 'PRIVADA', 'ABANDONO/EVASÃO', 3897],
       [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 16905],
       [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 534],
       [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 699],

       [ 'PRIVADA', 'CONCLUIDO', 1996],
       [ 'PÚBLICA ESTADUAL', 'CONCLUIDO', 11183],
       [ 'PÚBLICA FEDERAL', 'CONCLUIDO', 410],
       [ 'PÚBLICA MUNICIPAL', 'CONCLUIDO', 182],

       [ 'PRIVADA', 'MATRICULADO', 1241],
       [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 7538],
       [ 'PÚBLICA FEDERAL', 'MATRICULADO', 186],
       [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 359], */


    ]);

    // Set chart options
    var options = {

      sankey: { node: { nodePadding: 30 } },
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
   }

    function drawChartPalmares() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([

            [ 'CAMPUS PALMARES', 'PRIVADA', 49 ],
            [ 'CAMPUS PALMARES', 'PÚBLICA ESTADUAL', 587 ],
            [ 'CAMPUS PALMARES', 'PÚBLICA FEDERAL', 21 ],
            [ 'CAMPUS PALMARES', 'PÚBLICA MUNICIPAL', 34 ],

            
            [ 'PRIVADA', 'ABANDONO/EVASÃO', 23 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 323 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 15 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 16 ],


            [ 'PRIVADA', 'CONCLUÍDO', 15 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 154 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 4 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 9 ],


            [ 'PRIVADA', 'MATRICULADO', 5 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 49 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 1 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 5 ],

           /* [ 'CAMPUS PALMARES', 'ATÉ 1 SALÁRIO', 175 ],
            [ 'CAMPUS PALMARES', '1 A 2 SALÁRIOS', 91 ],
            [ 'CAMPUS PALMARES', '2 A 3 SALÁRIOS', 9 ],
            [ 'CAMPUS PALMARES', '3 A 5 SALÁRIOS', 3 ],
            [ 'CAMPUS PALMARES', '5 A 10 SALÁRIOS', 0 ],
            [ 'CAMPUS PALMARES', '10 A 20 SALÁRIOS', 0 ],  
            [ 'CAMPUS PALMARES', 'MAIS DE 20', 0 ],
            
            [ 'ATÉ 1 SALÁRIO', 'PRIVADA', 3],
            [ 'ATÉ 1 SALÁRIO', 'PÚBLICA ESTADUAL', 62],
            [ 'ATÉ 1 SALÁRIO', 'PÚBLICA MUNICIPAL', 7],
    
            [ '1 A 2 SALÁRIOS', 'PRIVADA', 2],
            [ '1 A 2 SALÁRIOS', 'PÚBLICA ESTADUAL', 52],
        
            [ '1 A 2 SALÁRIOS', 'PÚBLICA MUNICIPAL', 8],
    
            [ '2 A 3 SALÁRIOS', 'PRIVADA', 0],
            [ '2 A 3 SALÁRIOS', 'PÚBLICA ESTADUAL', 2],
            [ '2 A 3 SALÁRIOS', 'PÚBLICA MUNICIPAL', 0],
    
            [ '3 A 5 SALÁRIOS', 'PRIVADA', 2],
            [ '3 A 5 SALÁRIOS', 'PÚBLICA ESTADUAL', 1],
            [ '3 A 5 SALÁRIOS', 'PÚBLICA MUNICIPAL', 0],
    
            [ 'PRIVADA', 'ABANDONO/EVASÃO', 23],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 323],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 15],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 16],
    
            [ 'PRIVADA', 'CONCLUIDO', 15],
            [ 'PÚBLICA ESTADUAL', 'CONCLUIDO', 154],
            [ 'PÚBLICA FEDERAL', 'CONCLUIDO', 4],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUIDO', 9],

            [ 'PRIVADA', 'MATRICULADO', 5],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 49],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 1],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 5], */

        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);

    }

    function drawChartAbreu() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS ABREU E LIMA', 'PRIVADA', 50 ],
            [ 'CAMPUS ABREU E LIMA', 'PÚBLICA ESTADUAL', 357 ],
            [ 'CAMPUS ABREU E LIMA', 'PÚBLICA FEDERAL', 6 ],
            [ 'CAMPUS ABREU E LIMA', 'PÚBLICA MUNICIPAL', 32 ],

            
            [ 'PRIVADA', 'ABANDONO/EVASÃO', 5 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 27 ],

            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 3 ],
    


            [ 'PRIVADA', 'CONCLUÍDO', 13 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 69 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 2 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 7 ],


            [ 'PRIVADA', 'MATRICULADO', 21 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 215 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 3 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 16 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartAfogados() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS AFOGADOS DA INGAZEIRA', 'PRIVADA', 23 ],
            [ 'CAMPUS AFOGADOS DA INGAZEIRA', 'PÚBLICA ESTADUAL', 345 ],
            [ 'CAMPUS AFOGADOS DA INGAZEIRA', 'PÚBLICA FEDERAL', 69 ],
            [ 'CAMPUS AFOGADOS DA INGAZEIRA', 'PÚBLICA MUNICIPAL', 78 ],

            
            [ 'PRIVADA', 'ABANDONO/EVASÃO', 8 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 82 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 9 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 21 ],
    


            [ 'PRIVADA', 'CONCLUÍDO', 3 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 47 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 28 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 19 ],


            [ 'PRIVADA', 'MATRICULADO', 8 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 137 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 19 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 29 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartBarreiros() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS BARREIROS', 'PRIVADA', 231 ],
            [ 'CAMPUS BARREIROS', 'PÚBLICA ESTADUAL', 904 ],
            [ 'CAMPUS BARREIROS', 'PÚBLICA FEDERAL', 180 ],
            [ 'CAMPUS BARREIROS', 'PÚBLICA MUNICIPAL', 458 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 46 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 310 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 39 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 143 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 44 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 88 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 48 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 70 ],

            [ 'PRIVADA', 'MATRICULADO', 93 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 311 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 53 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 122 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartBeloJardim() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS BELO JARDIM', 'PRIVADA', 117 ],
            [ 'CAMPUS BELO JARDIM', 'PÚBLICA ESTADUAL', 672 ],
            [ 'CAMPUS BELO JARDIM', 'PÚBLICA FEDERAL', 103 ],
            [ 'CAMPUS BELO JARDIM', 'PÚBLICA MUNICIPAL', 289 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 17 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 171 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 15 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 57 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 47 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 162 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 57 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 84 ],

            [ 'PRIVADA', 'MATRICULADO', 24 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 225 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 20 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 54 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartCabo() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS CABO DE SANTO AGOSTINHO', 'PRIVADA', 73 ],
            [ 'CAMPUS CABO DE SANTO AGOSTINHO', 'PÚBLICA ESTADUAL', 625 ],
            [ 'CAMPUS CABO DE SANTO AGOSTINHO', 'PÚBLICA FEDERAL', 22 ],
            [ 'CAMPUS CABO DE SANTO AGOSTINHO', 'PÚBLICA MUNICIPAL', 35 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 13 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 138 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 6 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 4 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 14 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 92 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 1 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 7 ],

            [ 'PRIVADA', 'MATRICULADO', 28 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 267 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 6 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 11 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartCaruaru() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS CARUARU', 'PRIVADA', 309 ],
            [ 'CAMPUS CARUARU', 'PÚBLICA ESTADUAL', 502 ],
            [ 'CAMPUS CARUARU', 'PÚBLICA FEDERAL', 112 ],
            [ 'CAMPUS CARUARU', 'PÚBLICA MUNICIPAL', 249 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 52 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 125 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 21 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 46 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 34 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 45 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 26 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 20 ],

            [ 'PRIVADA', 'MATRICULADO', 99 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 171 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 40 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 71 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartEAD() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS EAD', 'PRIVADA', 971 ],
            [ 'CAMPUS EAD', 'PÚBLICA ESTADUAL', 2294 ],
            [ 'CAMPUS EAD', 'PÚBLICA FEDERAL', 863 ],
            [ 'CAMPUS EAD', 'PÚBLICA MUNICIPAL', 1708 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 268 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 733 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 256 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 948 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 290 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 308 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 128 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 73 ],

            [ 'PRIVADA', 'MATRICULADO', 219 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 610 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 310 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 109 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartGaranhus() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS GARANHUS', 'PRIVADA', 137 ],
            [ 'CAMPUS GARANHUS', 'PÚBLICA ESTADUAL', 476 ],
            [ 'CAMPUS GARANHUS', 'PÚBLICA FEDERAL', 117 ],
            [ 'CAMPUS GARANHUS', 'PÚBLICA MUNICIPAL', 132 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 27 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 122 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 18 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 25 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 18 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 71 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 38 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 19 ],

            [ 'PRIVADA', 'MATRICULADO', 62 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 188 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 46 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 68 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartIgarassu() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS IGARASSU', 'PRIVADA', 213 ],
            [ 'CAMPUS IGARASSU', 'PÚBLICA ESTADUAL', 867 ],
            [ 'CAMPUS IGARASSU', 'PÚBLICA FEDERAL', 19 ],
            [ 'CAMPUS IGARASSU', 'PÚBLICA MUNICIPAL', 46 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 16 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 78 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 3 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 5 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 52 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 150 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 4 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 13 ],

            [ 'PRIVADA', 'MATRICULADO', 71 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 290 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 5 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 11 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartIpojuca() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS IPOJUCA', 'PRIVADA', 353 ],
            [ 'CAMPUS IPOJUCA', 'PÚBLICA ESTADUAL', 1073 ],
            [ 'CAMPUS IPOJUCA', 'PÚBLICA FEDERAL', 67 ],
            [ 'CAMPUS IPOJUCA', 'PÚBLICA MUNICIPAL', 237 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 108 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 291 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 18 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 52 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 102 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 133 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 8 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 46 ],

            [ 'PRIVADA', 'MATRICULADO', 40 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 370 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 22 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 38 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartJaboatao() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS JABOATÃO DOS GUARARAPES', 'PRIVADA', 99 ],
            [ 'CAMPUS JABOATÃO DOS GUARARAPES', 'PÚBLICA ESTADUAL', 407 ],
            [ 'CAMPUS JABOATÃO DOS GUARARAPES', 'PÚBLICA FEDERAL', 31 ],
            [ 'CAMPUS JABOATÃO DOS GUARARAPES', 'PÚBLICA MUNICIPAL', 38 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 26 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 69 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 12 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 10 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 14 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 36 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 5 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 4 ],

            [ 'PRIVADA', 'MATRICULADO', 36 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 208 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 9 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 15 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartOlinda() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS OLINDA', 'PRIVADA', 92 ],
            [ 'CAMPUS OLINDA', 'PÚBLICA ESTADUAL', 217 ],
            [ 'CAMPUS OLINDA', 'PÚBLICA FEDERAL', 9 ],
            [ 'CAMPUS OLINDA', 'PÚBLICA MUNICIPAL', 11 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 22 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 48 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 2 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 5 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 15 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 17 ],

            [ 'PRIVADA', 'MATRICULADO', 34 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 94 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 4 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 4 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartPaulista() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS PAULISTA', 'PRIVADA', 152 ],
            [ 'CAMPUS PAULISTA', 'PÚBLICA ESTADUAL', 565 ],
            [ 'CAMPUS PAULISTA', 'PÚBLICA FEDERAL', 16 ],
            [ 'CAMPUS PAULISTA', 'PÚBLICA MUNICIPAL', 23 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 12 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 78 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 2 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 5 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 33 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 77 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 2 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 3 ],

            [ 'PRIVADA', 'MATRICULADO', 86 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 313 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 9 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 9 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartPesqueira() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS PESQUEIRA', 'PRIVADA', 1011 ],
            [ 'CAMPUS PESQUEIRA', 'PÚBLICA ESTADUAL', 3262 ],
            [ 'CAMPUS PESQUEIRA', 'PÚBLICA FEDERAL', 511 ],
            [ 'CAMPUS PESQUEIRA', 'PÚBLICA MUNICIPAL', 988 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 394 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 1179 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 159 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 448 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 309 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 726 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 136 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 150 ],

            [ 'PRIVADA', 'MATRICULADO', 191 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 934 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 147 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 201 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }

    function drawChartVitoria() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');   
        data.addRows([
            [ 'CAMPUS VITÓRIA DE SANTO ANTÃO', 'PRIVADA', 230 ],
            [ 'CAMPUS VITÓRIA DE SANTO ANTÃO', 'PÚBLICA ESTADUAL', 1107 ],
            [ 'CAMPUS VITÓRIA DE SANTO ANTÃO', 'PÚBLICA FEDERAL', 278 ],
            [ 'CAMPUS VITÓRIA DE SANTO ANTÃO', 'PÚBLICA MUNICIPAL', 607 ],

            [ 'PRIVADA', 'ABANDONO/EVASÃO', 20 ],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 178 ],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 24 ],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 102 ],
    
            [ 'PRIVADA', 'CONCLUÍDO', 54 ],
            [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 147 ],
            [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 77 ],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 94 ],

            [ 'PRIVADA', 'MATRICULADO', 90 ],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 345 ],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 79 ],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 213 ],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }