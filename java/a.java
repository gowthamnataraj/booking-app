import java.util.Arrays;
import java.util.*;
class GFG
{
    static void split(int a[],int left[],int right[],int l,int m,int r){
        for(int i=0;i<m-l+1;i++){
            left[i]=a[i*2];
        }
        for(int i=0;i<r-m;i++){
            right[i]=a[i*2+1];
        }
    }
    static void join(int a[],int left[],int right[],int l,int m,int r){
        int i;
        for(i=0;i<m-l+1;i++){
            a[i]=left[i];
        }
        for(int j=0;j<r-m;j++){
            a[i+j]=right[j];
        }

    }
	static void worst(int a[],int l,int r){
        if(l<r){
            int m=l-(r-l)/2;
            int left[]=new int[m-l+1];
            int right[]=new int [r-m];

            split(a,left,right,l,m,r);
            worst(left,l,m);
            worst(right,m+1,r);
            join(a,left,right,l,m,r);
        }
    }
	public static void main (String[] args)
	{
		Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int a[]=new int[n];
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }        
		worst(a,0,n-1);
        for(int i=0;i<n;i++){
            System.out.println(a);
        }   
	}
}



















// import java.util.ArrayList;
// public class GFG {
//     static void perm(String ans){
//         ArrayList<String> s=new ArrayList<String>();
//         s.add(ans);
//         System.out.println(s);
//     }
// 	static void printPermutn(String str, String ans){
// 		if (str.length() == 0) {
// 			System.out.print(ans + " ");
//             s.add(ans);
//             perm(ans);
// 			return;
// 		}

// 		for (int i = 0; i < str.length(); i++) {
// 			char ch = str.charAt(i);
// 			String ros = str.substring(0, i) +
// 						str.substring(i + 1);
// 			printPermutn(ros, ans + ch);
// 		}
// 	}

// 	// Driver code
// 	public static void main(String[] args)
// 	{
// 		String s = "abb";
// 		printPermutn(s, "");
// 	}
// }
