
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
@Component({
  selector: 'app-live-dashboard',
  template: `
   <div class="header">
    <div class="left-column"><img src="../../assets/image/images/menu.png"> </div>
    <div class="left-column">Energyviss/Live Dashboard</div>
    <div class="right-column"><img src="../../assets/image/images/user.png"></div>
    <div class="right-column"><img src="../../assets/image/images/alarm.png"></div>
    <div class="right-column"><img src="../../assets/image/images/refresh.png"></div>
</div>

<div class="dropdown">
    <div class="dropdown-column">
        FLOOR:
        <select class="dropdown-list" onchange="addBorder(this)">
        
            <option value="Floor 1"> 1</option>
            <option value="Floor 2"> 2</option>
            <option value="Floor 3"> 3</option>
            <option value="Floor 4"> 4</option>
            <option value="Floor 5"> 5</option>
        </select>
    </div>
    <div class="dropdown-column">
        SECTION:
        <select class="dropdown-list" onchange="addBorder(this)">
            <
            <option value="Lab 1">Lab 1</option>
            <option value="Lab 2">Lab 2</option>
            <option value="Lab 3">Lab 3</option>
            <option value="Lab 4">Lab 4</option>
            <option value="Lab 5">Lab 5</option>
        </select>
    </div>
    <div class="dropdown-column">
        VIEW:
        <select class="dropdown-list" onchange="addBorder(this)">
            <option value="View 1"> Individual</option>
            <option value="View 2"> Visual</option>
        </select>
    </div>
    <div class="dropdown-column">
        METER:
        <select class="dropdown-list" onchange="addBorder(this)">
            <option value="Meter 1">Meter 1</option>
            <option value="Meter 2">Meter 2</option>
            <option value="Meter 3">Meter 3</option>
            <option value="Meter 4">Meter 4</option>
            <option value="Meter 5">Meter 5</option>
        </select>
    </div>
</div>

<div class="val">
   
    <div class="column">ENERGY : <span style="color: red;">156.610 kWh</span></div>
    <div class="column">LAST UPDATE : <span style="color: red;">22/06/2021  12:07pm</span></div>
    <div class="column">NEXT HOUR PREDICTED ENERGY : <span style="color: red;">157,393.05 kWh</span></div>

</div>

<div class="parameter">
    <div class="txt">KEY PARAMETERS</div>

    <div class="column1">         
        <div class="progress">
            <div class="barOverflow">
              <div class="bar_voltage"></div>
            </div>
            <span>100</span><br>
            <span>voltage</span>
          </div>
    
    </div>
    <div class="column1">             
        <div class="progress">
            <div class="barOverflow">
              <div class="bar_current"></div>
            </div>
            <span>13</span><br>
            <span>current</span>
          </div>    
    </div>
    <div class="column1">            
        
        <div class="progress">
            <div class="barOverflow">
              <div class="bar_power"></div>
            </div>
            <span>50</span><br>
            <span>power</span>
          </div></div>
    <div class="column1">            
        <div class="progress">
            <div class="barOverflow">
              <div class="bar_powerFactor"></div>
            </div>
            <span>400</span><br>
            <span>power factor </span>
          </div>    
    </div>
    <div class="column1">            
        <div class="progress">
            <div class="barOverflow">
              <div class="bar_freq"></div>
            </div>
            <span>10</span><br>
            <span>frequency</span>
          </div>    
    </div>
    
  
</div>

<!-- <div class="graph">


    <div class="column2"> 
        <ag-charts-angular
        style="height: 100%"
        [options]="options"
        ></ag-charts-angular> 
    </div>
    <div class="column2">
        <ag-charts-angular
        style="height: 100%"
        [options]="optionsk"
        ></ag-charts-angular>     
    </div>

   </div> -->
 

  `,
  styles: [

`
* {
    margin: 0;
    padding: 0;
  
}
.header {
    /* border: 1px solid red; */
    height: 45px;
    background: rgb(19, 19, 172);
    overflow: hidden; 
}
body{
    background-color: #cedddf;
}
.left-column {
    float: left;
    width: 18%; 
    min-width: 15%;
  text-align: center;
    color: white;
   height: 20px;
   font-size: 20px;
    font-family: sans-serif;
    margin-top: 10px;
}
.right-column {
    float: right;
    width: 4%; 
    text-align: center;
    color: white;

    margin-top: 10px;
}
.right-column img {
    background-color: white;
    border-radius: 50%;
}
.dropdown {
    /* border: 1px solid greenyellow; */
    width: 98%;
    margin-left: 1%;
    height: 75px;
    overflow: hidden;

    background-color: #fffefc;

    
}
.dropdown-column {
    float: left;
    width: 22%; 
    text-align: right;
    /* border: 2px solid red; */
    height: 60px;
    margin-left: 30px;
    margin-top: 1px;
    background-color: #fffefc;
    color: black;
}
.dropdown-list {
    margin: 5px 0;
    height: 50px;
    width: 55%;
    background-color: whitesmoke;
    color: black;
    border: none;
   
    border-bottom: 2px solid grey; 




    appearance: none; /* CSS3 standard */
    background-image: url('../../assets/image/images/downarrow.png'); 
    background-repeat: no-repeat;
    background-position: right;
    background-size: 15px 15px;

   
    
}

.selected-dropdown {
    border-bottom: 4px solid blue;
}

.dropdown-list:hover {
    margin: 5px 0;
    height: 50px;
    width: 55%;
    background-color: whitesmoke;
    color: black;
    border-bottom : 3px solid red; 
}






.val {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px; /* Adjust the gap between columns */
    /* border: 1px solid greenyellow; */
    width: 98%;
    margin-left: 1%;
    height: 60px;
    overflow: hidden;
    margin-top: 10px;
    background-color: #fffefc;

}

.column {
    flex: 1; /* Each column takes an equal portion of the available space */
    /* border: 1px solid black; */
    padding: 8px;
    text-align: center;
}

.column #red {
    color:  rgb(197, 29, 29);
    font-weight: 600;
}




.parameter {
    display: flex;
    justify-content: space-between;
   
    gap: 10px; /* Adjust the gap between columns */
    /* border: 1px solid greenyellow; */
    width: 98%;
    margin-left: 1%;
    height: 120px;
    overflow: hidden;
    margin-top: 10px;
    background-color: #fffefc;

}
.txt 
{
    margin: 15px;
}

.column1 {
    flex: 1; /* Each column takes an equal portion of the available space */
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  

}



.graph {
    display: flex;
    justify-content: space-between;
   
    gap: 10px; /* Adjust the gap between columns */
    /* border: 1px solid greenyellow; */
    width: 98%;
    margin-left: 1%;
    height: 250px;
    overflow: hidden;
    margin-top: 10px;
    background-color: #fffefc;

}

.column2 {
    flex: 1; /* Each column takes an equal portion of the available space */
    border: 1px solid black;
   
   
    height: 100%;
  

}
.progress{
    position: relative;
    /* margin: 4px; */
    margin: 20%;
    float:left;
    text-align: center;
  }
  .barOverflow{ /* Wraps the rotating .bar */
    position: relative;
    overflow: hidden; /* Comment this line to understand the trick */
    width: 90px; height: 45px; /* Half circle (overflow) */
    margin-bottom: -14px; /* bring the numbers up */
  }
  .bar_voltage{
    position: absolute;
    top: 0; left: 0;
    width: 90px; height: 90px; /* full circle! */
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;     /* half gray, */
    border-bottom-color: #0bf;  /* half azure */
    border-right-color: #0bf;
    transform: rotate(180deg)
  }
  .bar_current{
    position: absolute;
    top: 0; left: 0;
    width: 90px; height: 90px; /* full circle! */
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;     /* half gray, */
    border-bottom-color: #0bf;  /* half azure */
    border-right-color: #0bf;
    transform: rotate(10deg)
  }
  .bar_power{
    position: absolute;
    top: 0; left: 0;
    width: 90px; height: 90px; /* full circle! */
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;     /* half gray, */
    border-bottom-color: #0bf;  /* half azure */
    border-right-color: #0bf;
    transform: rotate(120deg)
  }
  .bar_powerFactor{
    position: absolute;
    top: 0; left: 0;
    width: 90px; height: 90px; /* full circle! */
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;     /* half gray, */
    border-bottom-color: #0bf;  /* half azure */
    border-right-color: #0bf;
    transform: rotate(220deg)
  }
  .bar_freq{
    position: absolute;
    top: 0; left: 0;
    width: 90px; height: 90px; /* full circle! */
    border-radius: 50%;
    box-sizing: border-box;
    border: 5px solid #eee;     /* half gray, */
    border-bottom-color: #0bf;  /* half azure */
    border-right-color: #0bf;
    transform: rotate(10deg)
  }



`



  ]
})




export class LiveDashboardComponent {
 
 
 
  private dataUpdateInterval: any;
  public options: AgChartOptions;
  public optionsk: AgChartOptions;

  constructor(){
    this.options ={}
    this.optionsk={}
  }

  changeValue(){
    this.options = {
      autoSize: true,
      title: {
        text: 'Power (KW)',
      },
      // subtitle: {
      //   text: 'per person per week in Krakozhia',
      // },
      data: [

        {
          time: '12:06:19',
         spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:29',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:39',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:49',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
         time: '12:06:59',
        spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:07:19',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        }

      ],
      series: [
        {
          xKey: 'time',
          yKey: 'spending',
        },

      ],

    };

  }
  changeValueForSecondGraph(){
    this.optionsk = {
      autoSize: true,
      title: {
        text: 'Power Factor',
      },
      // subtitle: {
      //   text: 'per person per week in Krakozhia',
      // },
      data: [

        {
          time: '12:06:19',
         spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:29',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:39',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:06:49',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
         time: '12:06:59',
        spending: (Math.floor(Math.random() * 50) + 30)/100,
        },

        {
          time: '12:07:19',
          spending: (Math.floor(Math.random() * 50) + 30)/100,
        }

      ],
      series: [
        {
          xKey: 'time',
          yKey: 'spending',
        },

      ],

    };

  }
  ngOnDestroy(): void {
    clearInterval(this.dataUpdateInterval);
  }
  ngOnInit(): void {
    this.dataUpdateInterval = setInterval(() => {
      console.log("123456")
      this.changeValue();
      this.changeValueForSecondGraph();
    }, 2000); 
  }
}

