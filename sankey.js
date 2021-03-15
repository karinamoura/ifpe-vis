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

    google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    
    data.addRows([
       [ 'CAMPUS RECIFE', 'ATÉ 1 SALÁRIO', 1347 ],
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
       [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 359],


    ]);

    // Set chart options
    var options = {
      width: 1400,

      sankey: { node: { nodePadding: 25, width: 20 } },
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
            [ 'CAMPUS PALMARES', 'ATÉ 1 SALÁRIO', 175 ],
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
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 5],

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
            [ 'CAMPUS ABREU E LIMA', 'ATÉ 1 SALÁRIO', 295 ],
            [ 'CAMPUS ABREU E LIMA', '1 A 2 SALÁRIOS', 466 ],
            [ 'CAMPUS ABREU E LIMA', '2 A 3 SALÁRIOS', 59 ],
            [ 'CAMPUS ABREU E LIMA', '3 A 5 SALÁRIOS', 40 ],
            [ 'CAMPUS ABREU E LIMA', '5 A 10 SALÁRIOS', 10 ], 
            
            [ 'ATÉ 1 SALÁRIO', 'PRIVADA', 2],
            [ 'ATÉ 1 SALÁRIO', 'PÚBLICA ESTADUAL', 145],
            [ 'ATÉ 1 SALÁRIO', 'PÚBLICA MUNICIPAL', 13],
     
            [ '1 A 2 SALÁRIOS', 'PRIVADA', 16],
            [ '1 A 2 SALÁRIOS', 'PÚBLICA ESTADUAL', 137],
            [ '1 A 2 SALÁRIOS', 'PÚBLICA FEDERAL', 1],
            [ '1 A 2 SALÁRIOS', 'PÚBLICA MUNICIPAL', 11],
     
            [ '2 A 3 SALÁRIOS', 'PRIVADA', 11],
            [ '2 A 3 SALÁRIOS', 'PÚBLICA ESTADUAL', 11],
            [ '2 A 3 SALÁRIOS', 'PÚBLICA MUNICIPAL', 3],
     
            [ '3 A 5 SALÁRIOS', 'PRIVADA', 11],
            [ '3 A 5 SALÁRIOS', 'PÚBLICA ESTADUAL', 15],
            [ '3 A 5 SALÁRIOS', 'PÚBLICA FEDERAL', 1],

            [ '5 A 10 SALÁRIOS', 'PÚBLICA ESTADUAL', 1],
     
            [ 'PRIVADA', 'ABANDONO/EVASÃO', 5],
            [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 27],
            [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 0],
            [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 3],
     
            [ 'PRIVADA', 'CONCLUIDO', 13],
            [ 'PÚBLICA ESTADUAL', 'CONCLUIDO', 69],
            [ 'PÚBLICA FEDERAL', 'CONCLUIDO', 2],
            [ 'PÚBLICA MUNICIPAL', 'CONCLUIDO', 7],

            [ 'PRIVADA', 'MATRICULADO', 21],
            [ 'PÚBLICA ESTADUAL', 'MATRICULADO', 215],
            [ 'PÚBLICA FEDERAL', 'MATRICULADO', 3],
            [ 'PÚBLICA MUNICIPAL', 'MATRICULADO', 16],
    
        ]);

        // Set chart options
        var options = {
    
        sankey: { node: { nodePadding: 30 } },
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
        chart.draw(data, options);
    }