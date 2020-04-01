$(function() {
    var data = [
      ['Java', '1', '降', '-0.01%'],
      ['C', '2', '升', '+2.44%'],
      ['Python', '3', '升', '+1.41%'],
      ['C++', '4', '降', '-2.58%'],
      ['c#', '5', '升', '+2.70%'],
      ['Visual Basic.NET', '6', '降', '-1.17%'],
      ['JavaScript', '7', '降', '-0.85%']
    ];
  
    var container = $('.excel');
    
    var hot = new Handsontable(container.get(0), {
      data: data,
      contextMenu: true,          // 启用快捷菜单
      manualRowResize : true,     // 允许行拖动  
      manualColumnResize : true,  // 允许列拖动 
      rowHeaders: true,
      colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
      ]
    });
  
    return hot;
  });