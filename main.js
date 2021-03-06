const canvasH = window.innerHeight-20, canvasW = window.innerWidth-20, scale = 10;

            function setup() {
                createCanvas(canvasW, canvasH);
                background("white");
                strokeWeight(4);
                stroke('black');
                rect(0, 0, canvasW, canvasH);
                y = Math.floor((Math.random()*canvasH-4)+4);
                a = y, i = 0;
                for(x=0; x<canvasW; x+=scale){
                    strokeWeight(4);
                    dot(x,y);
                    strokeWeight(1);
                    line(x, canvasH-y, x+scale, canvasH-f(y));
                    y=f(y);
                    y==4 || y==2 || y==1?i=i:i+=1;
                };
                if(i >= canvasW/scale) {
                    i = mcontinue(x, y, i);
                }
                textSize(32);
                strokeWeight(2);
                text("x = "+a, 20, 30);
                text("Itérations : "+i, 20, 62);
            };
            
            function dot(x,y){
                y = canvasH-y;
                ellipse(x,y,5,5);
            };
            
            function f(x) {
                return x%2!=0?3*x+1:x/2;
            };
            
            function mcontinue(x, y, i) {
                isone = false;
                for(u=0; u>10000; u++) {
                    y = f(y);
                    i++;
                    isone = false;
                    if(y == 1) {
                        isone = true;
                        break;
                    };
                };
                return isone?i:i+"+";
            };