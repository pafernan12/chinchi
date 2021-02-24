/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 196.0, "minX": 0.0, "maxY": 1325.0, "series": [{"data": [[0.0, 196.0], [0.1, 196.0], [0.2, 197.0], [0.3, 197.0], [0.4, 199.0], [0.5, 199.0], [0.6, 199.0], [0.7, 199.0], [0.8, 199.0], [0.9, 199.0], [1.0, 199.0], [1.1, 199.0], [1.2, 199.0], [1.3, 199.0], [1.4, 199.0], [1.5, 199.0], [1.6, 199.0], [1.7, 199.0], [1.8, 199.0], [1.9, 199.0], [2.0, 199.0], [2.1, 199.0], [2.2, 199.0], [2.3, 199.0], [2.4, 200.0], [2.5, 200.0], [2.6, 200.0], [2.7, 200.0], [2.8, 200.0], [2.9, 200.0], [3.0, 200.0], [3.1, 200.0], [3.2, 201.0], [3.3, 201.0], [3.4, 201.0], [3.5, 201.0], [3.6, 201.0], [3.7, 201.0], [3.8, 201.0], [3.9, 201.0], [4.0, 201.0], [4.1, 201.0], [4.2, 201.0], [4.3, 201.0], [4.4, 201.0], [4.5, 201.0], [4.6, 201.0], [4.7, 201.0], [4.8, 201.0], [4.9, 201.0], [5.0, 201.0], [5.1, 201.0], [5.2, 201.0], [5.3, 201.0], [5.4, 201.0], [5.5, 201.0], [5.6, 201.0], [5.7, 201.0], [5.8, 201.0], [5.9, 201.0], [6.0, 201.0], [6.1, 201.0], [6.2, 202.0], [6.3, 202.0], [6.4, 202.0], [6.5, 202.0], [6.6, 202.0], [6.7, 202.0], [6.8, 202.0], [6.9, 202.0], [7.0, 202.0], [7.1, 202.0], [7.2, 202.0], [7.3, 202.0], [7.4, 202.0], [7.5, 202.0], [7.6, 202.0], [7.7, 202.0], [7.8, 202.0], [7.9, 202.0], [8.0, 203.0], [8.1, 203.0], [8.2, 203.0], [8.3, 203.0], [8.4, 203.0], [8.5, 203.0], [8.6, 203.0], [8.7, 203.0], [8.8, 203.0], [8.9, 203.0], [9.0, 203.0], [9.1, 203.0], [9.2, 203.0], [9.3, 203.0], [9.4, 203.0], [9.5, 203.0], [9.6, 203.0], [9.7, 203.0], [9.8, 203.0], [9.9, 203.0], [10.0, 203.0], [10.1, 203.0], [10.2, 203.0], [10.3, 203.0], [10.4, 203.0], [10.5, 203.0], [10.6, 203.0], [10.7, 203.0], [10.8, 203.0], [10.9, 203.0], [11.0, 203.0], [11.1, 203.0], [11.2, 203.0], [11.3, 203.0], [11.4, 203.0], [11.5, 203.0], [11.6, 204.0], [11.7, 204.0], [11.8, 204.0], [11.9, 204.0], [12.0, 204.0], [12.1, 204.0], [12.2, 204.0], [12.3, 204.0], [12.4, 204.0], [12.5, 204.0], [12.6, 204.0], [12.7, 204.0], [12.8, 204.0], [12.9, 204.0], [13.0, 204.0], [13.1, 204.0], [13.2, 204.0], [13.3, 204.0], [13.4, 204.0], [13.5, 204.0], [13.6, 204.0], [13.7, 204.0], [13.8, 204.0], [13.9, 204.0], [14.0, 204.0], [14.1, 204.0], [14.2, 204.0], [14.3, 204.0], [14.4, 204.0], [14.5, 204.0], [14.6, 204.0], [14.7, 204.0], [14.8, 205.0], [14.9, 205.0], [15.0, 205.0], [15.1, 205.0], [15.2, 205.0], [15.3, 205.0], [15.4, 205.0], [15.5, 205.0], [15.6, 205.0], [15.7, 205.0], [15.8, 205.0], [15.9, 205.0], [16.0, 205.0], [16.1, 205.0], [16.2, 205.0], [16.3, 205.0], [16.4, 205.0], [16.5, 205.0], [16.6, 205.0], [16.7, 205.0], [16.8, 205.0], [16.9, 205.0], [17.0, 205.0], [17.1, 205.0], [17.2, 205.0], [17.3, 205.0], [17.4, 205.0], [17.5, 205.0], [17.6, 206.0], [17.7, 206.0], [17.8, 206.0], [17.9, 206.0], [18.0, 206.0], [18.1, 206.0], [18.2, 206.0], [18.3, 206.0], [18.4, 206.0], [18.5, 206.0], [18.6, 206.0], [18.7, 206.0], [18.8, 206.0], [18.9, 206.0], [19.0, 206.0], [19.1, 206.0], [19.2, 206.0], [19.3, 206.0], [19.4, 206.0], [19.5, 206.0], [19.6, 206.0], [19.7, 206.0], [19.8, 206.0], [19.9, 206.0], [20.0, 206.0], [20.1, 206.0], [20.2, 206.0], [20.3, 207.0], [20.4, 207.0], [20.5, 207.0], [20.6, 207.0], [20.7, 207.0], [20.8, 207.0], [20.9, 207.0], [21.0, 207.0], [21.1, 207.0], [21.2, 207.0], [21.3, 207.0], [21.4, 207.0], [21.5, 207.0], [21.6, 207.0], [21.7, 207.0], [21.8, 207.0], [21.9, 207.0], [22.0, 207.0], [22.1, 207.0], [22.2, 207.0], [22.3, 207.0], [22.4, 207.0], [22.5, 207.0], [22.6, 207.0], [22.7, 207.0], [22.8, 207.0], [22.9, 207.0], [23.0, 207.0], [23.1, 207.0], [23.2, 207.0], [23.3, 207.0], [23.4, 207.0], [23.5, 207.0], [23.6, 207.0], [23.7, 207.0], [23.8, 207.0], [23.9, 207.0], [24.0, 207.0], [24.1, 207.0], [24.2, 207.0], [24.3, 207.0], [24.4, 207.0], [24.5, 207.0], [24.6, 208.0], [24.7, 208.0], [24.8, 208.0], [24.9, 208.0], [25.0, 208.0], [25.1, 208.0], [25.2, 208.0], [25.3, 208.0], [25.4, 208.0], [25.5, 208.0], [25.6, 208.0], [25.7, 208.0], [25.8, 208.0], [25.9, 208.0], [26.0, 208.0], [26.1, 208.0], [26.2, 208.0], [26.3, 208.0], [26.4, 208.0], [26.5, 208.0], [26.6, 208.0], [26.7, 208.0], [26.8, 208.0], [26.9, 208.0], [27.0, 209.0], [27.1, 209.0], [27.2, 209.0], [27.3, 209.0], [27.4, 209.0], [27.5, 209.0], [27.6, 209.0], [27.7, 209.0], [27.8, 209.0], [27.9, 209.0], [28.0, 209.0], [28.1, 209.0], [28.2, 209.0], [28.3, 209.0], [28.4, 209.0], [28.5, 209.0], [28.6, 210.0], [28.7, 210.0], [28.8, 210.0], [28.9, 210.0], [29.0, 210.0], [29.1, 210.0], [29.2, 210.0], [29.3, 210.0], [29.4, 210.0], [29.5, 210.0], [29.6, 210.0], [29.7, 210.0], [29.8, 211.0], [29.9, 211.0], [30.0, 211.0], [30.1, 211.0], [30.2, 211.0], [30.3, 211.0], [30.4, 211.0], [30.5, 211.0], [30.6, 211.0], [30.7, 211.0], [30.8, 211.0], [30.9, 211.0], [31.0, 211.0], [31.1, 211.0], [31.2, 211.0], [31.3, 211.0], [31.4, 211.0], [31.5, 212.0], [31.6, 212.0], [31.7, 212.0], [31.8, 212.0], [31.9, 212.0], [32.0, 212.0], [32.1, 212.0], [32.2, 212.0], [32.3, 212.0], [32.4, 212.0], [32.5, 212.0], [32.6, 212.0], [32.7, 212.0], [32.8, 212.0], [32.9, 212.0], [33.0, 212.0], [33.1, 212.0], [33.2, 213.0], [33.3, 213.0], [33.4, 213.0], [33.5, 213.0], [33.6, 213.0], [33.7, 213.0], [33.8, 213.0], [33.9, 213.0], [34.0, 213.0], [34.1, 213.0], [34.2, 213.0], [34.3, 213.0], [34.4, 213.0], [34.5, 213.0], [34.6, 213.0], [34.7, 213.0], [34.8, 213.0], [34.9, 213.0], [35.0, 213.0], [35.1, 213.0], [35.2, 213.0], [35.3, 213.0], [35.4, 213.0], [35.5, 213.0], [35.6, 213.0], [35.7, 213.0], [35.8, 213.0], [35.9, 213.0], [36.0, 213.0], [36.1, 213.0], [36.2, 214.0], [36.3, 214.0], [36.4, 214.0], [36.5, 214.0], [36.6, 214.0], [36.7, 214.0], [36.8, 214.0], [36.9, 214.0], [37.0, 214.0], [37.1, 214.0], [37.2, 214.0], [37.3, 214.0], [37.4, 214.0], [37.5, 214.0], [37.6, 214.0], [37.7, 214.0], [37.8, 214.0], [37.9, 214.0], [38.0, 214.0], [38.1, 214.0], [38.2, 214.0], [38.3, 214.0], [38.4, 214.0], [38.5, 214.0], [38.6, 214.0], [38.7, 214.0], [38.8, 214.0], [38.9, 215.0], [39.0, 215.0], [39.1, 215.0], [39.2, 215.0], [39.3, 215.0], [39.4, 215.0], [39.5, 215.0], [39.6, 215.0], [39.7, 215.0], [39.8, 215.0], [39.9, 215.0], [40.0, 215.0], [40.1, 215.0], [40.2, 215.0], [40.3, 215.0], [40.4, 215.0], [40.5, 215.0], [40.6, 215.0], [40.7, 215.0], [40.8, 215.0], [40.9, 215.0], [41.0, 215.0], [41.1, 215.0], [41.2, 215.0], [41.3, 215.0], [41.4, 215.0], [41.5, 215.0], [41.6, 215.0], [41.7, 215.0], [41.8, 215.0], [41.9, 216.0], [42.0, 216.0], [42.1, 216.0], [42.2, 216.0], [42.3, 216.0], [42.4, 216.0], [42.5, 216.0], [42.6, 216.0], [42.7, 216.0], [42.8, 216.0], [42.9, 216.0], [43.0, 216.0], [43.1, 216.0], [43.2, 216.0], [43.3, 216.0], [43.4, 216.0], [43.5, 216.0], [43.6, 216.0], [43.7, 216.0], [43.8, 216.0], [43.9, 216.0], [44.0, 216.0], [44.1, 217.0], [44.2, 217.0], [44.3, 217.0], [44.4, 217.0], [44.5, 217.0], [44.6, 217.0], [44.7, 217.0], [44.8, 217.0], [44.9, 217.0], [45.0, 217.0], [45.1, 217.0], [45.2, 217.0], [45.3, 217.0], [45.4, 217.0], [45.5, 217.0], [45.6, 217.0], [45.7, 217.0], [45.8, 217.0], [45.9, 217.0], [46.0, 217.0], [46.1, 217.0], [46.2, 217.0], [46.3, 217.0], [46.4, 217.0], [46.5, 217.0], [46.6, 217.0], [46.7, 217.0], [46.8, 217.0], [46.9, 218.0], [47.0, 218.0], [47.1, 218.0], [47.2, 218.0], [47.3, 218.0], [47.4, 218.0], [47.5, 218.0], [47.6, 218.0], [47.7, 218.0], [47.8, 218.0], [47.9, 218.0], [48.0, 218.0], [48.1, 218.0], [48.2, 218.0], [48.3, 218.0], [48.4, 218.0], [48.5, 218.0], [48.6, 218.0], [48.7, 218.0], [48.8, 218.0], [48.9, 218.0], [49.0, 218.0], [49.1, 218.0], [49.2, 218.0], [49.3, 218.0], [49.4, 218.0], [49.5, 218.0], [49.6, 218.0], [49.7, 218.0], [49.8, 218.0], [49.9, 218.0], [50.0, 218.0], [50.1, 219.0], [50.2, 219.0], [50.3, 219.0], [50.4, 219.0], [50.5, 219.0], [50.6, 219.0], [50.7, 219.0], [50.8, 219.0], [50.9, 219.0], [51.0, 219.0], [51.1, 219.0], [51.2, 219.0], [51.3, 219.0], [51.4, 219.0], [51.5, 219.0], [51.6, 219.0], [51.7, 219.0], [51.8, 219.0], [51.9, 219.0], [52.0, 219.0], [52.1, 219.0], [52.2, 219.0], [52.3, 219.0], [52.4, 219.0], [52.5, 219.0], [52.6, 219.0], [52.7, 220.0], [52.8, 220.0], [52.9, 220.0], [53.0, 220.0], [53.1, 220.0], [53.2, 220.0], [53.3, 220.0], [53.4, 220.0], [53.5, 220.0], [53.6, 220.0], [53.7, 220.0], [53.8, 220.0], [53.9, 220.0], [54.0, 220.0], [54.1, 220.0], [54.2, 220.0], [54.3, 220.0], [54.4, 220.0], [54.5, 220.0], [54.6, 220.0], [54.7, 221.0], [54.8, 221.0], [54.9, 221.0], [55.0, 221.0], [55.1, 221.0], [55.2, 221.0], [55.3, 221.0], [55.4, 221.0], [55.5, 221.0], [55.6, 221.0], [55.7, 221.0], [55.8, 221.0], [55.9, 221.0], [56.0, 221.0], [56.1, 221.0], [56.2, 221.0], [56.3, 221.0], [56.4, 221.0], [56.5, 221.0], [56.6, 221.0], [56.7, 221.0], [56.8, 221.0], [56.9, 222.0], [57.0, 222.0], [57.1, 222.0], [57.2, 222.0], [57.3, 222.0], [57.4, 222.0], [57.5, 222.0], [57.6, 222.0], [57.7, 222.0], [57.8, 222.0], [57.9, 222.0], [58.0, 222.0], [58.1, 222.0], [58.2, 222.0], [58.3, 222.0], [58.4, 222.0], [58.5, 222.0], [58.6, 222.0], [58.7, 222.0], [58.8, 222.0], [58.9, 222.0], [59.0, 222.0], [59.1, 223.0], [59.2, 223.0], [59.3, 223.0], [59.4, 223.0], [59.5, 223.0], [59.6, 223.0], [59.7, 223.0], [59.8, 223.0], [59.9, 223.0], [60.0, 223.0], [60.1, 223.0], [60.2, 223.0], [60.3, 223.0], [60.4, 223.0], [60.5, 223.0], [60.6, 223.0], [60.7, 223.0], [60.8, 223.0], [60.9, 224.0], [61.0, 224.0], [61.1, 224.0], [61.2, 224.0], [61.3, 224.0], [61.4, 224.0], [61.5, 224.0], [61.6, 224.0], [61.7, 225.0], [61.8, 225.0], [61.9, 225.0], [62.0, 225.0], [62.1, 225.0], [62.2, 225.0], [62.3, 225.0], [62.4, 225.0], [62.5, 225.0], [62.6, 225.0], [62.7, 225.0], [62.8, 225.0], [62.9, 225.0], [63.0, 225.0], [63.1, 225.0], [63.2, 225.0], [63.3, 225.0], [63.4, 225.0], [63.5, 225.0], [63.6, 225.0], [63.7, 226.0], [63.8, 226.0], [63.9, 226.0], [64.0, 226.0], [64.1, 226.0], [64.2, 226.0], [64.3, 226.0], [64.4, 226.0], [64.5, 226.0], [64.6, 226.0], [64.7, 227.0], [64.8, 227.0], [64.9, 227.0], [65.0, 227.0], [65.1, 227.0], [65.2, 228.0], [65.3, 228.0], [65.4, 228.0], [65.5, 228.0], [65.6, 228.0], [65.7, 228.0], [65.8, 228.0], [65.9, 228.0], [66.0, 228.0], [66.1, 228.0], [66.2, 228.0], [66.3, 228.0], [66.4, 228.0], [66.5, 228.0], [66.6, 228.0], [66.7, 228.0], [66.8, 228.0], [66.9, 228.0], [67.0, 229.0], [67.1, 229.0], [67.2, 229.0], [67.3, 229.0], [67.4, 230.0], [67.5, 230.0], [67.6, 230.0], [67.7, 230.0], [67.8, 230.0], [67.9, 230.0], [68.0, 230.0], [68.1, 230.0], [68.2, 230.0], [68.3, 230.0], [68.4, 230.0], [68.5, 230.0], [68.6, 230.0], [68.7, 230.0], [68.8, 230.0], [68.9, 231.0], [69.0, 231.0], [69.1, 231.0], [69.2, 231.0], [69.3, 231.0], [69.4, 231.0], [69.5, 231.0], [69.6, 231.0], [69.7, 231.0], [69.8, 231.0], [69.9, 231.0], [70.0, 231.0], [70.1, 232.0], [70.2, 232.0], [70.3, 232.0], [70.4, 232.0], [70.5, 232.0], [70.6, 232.0], [70.7, 232.0], [70.8, 232.0], [70.9, 232.0], [71.0, 232.0], [71.1, 233.0], [71.2, 233.0], [71.3, 233.0], [71.4, 233.0], [71.5, 233.0], [71.6, 233.0], [71.7, 233.0], [71.8, 233.0], [71.9, 233.0], [72.0, 233.0], [72.1, 233.0], [72.2, 233.0], [72.3, 233.0], [72.4, 233.0], [72.5, 233.0], [72.6, 233.0], [72.7, 234.0], [72.8, 234.0], [72.9, 234.0], [73.0, 234.0], [73.1, 234.0], [73.2, 234.0], [73.3, 234.0], [73.4, 234.0], [73.5, 234.0], [73.6, 234.0], [73.7, 234.0], [73.8, 234.0], [73.9, 235.0], [74.0, 235.0], [74.1, 235.0], [74.2, 235.0], [74.3, 235.0], [74.4, 235.0], [74.5, 235.0], [74.6, 235.0], [74.7, 235.0], [74.8, 235.0], [74.9, 235.0], [75.0, 235.0], [75.1, 235.0], [75.2, 235.0], [75.3, 235.0], [75.4, 235.0], [75.5, 235.0], [75.6, 235.0], [75.7, 236.0], [75.8, 236.0], [75.9, 236.0], [76.0, 236.0], [76.1, 236.0], [76.2, 236.0], [76.3, 236.0], [76.4, 236.0], [76.5, 236.0], [76.6, 236.0], [76.7, 236.0], [76.8, 236.0], [76.9, 236.0], [77.0, 236.0], [77.1, 237.0], [77.2, 237.0], [77.3, 238.0], [77.4, 238.0], [77.5, 238.0], [77.6, 238.0], [77.7, 239.0], [77.8, 239.0], [77.9, 239.0], [78.0, 239.0], [78.1, 239.0], [78.2, 239.0], [78.3, 239.0], [78.4, 239.0], [78.5, 239.0], [78.6, 239.0], [78.7, 240.0], [78.8, 240.0], [78.9, 240.0], [79.0, 240.0], [79.1, 240.0], [79.2, 240.0], [79.3, 240.0], [79.4, 240.0], [79.5, 240.0], [79.6, 240.0], [79.7, 240.0], [79.8, 240.0], [79.9, 241.0], [80.0, 241.0], [80.1, 241.0], [80.2, 241.0], [80.3, 241.0], [80.4, 241.0], [80.5, 241.0], [80.6, 241.0], [80.7, 242.0], [80.8, 242.0], [80.9, 242.0], [81.0, 242.0], [81.1, 242.0], [81.2, 242.0], [81.3, 242.0], [81.4, 242.0], [81.5, 242.0], [81.6, 242.0], [81.7, 242.0], [81.8, 242.0], [81.9, 243.0], [82.0, 243.0], [82.1, 243.0], [82.2, 243.0], [82.3, 244.0], [82.4, 244.0], [82.5, 244.0], [82.6, 244.0], [82.7, 244.0], [82.8, 244.0], [82.9, 245.0], [83.0, 245.0], [83.1, 245.0], [83.2, 245.0], [83.3, 246.0], [83.4, 246.0], [83.5, 248.0], [83.6, 248.0], [83.7, 248.0], [83.8, 248.0], [83.9, 248.0], [84.0, 248.0], [84.1, 248.0], [84.2, 248.0], [84.3, 248.0], [84.4, 248.0], [84.5, 249.0], [84.6, 249.0], [84.7, 249.0], [84.8, 249.0], [84.9, 249.0], [85.0, 249.0], [85.1, 250.0], [85.2, 250.0], [85.3, 251.0], [85.4, 251.0], [85.5, 251.0], [85.6, 251.0], [85.7, 252.0], [85.8, 252.0], [85.9, 253.0], [86.0, 253.0], [86.1, 254.0], [86.2, 254.0], [86.3, 255.0], [86.4, 255.0], [86.5, 255.0], [86.6, 255.0], [86.7, 255.0], [86.8, 255.0], [86.9, 259.0], [87.0, 259.0], [87.1, 259.0], [87.2, 259.0], [87.3, 259.0], [87.4, 259.0], [87.5, 261.0], [87.6, 261.0], [87.7, 263.0], [87.8, 263.0], [87.9, 263.0], [88.0, 263.0], [88.1, 263.0], [88.2, 263.0], [88.3, 263.0], [88.4, 263.0], [88.5, 263.0], [88.6, 263.0], [88.7, 264.0], [88.8, 264.0], [88.9, 264.0], [89.0, 264.0], [89.1, 266.0], [89.2, 266.0], [89.3, 267.0], [89.4, 267.0], [89.5, 268.0], [89.6, 268.0], [89.7, 269.0], [89.8, 269.0], [89.9, 269.0], [90.0, 269.0], [90.1, 269.0], [90.2, 269.0], [90.3, 269.0], [90.4, 269.0], [90.5, 269.0], [90.6, 269.0], [90.7, 271.0], [90.8, 271.0], [90.9, 272.0], [91.0, 272.0], [91.1, 273.0], [91.2, 273.0], [91.3, 273.0], [91.4, 273.0], [91.5, 274.0], [91.6, 274.0], [91.7, 285.0], [91.8, 285.0], [91.9, 289.0], [92.0, 289.0], [92.1, 290.0], [92.2, 290.0], [92.3, 293.0], [92.4, 293.0], [92.5, 296.0], [92.6, 296.0], [92.7, 297.0], [92.8, 297.0], [92.9, 298.0], [93.0, 298.0], [93.1, 299.0], [93.2, 299.0], [93.3, 301.0], [93.4, 301.0], [93.5, 305.0], [93.6, 305.0], [93.7, 306.0], [93.8, 306.0], [93.9, 309.0], [94.0, 309.0], [94.1, 309.0], [94.2, 309.0], [94.3, 313.0], [94.4, 313.0], [94.5, 318.0], [94.6, 318.0], [94.7, 321.0], [94.8, 321.0], [94.9, 325.0], [95.0, 325.0], [95.1, 327.0], [95.2, 327.0], [95.3, 330.0], [95.4, 330.0], [95.5, 331.0], [95.6, 331.0], [95.7, 339.0], [95.8, 339.0], [95.9, 341.0], [96.0, 341.0], [96.1, 346.0], [96.2, 346.0], [96.3, 358.0], [96.4, 358.0], [96.5, 380.0], [96.6, 380.0], [96.7, 435.0], [96.8, 435.0], [96.9, 437.0], [97.0, 437.0], [97.1, 440.0], [97.2, 440.0], [97.3, 448.0], [97.4, 448.0], [97.5, 457.0], [97.6, 457.0], [97.7, 458.0], [97.8, 458.0], [97.9, 463.0], [98.0, 463.0], [98.1, 468.0], [98.2, 468.0], [98.3, 469.0], [98.4, 469.0], [98.5, 472.0], [98.6, 472.0], [98.7, 516.0], [98.8, 516.0], [98.9, 542.0], [99.0, 542.0], [99.1, 556.0], [99.2, 556.0], [99.3, 560.0], [99.4, 560.0], [99.5, 585.0], [99.6, 585.0], [99.7, 1263.0], [99.8, 1263.0], [99.9, 1325.0], [100.0, 1325.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 454.0, "series": [{"data": [[300.0, 17.0], [1200.0, 1.0], [1300.0, 1.0], [200.0, 454.0], [400.0, 10.0], [100.0, 12.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 493.0, "series": [{"data": [[0.0, 493.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.761029411764705, "minX": 1.6141662E12, "maxY": 10.0, "series": [{"data": [[1.6141662E12, 10.0], [1.61416626E12, 9.761029411764705]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61416626E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 217.0, "minX": 1.0, "maxY": 269.0, "series": [{"data": [[8.0, 222.0], [4.0, 221.0], [2.0, 269.0], [1.0, 221.33333333333334], [9.0, 223.0], [10.0, 238.01844262295072], [5.0, 249.0], [6.0, 226.0], [3.0, 254.0], [7.0, 217.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.870000000000001, 237.83999999999986]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 554.8, "minX": 1.6141662E12, "maxY": 2411.733333333333, "series": [{"data": [[1.6141662E12, 2021.6], [1.61416626E12, 2411.733333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6141662E12, 554.8], [1.61416626E12, 661.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61416626E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 218.72794117647052, "minX": 1.6141662E12, "maxY": 260.6403508771928, "series": [{"data": [[1.6141662E12, 260.6403508771928], [1.61416626E12, 218.72794117647052]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61416626E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 216.40808823529412, "minX": 1.6141662E12, "maxY": 257.947368421053, "series": [{"data": [[1.6141662E12, 257.947368421053], [1.61416626E12, 216.40808823529412]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61416626E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6141662E12, "maxY": 1.4736842105263177, "series": [{"data": [[1.6141662E12, 1.4736842105263177], [1.61416626E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61416626E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 196.0, "minX": 1.6141662E12, "maxY": 1325.0, "series": [{"data": [[1.6141662E12, 1325.0], [1.61416626E12, 1263.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6141662E12, 327.29999999999995], [1.61416626E12, 232.70000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6141662E12, 577.7500000000002], [1.61416626E12, 343.0199999999977]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6141662E12, 457.54999999999995], [1.61416626E12, 241.34999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6141662E12, 199.0], [1.61416626E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6141662E12, 233.0], [1.61416626E12, 210.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61416626E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 205.0, "minX": 1.0, "maxY": 408.5, "series": [{"data": [[16.0, 207.0], [1.0, 222.5], [17.0, 205.0], [5.0, 269.0], [10.0, 408.5], [11.0, 220.0], [12.0, 217.0], [6.0, 237.5], [13.0, 221.0], [14.0, 222.5], [15.0, 220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 202.5, "minX": 1.0, "maxY": 406.5, "series": [{"data": [[16.0, 205.0], [1.0, 219.0], [17.0, 202.5], [5.0, 266.0], [10.0, 406.5], [11.0, 215.5], [12.0, 214.5], [6.0, 235.0], [13.0, 219.0], [14.0, 220.0], [15.0, 217.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.6141662E12, "maxY": 4.5, "series": [{"data": [[1.6141662E12, 3.8333333333333335], [1.61416626E12, 4.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61416626E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.8, "minX": 1.6141662E12, "maxY": 4.533333333333333, "series": [{"data": [[1.6141662E12, 3.8], [1.61416626E12, 4.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61416626E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.8, "minX": 1.6141662E12, "maxY": 4.533333333333333, "series": [{"data": [[1.6141662E12, 3.8], [1.61416626E12, 4.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61416626E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.8, "minX": 1.6141662E12, "maxY": 4.533333333333333, "series": [{"data": [[1.6141662E12, 3.8], [1.61416626E12, 4.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61416626E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

