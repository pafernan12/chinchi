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
        data: {"result": {"minY": 215.0, "minX": 0.0, "maxY": 2295.0, "series": [{"data": [[0.0, 215.0], [0.1, 215.0], [0.2, 217.0], [0.3, 217.0], [0.4, 217.0], [0.5, 217.0], [0.6, 217.0], [0.7, 219.0], [0.8, 220.0], [0.9, 220.0], [1.0, 220.0], [1.1, 220.0], [1.2, 220.0], [1.3, 220.0], [1.4, 221.0], [1.5, 221.0], [1.6, 222.0], [1.7, 222.0], [1.8, 222.0], [1.9, 222.0], [2.0, 222.0], [2.1, 222.0], [2.2, 222.0], [2.3, 222.0], [2.4, 223.0], [2.5, 223.0], [2.6, 224.0], [2.7, 224.0], [2.8, 224.0], [2.9, 224.0], [3.0, 225.0], [3.1, 225.0], [3.2, 225.0], [3.3, 225.0], [3.4, 226.0], [3.5, 226.0], [3.6, 226.0], [3.7, 226.0], [3.8, 226.0], [3.9, 226.0], [4.0, 226.0], [4.1, 226.0], [4.2, 226.0], [4.3, 226.0], [4.4, 226.0], [4.5, 226.0], [4.6, 227.0], [4.7, 227.0], [4.8, 227.0], [4.9, 227.0], [5.0, 228.0], [5.1, 228.0], [5.2, 228.0], [5.3, 228.0], [5.4, 229.0], [5.5, 229.0], [5.6, 229.0], [5.7, 229.0], [5.8, 229.0], [5.9, 229.0], [6.0, 229.0], [6.1, 229.0], [6.2, 230.0], [6.3, 230.0], [6.4, 230.0], [6.5, 230.0], [6.6, 230.0], [6.7, 230.0], [6.8, 230.0], [6.9, 230.0], [7.0, 230.0], [7.1, 230.0], [7.2, 230.0], [7.3, 230.0], [7.4, 230.0], [7.5, 230.0], [7.6, 230.0], [7.7, 230.0], [7.8, 230.0], [7.9, 231.0], [8.0, 231.0], [8.1, 231.0], [8.2, 231.0], [8.3, 231.0], [8.4, 231.0], [8.5, 231.0], [8.6, 231.0], [8.7, 232.0], [8.8, 232.0], [8.9, 232.0], [9.0, 232.0], [9.1, 232.0], [9.2, 232.0], [9.3, 232.0], [9.4, 232.0], [9.5, 232.0], [9.6, 232.0], [9.7, 232.0], [9.8, 232.0], [9.9, 232.0], [10.0, 232.0], [10.1, 233.0], [10.2, 233.0], [10.3, 233.0], [10.4, 233.0], [10.5, 233.0], [10.6, 233.0], [10.7, 233.0], [10.8, 233.0], [10.9, 233.0], [11.0, 233.0], [11.1, 233.0], [11.2, 233.0], [11.3, 233.0], [11.4, 233.0], [11.5, 233.0], [11.6, 233.0], [11.7, 233.0], [11.8, 233.0], [11.9, 233.0], [12.0, 233.0], [12.1, 234.0], [12.2, 234.0], [12.3, 234.0], [12.4, 234.0], [12.5, 234.0], [12.6, 234.0], [12.7, 234.0], [12.8, 234.0], [12.9, 234.0], [13.0, 234.0], [13.1, 234.0], [13.2, 234.0], [13.3, 235.0], [13.4, 235.0], [13.5, 235.0], [13.6, 235.0], [13.7, 235.0], [13.8, 235.0], [13.9, 235.0], [14.0, 235.0], [14.1, 235.0], [14.2, 235.0], [14.3, 235.0], [14.4, 235.0], [14.5, 235.0], [14.6, 235.0], [14.7, 235.0], [14.8, 236.0], [14.9, 236.0], [15.0, 236.0], [15.1, 236.0], [15.2, 236.0], [15.3, 236.0], [15.4, 236.0], [15.5, 236.0], [15.6, 236.0], [15.7, 236.0], [15.8, 236.0], [15.9, 236.0], [16.0, 237.0], [16.1, 237.0], [16.2, 237.0], [16.3, 237.0], [16.4, 237.0], [16.5, 237.0], [16.6, 237.0], [16.7, 237.0], [16.8, 237.0], [16.9, 237.0], [17.0, 237.0], [17.1, 237.0], [17.2, 238.0], [17.3, 238.0], [17.4, 238.0], [17.5, 238.0], [17.6, 238.0], [17.7, 238.0], [17.8, 238.0], [17.9, 238.0], [18.0, 239.0], [18.1, 239.0], [18.2, 239.0], [18.3, 239.0], [18.4, 239.0], [18.5, 239.0], [18.6, 239.0], [18.7, 239.0], [18.8, 239.0], [18.9, 239.0], [19.0, 239.0], [19.1, 239.0], [19.2, 240.0], [19.3, 240.0], [19.4, 240.0], [19.5, 240.0], [19.6, 240.0], [19.7, 240.0], [19.8, 240.0], [19.9, 240.0], [20.0, 240.0], [20.1, 240.0], [20.2, 240.0], [20.3, 240.0], [20.4, 241.0], [20.5, 241.0], [20.6, 241.0], [20.7, 241.0], [20.8, 241.0], [20.9, 241.0], [21.0, 241.0], [21.1, 241.0], [21.2, 242.0], [21.3, 242.0], [21.4, 242.0], [21.5, 242.0], [21.6, 242.0], [21.7, 242.0], [21.8, 242.0], [21.9, 242.0], [22.0, 242.0], [22.1, 242.0], [22.2, 242.0], [22.3, 242.0], [22.4, 242.0], [22.5, 242.0], [22.6, 242.0], [22.7, 242.0], [22.8, 242.0], [22.9, 242.0], [23.0, 242.0], [23.1, 242.0], [23.2, 242.0], [23.3, 242.0], [23.4, 242.0], [23.5, 242.0], [23.6, 243.0], [23.7, 243.0], [23.8, 243.0], [23.9, 243.0], [24.0, 243.0], [24.1, 243.0], [24.2, 243.0], [24.3, 243.0], [24.4, 243.0], [24.5, 243.0], [24.6, 244.0], [24.7, 244.0], [24.8, 244.0], [24.9, 244.0], [25.0, 244.0], [25.1, 244.0], [25.2, 244.0], [25.3, 244.0], [25.4, 244.0], [25.5, 244.0], [25.6, 244.0], [25.7, 244.0], [25.8, 244.0], [25.9, 244.0], [26.0, 244.0], [26.1, 244.0], [26.2, 244.0], [26.3, 244.0], [26.4, 244.0], [26.5, 244.0], [26.6, 244.0], [26.7, 244.0], [26.8, 245.0], [26.9, 245.0], [27.0, 245.0], [27.1, 245.0], [27.2, 245.0], [27.3, 245.0], [27.4, 245.0], [27.5, 245.0], [27.6, 245.0], [27.7, 245.0], [27.8, 245.0], [27.9, 245.0], [28.0, 245.0], [28.1, 245.0], [28.2, 245.0], [28.3, 245.0], [28.4, 245.0], [28.5, 245.0], [28.6, 245.0], [28.7, 245.0], [28.8, 245.0], [28.9, 245.0], [29.0, 245.0], [29.1, 245.0], [29.2, 246.0], [29.3, 246.0], [29.4, 246.0], [29.5, 246.0], [29.6, 246.0], [29.7, 246.0], [29.8, 246.0], [29.9, 246.0], [30.0, 246.0], [30.1, 246.0], [30.2, 246.0], [30.3, 246.0], [30.4, 246.0], [30.5, 246.0], [30.6, 246.0], [30.7, 246.0], [30.8, 246.0], [30.9, 246.0], [31.0, 247.0], [31.1, 247.0], [31.2, 248.0], [31.3, 248.0], [31.4, 248.0], [31.5, 248.0], [31.6, 248.0], [31.7, 248.0], [31.8, 248.0], [31.9, 248.0], [32.0, 248.0], [32.1, 248.0], [32.2, 248.0], [32.3, 248.0], [32.4, 248.0], [32.5, 248.0], [32.6, 248.0], [32.7, 248.0], [32.8, 249.0], [32.9, 249.0], [33.0, 249.0], [33.1, 249.0], [33.2, 249.0], [33.3, 249.0], [33.4, 249.0], [33.5, 249.0], [33.6, 249.0], [33.7, 249.0], [33.8, 250.0], [33.9, 250.0], [34.0, 250.0], [34.1, 250.0], [34.2, 250.0], [34.3, 250.0], [34.4, 250.0], [34.5, 250.0], [34.6, 250.0], [34.7, 250.0], [34.8, 250.0], [34.9, 250.0], [35.0, 250.0], [35.1, 250.0], [35.2, 250.0], [35.3, 250.0], [35.4, 251.0], [35.5, 251.0], [35.6, 251.0], [35.7, 251.0], [35.8, 251.0], [35.9, 251.0], [36.0, 251.0], [36.1, 251.0], [36.2, 251.0], [36.3, 251.0], [36.4, 251.0], [36.5, 251.0], [36.6, 252.0], [36.7, 252.0], [36.8, 252.0], [36.9, 252.0], [37.0, 252.0], [37.1, 252.0], [37.2, 252.0], [37.3, 252.0], [37.4, 252.0], [37.5, 252.0], [37.6, 252.0], [37.7, 252.0], [37.8, 252.0], [37.9, 252.0], [38.0, 252.0], [38.1, 252.0], [38.2, 253.0], [38.3, 253.0], [38.4, 253.0], [38.5, 253.0], [38.6, 253.0], [38.7, 253.0], [38.8, 253.0], [38.9, 253.0], [39.0, 253.0], [39.1, 253.0], [39.2, 253.0], [39.3, 253.0], [39.4, 253.0], [39.5, 254.0], [39.6, 254.0], [39.7, 254.0], [39.8, 254.0], [39.9, 254.0], [40.0, 254.0], [40.1, 254.0], [40.2, 254.0], [40.3, 254.0], [40.4, 254.0], [40.5, 255.0], [40.6, 255.0], [40.7, 255.0], [40.8, 255.0], [40.9, 255.0], [41.0, 255.0], [41.1, 255.0], [41.2, 255.0], [41.3, 255.0], [41.4, 255.0], [41.5, 255.0], [41.6, 255.0], [41.7, 255.0], [41.8, 255.0], [41.9, 255.0], [42.0, 255.0], [42.1, 255.0], [42.2, 255.0], [42.3, 255.0], [42.4, 255.0], [42.5, 255.0], [42.6, 255.0], [42.7, 256.0], [42.8, 256.0], [42.9, 256.0], [43.0, 256.0], [43.1, 256.0], [43.2, 256.0], [43.3, 256.0], [43.4, 256.0], [43.5, 256.0], [43.6, 256.0], [43.7, 256.0], [43.8, 256.0], [43.9, 256.0], [44.0, 256.0], [44.1, 256.0], [44.2, 256.0], [44.3, 256.0], [44.4, 256.0], [44.5, 256.0], [44.6, 256.0], [44.7, 257.0], [44.8, 257.0], [44.9, 257.0], [45.0, 257.0], [45.1, 257.0], [45.2, 257.0], [45.3, 257.0], [45.4, 257.0], [45.5, 257.0], [45.6, 257.0], [45.7, 257.0], [45.8, 257.0], [45.9, 257.0], [46.0, 257.0], [46.1, 257.0], [46.2, 257.0], [46.3, 258.0], [46.4, 258.0], [46.5, 258.0], [46.6, 258.0], [46.7, 258.0], [46.8, 258.0], [46.9, 258.0], [47.0, 258.0], [47.1, 258.0], [47.2, 258.0], [47.3, 259.0], [47.4, 259.0], [47.5, 259.0], [47.6, 259.0], [47.7, 259.0], [47.8, 259.0], [47.9, 259.0], [48.0, 259.0], [48.1, 259.0], [48.2, 259.0], [48.3, 259.0], [48.4, 259.0], [48.5, 259.0], [48.6, 259.0], [48.7, 259.0], [48.8, 259.0], [48.9, 259.0], [49.0, 259.0], [49.1, 259.0], [49.2, 259.0], [49.3, 259.0], [49.4, 259.0], [49.5, 260.0], [49.6, 260.0], [49.7, 260.0], [49.8, 260.0], [49.9, 260.0], [50.0, 260.0], [50.1, 260.0], [50.2, 260.0], [50.3, 260.0], [50.4, 260.0], [50.5, 260.0], [50.6, 260.0], [50.7, 260.0], [50.8, 260.0], [50.9, 260.0], [51.0, 260.0], [51.1, 260.0], [51.2, 260.0], [51.3, 260.0], [51.4, 260.0], [51.5, 261.0], [51.6, 261.0], [51.7, 261.0], [51.8, 261.0], [51.9, 261.0], [52.0, 261.0], [52.1, 261.0], [52.2, 261.0], [52.3, 261.0], [52.4, 261.0], [52.5, 261.0], [52.6, 261.0], [52.7, 261.0], [52.8, 261.0], [52.9, 261.0], [53.0, 261.0], [53.1, 261.0], [53.2, 261.0], [53.3, 262.0], [53.4, 262.0], [53.5, 262.0], [53.6, 262.0], [53.7, 262.0], [53.8, 262.0], [53.9, 262.0], [54.0, 262.0], [54.1, 262.0], [54.2, 262.0], [54.3, 262.0], [54.4, 262.0], [54.5, 262.0], [54.6, 262.0], [54.7, 262.0], [54.8, 262.0], [54.9, 262.0], [55.0, 262.0], [55.1, 262.0], [55.2, 262.0], [55.3, 263.0], [55.4, 263.0], [55.5, 263.0], [55.6, 263.0], [55.7, 263.0], [55.8, 263.0], [55.9, 263.0], [56.0, 263.0], [56.1, 263.0], [56.2, 263.0], [56.3, 263.0], [56.4, 263.0], [56.5, 263.0], [56.6, 263.0], [56.7, 263.0], [56.8, 263.0], [56.9, 263.0], [57.0, 263.0], [57.1, 263.0], [57.2, 263.0], [57.3, 263.0], [57.4, 263.0], [57.5, 263.0], [57.6, 263.0], [57.7, 264.0], [57.8, 264.0], [57.9, 264.0], [58.0, 264.0], [58.1, 264.0], [58.2, 264.0], [58.3, 264.0], [58.4, 264.0], [58.5, 264.0], [58.6, 264.0], [58.7, 264.0], [58.8, 264.0], [58.9, 265.0], [59.0, 265.0], [59.1, 265.0], [59.2, 265.0], [59.3, 265.0], [59.4, 265.0], [59.5, 266.0], [59.6, 266.0], [59.7, 266.0], [59.8, 266.0], [59.9, 266.0], [60.0, 266.0], [60.1, 266.0], [60.2, 266.0], [60.3, 267.0], [60.4, 267.0], [60.5, 267.0], [60.6, 267.0], [60.7, 267.0], [60.8, 267.0], [60.9, 268.0], [61.0, 268.0], [61.1, 268.0], [61.2, 268.0], [61.3, 268.0], [61.4, 268.0], [61.5, 268.0], [61.6, 268.0], [61.7, 268.0], [61.8, 268.0], [61.9, 268.0], [62.0, 268.0], [62.1, 268.0], [62.2, 268.0], [62.3, 268.0], [62.4, 268.0], [62.5, 269.0], [62.6, 269.0], [62.7, 269.0], [62.8, 269.0], [62.9, 269.0], [63.0, 269.0], [63.1, 269.0], [63.2, 269.0], [63.3, 269.0], [63.4, 269.0], [63.5, 269.0], [63.6, 269.0], [63.7, 269.0], [63.8, 269.0], [63.9, 270.0], [64.0, 270.0], [64.1, 270.0], [64.2, 270.0], [64.3, 270.0], [64.4, 271.0], [64.5, 271.0], [64.6, 271.0], [64.7, 271.0], [64.8, 271.0], [64.9, 271.0], [65.0, 271.0], [65.1, 271.0], [65.2, 271.0], [65.3, 271.0], [65.4, 272.0], [65.5, 272.0], [65.6, 272.0], [65.7, 272.0], [65.8, 272.0], [65.9, 272.0], [66.0, 273.0], [66.1, 273.0], [66.2, 273.0], [66.3, 273.0], [66.4, 273.0], [66.5, 273.0], [66.6, 273.0], [66.7, 273.0], [66.8, 273.0], [66.9, 273.0], [67.0, 274.0], [67.1, 274.0], [67.2, 274.0], [67.3, 274.0], [67.4, 274.0], [67.5, 274.0], [67.6, 275.0], [67.7, 275.0], [67.8, 275.0], [67.9, 275.0], [68.0, 275.0], [68.1, 275.0], [68.2, 276.0], [68.3, 276.0], [68.4, 276.0], [68.5, 276.0], [68.6, 276.0], [68.7, 276.0], [68.8, 276.0], [68.9, 276.0], [69.0, 277.0], [69.1, 277.0], [69.2, 278.0], [69.3, 278.0], [69.4, 278.0], [69.5, 278.0], [69.6, 279.0], [69.7, 279.0], [69.8, 279.0], [69.9, 279.0], [70.0, 279.0], [70.1, 279.0], [70.2, 279.0], [70.3, 279.0], [70.4, 279.0], [70.5, 279.0], [70.6, 279.0], [70.7, 279.0], [70.8, 279.0], [70.9, 279.0], [71.0, 279.0], [71.1, 279.0], [71.2, 280.0], [71.3, 280.0], [71.4, 280.0], [71.5, 280.0], [71.6, 280.0], [71.7, 280.0], [71.8, 280.0], [71.9, 280.0], [72.0, 281.0], [72.1, 281.0], [72.2, 281.0], [72.3, 281.0], [72.4, 282.0], [72.5, 282.0], [72.6, 283.0], [72.7, 283.0], [72.8, 284.0], [72.9, 284.0], [73.0, 284.0], [73.1, 284.0], [73.2, 284.0], [73.3, 284.0], [73.4, 284.0], [73.5, 284.0], [73.6, 285.0], [73.7, 285.0], [73.8, 286.0], [73.9, 286.0], [74.0, 286.0], [74.1, 286.0], [74.2, 287.0], [74.3, 287.0], [74.4, 287.0], [74.5, 287.0], [74.6, 287.0], [74.7, 287.0], [74.8, 287.0], [74.9, 287.0], [75.0, 290.0], [75.1, 290.0], [75.2, 291.0], [75.3, 291.0], [75.4, 291.0], [75.5, 291.0], [75.6, 291.0], [75.7, 291.0], [75.8, 291.0], [75.9, 291.0], [76.0, 291.0], [76.1, 291.0], [76.2, 292.0], [76.3, 292.0], [76.4, 292.0], [76.5, 292.0], [76.6, 292.0], [76.7, 293.0], [76.8, 293.0], [76.9, 293.0], [77.0, 293.0], [77.1, 294.0], [77.2, 294.0], [77.3, 295.0], [77.4, 295.0], [77.5, 295.0], [77.6, 295.0], [77.7, 295.0], [77.8, 295.0], [77.9, 298.0], [78.0, 298.0], [78.1, 298.0], [78.2, 298.0], [78.3, 299.0], [78.4, 299.0], [78.5, 299.0], [78.6, 299.0], [78.7, 300.0], [78.8, 300.0], [78.9, 300.0], [79.0, 300.0], [79.1, 301.0], [79.2, 301.0], [79.3, 302.0], [79.4, 302.0], [79.5, 302.0], [79.6, 302.0], [79.7, 302.0], [79.8, 302.0], [79.9, 302.0], [80.0, 302.0], [80.1, 303.0], [80.2, 303.0], [80.3, 303.0], [80.4, 303.0], [80.5, 303.0], [80.6, 303.0], [80.7, 304.0], [80.8, 304.0], [80.9, 306.0], [81.0, 306.0], [81.1, 306.0], [81.2, 306.0], [81.3, 307.0], [81.4, 307.0], [81.5, 307.0], [81.6, 307.0], [81.7, 308.0], [81.8, 308.0], [81.9, 308.0], [82.0, 308.0], [82.1, 309.0], [82.2, 309.0], [82.3, 309.0], [82.4, 309.0], [82.5, 309.0], [82.6, 309.0], [82.7, 309.0], [82.8, 309.0], [82.9, 310.0], [83.0, 310.0], [83.1, 312.0], [83.2, 312.0], [83.3, 313.0], [83.4, 313.0], [83.5, 314.0], [83.6, 314.0], [83.7, 314.0], [83.8, 314.0], [83.9, 314.0], [84.0, 314.0], [84.1, 315.0], [84.2, 315.0], [84.3, 315.0], [84.4, 315.0], [84.5, 315.0], [84.6, 315.0], [84.7, 317.0], [84.8, 317.0], [84.9, 319.0], [85.0, 319.0], [85.1, 323.0], [85.2, 323.0], [85.3, 323.0], [85.4, 323.0], [85.5, 325.0], [85.6, 325.0], [85.7, 325.0], [85.8, 325.0], [85.9, 326.0], [86.0, 326.0], [86.1, 326.0], [86.2, 326.0], [86.3, 327.0], [86.4, 327.0], [86.5, 328.0], [86.6, 328.0], [86.7, 328.0], [86.8, 328.0], [86.9, 328.0], [87.0, 328.0], [87.1, 330.0], [87.2, 330.0], [87.3, 330.0], [87.4, 330.0], [87.5, 331.0], [87.6, 331.0], [87.7, 333.0], [87.8, 333.0], [87.9, 333.0], [88.0, 333.0], [88.1, 333.0], [88.2, 333.0], [88.3, 334.0], [88.4, 334.0], [88.5, 342.0], [88.6, 342.0], [88.7, 342.0], [88.8, 342.0], [88.9, 344.0], [89.0, 344.0], [89.1, 360.0], [89.2, 360.0], [89.3, 365.0], [89.4, 365.0], [89.5, 368.0], [89.6, 368.0], [89.7, 368.0], [89.8, 368.0], [89.9, 383.0], [90.0, 383.0], [90.1, 384.0], [90.2, 384.0], [90.3, 401.0], [90.4, 401.0], [90.5, 407.0], [90.6, 407.0], [90.7, 477.0], [90.8, 477.0], [90.9, 479.0], [91.0, 479.0], [91.1, 479.0], [91.2, 479.0], [91.3, 479.0], [91.4, 479.0], [91.5, 479.0], [91.6, 479.0], [91.7, 480.0], [91.8, 480.0], [91.9, 480.0], [92.0, 480.0], [92.1, 480.0], [92.2, 480.0], [92.3, 481.0], [92.4, 481.0], [92.5, 482.0], [92.6, 482.0], [92.7, 530.0], [92.8, 530.0], [92.9, 532.0], [93.0, 532.0], [93.1, 548.0], [93.2, 548.0], [93.3, 554.0], [93.4, 554.0], [93.5, 620.0], [93.6, 620.0], [93.7, 699.0], [93.8, 699.0], [93.9, 742.0], [94.0, 742.0], [94.1, 1058.0], [94.2, 1058.0], [94.3, 1061.0], [94.4, 1061.0], [94.5, 1064.0], [94.6, 1064.0], [94.7, 1102.0], [94.8, 1102.0], [94.9, 1108.0], [95.0, 1108.0], [95.1, 1138.0], [95.2, 1138.0], [95.3, 1178.0], [95.4, 1178.0], [95.5, 1210.0], [95.6, 1210.0], [95.7, 1219.0], [95.8, 1219.0], [95.9, 1222.0], [96.0, 1222.0], [96.1, 1302.0], [96.2, 1302.0], [96.3, 1316.0], [96.4, 1316.0], [96.5, 1318.0], [96.6, 1318.0], [96.7, 1336.0], [96.8, 1336.0], [96.9, 1337.0], [97.0, 1337.0], [97.1, 1338.0], [97.2, 1338.0], [97.3, 1341.0], [97.4, 1341.0], [97.5, 1342.0], [97.6, 1342.0], [97.7, 1343.0], [97.8, 1343.0], [97.9, 1345.0], [98.0, 1345.0], [98.1, 2237.0], [98.2, 2237.0], [98.3, 2240.0], [98.4, 2240.0], [98.5, 2255.0], [98.6, 2255.0], [98.7, 2264.0], [98.8, 2264.0], [98.9, 2266.0], [99.0, 2266.0], [99.1, 2271.0], [99.2, 2271.0], [99.3, 2276.0], [99.4, 2276.0], [99.5, 2280.0], [99.6, 2280.0], [99.7, 2290.0], [99.8, 2290.0], [99.9, 2295.0], [100.0, 2295.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 393.0, "series": [{"data": [[2200.0, 10.0], [1100.0, 4.0], [300.0, 58.0], [600.0, 2.0], [1200.0, 3.0], [1300.0, 10.0], [700.0, 1.0], [200.0, 393.0], [400.0, 12.0], [500.0, 4.0], [1000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 463.0, "series": [{"data": [[0.0, 463.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 27.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.894, "minX": 1.6141077E12, "maxY": 9.894, "series": [{"data": [[1.6141077E12, 9.894]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6141077E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 232.0, "minX": 1.0, "maxY": 353.7638603696097, "series": [{"data": [[8.0, 270.0], [4.0, 255.0], [2.0, 232.0], [1.0, 234.0], [9.0, 260.0], [10.0, 353.7638603696097], [5.0, 260.0], [6.0, 236.0], [3.0, 235.0], [7.0, 266.6666666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.894, 351.16999999999973]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1216.6666666666667, "minX": 1.6141077E12, "maxY": 13490.0, "series": [{"data": [[1.6141077E12, 13490.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6141077E12, 1216.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6141077E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 351.16999999999973, "minX": 1.6141077E12, "maxY": 351.16999999999973, "series": [{"data": [[1.6141077E12, 351.16999999999973]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6141077E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 351.1279999999998, "minX": 1.6141077E12, "maxY": 351.1279999999998, "series": [{"data": [[1.6141077E12, 351.1279999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6141077E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9139999999999974, "minX": 1.6141077E12, "maxY": 0.9139999999999974, "series": [{"data": [[1.6141077E12, 0.9139999999999974]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6141077E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 215.0, "minX": 1.6141077E12, "maxY": 2295.0, "series": [{"data": [[1.6141077E12, 2295.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6141077E12, 383.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6141077E12, 2270.95]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6141077E12, 1136.4999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6141077E12, 215.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6141077E12, 260.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6141077E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 235.0, "minX": 5.0, "maxY": 2265.0, "series": [{"data": [[8.0, 2265.0], [18.0, 240.5], [19.0, 257.0], [10.0, 263.0], [20.0, 267.5], [5.0, 235.0], [11.0, 261.0], [6.0, 269.5], [12.0, 248.5], [14.0, 243.0], [15.0, 264.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 235.0, "minX": 5.0, "maxY": 2265.0, "series": [{"data": [[8.0, 2265.0], [18.0, 240.5], [19.0, 257.0], [10.0, 263.0], [20.0, 267.5], [5.0, 235.0], [11.0, 261.0], [6.0, 269.5], [12.0, 248.5], [14.0, 243.0], [15.0, 264.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6141077E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6141077E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6141077E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6141077E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6141077E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6141077E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6141077E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6141077E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6141077E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6141077E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6141077E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6141077E12, "title": "Total Transactions Per Second"}},
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

