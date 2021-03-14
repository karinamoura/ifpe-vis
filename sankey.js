google.charts.load("current", {packages:["sankey"]});

$( "#palmares" ).click(function() {
    google.charts.setOnLoadCallback(drawChartPalmares);
  });

  $( "#recife" ).click(function() {
    google.charts.setOnLoadCallback(drawChart);
  });

  google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    
    data.addRows([
       [ 'CAMPUS RECIFE', 'ATÉ 1 SALÁRIO', 2434 ],
       [ 'CAMPUS RECIFE', '1 A 2 SALÁRIOS', 33390 ],
       [ 'CAMPUS RECIFE', '2 A 3 SALÁRIOS', 2042 ],
       [ 'CAMPUS RECIFE', '3 A 5 SALÁRIOS', 2204 ],
       /*[ 'CAMPUS RECIFE', '5 A 10 SALÁRIOS', 697 ],
       [ 'CAMPUS RECIFE', '10 A 20 SALÁRIOS', 188 ],  
       [ 'CAMPUS RECIFE', 'MAIS DE 20', 32 ],*/
       
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

       [ 'PRIVADA', 'ABANDONO/EVASÃO', 2203],
       [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 15246],
       [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 354],
       [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 232],

       [ 'PRIVADA', 'CONCLUIDO', 1495],
       [ 'PÚBLICA ESTADUAL', 'CONCLUIDO', 10870],
       [ 'PÚBLICA FEDERAL', 'CONCLUIDO', 324],
       [ 'PÚBLICA MUNICIPAL', 'CONCLUIDO', 131],


    ]);

    
    /*data.addRows([
       [ 'CAMPUS RECIFE', 'PRIVADA', 4602 ],
       [ 'CAMPUS RECIFE', 'PÚBLICA ESTADUAL', 5404 ],
       [ 'CAMPUS RECIFE', 'PÚBLICA FEDERAL', 748 ],
       [ 'CAMPUS RECIFE', 'PÚBLICA MUNICIPAL', 1104 ],
       
       [ 'PRIVADA', 'CONCLUÍDO', 869],
       [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 803],
       [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 208],
       [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 101],

       [ 'PRIVADA', 'ABANDONO/EVASÃO', 2383],
       [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 2982],
       [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 358],
       [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 605],

       [ 'PRIVADA', 'FORMADO', 358],
       [ 'PÚBLICA ESTADUAL', 'FORMADO', 333],
       [ 'PÚBLICA FEDERAL', 'FORMADO', 61],
       [ 'PÚBLICA MUNICIPAL', 'FORMADO', 112],

       [ 'ABANDONO/EVASÃO', '1 A 2 SALÁRIOS', 758],
       [ 'CONCLUÍDO', '1 A 2 SALÁRIOS', 278],
       [ 'FORMADO', '1 A 2 SALÁRIOS', 67],

       [ 'ABANDONO/EVASÃO', '2 A 3 SALÁRIOS', 227],
       [ 'CONCLUÍDO', '2 A 3 SALÁRIOS', 131],
       [ 'FORMADO', '2 A 3 SALÁRIOS', 67],

    ]);*/


    /*data.addRows([
       [ 'ABREU E LIMA', 'PRIVADA', 559 ],
       [ 'ABREU E LIMA', 'PÚBLICA ESTADUAL', 3689 ],
       [ 'ABREU E LIMA', 'PÚBLICA FEDERAL', 102 ],
       [ 'ABREU E LIMA', 'PÚBLICA MUNICIPAL', 320 ],
       
       [ 'PRIVADA', 'APROVADO', 462],
       [ 'PÚBLICA ESTADUAL', 'APROVADO', 2214],
       [ 'PÚBLICA FEDERAL', 'APROVADO', 87],
       [ 'PÚBLICA MUNICIPAL', 'APROVADO', 223],
       [ 'PRIVADA', 'REPROVADO', 16],
       [ 'PÚBLICA ESTADUAL', 'REPROVADO', 222],
       [ 'PÚBLICA FEDERAL', 'REPROVADO', 14],
       [ 'PÚBLICA MUNICIPAL', 'REPROVADO', 23]
    ]); */

    // Set chart options
    var options = {
      width: 900,
      sankey: { node: { nodePadding: 50 } },
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
       [ 'CAMPUS RECIFE', 'PRIVADA', 4602 ],
       [ 'CAMPUS RECIFE', 'PÚBLICA ESTADUAL', 5404 ],
       [ 'CAMPUS RECIFE', 'PÚBLICA FEDERAL', 748 ],
       [ 'CAMPUS RECIFE', 'PÚBLICA MUNICIPAL', 1104 ],
       
       [ 'PRIVADA', 'CONCLUÍDO', 869],
       [ 'PÚBLICA ESTADUAL', 'CONCLUÍDO', 803],
       [ 'PÚBLICA FEDERAL', 'CONCLUÍDO', 208],
       [ 'PÚBLICA MUNICIPAL', 'CONCLUÍDO', 101],

       [ 'PRIVADA', 'ABANDONO/EVASÃO', 2383],
       [ 'PÚBLICA ESTADUAL', 'ABANDONO/EVASÃO', 2982],
       [ 'PÚBLICA FEDERAL', 'ABANDONO/EVASÃO', 358],
       [ 'PÚBLICA MUNICIPAL', 'ABANDONO/EVASÃO', 605],

       [ 'PRIVADA', 'FORMADO', 358],
       [ 'PÚBLICA ESTADUAL', 'FORMADO', 333],
       [ 'PÚBLICA FEDERAL', 'FORMADO', 61],
       [ 'PÚBLICA MUNICIPAL', 'FORMADO', 112],

       [ 'ABANDONO/EVASÃO', '1 A 2 SALÁRIOS', 758],
       [ 'CONCLUÍDO', '1 A 2 SALÁRIOS', 278],
       [ 'FORMADO', '1 A 2 SALÁRIOS', 67],

       [ 'ABANDONO/EVASÃO', '2 A 3 SALÁRIOS', 227],
       [ 'CONCLUÍDO', '2 A 3 SALÁRIOS', 131],
       [ 'FORMADO', '2 A 3 SALÁRIOS', 67],

    ]);


    /*data.addRows([
       [ 'ABREU E LIMA', 'PRIVADA', 559 ],
       [ 'ABREU E LIMA', 'PÚBLICA ESTADUAL', 3689 ],
       [ 'ABREU E LIMA', 'PÚBLICA FEDERAL', 102 ],
       [ 'ABREU E LIMA', 'PÚBLICA MUNICIPAL', 320 ],
       
       [ 'PRIVADA', 'APROVADO', 462],
       [ 'PÚBLICA ESTADUAL', 'APROVADO', 2214],
       [ 'PÚBLICA FEDERAL', 'APROVADO', 87],
       [ 'PÚBLICA MUNICIPAL', 'APROVADO', 223],
       [ 'PRIVADA', 'REPROVADO', 16],
       [ 'PÚBLICA ESTADUAL', 'REPROVADO', 222],
       [ 'PÚBLICA FEDERAL', 'REPROVADO', 14],
       [ 'PÚBLICA MUNICIPAL', 'REPROVADO', 23]
    ]); */

    // Set chart options
    var options = {
      width: 900,
      sankey: { node: { nodePadding: 50 } },
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
   }