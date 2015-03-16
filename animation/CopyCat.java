// read in from sampleImage.txt which is just zeros and ones. (14 x 15)

public class CopyCat {
	public static void main(String[] args) {
		String filename = args[0];
		In inStream = new In(filename);
		int[] data = inStream.readAllInts();  // read in data
		int T = 100000; // draw a long time 

		int[][] matrix = arrange(data);
		int[][] drawn  = new int[14][15];  //to keep track of what's already been drawn
		printMat(matrix);

		// setting the scale of the coordinate system
        StdDraw.setXscale(0, 15);
        StdDraw.setYscale(0, 14);
        StdDraw.setPenColor(0, 255, 255);

        int catx = 1;
        int caty = 1;

        for (int time = 0; time < T; time++) {
        	StdDraw.clear();
        	// draw background
        	StdDraw.setPenColor(1, 1, 1);
        	for (int i = 0; i < 14; i++) {
				for (int j = 0; j < 15; j++) {
					if (drawn[i][j] > 0)
						StdDraw.filledSquare(i+1,j+1,1);
				}	
			}	

        	// move cat
        	
        	double randx = Math.random();
        	double randy = Math.random();

        	if (randx < 0.33) 
        		catx = catx;
        		else if( randx < 0.66)
        		catx++;
        		else if (randx < 1)  
        		catx--;
        	if (randy < 0.33) 
        		caty = caty;
        		else if( randy < 0.66)
        		caty++;
        		else if (randy < 1)  
        		caty--;
        	if (catx >= 15) catx = 14;
        	if (caty >= 14) caty = 13;
        	if (catx <= 1) catx = 1;
        	if (caty <= 1) caty = 1;

        	System.out.println(catx);
        	System.out.println(caty);
        	
        	if (matrix[catx-1][caty-1] > 0) {
        		StdDraw.setPenColor(1, 1, 1);
        		StdDraw.filledSquare(catx,caty,1);
        		drawn[catx-1][caty-1] = 1;
        	}


        		

        

        	StdDraw.setPenColor(0, 255, 255);
        	StdDraw.filledCircle(catx,caty,1);  // draw cat
            StdDraw.show(20);
            System.out.println(time);
        }
        StdDraw.text(7,7,"FIN");
	}

	public static int[][] arrange(int[] dat) {
		int[][] arr = new int[14][15];
		int ind = 0;
		for (int i = 0; i < 14; i++) {
			for (int j = 0; j < 15; j++) {
				arr[i][j] = dat[ind];
				ind++;
			}
		}
		return arr;
	}


	

	// prints from matrix data
	public static void printMat(int[][] mat) {
		for (int i = 0; i < 14; i++) {
			for (int j = 0; j < 15; j++) {
				System.out.print(mat[i][j]);
			}
			System.out.println();
		}
	}

	// prints from rawData
	public static void printRaw(int[] dat) {
		int ind = 0;
		for (int i = 0; i < 14; i++) {
			for (int j = 0; j < 15; j++) {
				System.out.print(dat[ind]);
				ind++;
			}
			System.out.println();
		}
	}
	


}